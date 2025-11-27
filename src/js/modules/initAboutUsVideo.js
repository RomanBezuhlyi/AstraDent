export function initAboutUsVideo() {
	const wrapper = document.querySelector('.about-us__video')
	if (!wrapper) return

	const iframe = wrapper.querySelector('.about-us__video--iframe')
	const coverImg = wrapper.querySelector('.about-us__video--img')
	const overlay = wrapper.querySelector('.about-us__video--overlay')
	const playButton = wrapper.querySelector('.about-us__video--play')

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
