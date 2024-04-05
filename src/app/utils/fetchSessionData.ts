import { type cartItem } from '../../../types'

interface User {
	displayName?: string
	photoURL?: string
	phoneNumber?: string
	// Add other properties as needed
}

export const fetchSessionUser = (): User | null => {
	if (typeof window !== 'undefined') {
		const userData = localStorage.getItem('user')
		if (userData !== null && userData !== 'undefined') {
			return JSON.parse(userData) as User
		} else {
			localStorage.clear()
		}
	}
	return null
}

export const fetchSessionCart = (): cartItem[] => {
	if (typeof window !== 'undefined') {
		const cartInfo = JSON.parse(localStorage.getItem('cart'))
		if (Array.isArray(cartInfo)) {
			// Ensure cartInfo is an array of CartItem objects
			return cartInfo
		}
	}
	return []
}

// session usermode
export const fetchSessionUserMode = (): boolean => {
	if (typeof window !== 'undefined') {
		const adminMode = localStorage.getItem('userMode')
		if (adminMode !== null && adminMode !== 'undefined') {
			return JSON.parse(adminMode)
		} else {
			localStorage.clear()
		}
	}
	return false
}
