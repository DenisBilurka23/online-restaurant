'use client'

import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { MdOutlineNotificationsActive } from 'react-icons/md'
import Chef from '../../../../public/img/chef1.png'
import MotionImg from '@/app/components/MotionImg'

const Auth = () => {
	return (
		<div className="flex items-center justify-center gap-5  text-center">
			<motion.p
				whileHover={{ scale: 1.1 }}
				className="flex items-center w-36 h-10 bg-white justify-center rounded text-headingColor px-5 cursor-pointer shadow-sm hover:bg-slate-100"
				onClick={() =>
					toast.warn('GitHub Signin is not available yet', {
						autoClose: 2000,
						icon: <MdOutlineNotificationsActive className="text-yellow-500 text-xl" />,
						toastId: 'github'
					})
				}
			>
				<BsGithub className="text-xl w-5 mr-1" />
				<span>Github</span>
			</motion.p>
			<motion.p
				whileHover={{ scale: 1.1 }}
				className="flex items-center w-36 h-10 bg-white justify-center rounded text-headingColor px-5 cursor-pointer shadow-sm hover:bg-slate-100"
				// onClick={() => {}}
			>
				<FcGoogle className="text-xl w-5 mr-1" />
				<span>Google</span>
			</motion.p>
		</div>
	)
}

export const ImageBox = () => {
	return (
		<div className="hidden md:w-8/12 lg:w-6/12 mb-12 md:mb-0 md:flex ">
			<MotionImg
				className="w-96 cursor-pointer"
				src={Chef}
				alt="logo"
				whileHover={{ rotate: [0, -10, 10, -10, 0] }}
			/>
		</div>
	)
}

export default Auth
