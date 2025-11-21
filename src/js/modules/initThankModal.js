export function initThankModal() {
	const modal = document.querySelector('.modal')
	if (!modal) return // якщо модалки немає, нічого не робимо

	const form = modal.querySelector('.modal__form')
	const title = modal.querySelector('.modal__title.title')
	const thankTitle = modal.querySelector('.modal__title.title-thank')
	const thankText = modal.querySelector('.modal__thank')
	const modalImg = modal.querySelector('.modal__img')

	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault() // блокуємо реальну відправку

			// ховаємо форму та початковий заголовок
			if (title) title.classList.add('hide')
			form.classList.add('hide')

			// показуємо блоки "дякуємо"
			if (thankTitle) thankTitle.classList.remove('hide')
			if (thankText) thankText.classList.remove('hide')
			if (modalImg) modalImg.classList.remove('hide')
		})
	}
}
