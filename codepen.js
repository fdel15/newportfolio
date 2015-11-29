$(document).ready(function() {
  $("#my-nav li a").click(function(e) {
    e.preventDefault();
    var id = e.currentTarget.hash;
    $('html, body').animate({
      scrollTop: $(id).offset().top
    }, 1500);

    if ($('.navbar-toggle').css('display') != 'none') {
      $(".navbar-toggle").trigger("click");
    }
  });
});