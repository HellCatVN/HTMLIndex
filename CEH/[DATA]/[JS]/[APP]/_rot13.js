function _rot13(args){
	if(args=="") //Check syntax
	{
		_ret("The correct syntax is: '<b class='hlight'>rot13</b> text'",false);
	}else{
		enc = args.replace(/[a-zA-Z]/g, function(c){
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
		_ret(enc);
	}
}    