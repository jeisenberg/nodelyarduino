
var Console = function(){
	var self = this;
	var wrapper = $('#console');
	self.terminal = wrapper.console({
		promptLabel: 'Demo> ',
		   commandValidate:function(line){
		    if (line == "") return false;
		       else return true;
		    },
		   commandHandle:function(line){
		   		return [{msg:"=> [12,42]",
		   		className:"jquery-console-message-value"},
		   		{msg:":: [a]",
		   		className:"jquery-console-message-type"}]
		   	},
		   autofocus:true,
		   animateScroll:true,
		   promptHistory:true,
		   charInsertTrigger:function(keycode,line){
		              // Let you type until you press a-z
		              // Never allow zero.
		   //return !line.match(/[a-z]+/) && keycode != '0'.charCodeAt(0);
			return keycode;
		    }
		});
}

$(function(){
	var console = new Console();
});