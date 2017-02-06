function _man(args){
	_arg = args.split(" ");
	if(Object.size(_arg)!=1||args=="") //Check syntax
	{
		_ret("Cú pháp đúng: '<b class='hlight'>man</b> command' | hiển thị nội dung và cách sử dụng mã lệnh (xem trong <b class='hlight'>showall</b>).",false);
	}else if(fulllist[_arg[0]]==null){ //Check if command exits
		_ret("Không tìm thấy mã lệnh.",false);
	}else{	//Show manual
		_ret("Mã lệnh: "+_arg[0]+"<br>"+"Nội dung: "+fulllist[_arg[0]]["DESC"]+"<br>"+"Cách sử dụng: <br>"+fulllist[_arg[0]]["MAN"],false);
	}
}