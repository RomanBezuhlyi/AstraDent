export function initDoctorFilters() {
	const filters = document.querySelectorAll('.doctors-intro__filter')

	// якщо немає жодного фільтра — виходимо
	if (!filters || filters.length === 0) {
		console.warn('Фільтри лікарів не знайдено')
		return
	}

	filters.forEach(filter => {
		const btn = filter.querySelector('.doctors-intro__filter-btn')

		// перевірка чи є кнопка
		if (!btn) return

		btn.addEventListener('click', () => {
			// закриваємо інші
			filters.forEach(f => {
				if (f !== filter) f.classList.remove('active')
			})
			// відкриваємо поточний
			filter.classList.toggle('active')
		})
	})

	// клік поза списком закриває всі
	document.addEventListener('click', e => {
		if (!e.target.closest('.doctors-intro__filter')) {
			filters.forEach(f => f.classList.remove('active'))
		}
	})
}
