window.addEventListener('load' , () => {
	$(document).ready(function(){
	  $(".owl-carousel").owlCarousel({
	  	loop:true,
	  	items:4,
	  	responsiveClass:true,
	  });
	});

	$('a#nav-toggle').click(function() {
		$('.menu , .logo').toggle(400);
	});
});