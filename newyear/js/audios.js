
var ap4 = new APlayer({
    element: document.getElementById('player4'),
    narrow: false, //Make Player Become Shorter
    autoplay: true, //Auto Play musics
    showlrc: false, //Show Lyrics
    mutex: true,
    theme: '#ad7a86', //Color of Theme
    mode: 'circulation', //"circulation" or "random"
    music: [
		{
            title: 'Tet Nguyen Dan',
            singer: 'V.Music',
            url: 'musics/Tet Nguyen Dan - V.Music.mp3',
            pic: 'https://lh4.googleusercontent.com/-RwQr4MWDfQo/WHIA_OvUipI/AAAAAAAAKLA/w7GEoX1sN_AdkFVV65iHmSzq_KF2CtYsQCL0B/s300-no/TetNguyenDan.jpg'
        },
		{
            title: 'Con Bướm Xuân',
            singer: 'Hồ Quang Hiếu',
            url: 'musics/Con Buom Xuan - Ho Quang Hieu.mp3',
            pic: 'https://lh6.googleusercontent.com/-S_OXQrCTUPE/WHIA0SME_5I/AAAAAAAAKKg/UdhYcRq6-6cF9qZjD7FI16oG8kPxtLHawCL0B/s333-no/Untitled-1.png'
        },
        {
            title: 'Ăn Tết',
            singer: 'Hồ Quang Hiếu & Hoàng Rapper',
            url: 'musics/An Tet - Ho Quang Hieu_Hoang Rapper.mp3',
            pic: 'https://lh6.googleusercontent.com/-jU_i1xvsOHE/WHIBoSJW88I/AAAAAAAAKMM/mrWMFZUD2EAs-CRaktZIFpN5HLhrdQrNQCL0B/s300-no/AnTet.jpg'
        },
        {
            title: 'Xuân Yêu Thương',
            singer: 'Hồ Quang Hiếu',
            url: 'musics/Xuan Yeu Thuong - Ho Quang Hieu.mp3',
            pic: 'https://lh4.googleusercontent.com/-4qjAtbOT_5E/WHIBiMkqazI/AAAAAAAAKLs/HzSgY1mKwrAQP_x9VrWrGjfAVVqfV7loACL0B/s300-no/XuanYeuThuong.jpg'
        },
		{
            title: 'Chào Xuân Mới',
            singer: 'Thủy Tiên',
            url: 'musics/Chao Xuan Moi - Thuy Tien.mp3',
            pic: 'https://lh5.googleusercontent.com/-f2SZWbSLgSo/WHIEgnGtPGI/AAAAAAAAKNs/f-U2SpuO9W4pACdHp-ZCLLD-MSJuR-21QCL0B/s507-no/chaoxuanmoi.jpg'
        }
		
    ]
});