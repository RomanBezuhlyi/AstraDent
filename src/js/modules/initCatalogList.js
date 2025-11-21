export function initCatalogList() {
	const firstColItems = document.querySelectorAll(
		'.catalog__col .catalog__col-link'
	)
	const secondColItems = document.querySelectorAll(
		'.catalog__col .catalog__col-link-second'
	)

	// Прив’язка: кожен айтем першої колонки має data-target
	// Наприклад: <li class="catalog__col-link" data-target="therapy">Терапевтичне лікування</li>
	// А у другій колонці: <li class="catalog__col-link-second" data-group="therapy">...</li>

	function setActive(item) {
		// зняти active з усіх
		firstColItems.forEach(el => el.classList.remove('active'))
		// поставити active на поточний
		item.classList.add('active')

		const target = item.getAttribute('data-target')

		// сховати всі у другій колонці
		secondColItems.forEach(el => {
			if (el.getAttribute('data-group') === target) {
				el.style.display = 'block'
			} else {
				el.style.display = 'none'
			}
		})
	}

	// навішуємо hover
	firstColItems.forEach(item => {
		item.addEventListener('mouseenter', () => setActive(item))
	})

	// дефолт: перший айтем активний
	if (firstColItems.length > 0) {
		setActive(firstColItems[0])
	}
}
