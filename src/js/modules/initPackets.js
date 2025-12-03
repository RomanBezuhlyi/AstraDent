export function initPackets() {
	const section = document.querySelector('.packet.section')
	if (!section) return

	const list = section.querySelector('.packet__list')
	const items = list
		? Array.from(list.querySelectorAll('.packet__list-item'))
		: []
	const btn = section.querySelector('.packet__btn')

	if (!list || items.length === 0 || !btn) return

	const INITIAL_VISIBLE = 5
	const LOAD_MORE = 2
	let visibleCount = INITIAL_VISIBLE

	// спочатку ховаємо всі, крім перших 5
	items.forEach((item, index) => {
		if (index >= INITIAL_VISIBLE) {
			item.style.display = 'none'
		}
	})

	// якщо карток ≤ 5, кнопку ховаємо
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
