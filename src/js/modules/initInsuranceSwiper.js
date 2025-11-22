export function initInsuranceSwiper() {
	new Swiper('.insurance__swiper', {
		spaceBetween: 4,
		slidesPerView: 3,
		grid: {
			rows: 2,
			fill: 'row',
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.insurance__pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 8,
				grid: {
					rows: 1,
				},
			},
			991: {
				slidesPerView: 6,
				spaceBetween: 16,
				grid: {
					rows: 1,
				},
			},
			1248: {
				slidesPerView: 8,
				spaceBetween: 20,
				grid: {
					rows: 1,
				},
			},
		},
	})
}
