$(document).ready(function(){
  $('.indexpostsmall a,.flickr_badge_image a img').hover(function(e){
    // Hover over code
    var titleText = $(this).attr('title');
    $(this)
      .data('tipText', titleText)
      .removeAttr('title');
      
    $('<p class="tooltip ss"></p>')
      .text(titleText)
      .appendTo('body')
      .css('top', (e.pageY + 10) + 'px')
      .css('left', (e.pageX + 20) + 'px')
      .fadeIn('slow');
  }, function() {
    // Hover out code
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
  }).mousemove(function(e){
    // Mouse move code
    $('.tooltip')
      .css('top', (e.pageY + 10) + 'px')
      .css('left', (e.pageX + 20) + 'px');
  });


$('.indexpost').hoverIntent(function() {
	$(this).css({}); /*Add a higher z-index value so this image stays on top*/ 
	$(this).find('h2')
		.animate({
			top: '300px', 	
		}, 600); 
	$(this).find('.postinfo')
		.animate({
			left: '-340px', 	
		}, 600); 
	$(this).find('.folioinfo')
		.animate({
			top: '30px', 	
		}, 400); 

	} , function() {
	$(this).css({}); /* Set z-index back to 0 */
	$(this).find('h2')
		.animate({
			top: '140px', 

		}, 800);

	$(this).css({}); /* Set z-index back to 0 */
	$(this).find('.postinfo')
		.animate({
			left: '0', 

		}, 800);

	$(this).css({}); /* Set z-index back to 0 */
	$(this).find('.folioinfo')
		.animate({
			top: '-255px', 
		}, 800);
});




$('.project').hoverIntent(function() {
	$(this).css({}); /*Add a higher z-index value so this image stays on top*/ 
	$(this).find('.projectstuff')
		.animate({
			top: '0px', 	
		}, 400); 

	} , function() {
	$(this).css({}); /* Set z-index back to 0 */
	$(this).find('.projectstuff')
		.animate({
			top: '700px', 
		}, 800);

});





$('.portfoliopost,.portfoliopost4,.portfoliopost2,').hoverIntent(function() {
	$(this).css({});
	$(this).find('h2')
		.animate({
			top: '300px', 			
		}, 600);
		 	$(this).find('.folioinfo')
		.animate({
			top: '30px', 	
		}, 400); 

	} , function() {
	$(this).css({}); 
	$(this).find('h2')
		.animate({
			top: '150px',		
		}, 800)
		;	$(this).find('.folioinfo')
		.animate({
			top: '-255px', 
		}, 800);
});


$('.lof-main-wapper').hoverIntent(function() {
	$(this).css({}); /*Add a higher z-index value so this image stays on top*/ 
	$(this).find('.lof-main-item-desc')
		.animate({ 	
			opacity: '1',
			bottom: '30px',  
		}, 1000); 

	} , function() {
	$(this).css({}); /* Set z-index back to 0 */
	$(this).find('.lof-main-item-desc')
		.animate({
			opacity: '0', 
			bottom: '100px', 
		}, 1300);

});

jQuery('div.toggle,div.toggfolio').click(function () {
jQuery(this).next('div.toggle_content,div.toggfolio_content').toggle(250);
});
	
jQuery('div.toggle').toggle(
	function () { $(this).css('background-position', '15px -60px'); },
	function () { $(this).css('background-position', '15px 20px'); }
);

jQuery('div.toggfolio').toggle(
	function () { $(this).css('background-position', '25px -85px'); },
	function () { $(this).css('background-position', '25px 25px'); }
);




jQuery('.portfoliopost img,.portfoliopost4 img,.portfoliopost2 img,.indexpostsmall img,.indexitem img').hover(function() {
jQuery(this).animate({opacity: 0.2}, "normal");
}, function() {
jQuery(this).animate({opacity: 1}, "normal");
}); 

	$(".slider,.slider_small").easySlider({
		auto: true,
		continuous: true
	});


});
