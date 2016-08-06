$(".toggle").click(function() {
	$(this).toggleClass('selected active');
});

$(".toggle-group > *").click(function() {
	$(this).siblings().removeClass('selected active');
	$(this).addClass('selected active');
});	

$("a[href|='#']").click(function(event) {
	event.preventDefault();
});

$('a[href*=#]:not([href=#]):not([role=tab])').click(function() {
	if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 500);
			return false;
		}
	}
});

if (matchMedia(Foundation.media_queries['medium']).matches) {
	$.getScript('js/components/parallax.min.js');
}