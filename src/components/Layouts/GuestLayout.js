import Head from 'next/head'
import Footer  from '@/components/Footer'
import Header  from '@/components/Header'
import Modal  from '@/components/Modal'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head> 
                <title>Laravel</title>
            </Head>

            <Header />

            <div className="font-sans text-gray-900 antialiased">
                {children}
            </div>
            <Footer ></Footer>
        </div>
    )
}

export default GuestLayout
