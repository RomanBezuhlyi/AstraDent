import { initHeaderMobileDropdowns } from './modules/ initHeaderMobileDropdowns'
import { initAppointmentModal } from './modules/initAppointmentModal'
import { initCatalogList } from './modules/initCatalogList'
import { initDropdowns } from './modules/initDropdowns'
import { initHeaderMobileMenu } from './modules/initHeaderMobileMenu'
import { initHeroSwiper } from './modules/initHeroSwiper'
import { initModalDropdown } from './modules/initModalDropdown'
import { initOpenCatalogMenu } from './modules/initOpenCatalogMenu'
import { initPhoneMask } from './modules/initPhoneMask'
import { initPlayVideo } from './modules/initPlayVideo'
import { initThankModal } from './modules/initThankModal'

document.addEventListener('DOMContentLoaded', () => {
	initDropdowns()
	initOpenCatalogMenu()
	initCatalogList()
	initAppointmentModal()
	initModalDropdown()
	initThankModal()
	initPhoneMask()
	initPlayVideo()
	initHeroSwiper()
	initHeaderMobileMenu()
	initHeaderMobileDropdowns()
})
