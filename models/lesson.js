var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	
var LessonSchema = new Schema({
	title : {type : String, default : ''},
	info : {type : String, default : ''},
	comment : {type : String, default : ''},
	console : {type : Boolean, default : true},
	editor : {type : Boolean, default : true},
	createdAt  : {type : Date, default : Date.now}
});

LessonSchema.path('title').validate(function(title) {
	return title.length > 0
	}, 'Lesson title cannot be blank');
	
LessonSchema.path('info').validate(function(info){
	return info.length > 0
}, 'Lesson info cannot be blank');

mongoose.model('Lesson', LessonSchema);