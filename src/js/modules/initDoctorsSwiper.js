export function initDoctorsSwiper() {
	new Swiper('.doctors__swiper', {
		spaceBetween: 4,
		slidesPerView: 2.2,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.doctors__swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			767: {
				spaceBetween: 8,
				slidesPerView: 3,
			},
			991: {
				spaceBetween: 16,
				slidesPerView: 4,
			},
			1248: {
				spaceBetween: 20,
				slidesPerView: 6,
			},
		},
	})
}
