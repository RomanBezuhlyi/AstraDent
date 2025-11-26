export function initPriceAccordion() {
	const items = document.querySelectorAll('.price__item')

	items.forEach(item => {
		const top = item.querySelector('.price__item-top')
		const bottom = item.querySelector('.price__item-bottom')
		const icon = top.querySelector('img')

		top.addEventListener('click', () => {
			const isOpen = item.classList.contains('open')

			// Закриваємо всі
			items.forEach(el => {
				el.classList.remove('open')
				el.querySelector('.price__item-bottom').style.maxHeight = '0px'
				el.querySelector('.price__item-top img').src = './img/plus.svg'
			})

			// Якщо було закрите — відкриваємо
			if (!isOpen) {
				item.classList.add('open')
				bottom.style.maxHeight = '600px'
				icon.src = './img/minus.svg'
			}
		})
	})
}
