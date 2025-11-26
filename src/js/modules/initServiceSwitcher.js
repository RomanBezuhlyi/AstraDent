export function initServiceSwitcher() {
	const items = document.querySelectorAll('.service-switcher__item > a')

	items.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()

			items.forEach(link => link.classList.remove('active'))
			item.classList.add('active')
		})
	})
}
