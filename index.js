$(document).ready(function () {
    console.log(
        $('.prompt-string.bottom code #prompt').text()
    );
    let green = true;
    let str = 'quote';
    let nextChar = 0;
    let blinkId, typeId;

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
        clearInterval(blinkId);
        if (nextChar < 5) {
            $('.prompt-string.bottom code #prompt').text(
                $('.prompt-string.bottom code #prompt').text() + str[nextChar]
            );

            nextChar++;
            return;
        }
        // TODO: load new quote here
        $('.prompt-string.bottom code #prompt').text('[user@wisdom ~]$ '); // restore prompt string
        clearInterval(typeId);
    }

    typeId = setInterval(type, 100);
});