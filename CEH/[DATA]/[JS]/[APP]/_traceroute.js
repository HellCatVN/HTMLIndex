function _traceroute(args){
	$('#console').disableInput();
	_arg = fixparameter(args);
	_arg = _arg.split(" ");
	if(Object.size(_arg)!=fulllist["traceroute"]["ARGS"]||args=="") //Check syntax
	{
		_ret("The correct syntax is: '<b class='hlight'>traceroute</b> hostname' | hostname is the IP or Hostname you want to trace.",false);
		$('#console').enableInput();
	}else{
		ipadr = args;
		$.ajax({
			type: "GET",
			timeout: 30000,
			url: "http://network-tools.com/default.asp?prog=trace&host="+ipadr,
			error: function() {
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
					_ret(res,false);
				}
				$('#console').enableInput();
			}
		})
	}
}