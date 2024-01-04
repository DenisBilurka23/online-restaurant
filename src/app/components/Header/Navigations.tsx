'use client'

import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useStateValue } from '../../context/StateProvider'
import Link from 'next/link'
import { type FC } from 'react'

const Navigations: FC = ({ direction }: { direction?: string }) => {
	const [{ showContactForm, cartItems }, dispatch] = useStateValue()
	const handleToggleCart = (): void => {
		dispatch({
			type: 'TOGGLE_CART',
			showCart: true
		})
	}
	const handleToggleContact = (): void => {
		dispatch({
			type: 'TOGGLE_CONTACT_FORM',
			showContactForm: !showContactForm
		})
	}
	return (
		<div className="flex items-center gap-8">
			<motion.ul
				initial={{ opacity: 0, x: 200 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 200 }}
				className={`flex items-center gap-8 ${direction && direction}`}
			>
				<motion.li
					whileHover={{ scale: 1.1 }}
					className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
				>
					<Link href={'/'}>Home</Link>
				</motion.li>
				<motion.li
					whileHover={{ scale: 1.1 }}
					className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
				>
					<Link href={'/menu'}>Menu</Link>
				</motion.li>
				<motion.li
					whileHover={{ scale: 1.1 }}
					className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
				>
					<Link href={'/delivery'}>Delivery</Link>
				</motion.li>
				<motion.li
					whileHover={{ scale: 1.1 }}
					className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
				>
					<Link href={'/about'}>About us</Link>
				</motion.li>
				<motion.li
					whileHover={{ scale: 1.1 }}
					className="md:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
					onClick={handleToggleContact}
				>
					Contact us
				</motion.li>
			</motion.ul>

			<motion.div
				whileTap={{ scale: 0.9 }}
				whileHover={{ scale: 1.1 }}
				className="relative flex items-center justify-center text-textColor"
				onClick={handleToggleCart}
			>
				<MdShoppingBasket className="text-2xl cursor-pointer" />
				{cartItems && (
					<div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center cursor-pointer">
						<p className="text-sm text-white font-semibold">{cartItems.length}</p>
					</div>
				)}
			</motion.div>
		</div>
	)
}

export default Navigations
