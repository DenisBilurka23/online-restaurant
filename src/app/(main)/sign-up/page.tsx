'use client'

import { toast } from 'react-toastify'
import { useState } from 'react'
import { useStateValue } from '../../context/StateProvider'
import Link from 'next/link'
import Auth, { ImageBox } from '@/app/components/Auth'
import { useRouter } from 'next/navigation'

const Login = () => {
	const router = useRouter()
	const [{ user }, dispatch] = useStateValue()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const EmailAuth = () => {
		if (!user) {
			if (email.length > 0 && password.length > 0) {
				const user = null
				dispatch({
					type: 'SET_USER',
					user: user
				})
				localStorage.setItem('user', JSON.stringify(user))
				router.push('/')
			} else {
				toast.warn('Please fill all the fields', { autoClose: 15000 })
			}
		}
	}

	return (
		<section className="w-full h-auto">
			<div className="container md:py-10 h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
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

							<div className="flex justify-between items-center mb-6"></div>

							<p
								className="flex items-center justify-center px-7 py-3 bg-gradient-to-br from-orange-400 to-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out w-full cursor-pointer"
								onClick={EmailAuth}
							>
								Sign Up
							</p>

							<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
								<p className="text-center text-sm text-textColor font-semibold mx-4 mb-0">
									Already have an account?
								</p>
							</div>
							<Link
								href={'/sign-in'}
								className="flex items-center justify-center px-7 py-3 bg-gradient-to-br from-orange-400 to-orange-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out w-full"
							>
								Login
							</Link>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
