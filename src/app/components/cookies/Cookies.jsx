'use client'

import { data } from '@/utils/data'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import Copy from './Copy'

export default function Cookies() {
    const [aceptadas, setAceptadas] = useState(true)

    useEffect(() => {
        const cookies = document.cookie.split(';').find((c) => c.trim().startsWith('cookies='))
        setAceptadas(!!cookies)
    }, [])

    const aceptar = useCallback(() => {
        document.cookie = 'cookies=1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
        setAceptadas(true)
    }, [])

    const cancelar = useCallback(() => {
        document.cookie = 'cookies=0; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/'
        setAceptadas(false)
    }, [])

    return (
        <>
            {!aceptadas ? (
                <div
                    aria-hidden
                    className="fixed bottom-8 right-4 text-xs p-3 rounded shadow z-50 max-w-xs border"
                    style={{
                        display: aceptadas ? 'none' : 'block',
                        background: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(5px)',
                    }}>
                    <div className="m-0 p-0">
                        <p className="text-xs">
                            {data.siteName} utiliza cookies para mejorar el servicio y analizar el
                            tráfico web
                        </p>
                        <div className="flex justify-between gap-4 items-center pt-2">
                            <Link
                                href="/politicas/cookies"
                                className="text-base"
                                rel="nofollow noopener noreferrer"
                                title="Más información sobre las cookies utilizadas">
                                Cookies utilizadas
                            </Link>
                            <button
                                aria-label="Aceptar todas las cookies"
                                className="bg-green-700 text-base text-white font-bold py-1 px-4 rounded"
                                onClick={aceptar}>
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div aria-hidden className="fixed bottom-1 right-1">
                    <button
                        aria-label="Eliminar cookies instaladas"
                        className="block"
                        onClick={cancelar}>
                        <CookieIcon />
                    </button>
                </div>
            )}
            <Copy />
        </>
    )
}

const CookieIcon = () => (
    <svg
        fill="#000000"
        width="44px"
        height="44px"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(270)">
        <g>
            <path d="M223.45117,118.0293a11.95148,11.95148,0,0,0-10.09521-2.31348,27.993,27.993,0,0,1-34.15381-27,11.97247,11.97247,0,0,0-11.91748-11.918,27.99308,27.99308,0,0,1-27.00049-34.1543,12.01319,12.01319,0,0,0-11.68359-14.63769c-.2085-.001-.41309-.00195-.62207-.00195a99.99974,99.99974,0,1,0,100.01611,99.38281A11.99348,11.99348,0,0,0,223.45117,118.0293Zm-30.45605,75.083c-35.37354,35.3125-93.29492,35.69922-129.11475.86329a91.99664,91.99664,0,0,1,64.1001-157.97168c.19043,0,.38183.001.57275.002a4.04183,4.04183,0,0,1,3.15772,1.52637,3.92615,3.92615,0,0,1,.76758,3.35742,35.99441,35.99441,0,0,0,34.71923,43.9082,4.0235,4.0235,0,0,1,4.00489,4.00391,35.99387,35.99387,0,0,0,43.90625,34.71972,3.94377,3.94377,0,0,1,3.36279.76954,4.02736,4.02736,0,0,1,1.523,3.14453A91.33176,91.33176,0,0,1,192.99512,193.1123Zm-31.33838-26.769a7.99984,7.99984,0,1,1-11.31348,0A7.99959,7.99959,0,0,1,161.65674,166.34326Zm-64-8a7.99984,7.99984,0,1,1-11.31348,0A7.99959,7.99959,0,0,1,97.65674,158.34326Zm-8-44.68652a7.99984,7.99984,0,1,1,0-11.31348A7.99915,7.99915,0,0,1,89.65674,113.65674Zm52,4.68652a7.99984,7.99984,0,1,1-11.31348,0A7.99959,7.99959,0,0,1,141.65674,118.34326Z"></path>{' '}
        </g>
    </svg>
)
