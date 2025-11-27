export function initAboutUsSwiper() {
	new Swiper('.about-us__swiper', {
		spaceBetween: 4,
		slidesPerView: 1.2,
		pagination: {
			el: '.about-us__navigation',
			clickable: true,
		},
		breakpoints: {
			767: {
				slidesPerView: 12,
				slidesPerView: 2,
			},
			991: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
		},
	})
}
