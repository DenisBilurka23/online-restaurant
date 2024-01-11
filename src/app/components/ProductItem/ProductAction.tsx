'use client'
import { type ChangeEvent, type FC, useState } from 'react'

const ProductAction: FC = () => {
	const [quantity, setQuantity] = useState<string>('1')

	const quantityHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setQuantity(e.target.value)
	}

	return (
		<form>
			<div>
				<label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
					Quantity
				</label>
				<div className="mt-2.5">
					<input
						onChange={quantityHandler}
						value={quantity}
						type="number"
						className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 outline-0 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<button className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-tr from-orange-400 to-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-gradient-to-tr hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
				Add to bag
			</button>
		</form>
	)
}

export default ProductAction
