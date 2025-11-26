export function initInfoVideo() {
	const wrapper = document.querySelector('.info-video')
	if (!wrapper) return

	const iframe = wrapper.querySelector('.info-video__iframe')
	const coverImg = wrapper.querySelector('.info-video__img')
	const overlay = wrapper.querySelector('.info-video__overlay')
	const playButton = wrapper.querySelector('.info-video__play')

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
