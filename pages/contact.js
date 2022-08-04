import Link from 'next/link'
import Layout from '@/components/Layout'
import Navbar2 from '@/components/Navbar2'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [agreed, setAgreed] = useState(false)

  return (
    <Layout title= 'Contact Fusion Strength & Conditioning'>
     <Navbar2 />
      <div className=   "bg-gray-200 mt-4 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className= "relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-600" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        
        <div className="mt-4 text-center">
           <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-6">
          For any equiries, or to book your FREE first personal training session with no obligation, contact us here.
          </p>
        </div>
        <div className="flex items-center justify-center mt-6">
        <div className="bg-white items-center rounded-lg max-w-sm">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.0155303724678!2d144.87826851531324!3d-37.62532247978708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad650ce1c2c185d%3A0x491319ac06091004!2s27%20Lucy%20Cres%2C%20Greenvale%20VIC%203059!5e0!3m2!1sen!2sau!4v1636948397854!5m2!1sen!2sau" className="w-full h-full"></iframe>
        <div className="bg-white relative flex flex-wrap py-6">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm">ADDRESS</h2>
            <p className="leading-relaxed">27 Lucy Cres, Greenvale, Melbourne, Victoria, Australia, 3059</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm">EMAIL</h2>
            <a className="text-orange-500 leading-relaxed">pt.fusionsc@gmail.com</a>
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mt-4">PHONE</h2>
            <p className="leading-relaxed">0416423136</p>
          </div>
        </div>
        </div>
    </div>
        <div className="mt-12">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div className="sm:col-span-2">
              <label htmlFor="first-name" className="block text-sm font-medium">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
                 <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
              <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>
                <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Contact Us
              </button>
            </div>
          </form>
        </div>
      
      </div>
    </div>
    <footer className="bg-white">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                 <div className="px-5 py-2"></div>
                 <div className="px-5 py-2">
            <Link href='/blog'className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Blog
                </Link>
            </div>
            <div className="px-5 py-2">
            <Link href='/services'className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Services
                </Link>
            </div>
            <div className="px-5 py-2">
            <Link href='/about'className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    About
                </Link>
            </div>
            <div className="px-5 py-2">
            <Link href='/contact'className="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Contact
                </Link>
            </div>
                  </nav>
        <div className="flex justify-center mt-8 space-x-6">
                     <a href="https://www.instagram.com/francois.pt/?hl=en" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                </svg>
            </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2022 F-Web-Dev, Inc. All rights reserved.
        </p>
    </div>
  </footer>
    </Layout>
  )
}




