export function initBlog() {
	const section = document.querySelector('.section.blog')
	if (!section) return

	const list = section.querySelector('.blog__list')
	const items = list ? Array.from(list.querySelectorAll('.blog__item')) : []
	const btn = section.querySelector('.blog__btn')

	if (!list || items.length === 0 || !btn) return

	const INITIAL_VISIBLE = 9
	const LOAD_MORE = 3
	let visibleCount = INITIAL_VISIBLE

	// спочатку ховаємо всі, крім перших 9
	items.forEach((item, index) => {
		if (index >= INITIAL_VISIBLE) {
			item.style.display = 'none'
		}
	})

	// якщо карток ≤ 9, кнопку ховаємо
	if (items.length <= INITIAL_VISIBLE) {
		btn.style.display = 'none'
	}

	btn.addEventListener('click', () => {
		const nextCount = visibleCount + LOAD_MORE
		items.forEach((item, index) => {
			if (index < nextCount) {
				item.style.display = ''
			}
		})
		visibleCount = nextCount

		// якщо більше немає що показувати — ховаємо кнопку
		if (visibleCount >= items.length) {
			btn.style.display = 'none'
		}
	})
}
