'use client'

import { type FC, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useStateValue } from '@/app/context/StateProvider'
import CartItem from '@/app/components/Cart/CartItem'
import CartActions from '@/app/components/Cart/CartActions'
import { setCart, toggleCart } from '@/app/context/actionCreators'
import { type cartItems } from '../../../../types'

const Cart: FC = () => {
	const [{ showCart, cart }, dispatch] = useStateValue()

	const handleRemoveProduct: (id: string) => () => void = id => () => {
		const inx = cart.findIndex(product => product.cartItemId === id)
		const updatedCart = cart.toSpliced(inx, 1)
		localStorage.setItem('cart', JSON.stringify(updatedCart))
		window.dispatchEvent(new Event('storage'))
	}

	const handleCloseCart = (): void => {
		dispatch(toggleCart(false))
	}

	useEffect(() => {
		const updateStorage = (): void => {
			const updatedCart: cartItems[] = JSON.parse(localStorage.getItem('cart'))
			dispatch(setCart(updatedCart))
		}
		window.addEventListener('storage', updateStorage)
		return () => {
			window.addEventListener('storage', updateStorage)
		}
	}, [dispatch])

	return (
		<Transition.Root show={showCart} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={handleCloseCart}>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 relative">
											<div className="flex items-start justify-between">
												<Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
												<div className="ml-3 flex h-7 items-center">
													<button
														type="button"
														className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
														onClick={handleCloseCart}
													>
														<span className="absolute -inset-0.5" />
														<XMarkIcon className="h-6 w-6" aria-hidden="true" />
													</button>
												</div>
											</div>

											<div className="mt-8">
												<div className="flow-root">
													<ul role="list" className="-my-6 divide-y divide-gray-200">
														{cart?.length > 0 ? (
															cart.map(product => (
																<CartItem key={product.id} product={product} onRemove={handleRemoveProduct} />
															))
														) : (
															<p className="-translate-x-1/2 text-gray-500 absolute top-1/2 left-1/2 ">
																Your cart is empty
															</p>
														)}
													</ul>
												</div>
											</div>
										</div>
										<CartActions cart={cart} onClose={handleCloseCart} />
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default Cart
