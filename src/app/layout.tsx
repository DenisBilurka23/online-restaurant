import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { StateProvider } from '@/app/context/StateProvider'
import { AuthProvider } from './providers/AuthProvider'
import { EdgeStoreProvider } from './providers/EdgeStoreProvider'
import { type ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = { title: 'Online Restaurant' }

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<AuthProvider>
				<StateProvider>
					<EdgeStoreProvider>
						<body className={inter.className}>{children}</body>
					</EdgeStoreProvider>
				</StateProvider>
			</AuthProvider>
		</html>
	)
}
