import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'

export default function HomePage({ posts }) {
  return (
  
    <Layout title= 'HomePage Fusion Strength & Conditioning'>
      <Navbar/>
        <Hero heading='Achieve Your Goals' message='If you want to burn fat, build muscle, get stronger and live better you have come to the right place.'/>
        <h1 className='text-5xl border-4 p-5 font-bold'>Latest Blog Posts</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
          All Posts
        </a>
      </Link>
            <section className="pt-4 bg-[#F3F4F6]">
      <h2 className="text-5xl font-bold text-center p-14">Services</h2>
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <Link  href='/services'>
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
          <Image
          src='/images/studio1.jpg'
          alt=''
          height={420}
          width={600}
          className='mb-4 rounded'
        />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     In Studio Personal Training
                     </a>
                  </h3>
                    <a
                     href="javascript:void(0)"
                     className="
                     inline-block
                     px-7
                     border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
                     ">
                  View Details
                  </a>
               </div>
            </div>
         </div>
         </Link>
         <Link href='/services'>
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
          <Image
          src='/images/mobile.pt.jpg'
          alt=''
          height={420}
          width={600}
          className='mb-4 rounded'
        />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
               <h3>
                     <a
                        href="javascript:void(0)"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     Mobile Personal Training
                     </a>
                  </h3>
                  <a
                     href="javascript:void(0)"
                     className="
                     inline-block
                     px-7
                     border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
                     ">
                  View Details
                  </a>
               </div>
            </div>
         </div>
         </Link>
         <Link href='/services'>   
         <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
          <Image
          src='/images/online4.jpg'
          alt=''
          height={420}
          width={600}
          className='mb-4 rounded'
        />
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
               <h3>
                     <a
                        href="href=/services"
                        className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                    Online Personal Training
                     </a>
                  </h3>
                  <a
                     href="javascript:void(0)"
                     className="
                     inline-block
                     px-7
                     border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
                     ">
                  View Details
                  </a>
               </div>
            </div>
         </div>
         </Link>
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

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 3),
    },
  }
}