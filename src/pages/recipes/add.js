import AppLayout from '@/components/Layouts/AppLayout'
import AddRecipeForm from '@/components/AddRecipeForm'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'

const Dashboard = () => {
  const { user } = useAuth({ middleware: 'auth' })
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Add Recipe
                </h2>
            }>

            <Head>
                <title>{process.env.NEXT_PUBLIC_SITE_NAME} - Dashboard</title> 
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Add recipe here 
                        </div>
                        <AddRecipeForm userID={user?.id}></AddRecipeForm> 
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}


export default Dashboard
