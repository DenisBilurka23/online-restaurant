import { fetchSessionUser, fetchSessionUserMode, fetchSessionCart } from '../utils/fetchSessionData.ts'

const sessionUser = fetchSessionUser()
const sessionUserMode = fetchSessionUserMode()
const sessionCart = fetchSessionCart()

export const initialState = {
	user: sessionUser,
	showCart: false,
	showContactForm: false,
	cart: sessionCart,
	adminMode: sessionUserMode,
	users: [],
	paymentMethod: 'mobile_money',
	checkoutData: {}
}
