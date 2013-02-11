/* ROUTES FOR LESSONS */

var mongoose = require('mongoose'),
	Lesson = mongoose.model('Lesson');
	
exports.new = function(req, res){
	var self = this;
	self.lesson = new Lesson({});
	res.render('/lessons/new', {
		lesson : self.lesson
	})

}