$(document).ready(function () {
    let green = true;
    let str = 'quote';
    let nextChar = 0;
    let blinkId, 
        typeId;

    function blink () {
        let color =  green ? '#0f0' : '#000';
        green = !green;

        $('.prompt-string.bottom code #cursor').css({
            color,
            backgroundColor: color
        });
    }

    blinkId = setInterval(blink, 500);

    function type () {
        clearInterval(blinkId); // stop blinking, we're typing

        // make sure cursor is visible while we type
        $('.prompt-string.bottom code #cursor').css({
            color: '#0f0',
            backgroundColor: '#0f0'
        });

        if (nextChar < 5) {
            $('.prompt-string.bottom code #prompt').text(
                $('.prompt-string.bottom code #prompt').text() + str[nextChar]
            );

            nextChar++;
            return;
        }
        clearInterval(typeId); // done typing
        // TODO: load new quote here
        $('.prompt-string.bottom code #prompt').text('[user@wisdom ~]$ '); // restore prompt string
        nextChar = 0; // get ready to type again
        blinkId = setInterval(blink, 500); // ok, you can blink now
    }

    $('#new-quote').click(() => {
        typeId = setInterval(type, 150);
    });

});