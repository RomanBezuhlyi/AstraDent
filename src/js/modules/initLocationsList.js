export function initLocationsList() {
	document.addEventListener('DOMContentLoaded', () => {
		const items = document.querySelectorAll('.locations__item')
		const btnMore = document.querySelector('.locations__list-more')

		// Якщо немає карток або кнопки — виходимо
		if (!items.length || !btnMore) return

		// Перевіряємо ширину екрану
		if (window.innerWidth <= 767) {
			let visibleCount = 3 // стартово показуємо 3
			const step = 3 // додаємо по 3

			// Ховаємо всі крім перших трьох
			items.forEach((item, index) => {
				if (index >= visibleCount) item.style.display = 'none'
			})

			btnMore.addEventListener('click', () => {
				for (let i = visibleCount; i < visibleCount + step; i++) {
					if (items[i]) items[i].style.display = 'flex'
				}
				visibleCount += step

				// Якщо всі картки показані — ховаємо кнопку
				if (visibleCount >= items.length) {
					btnMore.style.display = 'none'
				}
			})
		} else {
			// На десктопі показуємо всі картки і ховаємо кнопку
			items.forEach(item => (item.style.display = 'flex'))
			btnMore.style.display = 'none'
		}
	})
}
