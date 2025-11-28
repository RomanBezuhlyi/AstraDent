export function initDoctorFilters() {
	const filters = document.querySelectorAll('.doctors-intro__filter')

	if (!filters || filters.length === 0) return

	filters.forEach(filter => {
		const btn = filter.querySelector('.doctors-intro__filter-btn')
		const dropdown = filter.querySelector('.doctors-intro__dropdown')

		if (!btn || !dropdown) return

		btn.addEventListener('click', e => {
			e.stopPropagation()
			// закриваємо інші
			filters.forEach(f => {
				if (f !== filter) f.classList.remove('open')
			})
			filter.classList.toggle('open')
		})

		dropdown.querySelectorAll('li').forEach(item => {
			item.addEventListener('click', () => {
				// замінюємо текст кнопки на вибране значення
				const icon = btn.querySelector('img').outerHTML
				btn.innerHTML = `${icon} ${item.textContent}`
				btn.dataset.value = item.dataset.value
				filter.classList.remove('open')
			})
		})
	})

	// клік поза дропдауном закриває всі
	document.addEventListener('click', e => {
		if (!e.target.closest('.doctors-intro__filter')) {
			filters.forEach(f => f.classList.remove('open'))
		}
	})
}
