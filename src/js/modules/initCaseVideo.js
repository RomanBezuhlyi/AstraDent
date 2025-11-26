export function initCaseVideo() {
	const wrapper = document.querySelector('.case__video')
	if (!wrapper) return

	const iframe = wrapper.querySelector('.case__video-iframe')
	const coverImg = wrapper.querySelector('.case__video-img')
	const overlay = wrapper.querySelector('.case__video-overlay')
	const playButton = wrapper.querySelector('.case__video-btn')

	if (!iframe || !coverImg || !overlay || !playButton) return

	playButton.addEventListener('click', () => {
		// Ховаємо оверлей і картинку
		coverImg.style.display = 'none'
		overlay.style.display = 'none'

		// Запускаємо відео
		const src = iframe.getAttribute('src')
		iframe.setAttribute('src', src + '&autoplay=1')
	})
}
