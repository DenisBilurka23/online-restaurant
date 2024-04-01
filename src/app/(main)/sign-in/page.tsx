import Image from 'next/image'

import LogoImg from '../../../../public/img/torontoSizzle_transparent.png'
import SignInForm from '@/app/(main)/sign-in/SignInForm'
import { type FC } from 'react'
import Link from 'next/link'

const SignIn: FC = () => (
	<section className="w-full h-auto ">
		<div className="container w-full h-full px-6 py-12 lg:px-8 m-auto">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<div className="flex justify-center items-center">
					<Image src={LogoImg} alt="Logo" width={100} height={100} />
				</div>
				<h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800">Sign in</h2>
			</div>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<SignInForm />
				<p className="mt-10 text-center text-sm text-gray-500">
					Not a member?{' '}
					<Link href={'/sign-up'} className="font-semibold leading-6 text-mild hover:text-indigo-500">
						Register
					</Link>
				</p>
			</div>
		</div>
	</section>
)

export default SignIn
