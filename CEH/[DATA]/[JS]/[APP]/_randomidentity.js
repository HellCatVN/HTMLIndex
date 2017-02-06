function _randomidentity(){
	$('#console').disableInput();
	$.ajax({
		cache: false,
		type: "GET",
		url: "https://helloacm.com/api/rig/",
		dataType: "json",
		error: function(){
		  _ret("Connection problem.");
		  $('#console').enableInput();
		},
		success: function(data){
			_ret(data);
			$('#console').enableInput();
		}
	})
}