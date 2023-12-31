'use client'

import { useStateValue } from '../../context/StateProvider'
import Image from 'next/image'
import MOMO from '../../../../public/img/momo.png'
import CreditCard from '../../../../public/img/visa.png'

const Selector = () => {
	const [{ paymentMethod }, dispatch] = useStateValue()
	const setPaymentMethod = (method: string) => {
		dispatch({
			type: 'SET_PAYMENT_METHOD',
			paymentMethod: method
		})
	}
	return (
		<div className="my-3 flex w-full rounded-t-[2rem] justify-between p-3">
			<div
				className={`px-2 py-1 rounded-full flex items-center justify-center ${
					paymentMethod === 'mobile_money' && 'bg-white'
				}`}
			>
				<label
					htmlFor="type1"
					className="flex items-center cursor-pointer"
					onClick={() => setPaymentMethod('mobile_money')}
				>
					<input
						type="radio"
						className="form-radio h-5 w-5 text-orange-500 cursor-pointer"
						name="type"
						id="type1"
						checked={paymentMethod === 'mobile_money'}
					/>
					<Image src={MOMO} alt="" className="h-8 ml-3" />
				</label>
			</div>
			<div
				className={`px-2 py-1 rounded-full flex items-center justify-center ${
					paymentMethod === 'bank' && 'bg-white'
				}`}
			>
				<label
					htmlFor="type2"
					className="flex items-center cursor-pointer"
					onClick={() => setPaymentMethod('bank')}
				>
					<input
						type="radio"
						className="form-radio h-5 w-5 text-orange-500 cursor-pointer"
						name="type"
						id="type2"
						checked={paymentMethod === 'bank'}
					/>
					<Image src={CreditCard} alt="Credit Card" className="h-8 ml-3" />
				</label>
			</div>
		</div>
	)
}

export default Selector
