import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>tuRing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <div className="m-auto max-w-5xl px-10 mb-40 pt-16">

        <div className="flex justify-center items-center w-full mt-24">

          <div className="flex-1 text-left md:text-center md:max-w-lg">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">tuRing</h2>
            <p className="text-lg font-normal text-gray-700"><b>Safety at your fingertips.</b> Explore our revolutionary line of smart rings designed to promote safety in a variety of situations.</p>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center w-full mt-20 md:mt-32">
          <div className="flex-1 w-full bg-blue-100 h-64 md:h-96">
            <p></p>
          </div>

          <div className="w-20"></div>

          <div className="flex-1 mt-10 md:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Covid-19 Ring</h2>
            <p className="mb-3 text-lg font-normal text-gray-700">Stay safe during the pandemic with social distance detection and automatic hand sanitizer dispensing.</p>
            <Link href="/covid">
              <a className="rounded-md float-left py-1 px-2 -mx-2 -my-1 hover:bg-blue-50 border-blue-600 text-lg font-normal text-blue-500 flex items-center">
                <p className="mr-1">Learn more</p>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center w-full mt-20 md:mt-32">
          <div className="flex-1 w-full bg-pink-100 h-64 md:h-96">
            <p></p>
          </div>

          <div className="w-20"></div>

          <div className="flex-1 mt-10 md:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Self-Defense Ring</h2>
            <p className="mb-3 text-lg font-normal text-gray-700">With pepper spray and GPS tracking, you can have peace of mind when you're in an unsure situation.</p>
            <Link href="/selfdefense">
              <a className="rounded-md float-left py-1 px-2 -mx-2 -my-1 hover:bg-blue-50 border-blue-600 text-lg font-normal text-blue-500 flex items-center">
                <p className="mr-1">Learn more</p>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </a>
            </Link>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center w-full mt-20 md:mt-32">
          <div className="flex-1 w-full bg-yellow-100 h-64 md:h-96">
            <p></p>
          </div>

          <div className="w-20"></div>

          <div className="flex-1 mt-10 md:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Emergency Help Ring</h2>
            <p className="mb-3 text-lg font-normal text-gray-700">Automatically contact medical assistance when the ring detects a medical issue like a fall or heart attack.</p>
            <Link href="/emergencyhelp">
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
