// For flashing title of beware page

//Blink settings
var blink = {
    obj: $(".warning"),
    timeout: 6500,
    speed: 600
};

//Start function
blink.fn = setInterval(function () {
    blink.obj.fadeToggle(blink.speed);
}, blink.speed + 1);

//Ends blinking, after 'blink.timeout' millisecons
setTimeout(function () {
    clearInterval(blink.fn);
    //Ensure that the element is always visible
    blink.obj.fadeIn(blink.speed);
    blink = null;
}, blink.timeout);


// changing text color and background of lists
$('.gear:odd').css('color', 'maroon');
$('.gear:even').css('color','navy');

$('.hazards:odd').css('color', 'maroon');
$('.hazards:even').css('color','navy');
