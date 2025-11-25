export function initDiplomasSwiper() {
	new Swiper('.diplomas__swiper', {
		spaceBetween: 4,
		slidesPerView: 2.6,
		pagination: {
			el: '.diplomas__navigation',
			clickable: true,
		},
		breakpoints: {
			767: {
				slidesPerView: 3,
			},
			991: {
				spaceBetween: 20,
				slidesPerView: 5,
			},
			1248: {
				spaceBetween: 20,
				slidesPerView: 6.5,
			},
		},
	})
}
