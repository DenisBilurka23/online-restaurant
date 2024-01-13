export const fetchSessionUser = () => {
	if (typeof window !== 'undefined') {
		const user =
			localStorage.getItem('user') !== 'undefined'
				? JSON.parse(localStorage.getItem('user'))
				: localStorage.clear()

		return user
	}
}
export const fetchSessionCart = () => {
	if (typeof window !== 'undefined') {
		const cartInfo = JSON.parse(localStorage.getItem('cart'))
		return cartInfo || []
	}
}

// session usermode
export const fetchSessionUserMode = () => {
	if (typeof window !== 'undefined') {
		const adminMode =
			localStorage.getItem('userMode') !== 'undefined'
				? JSON.parse(localStorage.getItem('adminMode'))
				: localStorage.clear()

		return adminMode ? adminMode : false
	}
}
