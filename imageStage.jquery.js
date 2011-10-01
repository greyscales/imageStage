(function($){
	
	var settings = {
		'duration': 200,
		'easing': 'linear',
		'imageStageItems': '#imageStage-items',
		'stageWidth': 960,
		'navWidth': 50,
		'navOpacity': 1
	};
	
	var methods = {
		init: function(options){
			if (options) {
				$.extend(settings, options);
			}
			
			$(this).append('<div id="imageStage-left" class="imageStage-navigation"><div></div></div><div id="imageStage-right" class="imageStage-navigation"><div></div></div>');
			return $(this).each(function(){
				var items = $(settings.imageStageItems).find('img');
				var numberOfItems = items.length;
				var width = settings.stageWidth * numberOfItems;
				var position = 0;

				$(settings.imageStageItems).css({
					'width': width
				});
				
				$('#imageStage div.imageStage-navigation').hover(function(event){
					if (position === 0 && $(this).attr('id') === 'imageStage-left' || position === (-width + settings.stageWidth) && $(this).attr('id') === 'imageStage-right') {
						return false;
					}
					$(this).css({
						'opacity': settings.navOpacity
					});
					if ($(this).attr('id') === 'imageStage-right') {
						if (position < numberOfItems * settings.stageWidth) {
							position = position - settings.navWidth;
						}
					} else {
						if (position + settings.stageWidth - settings.navWidth < 0) {
							position = position + settings.navWidth;
						}
					}
					$(settings.imageStageItems).stop(true).animate({
						left: position + 'px'
					});
				}, function(){
					if(position !== -numberOfItems * settings.stageWidth + settings.stageWidth){
						$(this).css({
							'opacity': 0
						});
						if ($(this).attr('id') === 'imageStage-right') {
							if (position > -numberOfItems * settings.stageWidth) {
								position = position + settings.navWidth;
							}
						} else {
							if (position < 0) {
								position = position - settings.navWidth;
							}
						}
						$(settings.imageStageItems).stop(true).animate({
							left: position + 'px'
						});
					}
				}).click(function(){
					if ($(this).is(':animated') || $(this).css('opacity') == 0) {
						return;
					}
					if ($(this).attr('id') === 'imageStage-right') {
						if (position - settings.stageWidth - settings.stageWidth - settings.navWidth <= -numberOfItems * settings.stageWidth) {
							position = position - settings.stageWidth + settings.navWidth;
						} else if (position > -numberOfItems * settings.stageWidth + settings.stageWidth) {
							position = position - settings.stageWidth;
						}
					} else {
						if (position + settings.stageWidth - settings.navWidth < 0) {
							position = position + settings.stageWidth;	
						} else {
							position = position + settings.stageWidth - settings.navWidth;
						}
					}
					
					
					$(settings.imageStageItems).animate({
						left: position + 'px'
					});
					if (position === 0 || position === -numberOfItems * settings.stageWidth + settings.stageWidth) {
						$(this).css({
							'opacity': 0
						});
					}
				});

			});
		}
	};
	
	$.fn.imageStage = function(method){
		
		
		return this.each(function(){
			
			
			if (methods[method]) {
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.imageStage');
			}
			
		});
	};
})(jQuery);