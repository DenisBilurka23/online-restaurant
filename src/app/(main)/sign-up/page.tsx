'use client'

import { toast } from 'react-toastify'
import { useState } from 'react'
import { useStateValue } from '../../context/StateProvider'
import Image from 'next/image'

import LogoImg from '../../../../public/images/torontoSizzle_transparent.png'
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
					<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
						<div className="sm:mx-auto sm:w-full sm:max-w-sm">
							<div className="flex justify-center items-center">
								<Image src={LogoImg} alt="Logo" width={100} height={100} />
							</div>
							<h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
								Create Account
							</h2>
						</div>

						<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
							<form className="space-y-6" action="#" method="POST">
								<div>
									<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
										Email address
									</label>
									<div className="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
										Username
									</label>
									<div className="mt-2">
										<input
											id="username"
											name="username"
											type="username"
											autoComplete="username"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
										Contact Number
									</label>
									<div className="mt-2">
										<input
											id="phoneNumber"
											name="phoneNumber"
											type="phoneNumber"
											autoComplete="phoneNumber"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div>
									<div className="flex items-center justify-between">
										<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
											Password
										</label>

									</div>
									<div className="mt-2">
										<input
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Sign Up
									</button>
								</div>
							</form>

							<p className="mt-10 text-center text-sm text-gray-500">
								Existing Customer?{' '}You can sign in{' '}
								<a href="/sign-in" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
									Here
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
