export function initFaq() {
	const faqItems = document.querySelectorAll('.faq__item')

	if (!faqItems.length) return

	faqItems.forEach(item => {
		const top = item.querySelector('.faq__top')
		const bottom = item.querySelector('.faq__bottom')
		const icon = item.querySelector('.faq__top-icon')

		if (!top || !bottom || !icon) return

		bottom.style.maxHeight = '0'
		icon.style.transform = 'rotateX(0deg)'

		top.addEventListener('click', () => {
			if (bottom.style.maxHeight === '0px' || bottom.style.maxHeight === '0') {
				bottom.style.maxHeight = bottom.scrollHeight + 'px'
				icon.style.transform = 'rotateX(180deg)'
			} else {
				bottom.style.maxHeight = '0'
				icon.style.transform = 'rotateX(0deg)'
			}
		})
	})
}
