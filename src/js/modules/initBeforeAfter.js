export function initBeforeAfter() {
	const container = document.querySelector('.ba-container')
	const afterImg = document.querySelector('.ba-after')
	const slider = document.querySelector('.ba-slider')

	if (!container || !afterImg || !slider) return

	let isDragging = false

	// Дозволяємо події (бо в CSS pointer-events: none)
	slider.style.pointerEvents = 'auto'

	const move = x => {
		let rect = container.getBoundingClientRect()
		let pos = Math.min(Math.max(0, x - rect.left), rect.width)

		let percentRight = 100 - (pos / rect.width) * 100

		afterImg.style.clipPath = `inset(0 ${percentRight}% 0 0)`
		slider.style.left = pos + 'px'
	}

	// Початок перетягування
	slider.addEventListener('mousedown', () => (isDragging = true))
	slider.addEventListener('touchstart', () => (isDragging = true))

	// Кінець перетягування
	window.addEventListener('mouseup', () => (isDragging = false))
	window.addEventListener('touchend', () => (isDragging = false))

	// Рух миші
	window.addEventListener('mousemove', e => {
		if (isDragging) move(e.clientX)
	})

	// Рух пальцем
	window.addEventListener('touchmove', e => {
		if (isDragging) move(e.touches[0].clientX)
	})
}
