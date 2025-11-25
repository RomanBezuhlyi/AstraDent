export function initDoctorVideoPlayer() {
	// Знаходимо всі блоки з відео
	const videoBlocks = document.querySelectorAll(
		'.help-mobile__block-video, .help__block-video'
	)

	// Якщо блоків немає — виходимо
	if (!videoBlocks || videoBlocks.length === 0) return

	videoBlocks.forEach(block => {
		const playBtn = block.querySelector(
			'.help-mobile__block-right--play, .help__block-right--play'
		)
		const overlay = block.querySelector(
			'.help-mobile__block-right--overlay, .help__block-right--overlay'
		)
		const previewImg = block.querySelector(
			'.help-mobile__block-right--img, .help__block-right--img'
		)
		const iframe = block.querySelector('iframe')

		// Перевірка наявності кнопки
		if (!playBtn) return

		playBtn.addEventListener('click', () => {
			// Ховаємо картинку та оверлей, якщо вони є
			if (previewImg) previewImg.style.display = 'none'
			if (overlay) overlay.style.display = 'none'

			// Запускаємо відео (додаємо autoplay)
			if (iframe) {
				let src = iframe.getAttribute('src')
				if (src && !src.includes('autoplay=1')) {
					iframe.setAttribute(
						'src',
						src + (src.includes('?') ? '&' : '?') + 'autoplay=1'
					)
				}
			}
		})
	})
}
