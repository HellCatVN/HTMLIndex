var RandomWishes = new Array();

RandomWishes[0] = "Năm mới lại tới - Chúc ..... phơi phới - Học hành tấn tới - Miệng luôn cười tươi - Du xuân khắp nơi - Nhận nhiều quà tết - Bính Thân vừa hết - Đinh Dậu vừa sang - Thịnh vượng an khang - Vạn sự như ý - Happy new year!";

RandomWishes[1] = "Chúc mừng năm mới an khang, thịnh vượng - Phát tài phát lộc - Tiền vô cửa trước, vàng vô cửa sau - Hai cái đụng nhau, chui vô két sắt - Một phần mua đất, một phần mua nhà - Vẫn còn rủng rỉnh, ta đi du lịch.";

RandomWishes[2] = "Tết tới tấn tài - Xuân sang đắc lộc - Gia đình hạnh phúc - Vạn sự cát tường!";

RandomWishes[3] = "Năm mới đang đến. Chúc bạn đáng mến. Sự nghiệp tiến lên. Gặp nhiều điều hên! Rước nhiều may mắn.";

RandomWishes[4] = "Năm mới Tết đến. Rước hên vào nhà. Quà cáp bao la. Mọi nhà no đủ. Vàng bạc đầy hũ. Gia chủ phát tài. Già trẻ gái trai. Sum vầy hạnh phúc. Cầu tài chúc phúc. Lộc đến quanh năm. An khang thịnh vượng!";

RandomWishes[5] = "Năm mới, xuân sang! Chúc mọi nhà luôn luôn hoan hỉ, sức khỏe bền bỉ, công danh hết ý, tiền vào bạc tỉ, tiền ra ri rỉ, tình yêu thỏa chí, vạn sự như ý, luôn cười hi hi, cung hỷ cung hỷ.";

RandomWishes[6] = "Năm cũ đi qua, năm mới lại về, kính chúc gia đạo thuận hòa, song thân đắc thọ, may đến rủi qua, đồng lòng vượt khó.";

RandomWishes[7] = "Chúc mọi người vui vẻ như Chim Sẻ, khỏe mạnh như Đại Bàng, giàu sang như chim Phụng, làm lụng như chim Sâu, sống lâu như Đà Điểu.";

RandomWishes[8] = "Năm cũ đi qua, năm mới lại về, kính chúc gia đạo thuận hòa, song thân đắc thọ, may đến rủi qua, đồng lòng vượt khó.";

RandomWishes[9] = "Chúc một năm mới vui vẻ, 12 tháng sức khoẻ, 52 tuần thành công, 365 ngày hạnh phúc, 8.760 giờ tốt lành, 525.600 phút may mắn, 31.536.000 giây như ý.";

RandomWishes[10] = "Cung chúc tân niên một chữ nhàn. Chúc mừng gia quyến đặng bình an. Tân niên đem lại niềm hạnh phúc. Xuân đến rồi hưởng trọn niềm vui.";

RandomWishes[11] = "Cung chúc tân niên, Sức khỏe vô biên, Thành công liên miên, Hạnh phúc triền miên, Túi luôn đầy tiền, Sung sướng như tiên. Chúc mừng năm mới!";

RandomWishes[12] = "Kính chúc mọi người một năm mới tràn đầy niềm vui và hạnh phúc: Vui trong sức khoẻ, trẻ trong tâm hồn, khôn trong lý tưởng và trưởng thành mọi lĩnh vực.";

RandomWishes[13] = "Ra đi gặp được bạn hiền. Quay về gặp được người thương yêu mình. Sang xuân sự nghiệp hanh thông. Tài cao, chí lớn vẫy vùng đó đây.";

RandomWishes[14] = "Năm hết tết đến kính chúc mọi người thật nhiều sức khoẻ, miệng cười vui vẻ, tiền vào mạnh mẽ, cái gì cũng được suôn sẻ, để sống tiếp một cuộc đời thật là đẹp đẽ.";

RandomWishes[15] = "Năm mới! Đau đầu vì nhà giàu! Mệt mỏi vì học giỏi! Buồn phiền vì nhiều tiền! Ngang trái vì xinh gái! Và mất ngủ vì không có đối thủ!";

RandomWishes[16] = "Chúc mọi người hay ăn chóng béo, tiền nhiều như kẹo, tình chặt như keo, dẻo dai như mèo, mịn màng trắng trẻo, sức khỏe như voi.";
var myRandom = Math.floor(Math.random()*RandomWishes.length);

document.getElementById('RandomWishes').innerHTML= RandomWishes[myRandom];