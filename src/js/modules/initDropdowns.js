export function initDropdowns() {
	const dropdowns = document.querySelectorAll('.header__dropdown')

	if (dropdowns.length > 0) {
		// Функція для закриття всіх дропдаунів
		const closeAll = () => {
			dropdowns.forEach(d => d.classList.remove('open'))
		}

		dropdowns.forEach(dropdown => {
			const button = dropdown.querySelector('.header__dropdown-button')
			const value = dropdown.querySelector('.header__dropdown-value')
			const options = dropdown.querySelectorAll('.header__dropdown-option')

			// відкриття/закриття
			button.addEventListener('click', e => {
				e.stopPropagation() // щоб не спрацьовував глобальний клік
				const isOpen = dropdown.classList.contains('open')
				closeAll()
				if (!isOpen) dropdown.classList.add('open')
			})

			// вибір значення
			options.forEach(option => {
				option.addEventListener('click', e => {
					e.stopPropagation()
					value.textContent = option.textContent
					dropdown.classList.remove('open')
				})
			})
		})

		// клік поза дропдаунами → закрити всі
		document.addEventListener('click', closeAll)
	}
}
