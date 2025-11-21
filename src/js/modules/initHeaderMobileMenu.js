export function initHeaderMobileMenu() {
	const header = document.querySelector('.header-mobile')
	const content = document.querySelector('.header-mobile__content')
	const bottom = document.querySelector('.header-mobile__bottom')

	const btnOpen = document.querySelector('.header-mobile__btn.open')
	const btnClose = document.querySelector('.header-mobile__btn.close')
	const btnSearch = document.querySelector('.header-mobile__btn-search')
	const langs = document.querySelector('.header-mobile__langs')
	const body = document.body

	btnOpen.addEventListener('click', () => {
		// додаємо open
		header.classList.add('open')
		content.classList.add('open')
		bottom.classList.add('open')

		// блокуємо скрол
		body.classList.add('no-scroll')

		// перемикаємо видимість
		btnOpen.classList.add('hide')
		btnSearch.classList.add('hide')

		btnClose.classList.remove('hide')
		langs.classList.remove('hide')
	})

	btnClose.addEventListener('click', () => {
		// прибираємо open
		header.classList.remove('open')
		content.classList.remove('open')
		bottom.classList.remove('open')

		// повертаємо скрол
		body.classList.remove('no-scroll')

		// перемикаємо видимість назад
		btnOpen.classList.remove('hide')
		btnSearch.classList.remove('hide')

		btnClose.classList.add('hide')
		langs.classList.add('hide')
	})
}
