function _dnsrecord(args){
	$('#console').disableInput();
	_arg = fixparameter(args);
	_arg = _arg.split(" ");
	if(Object.size(_arg)!=fulllist["dnsrecord"]["ARGS"]||args=="") //Check syntax
	{
		_ret("The correct syntax is: '<b class='hlight'>dnsrecord</b> domain'.",false);
		$('#console').enableInput();
	}else{
		domain = args;
		$.ajax({
			type: "GET",
			timeout: 120000,
			url: "http://network-tools.com/default.asp?prog=dnsrec&host="+domain,
			error: function(){
			  _ret("Connection problem.");
			  $('#console').enableInput();
			},
			success: function(data){
				if(data["responseText"]==null){
					_ret("Something is wrong, please try again !");
				}else{
					res = replaceAll(data["responseText"],"src=\"","src=\"http://null/");
					res =  $(res).find("#wrap2").html();
					res = $(res).find("div").html();
					//remove useless break
					res = replaceAll(res,"&nbsp;","");
					res = replaceAll(res,"<br><br>","<br>");
					res = replaceAll(res,"<center>","<center style='display:none'>");
					res = replaceAll(res,"<a","<a style='display:none !important'");
					_ret(res,false);
				}
				$('#console').enableInput();
			}
		})
	}
}