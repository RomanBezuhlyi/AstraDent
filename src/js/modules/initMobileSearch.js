export function initMobileSearch() {
	const btnSearch = document.querySelector('.header-mobile__btn-search')
	const searchBlock = document.querySelector('.header-mobile-search')

	// перевірка чи є елементи
	if (!btnSearch || !searchBlock) return

	btnSearch.addEventListener('click', e => {
		e.stopPropagation() // щоб клік по кнопці не закривав одразу
		searchBlock.classList.toggle('open') // тепер повторний клік прибирає пошук
	})

	// клік поза блоком знімає клас
	document.addEventListener('click', e => {
		if (
			!e.target.closest('.header-mobile-search') &&
			!e.target.closest('.header-mobile__btn-search')
		) {
			searchBlock.classList.remove('open')
		}
	})
}
