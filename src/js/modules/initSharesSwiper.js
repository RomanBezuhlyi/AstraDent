export function initSharesSwiper() {
	new Swiper('.shares__swiper', {
		spaceBetween: 4,
		slidesPerView: 2.15,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			prevEl: '.shares__prev',
			nextEl: '.shares__next',
		},
		pagination: {
			el: '.shares__pagination',
			clickable: true,
		},
		breakpoints: {
			991: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
		},
	})
}
