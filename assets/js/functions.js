$(function() {
	smoothScroll(300);
	workBelt();
	 workLoad();
	 clientStuff();
	 $("header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '72px' });
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
function workBelt(){
	$('.thumb-unit').click(function  () {
		 $('.work-belt').css('left','-100%');  
			$(".work-container").show(800);
	});

	$('.work-return').click(function(event) {
		$('.work-belt').css('left','0%'); 
	 
	 	 $(".work-container").hide(800);
	});


}

function workLoad () {
	$.ajaxSetup({cache: true});

	$('.thumb-unit').click(function() {

			var $this = $(this);
			var newTitle= $this.find('strong').text();
			
			var newFolder = $this.data('folder');
			var spinner= "<div class='loader'>Loading...</div>";
			var	newHtml = 'work/'+newFolder+'.html';
			
		$('.project-load').html(spinner).load(newHtml);	
		$('.project-title').text(newTitle);

		
	});	

}

function clientStuff () {
	$('.client-unit').first().addClass('active-client');
	$('.client-logo').first().addClass('active-client');
	$('.clients-moblie-nav span').first().addClass('active-client');


 $('.client-logo,.clients-moblie-nav span,.clients-moblie-nav').click(function () {
 		var $this = $(this),
 		position = $this.index();
 		$('.client-logo').removeClass('active-client').eq(position).addClass('active-client');
 		$('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
 		$this.parent().children().removeClass('active-client');
 		$this.addClass('active-client');
 });	

 $('.client-next, .client-prev').click(function() {

 	var $this = $(this),
 	    curActiveClient = $('.clients-belt').find('.active-client'),
 	    position = $('.clients-belt').children().index(curActiveClient),
 	    clientNum = $('.client-unit').length;
 	    console.log(position);
 	    if($this.hasClass('client-next')){
		if(position < clientNum -1){ 
 	   	$('.active-client').removeClass('active-client').next().addClass('active-client');
		}else{
			$('.client-unit').removeClass('active-client').first().addClass('active-client');
			$('.client-logo').removeClass('active-client').first().addClass('active-client');
			}

		}else {

			if(position === 0 ){ 
 	   			$('.client-unit').removeClass('active-client').last().addClass('active-client');
			$('.client-logo').removeClass('active-client').last().addClass('active-client');
		}else{
			
 	   	$('.active-client').removeClass('active-client').prev().addClass('active-client');
				}
			
		}
 	
 });

 $('.clients-moblie-nav span').click(function() {


 	
 });


}


/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
