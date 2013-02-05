
var Console = function(){
	var self = this;
	var wrapper = $('#console');
	self.terminal = wrapper.jqconsole('Hi\n', '>>>');
	self.startPrompt = function(){
	          // Start the prompt with history enabled.
	          self.terminal.Prompt(true, function (input) {
	            // Output input with the class jqconsole-output.
	          	self.terminal.Write(input + '\n', 'jqconsole-output');
	            // Restart the prompt.
							self.startPrompt();
						});
	}
	self.startPrompt();
}

$(function(){
	var console = new Console();
});