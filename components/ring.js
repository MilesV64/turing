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

                <div className="m-auto max-w-xl">
                    <div className={"mt-10 w-full h-60 md:h-80 mb-16 " + props.color}>
                        <img className="max-h-full m-auto" src={props.img} />
                    </div>
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
    <div className="text-lg text-gray-700 font-normal">{props.children}</div>
)

export default Ring;