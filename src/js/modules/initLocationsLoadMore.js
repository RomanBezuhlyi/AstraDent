export function initLocationsLoadMore() {
	const lists = document.querySelectorAll('.locations__list')

	if (!lists || lists.length === 0) return

	lists.forEach(list => {
		const items = list.querySelectorAll('.locations__item:not(.load-more)')
		const loadMoreWrapper = list.querySelector('.load-more')
		const loadMoreBtn = loadMoreWrapper
			? loadMoreWrapper.querySelector('.btn-load-more')
			: null

		if (!items || items.length === 0 || !loadMoreBtn) return

		// якщо карток ≤ 3 — кнопку ховаємо
		if (items.length <= 3) {
			loadMoreWrapper.style.display = 'none'
			return
		}

		// показуємо тільки перші 3
		items.forEach((item, index) => {
			if (index >= 3) {
				item.style.display = 'none'
			}
		})

		let visibleCount = 3

		loadMoreBtn.addEventListener('click', e => {
			e.preventDefault()

			// показуємо наступні 2
			const nextItems = Array.from(items).slice(visibleCount, visibleCount + 2)
			nextItems.forEach(item => (item.style.display = 'flex'))

			visibleCount += nextItems.length

			// якщо більше немає — ховаємо кнопку
			if (visibleCount >= items.length) {
				loadMoreWrapper.style.display = 'none'
			}
		})
	})
}
