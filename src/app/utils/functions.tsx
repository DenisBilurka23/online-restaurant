import { actionTypes } from '@/app/context/reducer'

export const logout = async (user: any, dispatch: any, router: any) => {
	if (user) {
		dispatch({
			type: actionTypes.SET_USER,
			user: null
		})
		dispatch({
			type: actionTypes.SET_CART,
			cartItems: []
		})

		localStorage.removeItem('user')
		router.push('/')
	} else {
		console.log('You are not logged in')
	}
}
