import { type FC, useMemo } from 'react'
import { type CartProductItem } from '../../../../types'
import { useRouter } from 'next/navigation'

const CartActions: FC<{ cart: CartProductItem[]; onClose: () => void }> = ({ cart, onClose }) => {
	const router = useRouter()
	const cartTotal = useMemo(() => cart.reduce((acc, product) => (acc += product.price * product.quantity), 0), [cart])

	const handleCheckout = (): void => {
		router.push(
			'https://checkout.stripe.com/c/pay/cs_test_b1GSiDJbOZSpv5FZbm4CaMMFC4p336AcZIuFE4Rxs5epRDYhzfTDNfdXDW#fidkdWxOYHwnPyd1blpxYHZxWjA0SkprcTRHUUtMdzw9dn91XUhwaHFPXGpOT2FXVkczalNgYWZjMUFTMk5Hal1oS0BdS00zMV89S2thcUw0c19QQDZuVl9XPXBQNTB9dVYwSTVOYnw9MVxBNTVLfENfZ1xPfCcpJ2hsYXYnP34nYnBsYSc%2FJ2Q8YTA9NGcwKGFhMzwoMTYxMCg9NGZjKGY3ZDBjZmQ9ZzJhZGQzNzdgMicpJ2hwbGEnPydhNWY2YWc3YChkYT1nKDE8MjEoPGdmYCgyZD1kPDU0MjBmZDY8MzJgZGcnKSd2bGEnPycyPTAzPTM3YCgyNGY3KDE1Nj0oPGQyNShmPDJkYzcxNzJnY2A2PGRmMzAneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8naHBpcWxabHFgaCcpJ3dgY2B3d2B3SndsYmxrJz8nbXFxdXY%2FKip2YHdzYHdpYHZ2KHVkfGhga3Era2BxaWxjfCtkdXUneCUl'
		)
	}

	return (
		<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
			<div className="flex justify-between text-base font-medium text-gray-900">
				<p>Subtotal</p>
				<p>${cartTotal}</p>
			</div>
			<p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
			<div className="mt-6">
				<button
					disabled={cart?.length === 0}
					className={`flex items-center w-full justify-center rounded-md border border-transparent hover:from-orange-500 hover:to-orange-700 px-6 py-3 text-base font-medium text-white shadow-sm ${
						cart?.length > 0 ? 'bg-gradient-to-tr from-orange-400 to-orange-600' : 'bg-gray-400'
					}`}
					onClick={handleCheckout}
				>
					Checkout
				</button>
			</div>
			<div className="mt-6 flex justify-center text-center text-sm text-gray-500">
				<p>
					or{' '}
					<button type="button" className="font-medium text-orange-600 hover:text-orange-500" onClick={onClose}>
						Continue Ordering
						<span aria-hidden="true"> &rarr;</span>
					</button>
				</p>
			</div>
		</div>
	)
}

export default CartActions
