
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , arduino = require('duino')
  , user = require('./routes/user')
  , tutorial = require('./routes/tutorial')
  , net = require('net')
  , path = require('path');

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

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/tutorial', tutorial.on);

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

app.get('/on', function(req, res){
	if (arduinoTcp === null){
		console.log('offline');
	} else {
		arduinoTcp.write('1')
	}
});

tcpServer.listen(1337);










