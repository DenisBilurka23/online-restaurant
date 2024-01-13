'use client'

import { AnimatePresence } from 'framer-motion'
import { Footer } from '@/app/components'
import Contact from '@/app/components/Contact'
import { ToastContainer } from 'react-toastify'
import { type FC, type ReactNode, useState } from 'react'
import { useStateValue } from '@/app/context/StateProvider'
import { isAdmin } from '@/app/utils/functions'
import Cart from '@/app/components/Cart'
import Header from '@/app/components/Header'

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
	const [{ showContactForm, user, adminMode }] = useStateValue()
	const [cartOpen, setCartOpen] = useState<boolean>(false)

	return (
		<AnimatePresence mode="wait">
			<ToastContainer />
			<div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
				<Cart open={cartOpen} setOpen={setCartOpen} />
				{showContactForm && <Contact />}
				{!(adminMode && isAdmin(user)) && <Header />}
				<main
					className={`${!(adminMode && isAdmin(user)) && 'mt-16 md:mt-16 md:px-0 pt-6 py-0'} w-full h-auto`}
					onClick={() => {}}
				>
					{children}
					{!(adminMode && isAdmin(user)) && <Footer />}
				</main>
			</div>
		</AnimatePresence>
	)
}

export default MainLayout
