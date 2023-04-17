'use client'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

const K = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function useK(action = () => {}, { code = K } = {}) {
    const [input, setInput] = useState([])

    const onKeyUp = useCallback(
        (e) => {
            const newInput = input
            newInput.push(e.keyCode)
            newInput.splice(-code.length - 1, input.length - code.length)

            setInput(newInput)

            if (newInput.join('').includes(code.join(''))) {
                action()
            }
        },
        [input, setInput, code, action],
    )

    useEffect(() => {
        document.addEventListener('keyup', onKeyUp)
        return () => {
            document.removeEventListener('keyup', onKeyUp)
        }
    }, [onKeyUp])
}

export default function Copyright() {
    const [show, setShow] = useState(false)
    useK(() => {
        setShow(true)
    })
    return (
        <div
            role="alert"
            aria-live="assertive"
            className="w-screen h-screen fixed flex justify-center items-center"
            style={{
                background: 'rgba(255, 103, 96, 0.5)',
                backdropFilter: 'blur(5px)',
                display: show ? 'flex' : 'none',
            }}>
            <div className="bg-black text-white rounded shadow py-4 px-8 text-center max-w-xs">
                <p className="font-light text-sm md:text-base">
                    &#x50;&#x72;&#x6f;&#x67;&#x72;&#x61;&#x6d;&#x61;&#x63;&#x69;&#xf3;&#x6e;&#x20;&#x77;&#x65;&#x62;
                </p>
                <h1 className="text-base md:text-lg font-bold">
                    &#x4d;&#x69;&#x67;&#x75;&#x65;&#x6c;&#x20;&#x48;&#x65;&#x72;&#x6e;&#xe1;&#x6e;&#x64;&#x65;&#x7a;&#x20;&#x56;&#x6f;&#x6e;&#x20;&#x48;&#x61;&#x72;&#x74;&#x6d;&#x61;&#x6e;&#x6e;
                </h1>

                <Link
                    className="block pb-2 font-light text-sm md:text-base"
                    href="mailto:&#x63;&#x6f;&#x6e;&#x74;&#x61;&#x63;&#x74;&#x6f;&#x40;&#x68;&#x65;&#x72;&#x6e;&#x61;&#x6e;&#x64;&#x65;&#x7a;&#x6d;&#x69;&#x67;&#x75;&#x65;&#x6c;&#x2e;&#x65;&#x73;"
                    rel="follow"
                    title="&#x45;&#x6e;&#x76;&#x69;&#x61;&#x72;&#x20;&#x75;&#x6e;&#x20;&#x65;&#x6d;&#x61;&#x69;&#x6c;&#x20;&#x61;&#x6c;&#x20;&#x64;&#x65;&#x73;&#x61;&#x72;&#x72;&#x6f;&#x6c;&#x6c;&#x61;&#x64;&#x6f;&#x72;">
                    &#x63;&#x6f;&#x6e;&#x74;&#x61;&#x63;&#x74;&#x6f;&#x40;&#x68;&#x65;&#x72;&#x6e;&#x61;&#x6e;&#x64;&#x65;&#x7a;&#x6d;&#x69;&#x67;&#x75;&#x65;&#x6c;&#x2e;&#x65;&#x73;
                </Link>

                <Link
                    className="block pb-2 font-light mb-8 text-sm md:text-base"
                    href="&#x68;&#x74;&#x74;&#x70;&#x73;&#x3a;&#x2f;&#x2f;&#x68;&#x65;&#x72;&#x6e;&#x61;&#x6e;&#x64;&#x65;&#x7a;&#x6d;&#x69;&#x67;&#x75;&#x65;&#x6c;&#x2e;&#x65;&#x73;"
                    target="_blank"
                    rel="follow"
                    title="&#x56;&#x69;&#x73;&#x69;&#x74;&#x61;&#x72;&#x20;&#x65;&#x6c;&#x20;&#x73;&#x69;&#x74;&#x69;&#x6f;&#x20;&#x77;&#x65;&#x62;&#x20;&#x64;&#x65;&#x6c;&#x20;&#x64;&#x65;&#x73;&#x61;&#x72;&#x72;&#x6f;&#x6c;&#x6c;&#x61;&#x64;&#x6f;&#x72;">
                    &#x76;&#x69;&#x73;&#x69;&#x74;&#x61;&#x72;&#x20;&#x77;&#x65;&#x62;&#x20;&#x64;&#x65;&#x6c;&#x20;&#x64;&#x65;&#x73;&#x61;&#x72;&#x72;&#x6f;&#x6c;&#x6c;&#x61;&#x64;&#x6f;&#x72;
                </Link>
                <button className="border px-2 rounded py-1" onClick={() => setShow(false)}>
                    &#x63;&#x65;&#x72;&#x72;&#x61;&#x72;&#x20;&#x76;&#x65;&#x6e;&#x74;&#x61;&#x6e;&#x61;
                </button>
            </div>
        </div>
    )
}
