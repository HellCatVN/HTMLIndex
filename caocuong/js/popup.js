
status="HellCatVN"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='v';
a[7]='ậ';
a[8]='y';
a[9]='!';
a[10]=' ';
a[11]='a';
a[12]='n';
a[13]='h';
a[14]=' ';
a[15]='C';
a[16]='Ư';
a[17]='Ờ';
a[18]='N';
a[19]='G';
a[20]='đ';
a[21]='ẹ';
a[22]='p';
a[23]=' ';
a[24]='t';
a[25]='r';
a[26]='a';
a[27]='i';
a[28]=' ';
a[29]='n';
a[30]='h';
a[31]='ấ';
a[32]='t';
a[33]=' ';
a[34]='v';
a[35]='ũ';
a[36]=' ';
a[37]='t';
a[38]='r';
a[39]='ụ';
a[40]=' ';
a[41]='♥';
a[42]='♥';
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
n="Đúng Vậy!"
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
					$("#divResult").html("</br><h2>Ủ ÔI! AI CŨNG NÓI VẬY ĐÓ <img src='http://vozforums.com/images/smilies/Off/adore.gif'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Nhưng mà KỆ MẸ EM <img src='http://vozforums.com/images/smilies/Off/angry.gif'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Xin lỗi! anh có bạn trai rồi, với cả anh không phải loại đàn ông dễ dãi <img src='http://vozforums.com/images/smilies/Off/sure.gif'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				