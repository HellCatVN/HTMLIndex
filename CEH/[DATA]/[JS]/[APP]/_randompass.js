function _randompass(args){
	$('#console').disableInput();
	_arg = args.split(" ");
	if(Object.size(_arg)!=fulllist["randompass"]["ARGS"]||args==""||!$.isNumeric(_arg[0])||_arg[0]<1) //Check syntax
	{
		_ret("The correct syntax is: '<b class='hlight'>randompass</b> n' | n must be a number and > 0 !",false);
	}else{
		
		var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+ABCDEFGHIJKLMNOP1234567890";
    var pass = "";
    for (var x = 0; x < _arg[0]; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    _ret(pass);
	}
	$('#console').enableInput();
}