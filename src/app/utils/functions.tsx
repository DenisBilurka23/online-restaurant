// Hide Cart
export const hideContactform = (dispatch: any) => {
	dispatch({
		type: 'TOGGLE_CONTACT_FORM',
		showContactForm: false
	})
}

export const logout = async (user: any, dispatch: any, router: any) => {
	if (user) {
		dispatch({
			type: 'SET_USER',
			user: null
		})
		dispatch({
			type: SET_CAR,
			cartItems: []
		})
		// turn off adminMode
		dispatch({
			type: 'SET_ADMIN_MODE',
			adminMode: false
		})

		localStorage.setItem('user', 'undefined')
		localStorage.setItem('adminMode', 'undefined')
		localStorage.removeItem('cartItems')
		router.push('/')
	} else {
		console.log('You are not logged in')
	}
}

export const ToggleAdminMode = (dispatch: any, state: boolean) => {
	dispatch({
		type: 'SET_ADMIN_MODE',
		adminMode: state
	})
	localStorage.setItem('adminMode', JSON.stringify(state))
	console.log(state)
}

export const isAdmin = (user: any) => {
	const isAdmin = user?.email == 'bentilshadrack72@gmail.com' || user?.email == 'admin@test.com'
	return isAdmin
}

// update currentUser
export const updateUserData = async () => {}
