$('.services-content').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.services-carousel'
});

$('.services-carousel').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.services-content',
	dots: false,
	prevArrow: '<i class="fa-solid fa-angle-left slick-prev servicesArrow"></i>',
	nextArrow: '<i class="fa-solid fa-angle-right slick-next servicesArrow"></i>',
	centerMode: true,
	focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				centerMode: true,
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},

		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});
		
$('.team-carousel').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 2,
	prevArrow: '<i class="fa-solid fa-angle-left slick-prev"></i>',
	nextArrow: '<i class="fa-solid fa-angle-right slick-next"></i>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},

		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

$('.quote-carousel').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<i class="fa-solid fa-angle-left slick-prev"></i>',
	nextArrow: '<i class="fa-solid fa-angle-right slick-next"></i>',
});

document.addEventListener(
	'DOMContentLoaded',
	function () {
		const sections = document.querySelectorAll('.section');
		const menuLinks = document.querySelectorAll('.nav-item a');

		const makeActive = link => menuLinks[link].classList.add('active');
		const removeActive = link => menuLinks[link].classList.remove('active');
		const removeAllActive = () =>
			[...Array(sections.length).keys()].forEach(link => removeActive(link));

		const sectionMargin = 100;

		let currentActive = 0;

		window.addEventListener('scroll', () => {
			const current =
				sections.length -
				[...sections]
					.reverse()
					.findIndex(
						section => window.scrollY >= section.offsetTop - sectionMargin
					) -
				1;

			if (current !== currentActive) {
				removeAllActive();
				currentActive = current;
				makeActive(current);
			}
		});
	},
	false
);