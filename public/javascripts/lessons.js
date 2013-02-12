
//var myCodeMirror = CodeMirror.fromTextArea($('#editor'));

$(function(){
  var myTextArea = $('.editor')[0];
  console.log(myTextArea);
  var myEditor = CodeMirror.fromTextArea(myTextArea, {
    mode : "javascript",
    lineNumbers : true,
    lineWrapping : true
  });
});