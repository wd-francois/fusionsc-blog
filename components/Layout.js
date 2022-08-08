import Head from 'next/head'
import Footer from '@/components/Footer'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
         <main className='container mx-auto max-w-max'>{children}</main>
      </div>
    )
}

Layout.defaultProps = {
  title: 'Welcome to Fusion Strength & Condioning',
  keywords: 'Fitness, Strength Training, Fatloss, Lean Muscle, Personal Training,',
  description: 'How to get strong, lean, and healthy',
}

