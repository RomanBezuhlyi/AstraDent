import { initHeaderMobileDropdowns } from './modules/ initHeaderMobileDropdowns'
import { initAppointmentModal } from './modules/initAppointmentModal'
import { initCatalogList } from './modules/initCatalogList'
import { initClientsSwiper } from './modules/initClientsSwiper'
import { initClientsVideo } from './modules/initClientsVideo'
import { initDoctorsSwiper } from './modules/initDoctorsSwiper'
import { initDropdowns } from './modules/initDropdowns'
import { initFaq } from './modules/initFaq'
import { initHeaderMobileMenu } from './modules/initHeaderMobileMenu'
import { initHeroSwiper } from './modules/initHeroSwiper'
import { initInsuranceSwiper } from './modules/initInsuranceSwiper'
import { initLocationsList } from './modules/initLocationsList'
import { initModalDropdown } from './modules/initModalDropdown'
import { initOpenCatalogMenu } from './modules/initOpenCatalogMenu'
import { initPartnersSwiper } from './modules/initPartnersSwiper'
import { initPhoneMask } from './modules/initPhoneMask'
import { initPlayVideo } from './modules/initPlayVideo'
import { initSpecialists } from './modules/initSpecialists'
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
	initLocationsList()
	initDoctorsSwiper()
	initInsuranceSwiper()
	initPartnersSwiper()
	initClientsSwiper()
	initClientsVideo()
	initSpecialists()
	initFaq()
})
