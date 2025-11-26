export function initCaseSwiper() {
	new Swiper('.case__gallery', {
		spaceBetween: 20,
		slidesPerView: 3,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.case__pagination',
			clickable: true,
		},
		// breakpoints: {
		// 	767: {
		// 		spaceBetween: 8,
		// 		slidesPerView: 3,
		// 	},
		// 	991: {
		// 		spaceBetween: 16,
		// 		slidesPerView: 4,
		// 	},
		// 	1248: {
		// 		spaceBetween: 20,
		// 		slidesPerView: 6,
		// 	},
		// },
	})
}
