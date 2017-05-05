/**
 * Created by gumidung on 4/27/17.
 */

$(function () {
    if($(window).width() > 800) {
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

    } else {
        $(".content__wrap .content__item:first-child").addClass("active");
    }


    $(".hear-me-popup").click(function () {
        $(".popup-hear-me").fadeIn(300);
    });
    $(document).mouseup(function(e) {
        var $container = $(".popup-hear-me iframe");

        // if the target of the click isn't the container nor a descendant of the container
        if (!$container.is(e.target) && $container.has(e.target).length === 0) {
            $(".popup-hear-me").fadeOut();
        }
    });

    // ====================
    // setting scroll single slide right
    // ====================
    if($(window).width() > 800) {
        var isMoving_2=false;

        $(".col-left").bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (event, delta) {
            event.preventDefault();

            var get_current_page = $(".content__wrap .content__item.active");
            var get_next_page = get_current_page.next();
            var get_prev_page = get_current_page.prev();

            var getCurrentLoader = $(".loader-content .loader-wrap.active-loader");
            var getNextLoader = getCurrentLoader.next();
            var getPrevLoader = getCurrentLoader.prev();

            var scrollPosition = event.originalEvent.wheelDelta;
            if(scrollPosition > 0) {
                if(!get_current_page.is(":first-child")) {
                    if (isMoving_2) return;
                    navigateTo_2();
                    console.log("up");
                    settingNextScrollPage();
                    getCurrentLoader.removeClass("active-loader");
                    getPrevLoader.addClass("active-loader");
                    setTimeout(function () {
                        get_current_page.removeClass("active");
                        get_prev_page.addClass("active");
                    },2000);
                }
            } else {
                if(!get_current_page.is(":last-child")) {
                    if (isMoving_2) return;
                    navigateTo_2();
                    console.log("down");
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
            },5500);
        }
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
        var get_current_dot = get_dot.find("ul li.active");
        var get_dot_next = get_current_dot.next();
        var get_dot_prev = get_current_dot.prev();


        var scrollPosition = event.originalEvent.wheelDelta;

        if(scrollPosition > 0) {
            if (!get_this_current_slide.is(':first-child')) {

                if (isMoving) return;
                navigateTo();

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

                if (isMoving) return;
                navigateTo();

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

    $(".content__wrap").on('click','.content__item.active .slider-dot > li.active ul li',function () {
        if(!$(this).hasClass("active")) {
            var getCurrentDot = $(this).parents("li.active").find("ul li").index($(this).parents("li.active").find("ul li.active"));
            $(this).addClass("active");
            $(this).parents("li.active").find("ul li").not($(this)).removeClass("active");

            var getIndex = $(this).parents("li.active").find("ul li").index($(this));
            var getThisCurrentSlide = $(this).parents(".content__item.active").find(".slide-right .slide__item.active");
            // console.log(getThisCurrentSlide.attr("class"));

            var getThisCurrentSlideItem = $(this).parents(".content__item.active").find(".slide-right .slide__item");

            getThisCurrentSlide.removeClass("active prev next");
            setTimeout(function () {
                getThisCurrentSlideItem.eq(getIndex).removeClass("active next prev").addClass("active");
            },300);

            if(getCurrentDot < getIndex) {
                getThisCurrentSlideItem.eq(getCurrentDot).addClass("prev");
            } else {
                getThisCurrentSlideItem.eq(getCurrentDot).addClass("next");
            }
        }


    });

    $(".content__wrap").on('click','.content__item.active .slider-dot > li',function () {
        if(!$(this).hasClass("active")) {

            var getCurrentLoader = $(".loader-content .loader-wrap.active-loader");

            var getIndex = $(this).parent(".slider-dot").find("> li").index($(this));

            var getCurrentPage = $(".content__wrap .content__item.active");
            var getCurrentLoader = $(".loader-content .loader-wrap.active-loader");


            var getIndexPage = $(".content__wrap .content__item").eq(getIndex);
            var getIndexLoader = $(".loader-content .loader-wrap").eq(getIndex);

            $(".loader-wrap").removeClass("active").addClass("next-active");

            $(".main-content").removeClass("active").addClass("move-down");

            setTimeout(function () {
                $(".loader-wrap").addClass("active");
            },500);

            setTimeout(function () {
                $(".main-content").addClass("active").removeClass("move-down");
            }, 4000);


            getCurrentLoader.removeClass("active-loader");
            getIndexLoader.addClass("active-loader");

            setTimeout(function () {
                getCurrentPage.removeClass("active");
                getIndexPage.addClass("active");
            },2000);


        }
    });
    // ====================


    // ====================
    // setting slider mobile
    // ====================

    if($(window).width() < 801) {

        $(".content__wrap").slick({
            adaptiveHeight: true
        });
    }


});

function is_touch_device() {
    return 'ontouchstart' in window        // works on most browsers
            || navigator.maxTouchPoints;       // works on IE10/11 and Surface
}