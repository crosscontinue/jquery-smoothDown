(function($){
	$.fn.smoothDown = function(options){
		//setting option
		options = $.extend({
			duration: 1000,
			easing: 'quart',
			top: '5px'
		}, options);
		//wraparea css
		$('div.btnwrap').css({
			position: 'relative'
		});
		//set slide size
		var topval = options.top.replace('top: ', '');
		
		$(this).css({
			display: 'block',
			position: 'absolute'
		})
		.hover(function(){
			$(this).wrap('<div class="btnwrap" />');
			$(this).animate({
				top: topval
			},options.duration,options.easing);
		},function(){
			$(this).animate({
				top: '0px'
			},options.duration,options.easing,function(){
				$(this).unwrap();
			});
		});
		return this;
	}
})(jQuery);