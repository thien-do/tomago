(function() {
	$(window).bind('scroll',function(){
		window.requestAnimationFrame(parallaxScroll);
	});

	var CoverScrollArea = {
		begin: 0,
		end:   $(window).height() - $(".home-info.container").outerHeight()
	};
	var ResImg = $('#res-img img');
	var ResTitle = $('#res-title');

	var StoryScrollArea = {
		begin: $("#res-story").offset().top - $(window).height(),
		top:   $("#res-story").offset().top,
		end:   $("#res-story").offset().top + $(window).height(),
	};
	var StoryImg = $('#story-img img');

	function parallaxScroll(){
		var scrolledY = $(window).scrollTop();
		if (scrolledY <= CoverScrollArea.end) {
			ResImg.css('transform','translate3D(0,'+((scrolledY*0.6).toFixed(0))+'px,0)');
			ResTitle.css({
				"transform":"translate3D(0," +((scrolledY*0.4).toFixed(0))+ "px,0)",
			});
		} else if (StoryScrollArea.begin <= scrolledY && scrolledY <= StoryScrollArea.end) {
			StoryImg.css('transform','translate3D(0,' + ((scrolledY - StoryScrollArea.top) * 0.6).toFixed(0) + 'px,0)');			
		}
	}
})();