import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { StateProvider } from '@/app/context/StateProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { title: 'Online Restaurant' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<StateProvider>
				<body className={inter.className}>{children}</body>
			</StateProvider>
		</html>
	)
}
