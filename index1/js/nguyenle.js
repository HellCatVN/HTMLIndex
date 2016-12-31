$(document).ready(function(){
        $('.boxcube').click(function () {
            $('.boxcube').removeClass('activess').addClass('currentss');
            $(this).removeClass('currentss').addClass('activess');
        });
    });