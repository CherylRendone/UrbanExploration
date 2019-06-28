function blink_text() {
    $('.warning').fadeOut(5);
    $('.warning').fadeIn(650);
}

setInterval(blink_text);
