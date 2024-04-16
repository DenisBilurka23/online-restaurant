import { setCart, setUser } from '@/app/context/actionCreators'

export const logout = async (user: any, dispatch: any, router: any) => {
	if (user) {
		dispatch(setUser(null))
		dispatch(setCart([]))
		localStorage.removeItem('user')
		router.push('/')
	} else {
		console.log('You are not logged in')
	}
}
