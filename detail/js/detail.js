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

    $(".nav-bar").attr("data-wow-delay","5.5s");
});