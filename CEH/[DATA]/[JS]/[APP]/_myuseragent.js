function _myuseragent(){
	$('#console').disableInput();
	_ret(navigator.userAgent);
	$('#console').enableInput();
}