(function(yourcode) {

    yourcode(window.jQuery, window, document);

}(function($, window, document) {
    // Define constants
    let isPopUpImage;
    $(function() {
        setUp();
        bindEvents();

    });

    /**
     * Setup at start
     */
    function setUp(){
        setSize();
    }

    /**
     * Bind all events
     */
    function bindEvents(){
        $(window).resize(setSize);
        $(document).scroll(scrollBg);
    }
    /**
     *Change isPopUpImage status to true
     */
    function popUpImageOn(){
        isPopUpImage = !0;
    }
    
    /**
     * Change isPopUpImage to False
     */
    function popUpImageOff(){
        isPopUpImage = !1;
    }
    
    /**
     * Set the size of the whole story to match the current window
     */
    function setSize(evt){
        let WIN_WIDTH = $(window).width();
        let WIN_HEIGHT = $(window).height();
        let storyWidth = (WIN_WIDTH / WIN_HEIGHT > 1920 / 1080) ? 6646*WIN_WIDTH/1920: 6646*WIN_HEIGHT/1080;
        $(".story-svg").attr({
            "width": storyWidth + "px",
        });
    }

    function mainScroll(evt){
    
    }
    
    function scrollBg(evt) {
        let yPos = $(document).scrollTop();
        $("#background-container").css({
            "left": -yPos
        })
    }

    function navHover(evt) {
        $("nav ul").css()
    }

}));