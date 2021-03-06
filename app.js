
/**
 * Module dependencies.
 */

var express = require('express')
  , fs = require('fs')
  , controllers = require('./controllers')
  , http = require('http')
  , arduino = require('duino')
  , net = require('net')
  , path = require('path');

/* INCLUDE MODELS */
var models_path = __dirname + '/models';
fs.readdirSync(models_path).forEach(function (file) {
	require(models_path+'/'+file)
});

var user = require('./controllers/user')
, lesson = require('./controllers/lesson')
, tutorial = require('./controllers/tutorial');

/*Config */
// Load configurations
var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env]
  , mongoose = require('mongoose');

/* CONNECT TO DB */
mongoose.connect(config.db);

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

/* Arduino tcp server */

var tcpServer = net.createServer(function(socket){
	console.log('tcp server runnung on port 1337')
});

var arduinoTcp = null;

tcpServer.on('connection', function(socket){
	console.log('num of connections on port 1337: ' + tcpServer.connections);
	arduinoTcp = socket;
	socket.on('data', function(myData){
		
	})
});

app.get('/', controllers.index);
app.get('/users', user.list);
app.get('/tutorial', tutorial.on);
/* LESSONS ROUTES */
app.get('/lessons/new', lesson.new);
app.post('/lessons', lesson.create);
app.get('/lessons', lesson.index);
app.get('/lessons/:id', lesson.show);
app.param('id', lesson.lesson);

app.get('/on', function(req, res){
  var _status;
	if (arduinoTcp === null){
		console.log('offline');
		_status = 'off'
	} else {
		arduinoTcp.write('1')
		_status = 'off'
	}
	res.json({status : _status})
});

tcpServer.listen(1337);










