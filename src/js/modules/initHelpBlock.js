export function initHelpBlock() {
	const lists = document.querySelectorAll('.help__block-left--list')

	if (!lists || lists.length === 0) return

	lists.forEach(list => {
		const items = list.querySelectorAll('.help__block-left--item')
		const moreBtn = list.querySelector('.help__block-left--more')

		if (!items || items.length === 0 || !moreBtn) return

		// показуємо тільки перші 5 айтемів
		items.forEach((item, index) => {
			if (index >= 5) {
				item.style.display = 'none'
			}
		})

		let visibleCount = 5

		moreBtn.addEventListener('click', e => {
			e.preventDefault()

			// показуємо наступні 3
			const nextItems = Array.from(items).slice(visibleCount, visibleCount + 3)
			nextItems.forEach(item => (item.style.display = 'flex'))

			visibleCount += nextItems.length

			// якщо більше немає — ховаємо кнопку
			if (visibleCount >= items.length) {
				moreBtn.style.display = 'none'
			}
		})

		// якщо айтемів ≤ 5 — кнопку ховаємо одразу
		if (items.length <= 5) {
			moreBtn.style.display = 'none'
		}
	})
}
