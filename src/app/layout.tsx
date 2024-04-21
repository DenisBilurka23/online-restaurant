import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { StateProvider } from '@/app/context/StateProvider'
import { AuthProvider } from './providers/Providers'
import { type ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { title: 'Online Restaurant' }

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<AuthProvider>
				<StateProvider>
					<body className={inter.className}>{children}</body>
				</StateProvider>
			</AuthProvider>
		</html>
	)
}
