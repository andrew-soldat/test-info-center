window.navigator.vibrate(5000);

$(function () {
   // $('a[href^="#"]').click(function (event) {
   //    var target = $(this).attr('href');
   //    $('html, body').animate({ scrollTop: $(target).offset().top - 10 }, 800);
   //    return false;
   // });
	$(".info-item-equipment__item").hover(function(e) {
		$('.label-item-equipment__item').removeClass('_active');
		$($(this).attr('data-class')).addClass('_active');
	})
});
