import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import {data} from '../data'
import RecipeGrid from '@/components/RecipeGrid'
import GuestLayout from '@/components/Layouts/GuestLayout'

export default function Home({results}) {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <GuestLayout>
            <Head>
                <title>Laravel</title>
            </Head> 

            <div className="relative flex items-top justify-center bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <RecipeGrid data={results}></RecipeGrid>
                </div>
            </div>
        </GuestLayout>
    )
}

export const getStaticProps = async ({ params }) => {
   return {
     props: { results: data },
   };
};