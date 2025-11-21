export function initModalDropdown() {
	const dropdown = document.querySelector('.modal__dropdown')
	if (!dropdown) return // перевірка, щоб не було помилок

	const header = dropdown.querySelector('.dropdown__header')
	const chevron = dropdown.querySelector('.dropdown__chevron')
	const list = dropdown.querySelector('.dropdown__list')
	const selected = dropdown.querySelector('.dropdown__selected')
	const options = dropdown.querySelectorAll('.dropdown__option')

	header.addEventListener('click', function () {
		const isOpen = list.classList.contains('open')
		if (isOpen) {
			list.classList.remove('open')
			chevron.style.transform = 'rotateX(0deg)'
		} else {
			list.classList.add('open')
			chevron.style.transform = 'rotateX(180deg)'
		}
	})

	options.forEach(option => {
		option.addEventListener('click', function () {
			selected.textContent = this.textContent
			list.classList.remove('open')
			chevron.style.transform = 'rotateX(0deg)'
		})
	})

	// клік поза дропдовном закриває його
	document.addEventListener('click', function (e) {
		if (!dropdown.contains(e.target)) {
			list.classList.remove('open')
			chevron.style.transform = 'rotateX(0deg)'
		}
	})
}
