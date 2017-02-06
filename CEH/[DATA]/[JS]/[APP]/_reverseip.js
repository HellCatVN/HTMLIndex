function _reverseip(args){
	$('#console').disableInput();
	_arg = fixparameter(args);
	_arg = _arg.split(" ");
	if(Object.size(_arg)!=fulllist["reverseip"]["ARGS"]||args=="") //Check syntax
	{
		_ret("The correct syntax is: '<b class='hlight'>reverseip</b> hostname' | hostname is the IP or Hostname you want to reverse.",false);
		$('#console').enableInput();
	}else{
		ipadr = args;
		$.ajax({
			type: "GET",
			timeout: 30000,
			url: "http://www.domainsdb.net/"+ipadr+"?d=&x=0&y=0",
			error: function() {
			  _ret("Connection problem.");
			  $('#console').enableInput();
			},
			success: function(data){
				if(data["responseText"]==null){
					_ret("Something is wrong, please try again !");
				}else{
					res = replaceAll(data["responseText"],"src=\"","src=\"http://null/");
					res =  $(res).text();
					//catch bug
					if(res==""){
						_ret("Something is wrong, please try again !");
					}else{
						res = replaceAll(res,"[]","");
						_ret(res,false);
					}
				}
				$('#console').enableInput();
			}
		})
	}
}