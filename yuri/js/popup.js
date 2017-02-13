
status="Mr.Phong"
var a=new Array(),n=""
a[1]='C';
a[2]='ó';
a[3]=' ';
a[4]='T';
a[5]='h';
a[6]='ị';
a[7]='t';
a[8]=' ';
a[9]='l';
a[10]='ừ';
a[11]='a';
a[12]=' ';
a[13]='n';
a[14]='g';
a[15]='o';
a[16]='n';
a[17]=' ';
a[18]='l';
a[19]='ắ';
a[20]='m';
a[21]=',';
a[22]=' ';
a[23]='C';
a[24]='ả';
a[25]='m';
a[26]=' ';
a[27]='ơ';
a[28]='n';
a[29]=' ';
a[30]='L';
a[31]='o';
a[32]='n';
a[33]='g';
a[34]=' ';
a[35]=' ';
a[36]=' ';
a[37]='♥';
a[38]=' ';
a[39]='♥';
a[40]='♥';
a[41]='♥';
a[42]=' ';
a[43]='♥';
a[44]='♥';
a[45]='♥';
a[46]='♥';
a[47]='♥';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==48)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>Ủ ÔI! AI CŨNG NÓI VẬY ĐÓ </h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Hình như ai đó đang cười và cũng bực mình :)))</p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Chúc Milu Tú có ngày Sinh nhật vui vé :D</p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				