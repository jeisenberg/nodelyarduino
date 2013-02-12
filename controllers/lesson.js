/* ROUTES FOR LESSONS */

var mongoose = require('mongoose'),
	Lesson = mongoose.model('Lesson');
	
exports.new = function(req, res){
	var self = this;
	self.lesson = new Lesson({});
	res.render('lessons/new', {
		lesson : self.lesson,
		layout : '/layout'
	})

}

exports.create = function(req, res){
	var self = this;
	console.log("pst request");
	self.lesson = new Lesson(req.body)
	console.log(self.lesson);
	self.lesson.save(function(err){
		if (err){
			console.log(err.errors)
			res.render('lessons/new'), {
				errors: err.errors
			}
		}
		else {
			console.log("persisted")
			res.redirect('/');
		}
	});
}