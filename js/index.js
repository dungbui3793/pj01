$('#carousel_item').carousel({
  interval: 10000
})

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  }
  else {
    $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});

$(function () {

    $(".nav-bar .message").click(function () {
        $(".popup.message").fadeIn(300);
    });

    $(".nav-bar .access").click(function () {
        $(".popup.access-popup").fadeIn(300);
    });

    $(".popup__close").click(function () {
        $(".popup").fadeOut(300);
    });

})