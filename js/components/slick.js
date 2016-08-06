(function() {

	var EventsSlick = $('#event-section  > .content-body');
	EventsSlick.slick({
		arrows: false,
		dots: true,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		// draggable: false,
		//touchMove: false,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	$('#event-section > .section-header > .sub-nav').on('click', 'dd', function() {
		if ($(this).attr('role') === 'all') {
			EventsSlick.slickUnfilter();
		} else if ($(this).attr('role') === 'coming') {
			EventsSlick.slickFilter('.comming-event');
		}
	});

	//========================

	var MissionsSlick = $('#mission-section  > .content-body');
	MissionsSlick.slick({
		arrows: false,
		dots: true,
		infinite: false,
		slidesToShow: 1,
		// draggable: false,
		// touchMove: false,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	//========================
	
	var MenuSlick = $('#menu-section .menu-content');
	MenuSlick.slick({
		arrows: true,
		dots: false,
		infinite: false,
		slidesToShow: 2,
		slidesToScroll: 1,
		// draggable: false,
		// touchMove: false,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true
				}
			}
		]
	});

	//========================
	
	var MenuHeight = MenuSlick.parent().height();
	MenuSlick.height(MenuHeight);
	MenuSlick.find(".menu-page").height(MenuHeight);

	//========================

	var GalleryMainSlick = $('#gallery-section .gallery-main');
	var InitGallerySlick = function() {
		GalleryMainSlick.slick({
			arrows: true,
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			fade: true,
			// draggable: false,
			// touchMove: false,
			responsive: [
				{
					breakpoint: 640,
					settings: {
						arrows: true,
						dots: true
					}
				}
			]
		});
	};
	
	$('#res-mag a[href="#gallery-section"]').one('click', function() {
		InitGallerySlick();
		GalleryMainSlick.slickNext();
	});
})();