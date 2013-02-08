
var Console = function(){
	var self = this;
	var wrapper = $('#console');
	self.terminal = wrapper.jqconsole('//Write something here', '');
	self.terminal.RegisterMatching('{', '}', 'brackets');
	self.startPrompt = function(){
	          // Start the prompt with history enabled.
	          self.terminal.Prompt(true, function (input) {
	            // Output input with the class jqconsole-output.
	          	self.terminal.Write(input + '\n', 'jqconsole-output');
	            // Restart the prompt.
							self.startPrompt();
						});
	}
	
	self.startInput = function(){
		self.terminal.Input(function(input){
			self.terminal.Write(input);
			self.startInput();
		});
	}
	//self.startPrompt();
	self.startInput();
}

$(function(){
	var console = new Console();
});