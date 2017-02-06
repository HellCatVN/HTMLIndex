function _showall(){
	$('#console').disableInput();
	var listtxt = "";
	for(i=0;i<Object.size(fulllist);i++){
		keyname = Object.keys(fulllist)[i];
		listtxt += "<p><b class='hlight'>"+keyname+"</b> ("+fulllist[keyname]["DESC"]+")</p>";
	}
	_ret(listtxt,false);
	$('#console').enableInput();
}