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
        add_wow_class();

    }, 4000);
    add_wow_delay();




    var timerId;

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

    $('.slide-right').bind('mousewheel', function(e){
        var get_this_slide = $(this);
        var get_this_current_slide = get_this_slide.find(".slide__item.active");
        var get_next = get_this_current_slide.next();
        var get_prev = get_this_current_slide.prev();

        var get_dot = $(".slider-dot .link-world");
        var get_current_dot = get_dot.find("ul li.active");
        var get_dot_next = get_current_dot.next();
        var get_dot_prev = get_current_dot.prev();

        clearTimeout(timerId);
        timerId = setTimeout(function(){
            if(e.originalEvent.wheelDelta /120 > 0) {
                console.log("up");
                if(!get_this_current_slide.is(':first-child')) {
                    get_prev.removeClass("active next prev").addClass("prev");
                    get_this_current_slide.removeClass("active next prev").addClass("next");
                    setTimeout(function () {
                        get_prev.removeClass("active next prev").addClass("active");
                        get_prev.find(".slide__item__title").addClass("fadeInUp");
                    },300);
                    get_current_dot.removeClass("active");
                    get_dot_prev.addClass("active");
                }
            }
            else{
                console.log("down");
                if(!get_this_current_slide.is(':last-child')) {
                    get_next.removeClass("active next prev").addClass("next");
                    get_this_current_slide.removeClass("active next prev").addClass("prev");
                    setTimeout(function () {
                        get_next.removeClass("active next prev").addClass("active");
                        get_next.find(".slide__item__title").addClass("fadeInUp");
                    },300);
                    get_current_dot.removeClass("active");
                    get_dot_next.addClass("active");
                }

            }
        }, 100);


    });

});

function add_wow_class () {
    $(".nav-bar").addClass("fadeInDown");
    $(".content__item.active .item__info h1").addClass("fadeInUp");
    $(".content__item.active .item__info h3").addClass("fadeInUp");
    $(".content__item.active .item__info .item__text-01").addClass("fadeInUp");
    $(".content__item.active .item__info .item__text-02").addClass("fadeInUp");
    $(".content__item.active .slide-right .slide__item.active .slide__item__title").addClass("fadeInUp");
}

function add_wow_delay () {
    $(".nav-bar").attr("data-wow-delay","1.5s");
    $(".content__item.active .item__info h1").attr("data-wow-delay","2s");
    $(".content__item.active .item__info h3").attr("data-wow-delay","2.3s");
    $(".content__item.active .item__info .item__text-01").attr("data-wow-delay","2.6s");
    $(".content__item.active .item__info .item__text-02").attr("data-wow-delay","2.9s");
    $(".content__item.active .slide-right .slide__item.active .slide__item__title").attr("data-wow-delay","2s");
}