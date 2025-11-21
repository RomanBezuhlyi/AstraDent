export function initPlayVideo() {
	const video = document.querySelector('.hero__video')
	const playBtn = document.querySelector('.hero__card-play')

	if (video && playBtn) {
		const playIcon = playBtn.querySelector('img')

		playBtn.addEventListener('click', () => {
			if (video.paused) {
				video.play()
				playIcon.src = './img/pause.svg'
			} else {
				video.pause()
				playIcon.src = './img/play.svg'
			}
		})

		video.addEventListener('ended', () => {
			playIcon.src = './img/play.svg'
		})
	}
}
