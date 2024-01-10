import { MdShoppingBasket } from 'react-icons/md'
import { toast } from 'react-toastify'
import { type cartItem, type Product } from '../../../types'
import { type FunctionComponent } from 'react'

export const addToCart = async (cartItems: cartItem[], foodItems: Product[], user: any, fid: number, dispatch: any) => {
	if (!user) {
		toast.error('Please login to add items to cart', {
			icon: <MdShoppingBasket className="text-2xl text-cartNumBg" />,
			toastId: 'unauthorizedAddToCart'
		})
	} else {
		if (cartItems.some((item: cartItem) => item.fid === fid)) {
			toast.error('Item already in cart', {
				icon: <MdShoppingBasket className="text-2xl text-cartNumBg" />,
				toastId: 'itemAlreadyInCart'
			})
		} else {
			const data: cartItem = {
				id: Date.now(),
				fid,
				uid: user.uid,
				qty: 1
			}
			dispatch({
				type: 'SET_CARTITEMS',
				cartItems: [...cartItems, data]
			})
			calculateCartTotal(cartItems, foodItems, dispatch)
		}
	}
}
export const dispatchtUserCartItems = (uid: string, items: cartItem[], dispatch: any) => {
	const cartItems = items.filter((item: cartItem) => item.uid === uid)
	dispatch({
		type: 'SET_CARTITEMS',
		cartItems
	})

	return cartItems
}

export const fetchUserCartData = async (user: any, dispatch: any) => {
	if (user) {
	} else {
		localStorage.setItem('cartItems', 'undefined')
	}
}

export const fetchFoodData = async () => {}

export const getFoodyById = (menu: Product[], fid: number) => {
	return menu.find((item: Product) => item.id === fid)
}

//  Update cart item State
export const updateCartItemState = async (cartItems: cartItem[], item: cartItem, dispatch: any) => {
	const index = cartItems.findIndex((cartItem: cartItem) => cartItem.id === item.id)
	if (index !== -1) {
		cartItems[index] = item
	}
	dispatch({
		type: 'SET_CARTITEMS',
		cartItems
	})
}

// Update Cart Item Quantity
export const updateCartItemQty = async (
	cartItems: cartItem[],
	foodItems: Product[],
	item: cartItem,
	dispatch: any,
	val: number
) => {
	const index = cartItems.findIndex((cartItem: cartItem) => cartItem.id === item.id)
	if (index !== -1) {
		cartItems[index].qty += val
		dispatch({
			type: 'SET_CARTITEMS',
			cartItems
		})
		calculateCartTotal(cartItems, foodItems, dispatch)
	}
}

//  Delete Cart Item
export const deleteCartItem = async (cartItems: cartItem[], foodItems: Product[], item: cartItem, dispatch: any) => {
	const index = cartItems.findIndex((cartItem: cartItem) => cartItem.id === item.id)
	if (index !== -1) {
		cartItems.splice(index, 1)
		dispatch({
			type: 'SET_CARTITEMS',
			cartItems
		})
		calculateCartTotal(cartItems, foodItems, dispatch)
	}
}

// Calculate Total Price Round to 2 decimal places
export const calculateCartTotal = (cartItems: cartItem[], foodItems: Product[], dispatch: any) => {
	let total = 0
	cartItems.forEach((item: cartItem) => {
		const foodItem = getFoodyById(foodItems, item.fid)
		total += item.qty * parseFloat(foodItem?.price || '0')
	})
	dispatch({
		type: 'SET_CART_TOTAL',
		cartTotal: total.toFixed(2)
	})
}

// Empty Cart
export const emptyCart = async (cartItems: cartItem[], foodItems: Product[], dispatch: any) => {
	if (cartItems.length > 0) {
		dispatch({
			type: 'SET_CARTITEMS',
			cartItems: []
		})
		calculateCartTotal(cartItems, foodItems, dispatch)
	} else {
		toast.warn('Cart is already empty')
	}
}

// Hide Cart
export const hideCart: FunctionComponent = (dispatch: any) => {
	dispatch({
		type: 'TOGGLE_CART',
		showCart: false
	})
}

// Hide Cart
export const hideContactform = (dispatch: any) => {
	dispatch({
		type: 'TOGGLE_CONTACT_FORM',
		showContactForm: false
	})
}

export const shuffleItems = (items: any) => {
	let currentIndex = items.length
	let randomIndex

	// While there remain elements to shuffle.
	while (currentIndex !== 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		;[items[currentIndex], items[randomIndex]] = [items[randomIndex], items[currentIndex]]
	}

	return items
}

export const logout = async (user: any, dispatch: any, router: any) => {
	if (user) {
		dispatch({
			type: 'SET_USER',
			user: null
		})
		dispatch({
			type: 'SET_CARTITEMS',
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

// get user
export const getUserData = async () => {}

// update currentUser
export const updateUserData = async () => {}

// get all users
export const dispatchUsers = async () => {}

export const getAllUser = async () => {}
// delete food
export const deleteFood = async (food: Product, foodItems: Product[], dispatch: any) => {
	// remove food from foodItems
	const foodIndex = foodItems.indexOf(food)
	if (foodIndex !== -1) {
		foodItems.splice(foodIndex, 1)
	}
	dispatch({
		type: 'SET_FOOD_ITEMS',
		foodItems
	})
	toast.success('Food deleted successfully')
}
