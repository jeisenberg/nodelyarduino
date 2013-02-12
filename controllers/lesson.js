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

exports.index = function(req, res){
	var self = this;
	Lesson.find({}).exec(function(err, lessons){
		if (err) {
			console.log(err.errors)
			return res.redirect('/')
		} else {
			res.render('lessons/index', {
				lessons : lessons
			});
		}
	});
}

exports.lesson = function(req, res, next, id){
	var self = this;
	Lesson.findOne({_id:id}).exec(function(err, lesson){
		if (err){
			return res.redirect('lessons/index')
			console.log(err.errors)
		}
		else {
			req.lesson = lesson
			next();
		}	
	});
}

exports.show = function(req, res){
	res.render('lessons/show', {
		title : req.lesson.title,
		lesson : req.lesson
	});
}
