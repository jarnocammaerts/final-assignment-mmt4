

$(document).ready(function () {
    $('#switch').on('click', () => {
        if ($('#switch').prop('checked')) {
            $('body').addClass('dark');
        } else {
            $('body').removeClass('dark');
        }
    })
    clicked = true;

    $("#accordion").accordion({ animate: 400, heightStyle: "content", header: ".sectionheader h3"});
    $("button.player-btn").click(function () {
        var color = clicked ? '#FFAFE3' : '#D1E7FF;';
        $(this).css('background-color', color);
        clicked = !clicked;
    });




$('video').each(function(){
    var player = videojs(this.id, {
        // autoplay: 'muted', 
        // loop: true
    });
    $("button#rewind").click(function () {
        player.currentTime(0);// button function for rewind
    });

    let geklikt = false;

    $("button#toggle").click(function () {
        //ik ga ervanuit dat de video autoplayed, dus als je klikt hij gepauzeerd word
        if (geklikt == false) {
            player.pause();
            geklikt = true;
        } else {
            player.play();
            geklikt = false;
        }
    });
    $(this).parents(".sectionheader").find(".vinkje").click(function () {
        $(this).parents(".sectionheader").find(".viewed").css({ "display": "inline" });
            

    });
});

    $(".vinkje").on("click", function () {
        $(".popup-overlay, .popup-content").addClass("active");
        $(".viewed").addClass("active");
    });

    //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
    $(".close, .popup-overlay").on("click", function () {
        $(".popup-overlay, .popup-content").removeClass("active");
    });

});
