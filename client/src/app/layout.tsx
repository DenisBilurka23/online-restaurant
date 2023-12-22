'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import {ToastContainer} from "react-toastify";
import Cart from "@/app/components/Cart";
import Contact from "@/app/components/Contact";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {StateProvider} from "@/context/StateProvider";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const showCart = false
    const showContactForm = false
  return (
    <html lang="en">
      <body className={inter.className}>
      <StateProvider  initialState={{}} reducer = {{}}>
        <div>
          <ToastContainer />
          <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
            {showCart && <Cart />}
            {showContactForm && <Contact />}
            <Header />
            <main className="mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4">
                {children}
            </main>
            <Footer />
          </div>
        </div>
      </StateProvider>
      </body>
    </html>
  )
}
