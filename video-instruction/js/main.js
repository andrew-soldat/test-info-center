window.navigator.vibrate(5000);

$(function () {
   $('a[href^="#"]').click(function (event) {
      var target = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(target).offset().top - 10 }, 800);
      return false;
   });

});