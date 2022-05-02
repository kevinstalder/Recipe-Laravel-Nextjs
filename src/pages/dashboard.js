import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import {data} from '../data'
import RecipeGrid from '@/components/RecipeGrid'
import useSWR from 'swr'
import axios from "../lib/axios";
import { useEffect } from 'react'

const Dashboard = ({ results }) => {
  const {  user } = useAuth({ middleware: 'auth' })
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head> 
                <title>Laravel - Dashboard</title>
            </Head>
            <div className="py-12"> 
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8  mb-6">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                            <p>Hello, {user?.name}</p> 
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                          <h2 className="text-xl font-bold mb-6">Recipes you added:</h2>
                          {
                            user ? console.log(user) : ''}
                          {
                            user ? (
                              <RecipeGrid data={getUserResults(results, user.id)}></RecipeGrid>
                            ) : ''
                            
                          }
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
// Dashboard.getInitialProps = async (context) =>{
//   let test = process.env.NEXT_PUBLIC_BACKEND_URL;

//   console.log(user)
// //  if(req){
// //    // called on server
// //    // here you can check for that user object
// //  } else {
// //   // called on client
// //  }
// return context;
// };

const getUserResults = (results, user) => {
  console.log('user');
  console.log(user);  
  const output = results.filter((item) => {
    return item.userID == user
  })
  return output
}
// export const getServerSideProps = withSession(async function ({ req, res }) {
//   const { user } = req.session
// console.log(user)
//   // if (!user) {
//   //   return {
//   //     redirect: {
//   //       destination: '/login',
//   //       permanent: false,
//   //     },
//   //   }
//   // }

//   return {
//     props: { user },
//   }
// })
 
export const getStaticProps = async ({ params }) => {
  
  // console.log(data);
 
  // data = data.filter((item) => {
  //   return item.id == user.id
  // })

   return {
     props: { results: data },
   };
};
// export async function getServerSideProps(context) {
//    let test = process.env.NEXT_PUBLIC_BACKEND_URL;
//   const res = await fetch(test+'/api/recipes',
//   // const res = await fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all',
//   {
//     method: 'GET',
//     mode:'cors',
//     // headers: {
//     //   // update with your user-agent
//     //   'User-Agent': '*',
//     //   Accept: 'application/json; charset=UTF-8',
//     // }
//   }) 
//   const data = await res.json() 
//   console.log(data);
//   // let data = await axios.get(test+'/api/recipes/')
//   //           .then(function (response) {
//   //               console.log(response); 
//   //               return response.data
//   //           })
//   //           .catch(function (error) {
//   //             console.log(error); 
//   //               return {}
//   //           });
//   // console.log(data)

//   // if (!data) {
//   //   return {
//   //     notFound: true,
//   //   }
//   // }

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }


// export async function getServerSideProps() {
//   // Instead of the file system,
//   // fetch post data from an external API endpoint
//   let test = process.env.NEXT_PUBLIC_BACKEND_URL;
// let result = await axios.get(test+'/api/recipes', {})
//             .then(function (response) {
//                 console.log(response.data); 
//                 return response.data
//             })
//             .catch(function (error) {
//                 return {}
//             });
// console.log(result);
//   // let data =  axios
//   //     .get(test+'/api/recipes')
//   //     .then((response) => {
//   //       console.log(response)
//   //     }).catch((error) => console.error(error));
//   // console.log(data)


//   // const res = await fetch(test+'/api/recipes',{
//   //     method: 'GET',
//   //     mode:'cors',
//   //   })
//   //   const data = await res.json()        
  
//     // Pass data to the page via props
//     return { props: { result } }
  
// }

export default Dashboard
