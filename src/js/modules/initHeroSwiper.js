export function initHeroSwiper() {
	new Swiper('.hero__right', {
		spaceBetween: 4,
		slidesPerView: 2.2,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.hero__right-prev',
			nextEl: '.hero__right-next',
		},
		pagination: {
			el: '.hero__right-pagination',
			clickable: true,
		},
		breakpoints: {
			991: {
				slidesPerView: 1,
			},
			1248: {
				spaceBetween: 20,
				slidesPerView: 2,
			},
		},
	})
}
