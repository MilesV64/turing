import React from 'react';
import Head from 'next/head'
import Header from './header'

const Ring = ( props ) => {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="m-auto max-w-5xl px-10 mb-40 pt-16">
                
                <div className={"mt-10 w-full h-60 md:h-80 " + props.color}>
                    <p></p>
                </div>

                <div className="m-auto max-w-xl pt-6">
                    <Heading>{props.title}</Heading>
                    <Body>{props.children}</Body>
                </div>
            </div>

        </div>
    )
}

const Heading = (props) => (
    <h1 className="text-3xl text-gray-800 font-extrabold my-4">{props.children}</h1>
)

const Body = (props) => (
    <p className="text-lg text-gray-700 font-normal">{props.children}</p>
)

export default Ring;