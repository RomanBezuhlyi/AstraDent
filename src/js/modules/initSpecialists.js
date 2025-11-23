export function initSpecialists() {
	// Знаходимо всі кнопки "play"
	const playBtns = document.querySelectorAll('.specialists__card-play')
	if (playBtns.length) {
		playBtns.forEach(playBtn => {
			playBtn.addEventListener('click', () => {
				const cardTop = playBtn.closest('.specialists__card-top')
				if (cardTop) {
					// Ховаємо всі елементи поверх відео, якщо вони існують
					const overlays = cardTop.querySelectorAll(
						'.specialists__card-img, .specialists__card-info, .specialists__card-play'
					)
					overlays.forEach(el => (el.style.display = 'none'))
				}
			})
		})
	}

	// Логіка для кнопки "Показати ще"
	const cards = document.querySelectorAll('.specialists__card')
	const btnMore = document.querySelector('.specialists__btn-more')

	if (cards.length && btnMore) {
		// Визначаємо кількість карток для показу залежно від ширини екрану
		let defaultCount = window.innerWidth > 991 ? 12 : 8
		let stepCount = 4
		let visibleCount = defaultCount

		// Спочатку ховаємо всі крім перших defaultCount
		cards.forEach((card, index) => {
			if (index >= visibleCount) card.style.display = 'none'
		})

		btnMore.addEventListener('click', () => {
			let nextCount = visibleCount + stepCount
			cards.forEach((card, index) => {
				if (index < nextCount) card.style.display = ''
			})
			visibleCount = nextCount

			// Якщо всі картки показані — ховаємо кнопку
			if (visibleCount >= cards.length) {
				btnMore.style.display = 'none'
			}
		})
	}
}
