export function initOpenCatalogMenu() {
	const btn = document.querySelector('.navbar__btn')
	const btnIcon = btn.querySelector('img')
	const catalog = document.querySelector('.catalog')

	btn.addEventListener('click', function () {
		const isOpen = btn.classList.contains('open-menu')

		if (isOpen) {
			// закриваємо каталог
			btn.classList.remove('open-menu')
			catalog.classList.remove('active')
			btnIcon.setAttribute('src', './img/burger.svg')
		} else {
			// відкриваємо каталог
			btn.classList.add('open-menu')
			catalog.classList.add('active')
			btnIcon.setAttribute('src', './img/close-menu.svg')
		}
	})
}
