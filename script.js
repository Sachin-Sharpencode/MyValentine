$(document).ready(function () {

    $('#noBtn').mouseenter(function () {
        let maxX = $('.buttons').width() - $(this).outerWidth();
        let maxY = $('.buttons').height() - $(this).outerHeight();

        let randomX = Math.random() * maxX;
        let randomY = Math.random() * maxY;

        $(this).css({
            left: randomX + 'px',
            top: randomY + 'px'
        });
    });

    $('#yesBtn').click(function () {
        $('#message').html("Yayyy! 💕 I knew it 😍<br>Happy Valentine’s Day! 🌹");
        $('.buttons').fadeOut();
    });

});
