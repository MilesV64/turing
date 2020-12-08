import React from 'react';
import Head from 'next/head'
import Header from '../components/header'

export default function About(props) {
    return (
        <div>
            <Head>
                <title>About tuRing</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />


            <div className="m-auto max-w-5xl px-10 mb-40 pt-16">

                <div className="m-auto max-w-xl pt-6">
                    <img className="w-full border border-gray-200 rounded" src="/rings.png"></img>

                    <h1 className="text-3xl text-gray-800 font-extrabold mb-4 my-12">About tuRing</h1>
                    <p className="text-lg text-gray-700 font-normal">
                    A futuristic yet user friendly piece of wearable technology for daily use in the modern era has been the primary design goal of J-Stars LLC. The purpose of the tuRing is to ensure the safety of the individual by providing them with three distinctive options: a ring in response to COVID-19 with built in social distancing sensors and disposable hand sanitizer; a ring with built in pepper spray for protection, and a ring whose primary audience is targeted for senior citizens. All three rings include basic smart  wearable technology capabilities such as haptic feedback and the ability to write and save health tracking data.
                    
                    <br/><br/>
                    At J-Stars LLC, highly motivated and accomplished designers, engineers, and developers are working diligently to create a product  that will empower individuals by providing them with safety.

                    </p>
                </div>
            </div>

        </div>
    )
}
