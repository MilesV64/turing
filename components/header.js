import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Ring = ( props ) => {
    return (
        <header className="z-50 fixed top-0 blur border-b border-gray-100 w-full h-16 flex justify-center items-center">
            <Link href="/">
                <a className="flex items-center">
                    <Image src="/logo.png" width={26} height={26} />
                    <h3 className="font-extrabold text-xl ml-2 text-gray-800">tuRing</h3>
                </a>
            </Link>
        </header>
    )
}

export default Ring;