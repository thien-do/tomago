(function(){
	var AnimationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	var InfoBox = $('#info-object');
	var InfoBoxCounterTarget = InfoBox.find('a[href="#close"] > span');
	var InfoBoxCounter;
	var InfoBoxDelay = 0;
	var InfoBoxAnimationClass = 'animated fadeInUp fadeOutUp fadeInDown fadeOutDown';

	function setCounter(delay) {
		// reset counter
		clearInterval(InfoBoxCounter);

		InfoBoxDelay = delay;
		InfoBoxCounterTarget.text(InfoBoxDelay);
		InfoBoxCounter = setInterval(function() {
			InfoBoxCounterTarget.text(--InfoBoxDelay);
			if (InfoBoxDelay === 0) {
				hideInfo();
				clearInterval(InfoBoxCounter);
			}
		}, 1000);
	}

	function hideInfo() {
		InfoBox.removeClass(InfoBoxAnimationClass);
		InfoBox.addClass('animated fadeOutUp').one(AnimationEndEvent, function() {
			InfoBox.addClass('hidden');
			InfoBox.removeClass(InfoBoxAnimationClass);
		});
		InfoBoxDelay = 0;
		clearInterval(InfoBoxCounter);
	}

	function showInfo(caller) {
		// RESET INFO BOX
		InfoBox.addClass('hidden');
		InfoBox.removeClass(InfoBoxAnimationClass);

		// PREPARE INFO BOX
		var InfoBoxSource = $('#' + caller.attr('data-info'));
		InfoBox.children('.info-content').html(InfoBoxSource.html());

		InfoBox.removeClass('no-pointer');
		if (InfoBoxSource.hasClass('no-pointer')) { InfoBox.addClass('no-pointer'); }

		// START COUNTER
		var Delay = InfoBoxSource.attr('data-delay');
		setCounter(Delay);

		var InfoBoxAnimation = 'fadeInDown';
		// SET POSITION
		if (matchMedia(Foundation.media_queries['medium']).matches) {
			var InfoBoxTop = caller.offset().top - InfoBox.outerHeight(true);
			var InfoBoxLeft = caller.offset().left;
			InfoBox.offset({
				top: InfoBoxTop,
				left: InfoBoxLeft
			});
			InfoBoxAnimation = 'fadeInUp'
		}

		// SHOW INFO BOX
		InfoBox
		.removeClass('hidden')
		.addClass('animated ' + InfoBoxAnimation)
		.one(AnimationEndEvent, function() {
			InfoBox.removeClass(InfoBoxAnimationClass);
			// HIDE ON DOCUMENT CLICK
			$(document).one('click', function() {
				hideInfo();
			});
		});
	}

	$('a[data-info]').on('click',function(event) {
		event.stopPropagation();
		if ($(this).hasClass('toggle')) {
			if ($(this).hasClass('active') === false) { return; }
		}

		showInfo($(this));
	});

	$('.info-box > a[href="#close"]').on('click', function() {
		hideInfo();
	});
})();