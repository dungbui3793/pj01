

function detectmob() {
    if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}

function iOS() {

    var iDevices = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ];

    if (!!navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()){ return true; }
        }
    }

    return false;
}

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

$(function () {
    if(iOS() || isAndroid) {
        $("body").addClass("mobile");

        $(".nav-bar .message").one("click",function () {
            $(".nav-bar h1").css("display","none");
        });

        $(".popup__close").click(function () {
            $(".nav-bar h1").css("display","block");
        });
    }
    if(isAndroid) {
        $("body").addClass("android");
    }

});

$(function () {
    $('.slider').owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:24,
        autoWidth:true
    });


    $(".nav-bar .message").click(function () {
        $(".popup.message").fadeIn(300);
    });

    $(".nav-bar .access").click(function () {
        $(".popup.access-popup").fadeIn(300);
    });

    $(".popup__close").click(function () {
        $(".popup").fadeOut(300);
    });

    if($(window).width() > 767) {
        $("#man-block").width($(".content .man .man-pc").width()).height($(".content .man .man-pc").height());

        $("#man-block").mouseover(function () {
            var items = ["img/man-01.png","img/man-02.png","img/man-03.png","img/man-04.png","img/man-05.png"];
            var randomItem = items[Math.floor(Math.random()*items.length)];

            if(randomItem == $(".content .man .man-pc").attr('src')) {
                randomItem = items[Math.floor(Math.random()*items.length)];
                $(".content .man .man-pc").attr("src",randomItem);
            } else {
                $(".content .man .man-pc").attr("src",randomItem);
            }
        })
    } else {
        $("#man-block").width(0);
        $(".content .man .man-pc").attr("src","img/man-01.png");
    }

    $(".content .list-hover").height($(".content-front .list-hover").height());

})

$(window).load(function () {
    if($(window).width() > 767) {
        $("#man-block").width($(".content .man .man-pc").width()).height($(".content .man .man-pc").height());

    } else {

    }
})

$(window).resize(function () {
    if($(window).width() > 767) {
        $("#man-block").width($(".content .man .man-pc").width()).height($(".content .man .man-pc").height());

        $("#man-block").mouseover(function () {
            var items = ["img/man-01.png","img/man-02.png","img/man-03.png","img/man-04.png","img/man-05.png"];
            var randomItem = items[Math.floor(Math.random()*items.length)];

            if(randomItem == $(".content .man .man-pc").attr('src')) {
                randomItem = items[Math.floor(Math.random()*items.length)];
                $(".content .man .man-pc").attr("src",randomItem);
            } else {
                $(".content .man .man-pc").attr("src",randomItem);
            }
        })
    } else {
        $("#man-block").width(0);
        $(".content .man .man-pc").attr("src","img/man-01.png");
    }

    $(".content .list-hover").height($(".content-front .list-hover").height());


})
