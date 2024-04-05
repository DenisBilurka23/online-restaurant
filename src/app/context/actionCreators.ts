import { actionTypes } from '@/app/context/reducer'
import { type cartItems } from '../../../types'

export const toggleCart: (showCart: boolean) => { type: string; showCart: boolean } = showCart => ({
	type: actionTypes.TOGGLE_CART,
	showCart
})

export const toggleContactForm: (showContactForm: boolean) => {
	type: string
	showContactForm: boolean
} = showContactForm => ({
	type: actionTypes.TOGGLE_CONTACT_FORM,
	showContactForm
})

export const setCart: (cartItems: cartItems[]) => { type: string; cartItems: cartItems[] } = cartItems => ({
	type: actionTypes.SET_CART,
	cartItems
})
