export function initAppointmentModal() {
	const buttons = document.querySelectorAll('.make-an-appointment')
	const modal = document.querySelector('.modal')
	const modalContent = modal ? modal.querySelector('.modal__content') : null
	const closeBtn = modal ? modal.querySelector('.modal__close') : null

	if (buttons.length > 0 && modal && modalContent) {
		// функція відкриття
		function openModal() {
			modal.classList.add('active')
			document.body.style.overflow = 'hidden'
		}

		// функція закриття
		function closeModal() {
			modal.classList.remove('active')
			document.body.style.overflow = ''
		}

		// клік по кнопках
		buttons.forEach(btn => {
			btn.addEventListener('click', openModal)
		})

		// клік по хрестику
		if (closeBtn) {
			closeBtn.addEventListener('click', closeModal)
		}

		// клік поза модалкою
		modal.addEventListener('click', function (e) {
			if (!modalContent.contains(e.target)) {
				closeModal()
			}
		})

		// закриття по Escape
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Escape' && modal.classList.contains('active')) {
				closeModal()
			}
		})
	}
}
