export function initCasesSwiper() {
	new Swiper('.cases__swiper', {
		spaceBetween: 8,
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.cases__pagination',
			clickable: true,
		},
		breakpoints: {
			767: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
			991: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
		},
	})
}
