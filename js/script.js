$(document).ready(function(){
	$('.header_burger').click(function () {
		$('.header_burger, .burger_menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
})

$(function() {
 jQuery.scrollSpeed(100, 800, 'easeOutCubic');
})
$(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 1000);
  });
});