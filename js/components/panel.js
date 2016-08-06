(function(){
	var exportPanel = function (panel_item) {
		var panel_content_wrapper = panel_item.children('.panel-content-wrapper');
		var panel_content = panel_content_wrapper.children('.panel-content');
		var dis_to_scroll = panel_content.height() - panel_content_wrapper.height();

		if (dis_to_scroll > 0) {
			if (panel_item.hasClass('expanded')) {
				// showing, let hide
				panel_content.css({
					transform: 'translateY(0)'
				});
			} else {
				// hiding, let show
				panel_content.css({
					transform: 'translateY(-' + dis_to_scroll + 'px)'
				});
			}

			panel_item.toggleClass('expanded');
		}
	};

	// show when click on button or title
	$(".panel").on('click', '*[role="expand"], h6.title', function(event) {
		event.preventDefault();
		var panel_item = $(this).parents(".panel");
		exportPanel(panel_item);
	});
})();