import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>tuRing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="fixed top-0 blur border-b border-gray-100 w-full h-16 flex justify-center items-center">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/logo.png" width={26} height={26} />
            <h3 className="font-extrabold text-xl ml-2 text-gray-800">tuRing</h3>
          </a>
        </Link>
      </header>

      <div className="m-auto max-w-5xl px-10 mb-40 pt-16">

        <div className="flex justify-center items-center w-full mt-24">

          <div className="flex-1 text-center max-w-lg">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">tuRing</h2>
            <p className="text-lg font-normal text-gray-700"><b>Safety at your fingertips.</b> Explore our revolutionary line of smart rings designed to promote safety in a variety of situtions.</p>
          </div>

        </div>

        <div className="flex items-center w-full mt-32">
          <div className="flex-1 bg-blue-100 h-96">
            <p></p>
          </div>

          <div className="w-20"></div>

          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Covid-19 Ring</h2>
            <p className="mb-3 text-lg font-normal text-gray-700">Explore our revolutionary line of smart rings designed to promote safety in a variety of situtions.</p>
            <Link href="/">
              <a className="rounded-md float-left py-1 px-2 -mx-2 -my-1 hover:bg-blue-50 border-blue-600 text-lg font-normal text-blue-500 flex items-center">
                <p className="mr-1">Learn more</p>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-center w-full mt-32">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Self-Defense Ring</h2>
            <p className="mb-3 text-lg font-normal text-gray-700">Explore our revolutionary line of smart rings designed to promote safety in a variety of situtions.</p>
            <Link href="/">
              <a className="rounded-md float-left py-1 px-2 -mx-2 -my-1 hover:bg-blue-50 border-blue-600 text-lg font-normal text-blue-500 flex items-center">
                <p className="mr-1">Learn more</p>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </Link>
          </div>

          <div className="w-20"></div>

          <div className="flex-1 bg-pink-100 h-96">
            <p></p>
          </div>
        </div>

        <div className="flex items-center w-full mt-32">
          <div className="flex-1 bg-yellow-100 h-96">
            <p></p>
          </div>

          <div className="w-20"></div>

          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Emergency Help Ring</h2>
            <p className="mb-3 text-lg font-normal text-gray-700">Explore our revolutionary line of smart rings designed to promote safety in a variety of situtions.</p>
            <Link href="/">
              <a className="rounded-md float-left py-1 px-2 -mx-2 -my-1 hover:bg-blue-50 border-blue-600 text-lg font-normal text-blue-500 flex items-center">
                <p className="mr-1">Learn more</p>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </Link>
          </div>
        </div>
        
      </div>

    </div>
  )
}
