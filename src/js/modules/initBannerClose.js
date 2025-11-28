export function initBannerClose() {
	const banners = document.querySelectorAll('.banner')

	banners.forEach(banner => {
		const closeBtn = banner.querySelector('.banner__close')

		if (closeBtn) {
			closeBtn.addEventListener('click', () => {
				banner.remove() // повністю видаляє блок із DOM
				// або можна використати:
				// banner.style.display = 'none'
			})
		}
	})
}
