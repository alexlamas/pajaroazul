$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 80) {
      $("body").css("background-color", "black");
      $(".papel h1, .properties, p").css("color", "white");
      $(".papel a").css("background-color", "white").css("color", "black");
    } else {
      $("body").css("background-color", "white");
      $(".papel h1, .properties, p").css("color", "black");
      $(".papel a").css("background-color", "black").css("color", "white");
    }
  });
});
