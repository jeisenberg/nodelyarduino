
/*
 * GET users listing.
 */

exports.on = function(req, res){
	this.url = require('url')
	var queryData = this.url.parse(req.url);
  if (queryData.on == "true"){
		res.render('tutorial', {on:queryData.on});
	//	led.blink();
   } else {
	res.render('tutorial', {on:queryData.on})
	//  led.off();
  }
};