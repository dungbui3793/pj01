/**
 * Created by gumidung on 4/24/17.
 */

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



})