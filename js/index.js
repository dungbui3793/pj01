

$(function () {
    $('.slider').owlCarousel({
        center: true,
        items:3,
        loop:true,
        margin:24,
        autoWidth:true
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
