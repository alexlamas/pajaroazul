$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
      $("body").css("background-color", "black");
      $(".papel h1, a, .properties, p").css("color", "white");
    } else {
      $("body").css("background-color", "white");
      $(".papel h1, a, .properties, p").css("color", "black");
    }
  });
});
