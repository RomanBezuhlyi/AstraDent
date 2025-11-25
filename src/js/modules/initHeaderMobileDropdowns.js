export function initHeaderMobileDropdowns() {
	// головні пункти меню
	const items = document.querySelectorAll('.header-mobile__item')

	items.forEach(item => {
		const top = item.querySelector('.header-mobile__item-top')

		if (top) {
			top.addEventListener('click', () => {
				// просто перемикаємо активність
				item.classList.toggle('active')
			})
		}

		// підпункти
		const subItems = item.querySelectorAll('.header-mobile__sub-item')
		subItems.forEach(subItem => {
			const subTop = subItem.querySelector('.header-mobile__sub-item--top')

			if (subTop) {
				subTop.addEventListener('click', () => {
					// теж перемикаємо активність
					subItem.classList.toggle('active')
				})
			}
		})
	})
}
