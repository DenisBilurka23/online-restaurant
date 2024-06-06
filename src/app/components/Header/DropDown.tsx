'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaUserCog, FaUtensils } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import { useStateValue } from '../../context/StateProvider'
import Link from 'next/link'
import { setCart, setUser } from '../../context/actionCreators'
import { signOut } from 'next-auth/react'

const DropDown = ({ user, onClose, anchorRef }: { user: any; onClose: () => void }) => {
	const [_, dispatch] = useStateValue()
	const dropdownRef = useRef<HTMLDivElement>(null)

	const handleLogout = async () => {
		dispatch(setUser(null))
		dispatch(setCart([]))
		await signOut()
		onClose()
	}

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node) &&
			!anchorRef?.current?.contains(event.target)
		) {
			onClose()
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<motion.div
			ref={dropdownRef}
			initial={{ opacity: 0, scale: 0.6 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.6 }}
			className="group-hover:flex w-54 bg-gray-50 rounded-lg shadow-xl flex-col absolute right-0 top-16"
		>
			<p className="px-10 py-2 flex items-center gap-3 transition-all duration-100 capitalize ease-in-out text-base text-headingColor">
				{user.username || user.email}
			</p>
			<Link
				onClick={onClose}
				href={'/profile'}
				className="px-10 py-2 flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-base text-headingColor"
			>
				Profile <FaUserCog />
			</Link>
			<Link
				onClick={onClose}
				href={'/orders'}
				className="px-10 py-2 flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-base text-headingColor"
			>
				Orders <FaUtensils />
			</Link>
			<p
				className="cursor-pointer px-10 py-2 flex items-center gap-3 hover:bg-slate-100 transition-all duration-100 ease-in-out text-base text-textColor"
				onClick={handleLogout}
			>
				Logout
				<MdLogout />
			</p>
		</motion.div>
	)
}

export default DropDown
