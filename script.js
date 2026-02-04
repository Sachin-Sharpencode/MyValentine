$(document).ready(function () {

    /* 🔥 PERSONALIZE HERE */
    const herName = "Neha";

    $('#question').text(`Hey ${herName} 💕 Will you be my Valentine?`);

    /* 😝 NO BUTTON ESCAPE MODE */
    function moveNoButton() {
        let parent = $('.buttons');
        let btn = $('#noBtn');

        let maxX = parent.width() - btn.outerWidth();
        let maxY = parent.height() - btn.outerHeight();

        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        btn.css({ left: x + 'px', top: y + 'px' });
    }

    $('#noBtn').on('mouseenter touchstart mousedown', moveNoButton);

    /* 🚫 SCREENSHOT / PRANK PROTECTION */
    $(document).on('contextmenu selectstart dragstart', function () {
        return false;
    });

    /* 💖 YES CLICK */
    $('#yesBtn').click(function () {
        $('.buttons').fadeOut();
        $('#message').html(
            `Yayyy 💘 ${herName}!<br>
            I knew your heart would say yes 😍<br>
            Happy Valentine’s Day 🌹`
        );
        startConfetti();
    });

    /* 🎉 CONFETTI */
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 300;

    function startConfetti() {
        let pieces = [];

        for (let i = 0; i < 150; i++) {
            pieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 6 + 4,
                dy: Math.random() * 3 + 2,
                color: `hsl(${Math.random() * 360},100%,60%)`
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pieces.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                p.y += p.dy;
                if (p.y > canvas.height) p.y = 0;
            });
            requestAnimationFrame(draw);
        }
        draw();
    }

});
