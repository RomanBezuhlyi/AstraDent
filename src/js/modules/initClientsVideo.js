export function initClientsVideo() {
	document.querySelectorAll('.clients__video-play').forEach(btn => {
		btn.addEventListener('click', () => {
			const videoBox = btn.closest('.clients__video')
			const overlay = videoBox.querySelector('.clients__video-overlay')
			const bg = videoBox.querySelector('.clients__video-bg')
			const iframe = videoBox.querySelector('.clients__video-iframe')

			// ховаємо фон і картинку
			overlay.style.display = 'none'
			bg.style.display = 'none'

			// додаємо автоплей до відео
			iframe.src += '&autoplay=1'
		})
	})
}
