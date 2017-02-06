function _iplookup(args){
	$('#console').disableInput();
	_arg = fixparameter(args);
	_arg = _arg.split(" ");
	if(Object.size(_arg)!=fulllist["iplookup"]["ARGS"]||args=="") //Check syntax
	{
		_ret("The correct syntax is: '<b class='hlight'>iplookup</b> hostname' | hostname is the IP or Hostname you want to lookup.",false);
		$('#console').enableInput();
	}else{
		ipadr = args;
		$.ajax({
			type: "GET",
			timeout: 120000,
			url: "http://network-tools.com/default.asp?prog=network&host="+ipadr,
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