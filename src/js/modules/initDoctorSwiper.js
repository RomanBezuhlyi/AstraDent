export function initDoctorSwiper() {
	new Swiper('.doctor-intro__swiper', {
		spaceBetween: 0,
		slidesPerView: 1,
		loop: true,
		direction: 'vertical',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.doctor-intro__swiper-pagination',
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
