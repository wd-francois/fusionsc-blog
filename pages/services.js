import Link from 'next/link'
import Layout from '@/components/Layout'
import Navbar2 from '@/components/Navbar2';
import Image from 'next/image'

export default function ServicesPage() {
  return (
    
    <Layout title='Services Fusion Strength & Conditioning'>
      <Navbar2 />
      <section className="mt-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
      <div className="text-center pb-4">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl font-heading">
        In Studio Personal Training
      </h1>
      <p className="text-base">
        Everything you need to achieve your goals in a private, safe non-intimidating environment.
      </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/studio1.jpg' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/studio3.jpg' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/studio14.jpg' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/studio16.jpg' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
   </div>
</section>
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
      <div className="text-center pb-4">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl font-heading">
      Mobile Personal Training
      </h1>
      <p className="text-base">
      Training in the convenience and privacy of your home or local park.
      </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/mobile8.jpg' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/mobile5.png' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/mobile4.png' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/mobile3.png' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
   </div>
</section>
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
      <div className="text-center pb-4">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl font-heading">
      Online Training
      </h1>
      <p className="text-base">
      Personalised online training & nutrition coaching.
      </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/online4.jpg' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/online2.png' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/online1.jpg' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
      <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full h-80">
          <Image src='/images/online6.jpg' width={600} height={600} alt="personal trainer profile"/>
          </div>
      </div>
   </div>
</section>
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