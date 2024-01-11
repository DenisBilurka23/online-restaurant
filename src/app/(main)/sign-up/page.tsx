'use client'

import { useState, ChangeEvent } from 'react'
import { useStateValue } from '../../context/StateProvider'
import Image from 'next/image'

import LogoImg from '../../../../public/images/torontoSizzle_transparent.png'
import { useRouter } from 'next/navigation'


const SignUp = (): JSX.Element => {
	const router = useRouter()
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [username, setUsername] = useState<string>('')
	const [phoneNumber, setPhoneNumber] = useState<string>('')

	const emailHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value)
	}

	const usernameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setUsername(e.target.value)
	}

	const phoneNumberHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setPhoneNumber(e.target.value)
	}

	const passwordHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setPassword(e.target.value)
	}

	const EmailAuth = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()

		console.log('In Email Auth');

		if (email.length > 10 && password.length > 5) {
			// const user = null
			// dispatch({
			// 	type: 'SET_USER',
			// 	user: user
			// })
			// localStorage.setItem('user', JSON.stringify(user))
			router.push('/')
		} else {
			console.error('Required inputs are invalid, please try again')
		}
	}

	return (
		<section className="w-full h-auto">
			<div className="container h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
					<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
						<div className="sm:mx-auto sm:w-full sm:max-w-sm">
							<div className="flex justify-center items-center">
								<Image priority={true} src={LogoImg} alt="Logo" width={100} height={100} />
							</div>
							<h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">
								Create Account
							</h2>
						</div>

						<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
							<form className="space-y-6">
								<div>
									<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
										Email address
									</label>
									<div className="mt-2">
										<input
											value={email}
											onChange={emailHandler}
											id="email"
											name="email"
											type="email"
											autoComplete="email"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
										Username
									</label>
									<div className="mt-2">
										<input
											value={username}
											onChange={usernameHandler}
											id="username"
											name="username"
											type="username"
											autoComplete="username"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3"
										/>
									</div>
								</div>

								<div>
									<label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
										Contact Number
									</label>
									<div className="mt-2">
										<input
											value={phoneNumber}
											onChange={phoneNumberHandler}
											id="phoneNumber"
											name="phoneNumber"
											type="tel"
											pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
											autoComplete="phoneNumber"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
										/>
									</div>
									<small className="text-gray-500">Format: 123-456-7890</small>
								</div>

								<div>
									<div className="flex items-center justify-between">
										<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
											Password
										</label>

									</div>
									<div className="mt-2">
										<input
											value={password}
											onChange={passwordHandler}
											id="password"
											name="password"
											type="password"
											autoComplete="current-password"
											required
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
										/>
									</div>
								</div>

								<div>
									<button
										type="submit"
										onClick={EmailAuth}
										className="flex w-full justify-center rounded-md bg-mild px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Sign Up
									</button>
								</div>
							</form>

							<p className="mt-10 text-center text-sm text-gray-500">
								Existing Customer?{' '}You can sign in{' '}
								<a href="/sign-in" className="font-semibold leading-6 text-mild">
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

export default SignUp
