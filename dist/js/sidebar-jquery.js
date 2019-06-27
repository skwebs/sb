/* sidebar-jquery.js */
$(function(){
if($("nav").hasClass("_sidebar")){
//auto apply
$("._sidebar").addClass("justify-content-sm-start");
if($("._sidebar").hasClass("navbar-expand-md")){

}else{
	alert("I develop script by mobile so, Currently Sidebar building for only 'navbar-expand-md'")
}





	var navHeight = $("._sidebar").outerHeight();
	var navHeightI = $("._sidebar").innerHeight();
	/*
	|---------------------------------------
	| Menu & Overlay js
	|---------------------------------------
	*/
	var overlayElem = document.createElement('div');overlayElem.classList = "_overlay";
	
	if($("._sidebar").hasClass("fixed-top") && $("._sidebar").hasClass("_menu-under-nav")){
	//menu under navigation
	function menuUnderNav(){
		$("._sb-menu").css("top", (navHeight - .17));
		}
		menuUnderNav(); 
		$("window").on("resize", function (){
			menuUnderNav();
		});
		$("._sidebar").on("click", function(){
			menuUnderNav();
		});
		$("._sb-toggler").on("click", function(){
			menuUnderNav();
		});
		
		$("body").append(overlayElem);
	}else{
		//menu over navigation
		$("._sidebar").append(overlayElem);
	}
	
	/*
	|---------------------------------------
	| Mobile Menu Side js
	|---------------------------------------
	*/
	if($("._sidebar").hasClass("_menu-side-right")){
		$("._sb-menu").addClass("_menu-on-right");
		$("._sb-toggler").addClass("hamburger--arrowalt-r");
	} else {
		$("._sb-toggler").addClass("hamburger--arrowalt");
	}
	/*
	|---------------------------------------
	| Hamburger Color
	|---------------------------------------
	*/
	var root = document.documentElement;
	if($("._sidebar").hasClass("navbar-light")){
		root.style.setProperty('--hamburger-color', 'black');
	} else if($("._sidebar").hasClass("navbar-dark")){
		root.style.setProperty('--hamburger-color', "white");
	}
	
	/*
	|---------------------------------------
	| Navbar Background & Color
	|---------------------------------------
	*/
	var nav_bg = $("._sidebar").attr("data-nav_bg");
	if(nav_bg!=""){
		$("._sidebar, ._sb-menu").css("background", nav_bg);
		//$("_sb-menu").css("background", nav_bg);
	}else{
		if($("._sidebar").hasClass("navbar-light")){
			$("._sidebar, _sb-menu").addClass("bg-light");
	//		$("_sb-menu").addClass("bg-light");
		} else if(nav.hasClass("navbar-dark")){
			$("._sidebar, _sb-menu").addClass("bg-light");
			//$("_sb-menu").addClass("bg-dark");
		}
	}
	
	
	/*
	|---------------------------------------
	| Brand Side js
	|---------------------------------------
	*/
	if($("._sidebar").hasClass("_brand-side-right")){
		//brand side right
		$("._sb-brand").addClass("ml-auto order-1")
	}else{
		//brand side left
		$("._sb-brand").addClass("mr-auto order-0")
	}
	
	
	/*
	|---------------------------------------
	| Open & Close Mobile Menu
	|---------------------------------------
	*/
	$("._sb-toggler, ._overlay").on("click", function(){
		$("._sb-menu, ._overlay").toggleClass("_open");
		$("._sb-toggler").toggleClass("is-active");
	});
	
	/*
	|---------------------------------------
	| Finger swipe detector js
	| this part is mix js
	|---------------------------------------
	*/
	document.addEventListener('touchstart', handleTouchStart, false);        
	document.addEventListener('touchmove', handleTouchMove, false);
	
	var xDown = null;                                                        
	var yDown = null;
	
	function getTouches(evt) {
		return evt.touches ||
		evt.originalEvent.touches;
	}                                                     
	
	function handleTouchStart(evt) {
		const firstTouch = getTouches(evt)[0];                                      
		xDown = firstTouch.clientX;                                      
		yDown = firstTouch.clientY;                                      
	};                                                
	
	function handleTouchMove(evt) {
		var nvhtO = $("._sidebar").outerHeight();
		var nvhtI = $("._sidebar").innerHeight();
		
		
		if ( ! xDown || ! yDown ) {
			return;
		}
	
		var xUp = evt.touches[0].clientX;                                    
		var yUp = evt.touches[0].clientY;
		
		var xDiff = xDown - xUp;
		var yDiff = yDown - yUp;
		
		
		
		var body_width = document.body.clientWidth;
		var diff = body_width - xDown;
		if($("._sidebar").hasClass("_menu-side-right")){
		if(diff < 10){
			/* swipe from right border */
			$("._sb-menu, ._overlay").addClass("_open");
			$("._sb-toggler").addClass("is-active");
		}else{
			$("._sb-menu, ._overlay").removeClass("_open");
			$("._sb-toggler").removeClass("is-active");
		}
		}else{
			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
				if ( xDiff > 0 ) {
					/* left swipe */ 
					$("._sb-menu, ._overlay").removeClass("_open");
					$("._sb-toggler").removeClass("is-active");
				} else if(xDown < 10 && xDiff < 0){
					/* right swipe */
					$("._sb-menu, ._overlay").addClass("_open");
					$("._sb-toggler").addClass("is-active");
				}                       
			}
		}
		/* reset values */
		xDown = null;
		yDown = null;                                             
	};
	
	/*
	|---------------------------------------
	| Content Under Nav js
	|---------------------------------------
	*/
	function contentUnderNav(){
		if($("._sidebar").hasClass("fixed-top") && $("._sidebar").hasClass("_content-under-nav")){
			$("body").css("padding-top", (navHeight - 0.17));
		}
	}
	contentUnderNav();
	
}
});
