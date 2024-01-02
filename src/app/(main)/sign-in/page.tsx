'use client'

import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useStateValue } from '../../context/StateProvider'
import Link from 'next/link'
import Auth, { ImageBox } from '@/app/components/Auth'

const SignIn = () => {
	const [{ user }, dispatch] = useStateValue()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const EmailAuth = () => {
		if (!user) {
			if (email.length > 0 && password.length > 0) {
				const userData = [user, email]
				dispatch({
					type: 'SET_USER',
					user: user
				})
				localStorage.setItem('user', JSON.stringify(userData))
				// navigate("/");
			} else {
				toast.warn('Please fill all the fields', { autoClose: 15000 })
			}
		}
	}

	return (
		<section className="w-full h-auto ">
			<div className="container md:py-10 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-3 text-gray-800">
					<ImageBox />
					<div className="w-full md:w-[30rem]">
						<form className="p-2">
							<Auth />
							<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
								<p className="text-center text-textColor text-sm font-semibold mx-4 mb-0">OR</p>
							</div>
							<div className="mb-6">
								<input
									type="text"
									className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
									placeholder="Email address"
									onChange={e => setEmail(e.target.value)}
								/>
							</div>

							<div className="mb-6">
								<input
									type="password"
									className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
									placeholder="Password"
									onChange={e => setPassword(e.target.value)}
								/>
							</div>

							<div className="flex justify-between items-center mb-6">
								<Link
									href="/"
									className="text-orange-600 hover:text-orange-700 focus:text-orange-700 active:text-orange-800 duration-200 transition ease-in-out"
								>
									Forgot password?
								</Link>
							</div>

							<motion.p
								className="cursor-pointer flex items-center justify-center px-7 py-3 bg-gradient-to-br from-orange-400 to-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
								onClick={EmailAuth}
								whileHover={{ scale: 1.1 }}
							>
								Sign in
							</motion.p>

							<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
								<p className="text-center text-sm text-textColor font-semibold mx-4 mb-0">
									Don't have an account?
								</p>
							</div>
							<Link href={'/sign-up'}>
								<motion.p
									whileHover={{ scale: 0.99 }}
									className="cursor-pointer flex items-center justify-center px-7 py-3 bg-gradient-to-br from-orange-400 to-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
								>
									Sign Up
								</motion.p>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SignIn
