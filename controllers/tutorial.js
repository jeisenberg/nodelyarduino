
/*
 * GET users listing.
 */

exports.on = function(req, res){
	var self = this;
	self.url = require('url');
	self.arduino = require('duino');
	self.board = new arduino.Board()
  self.led = new arduino.Led({
		board: self.board,
		pin: 13
	});
	var queryData = self.url.parse(req.url);
  if (queryData.query == "on=true"){
		res.render('tutorial', {on:queryData.on});
		self.led.blink();
   } else {
	res.render('tutorial', {on:queryData.on})
	  self.led.off();
  }
};