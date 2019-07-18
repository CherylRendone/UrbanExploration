// For flashing title of beware page
function blink_text() {
    $('.warning').fadeOut(5);
    $('.warning').fadeIn(650);
}
setInterval(blink_text);

// changing text color and background of lists
$('.gear:odd').css('background-color','white').css('color', 'maroon');
$('.gear:even').css('background-color', 'white').css('color','navy');

$('.hazards:odd').css('background-color','white').css('color', 'maroon');
$('.hazards:even').css('background-color', 'white').css('color','navy');
