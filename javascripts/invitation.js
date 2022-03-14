
$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    var btn_comenzar = $('#comenzar')

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        close();
    });

    btn_comenzar.click(function () {
        $("#invitation").hide(700);
        $("#contenido").show(700);

        var audioElement = document.createElement('audio');
        audioElement.src = "15sound.mp3";
        audioElement.play();

        if (count <= 5) {
            setInterval(scroolAutomatic, 4000);
        }


    });

    function open() {
        envelope.addClass('open')
            .removeClass('close');
        $("#verInvitationContent").hide(1000);
        $("#comenzar").show(1000);
    }
    function close() {
        envelope.addClass('close')
            .removeClass('open');
    }


    var count = 0;

    function scroolAutomatic() {

        let ids = [null, 'da1', 'da2', 'da3', 'da4', 'da5', 'da6' , 'da7']

        if (ids[count] != null) {
            document.getElementById(ids[count]).click();
        }
        if (count == 5) {
            clearInterval();
        }
        count++;

    }
})