function _ping(args){
	$('#console').disableInput();
	_arg = fixparameter(args);
	_arg = _arg.split(" ");
	if(Object.size(_arg)!=fulllist["ping"]["ARGS"]||args=="") //Check syntax
	{
		_ret("The correct syntax is: '<b class='hlight'>ping</b> hostname' | hostname is the IP or Hostname you want to ping.",false);
		$('#console').enableInput();
	}else{
		hostname = replaceAll(_arg[0],"http:","");
		hostname = replaceAll(hostname,"https:","");
		hostname = replaceAll(hostname,"/","");
		$.ajax({
			cache: false,
			type: "GET",
			url: "https://helloacm.com/api/ping/?host="+hostname,
			dataType: "json",
			error: function(){
			  _ret("Connection problem.");
			  $('#console').enableInput();
			},
			success: function(data){
				if(data==null){
					_ret("Something is wrong, please try again !");
				}else{
					_ret(data,false);
				}
				$('#console').enableInput();
			}
		})
	}
}