$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".top-bar").addClass("top-bar-alt").removeClass("top-bar");
    } else {
      $(".top-bar-alt").removeClass("top-bar-alt").addClass("top-bar");
    }
  });
});
