// Paralax effect - Background moves down when scrolling
var moveBg = function(el,i) {
	var wHeight = $(window).height();  // Window height
	var elTop = $(el).offset().top;  // Element's top position in page ( Distance from top of page to element's top line ) 
	var elHeight = $(el).innerHeight();  // Element height
	if(elTop > wHeight) {
		var elReachBottom = elTop - wHeight; // Position of scroll when element appear in page from bottom
	} else {
		var elReachBottom = 0;
	}
	var elReachTop = elTop + elHeight;  // Element's bottom position in page ( Distance from top of the page to element's bottom line )

	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();  // Window top scroll position
		var moveDistance = ( wScroll - elReachBottom )/i; // Distance to move background down
		if (( wScroll > elReachBottom ) && ( wScroll < elReachTop )) {  // Verify if element is in viewport or is out
			$(el).css({"background-position-y":moveDistance, "background-attachment":"fixed"});
		}
	});
};

var initParalaxBg = function(x) {

	$(".paralaxbg").each(function() {
		var x = $(this).attr("data-paralaxbg-speed");
		if(x) {
			moveBg(this,x);
		} else {
			moveBg(this,20);
		}	
	});
}
