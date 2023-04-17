'use client'
import { SessionProvider } from 'next-auth/react'

import { ToastContainer } from 'react-toastify'

export default function Providers({ children }) {
    return (
        <>
            <SessionProvider>{children}</SessionProvider>
            <ToastContainer
                autoClose={4000}
                hideProgressBar
                bodyClassName="text-base font-light text-black"
            />
        </>
    )
}
