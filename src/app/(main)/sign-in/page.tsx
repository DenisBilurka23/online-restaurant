'use client'

import { useRouter } from 'next/navigation'
import { useState, ChangeEvent } from 'react'
// import { useStateValue } from '../../context/StateProvider'
import Image from 'next/image'

import LogoImg from '../../../../public/images/torontoSizzle_transparent.png'

const SignIn = (): JSX.Element => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const emailHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value)
	}

	const passwordHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setPassword(e.target.value)
	}

	const router = useRouter()


	const EmailAuth = (e: ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault()

		console.log('In Email Auth');

		if (email.length > 10 && password.length > 5) {
			// const userData = [user, email]
			// dispatch({
			// 	type: 'SET_USER',
			// 	user: user
			// })
			// localStorage.setItem('user', JSON.stringify(userData))
			router.push('/')

		} else {
			console.error('Required inputs are invalid, please try again')
		}
	}

	return (
		<section className="w-full h-auto ">
			<div className="container h-full">
				<div className="flex justify-center items-center flex-wrap h-full g-3 text-gray-800">
					<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
						<div className="sm:mx-auto sm:w-full sm:max-w-sm">
							<div className="flex justify-center items-center">
								<Image src={LogoImg} alt="Logo" width={100} height={100} />
							</div>
							<h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">
								Sign in
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
											className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
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
										onClick={EmailAuth}
										className="flex w-full justify-center rounded-md bg-mild px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>
										Sign in
									</button>
								</div>
							</form>

							<p className="mt-10 text-center text-sm text-gray-500">
								Not a member?{' '}
								<a href="/sign-up" className="font-semibold leading-6 text-mild hover:text-indigo-500">
									Register
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SignIn
