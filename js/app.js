//nav Toggle - select button and links
const navbarToggle = document.querySelector("#navbarToggle");
const navbar = document.querySelector("#main-navbar");

//add event listener
navbarToggle.addEventListener("click", ()=>{
    navbar.classList.toggle('navbar-open');
});
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		scrollLock: true,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
				// screens greater than >= 1024px
				breakpoint: 1024,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3
				}
			  },{
			  // screens greater than >= 1024px
			  breakpoint: 1440,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});