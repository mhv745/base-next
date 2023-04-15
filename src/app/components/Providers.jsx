'use client'

import { ToastContainer } from 'react-toastify'

export default function Providers({ children }) {
    return (
        <>
            {children}
            <ToastContainer
                autoClose={4000}
                hideProgressBar
                bodyClassName="text-base font-light text-black"
            />
        </>
    )
}
