'use client'

import { data } from '@/src/utils/data'
import Script from 'next/script'

export default function Analytics() {
    const setAnalytics = () => {
        window.dataLayer = window.dataLayer || []
        function gtag() {
            window.dataLayer.push(arguments)
        }
        gtag('js', new Date())
        gtag('config', data.analytics)
    }

    return data.analytics ? (
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${data.analytics}`}
            onReady={setAnalytics}
        />
    ) : null
}
