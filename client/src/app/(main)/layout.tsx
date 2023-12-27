'use client'

import {AnimatePresence} from "framer-motion";
import {Cart, Footer, Header} from "@/app/components";
import Contact from "@/app/components/Contact";
import {ToastContainer} from "react-toastify";
import {useEffect} from "react";
import {useStateValue} from "@/app/context/StateProvider";
import {calculateCartTotal, dispatchUsers, fetchFoodData, fetchUserCartData, isAdmin} from "@/app/utils/functions";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [{ showCart,showContactForm, user, foodItems, cartItems, adminMode }, dispatch] =
        useStateValue();

    useEffect(() => {
        fetchFoodData();
        dispatchUsers(dispatch);
        user && fetchUserCartData(user, dispatch);
    }, []);

    useEffect(() => {
        foodItems &&
        cartItems.length > 0 &&
        calculateCartTotal(cartItems, foodItems, dispatch);
    }, [cartItems, foodItems, dispatch]);
    return (
        <AnimatePresence mode='wait'>
            <ToastContainer />
            <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
                {showCart && <Cart />}
                {showContactForm && <Contact />}
                {!(adminMode && isAdmin(user)) && <Header />}
                <main
                    className={`${
                        !(adminMode && isAdmin(user)) &&
                        "mt-16 md:mt-16 px-3 md:px-8 md:py-6 py-4"
                    } w-full h-auto`}
                    onClick={() => {}}
                >
                    {children}
                    {!(adminMode && isAdmin(user)) && <Footer />}
                </main>
            </div>
        </AnimatePresence>
    );
}
