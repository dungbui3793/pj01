/**
 * Created by gumidung on 4/27/17.
 */

$(function () {
    var wow = new WOW({});
    wow.init();

    setTimeout(function () {
        $(".loader-wrap").addClass("active");
    },500);

    setTimeout(function () {
        $(".main-content").addClass("active");
    }, 4000);
    setTimeout(function () {
        $(".content__wrap .content__item:first-child").addClass("active");
    }, 2000);


    // ====================
    // setting scroll single slide right
    // ====================
    var isMoving_2=false;

    $(".col-left").bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (event, delta) {
        event.preventDefault();

        var get_current_page = $(".content__wrap .content__item.active");
        var get_next_page = get_current_page.next();
        var get_prev_page = get_current_page.prev();

        var getCurrentLoader = $(".loader-content .loader-wrap.active-loader");
        var getNextLoader = getCurrentLoader.next();
        var getPrevLoader = getCurrentLoader.prev();


        if (isMoving_2) return;
        navigateTo_2();
        var scrollPosition = event.originalEvent.wheelDelta;
        if(scrollPosition > 0) {
            console.log("up");
            if(!get_current_page.is(":first-child")) {
                settingNextScrollPage();
                getCurrentLoader.removeClass("active-loader");
                getPrevLoader.addClass("active-loader");
                setTimeout(function () {
                    get_current_page.removeClass("active");
                    get_prev_page.addClass("active");
                },2000);


            }
        } else {
            console.log("down");
            if(!get_current_page.is(":last-child")) {
                settingNextScrollPage();
                getCurrentLoader.removeClass("active-loader");
                getNextLoader.addClass("active-loader");

                setTimeout(function () {
                    get_current_page.removeClass("active");
                    get_next_page.addClass("active");
                },2000);

            }


        }

        function settingNextScrollPage() {
            $(".loader-wrap").removeClass("active").addClass("next-active");

            $(".main-content").removeClass("active").addClass("move-down");

            setTimeout(function () {
                $(".loader-wrap").addClass("active");
            },500);

            setTimeout(function () {
                $(".main-content").addClass("active").removeClass("move-down");
            }, 4000);

        }




    });
    function navigateTo_2(){
        isMoving_2 = true;
        setTimeout(function() {
            isMoving_2=false;
        },5000);
    }
    // ====================



    // ====================
    // setting scroll single slide right
    // ====================
    var isMoving=false;
    $('.slide-right').bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(event, delta) {
        event.preventDefault();

        var get_this_slide = $(this);
        var get_this_current_slide = get_this_slide.find(".slide__item.active");
        var get_next = get_this_current_slide.next();
        var get_prev = get_this_current_slide.prev();

        var get_dot = get_this_slide.parent(".content__item").find(".col-left .slider-dot > li.active");
        // var get_dot = $(".slider-dot > li.active");
        var get_current_dot = get_dot.find("ul li.active");
        var get_dot_next = get_current_dot.next();
        var get_dot_prev = get_current_dot.prev();



        if (isMoving) return;
        navigateTo();

        var scrollPosition = event.originalEvent.wheelDelta;

        if(scrollPosition > 0) {
            if (!get_this_current_slide.is(':first-child')) {
                get_prev.removeClass("active next prev").addClass("prev");
                get_this_current_slide.removeClass("active next prev").addClass("next");
                setTimeout(function () {
                    get_prev.removeClass("active next prev").addClass("active");
                    get_prev.find(".slide__item__title").addClass("fadeInUp");
                }, 300);
                get_current_dot.removeClass("active");
                get_dot_prev.addClass("active");
            }
        } else {
            if (!get_this_current_slide.is(':last-child')) {
                get_next.removeClass("active next prev").addClass("next");
                get_this_current_slide.removeClass("active next prev").addClass("prev");
                setTimeout(function () {
                    get_next.removeClass("active next prev").addClass("active");
                    get_next.find(".slide__item__title").addClass("fadeInUp");
                }, 300);
                get_current_dot.removeClass("active");
                get_dot_next.addClass("active");
            }
        }


    });

    function navigateTo(){
        isMoving = true;
        setTimeout(function() {
            isMoving=false;
        },2000);
    }
    // ====================


    // ====================
    // setting dot single slide right
    // ====================
    $(".slider-dot .link-world ul li").click(function () {
        var get_current_dot = $(".slider-dot .link-world ul li").index($(".slider-dot .link-world ul li.active"));
        $(this).addClass("active");
        $(".slider-dot .link-world ul li").not($(this)).removeClass("active");

        var get_index = $(".slider-dot .link-world ul li").index($(this));

        var get_this_current_slide = $(".slide-right").find(".slide__item.active");
        var get_next = get_this_current_slide.next();
        var get_prev = get_this_current_slide.prev();

        get_this_current_slide.removeClass("active prev next");

        // $(".slide-right .slide__item").eq(get_index).addClass("active");

        if(get_current_dot < get_index) {
            $(".slide-right .slide__item").eq(get_current_dot).addClass("prev");
        } else {
            $(".slide-right .slide__item").eq(get_current_dot).addClass("next");

        }
        setTimeout(function () {
            $(".slide-right .slide__item").eq(get_index).removeClass("active next prev").addClass("active");
        },300);

    });
    // ====================


});