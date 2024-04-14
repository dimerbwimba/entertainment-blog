"use client"

import { useBottomNavState } from "@/store/use-bootom-nav-model"

export const BottomNav = () => {

    const { isOpen, close} = useBottomNavState()
    
    return (
        <div className={` ${!isOpen ? "hidden":""}  fixed bottom-0 left-0 z-50 w-full h-24 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600`}>
            <div className=" flex justify-center relative h-full    mx-auto font-medium">
                <div className=" absolute right-10 -top-6">
                    <button onClick={close} className=" bg-red-600 p-2 shadow rounded-full border-2">
                        <i className=" text-xl text-white fa fa-times px-2"></i>
                    </button>
                </div>
                <div className="mt-6 flex items-center md:w-[48%] justify-center gap-x-4">

                    <h2 className="text-3xl w-1/2 font-bold tracking-tight mt-0  sm:text-2xl">Subscribe <br/> to  our newsletter.</h2>
                    <label className="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" required className=" h-18 border text-2xl flex-auto w- w-full rounded-md  bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6" placeholder="Enter your email" />
                    <button type="submit" className="
                    flex-none text-xl border-b-4 border rounded-md  px-3.5 py-2.5 font-semibold  shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-white focus-visible:outline-indigo-500">
                        <i className=" fa fa-envelope-o px-2"></i>    
                        Click here to Subscribe
                    </button>
                </div>


                {/* 
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Wallet</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
                    </svg>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
                </button> */}
            </div>
        </div>
    )
}