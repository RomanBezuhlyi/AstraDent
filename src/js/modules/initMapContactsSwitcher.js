export function initMapContactsSwitcher() {
	const switches = document.querySelectorAll('.map__contacts-switch')
	const blocks = document.querySelectorAll('[data-block]')

	switches.forEach(btn => {
		btn.addEventListener('click', () => {
			const target = btn.dataset.target

			// перемикаємо кнопки
			switches.forEach(b => b.classList.remove('active'))
			btn.classList.add('active')

			// перемикаємо блоки
			blocks.forEach(block => {
				if (block.dataset.block === target) {
					block.classList.add('active')
				} else {
					block.classList.remove('active')
				}
			})
		})
	})
}
