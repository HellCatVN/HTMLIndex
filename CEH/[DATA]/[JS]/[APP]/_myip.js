function _myip(){
	$('#console').disableInput();
	$.ajax({
		cache: false,
		type: "GET",
		url: "//ip.anysrc.net/json",
		dataType: "json",
		error: function(){
		  _ret("Connection problem.");
		  $('#console').enableInput();
		},
		success: function(data){
			if(data==null){
				_ret("Something is wrong, please try again !");
			}else{
				var listtxt = "IP Address: "+data["clientip"]+"<br>"+
				"Host: "+data["clienthost"]+"<br>"
				_ret(listtxt,false);
			}
			$('#console').enableInput();
		}
	})
}