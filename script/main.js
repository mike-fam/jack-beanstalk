$(document).ready(function() {
    let isPopUpImage = [false, false, false, false, false];
    let storyNav = $("#story-nav");
    let storyNavUl = $("#story-nav ul");
    let navUlContainer = $("#nav-ul-container");
    setUp();
    bindEvents();
    /**
     * Setup at start
     */
    function setUp() {
        navUlContainer.css("height", storyNavUl.height() + "px");
        console.log($(document).scrollTop());

        $(document).scrollTop(0);
        setSize();
        flashInstruction();
    }

    function flashInstruction() {
        if (!$(document).scrollTop()){
            $(".instruction").fadeIn().fadeOut();
            window.setTimeout(function() { flashInstruction() }, 0);
        }

    }

    function setSize(){
        let winWidth = $(window).width();
        let winHeight = $(window).height();
        let storySVG = $(".story-svg");
        if(winWidth < 600) {
            storySVG.css({
                "height": 6175.2 * winHeight / 1080,
                "bottom": 0,
                "margin-left": winWidth / 2 - (1920/2*storySVG.height()/6175.2)
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

        $(document).scroll(function(evt) {
            scrollBg();
            $(".instruction").css({
                "visibility": "hidden",
            });
        });
        $(".pop-up .close-button").click(function(evt) {
            evt.preventDefault();
            $("body").removeClass("pop-up-on");
            $(this).parent().css({
                "visibility": "hidden"
            }).animate({
                "opacity": 0
            });
        });
        navUlContainer.mouseover(function(evt) {
            storyNavUl.animate({"bottom": 0}, 200, "swing");
        }).mouseleave(function(evt){
            storyNavUl.animate({"bottom": storyNav.height()}, 200, "swing");
        });


    function scrollBg() {
        let yPos = $(document).scrollTop();
        // console.log("scrollBG running");
        let backgroundContainer = $("#background-container");
        let currentBackgroundLeftPosition = backgroundContainer.offset().left;
        let currentBackgroundBottomPosition = backgroundContainer.offset().bottom;
        console.log(yPos);
        if (yPos < 3138) {
            backgroundContainer.css({
                "left": -yPos
            });
        } else if (yPos >= 3138 && !isPopUpImage[0]){
            console.log("if else working");
            showImage(0);
        } else if(yPos < 6479) {
            backgroundContainer.css({
                "left": -6276 + yPos
            });
        } else if (yPos >= 6479 && !isPopUpImage[1]) {
            showImage(1);
        } else if (yPos < 7080){
            backgroundContainer.css({
                "left": 6682 - yPos
            });
        } else if(yPos < 9985) {
            backgroundContainer.css({
                "bottom": 7080 - yPos
            });
        } else if(yPos < 11356) {
            let lastLeftValue = Object.assign(0, currentBackgroundLeftPosition);
            backgroundContainer.css({
                "left": 9600 - yPos
            });
        } else if(yPos >= 11356 && !isPopUpImage[2]) {
            showImage(2);
        } else if (yPos < 11985) {
            backgroundContainer.css({
                "left": 9600 - yPos
            });
        } else if (yPos >= 11985 && !isPopUpImage[3]){
            showImage(3);
        } else if (yPos < 13952) {
            backgroundContainer.css({
                "left": yPos - 14351
            });
            // console.log(currentBackgroundLeftPosition);
        } else if (yPos < 16840) {
            backgroundContainer.css({
                "bottom": yPos - 16852
            });

            // console.log(backgroundContainer.css("bottom"));
        } else {

        }
    }

    function showImage(imageNumber) {
        if (!isPopUpImage[imageNumber]) {
            $("body").addClass("pop-up-on");
            console.log(".pop-up." + imageNumber);
            $(".pop-up." + imageNumber).css({
                "visibility": "visible"
            }).animate({
                "opacity": 1
            }, 1000, "swing");
            isPopUpImage[imageNumber] = true;
        }
    }
}});

// tell reader to scroll down after closing popup
// tell reader where the autohide menu is
// show the reader which direction to scroll in the way the story will go,
// e.g if the story is going to the market, it should point right
// since it's unfamiliar to normal websites