$(document).ready(function(){
    let green = true;

    function blink () {
        let color =  green ? '#0f0' : '#000';
        green = !green;

        $('.prompt-string.bottom code span').css({
            color,
            backgroundColor: color
        });
    }

    setInterval(blink, 500, green);
});