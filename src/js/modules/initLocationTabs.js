export function initLocationTabs() {
	const switchers = document.querySelectorAll('.locations__switch')
	const lists = document.querySelectorAll('.locations__list')

	switchers.forEach(btn => {
		btn.addEventListener('click', () => {
			// прибираємо active у всіх кнопок
			switchers.forEach(b => b.classList.remove('active'))
			btn.classList.add('active')

			const target = btn.dataset.target

			// ховаємо всі списки
			lists.forEach(list => {
				if (list.dataset.city === target) {
					list.style.display = 'grid'
				} else {
					list.style.display = 'none'
				}
			})
		})
	})
}
