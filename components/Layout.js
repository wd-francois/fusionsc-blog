import Head from 'next/head'
import Header from './Header'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
        <Header />
         <main className='container mx-auto'>{children}</main>
      </div>
    )
}

Layout.defaultProps = {
  title: 'Welcome to Fusion Strength & Condioning',
  keywords: 'Fitness, Strength Training, Fatloss, Lean Muscle, Personal Training,',
  description: 'How to get strong, lean, and healthy',
}
