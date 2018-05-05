$(document).ready(function() {
    let isPopUpImage;
    let storyNav = $("#story-nav");
    let storyNavUl = $("#story-nav ul");

    setUp();
    bindEvents();



    /**
     * Setup at start
     */
    function setUp() {
        storyNav.css("height", storyNavUl.height() + "px");
        setSize();
    }


    function setSize(){
        let winWidth = $(window).width();
        let winHeight = $(window).height();
        let storySVG = $(".story-svg");
        if(winWidth < 600) {
            storySVG.css({
                "height": 6175.2 * winHeight / 1080,
                "left": winWidth / 2 - (1920/2*storySVG.height()/6175.2),
                "bottom": 0,
            });
        } else {
            storySVG.css({
                "width": 6646 * 1280 / 1920,
                "left":3020 + "px",
            });
        }
    }

    /**
     * Bind all events
     */
    function bindEvents(){
        // set document size if is resized
        $(window).resize(setSize);

        $(document).scroll(scrollBg);

        storyNav.mouseover(function(evt) {
            storyNavUl.animate({"bottom": 0}, 200, "swing");
        }).mouseleave(function(evt){
            storyNavUl.animate({"bottom": storyNav.height()}, 200, "swing");
        });


    function scrollBg(evt) {
        let yPos = $(document).scrollTop();
        $("#background-container").css({
            "left": -yPos
        })
    }
}});