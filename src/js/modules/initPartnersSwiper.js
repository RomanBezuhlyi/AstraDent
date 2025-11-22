export function initPartnersSwiper() {
	new Swiper('.partners__swiper', {
		spaceBetween: 4,
		slidesPerView: 1.2,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.partners__pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 8,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	})
}
