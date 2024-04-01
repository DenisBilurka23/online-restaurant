'use client'

import { type ChangeEvent, type FC, useState, type MouseEvent } from 'react'
import { useRouter } from 'next/navigation'

const SignInForm: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const emailHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value)
	}

	const passwordHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setPassword(e.target.value)
	}

	const router = useRouter()

	const EmailAuth = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault()

		console.log('In Email Auth')

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
	)
}

export default SignInForm
