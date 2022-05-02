import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Modal from '@/components/Modal'

function  RecipeCard({data}) {
const { user } = useAuth({ middleware: 'guest' })

const [modal, setModal] = useState(false);
const  addFavorite = (user) => {
    console.log('clicked') 
    console.log(user == undefined) 
    if(user == undefined) {
      console.log('logged out') ;
      setModal(true);
    } else {
      console.log('logged in') 
    }
  }
//  const [ingredients, setingredients] = useState([intialIngredientState]);
  return (
    <div key={data.title + '-' + data.id} className="recipe-card bg-white rounded-md overflow-hidden relative shadow-md">
      {user?.id}
      <div>
        <img className="w-full" src="https://picsum.photos/600/200/" alt="Recipe Title" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl text-teal-700">{data.title}</h2>
        <div className="flex justify-between mt-4 mb-4 text-gray-500">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="ml-1 lg:text-xl">{data.total_time}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            <span className="ml-1 lg:text-xl">{JSON.parse(data.ingredients).length}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span className="ml-1 lg:text-xl">{JSON.parse(data.nutritional).servingSize}</span>
          </div>
        </div>
        <p className="mb-4 text-gray-500">{data.description}</p>
          <Link href={"/recipes/"+data.id}>
            <button className="text-white bg-teal-700 hover:bg-teal-800  p-4 rounded-md w-full uppercase">View Recipe</button>
          </Link>
      </div>
      <div className="absolute top-0 right-0 mt-4 mr-4 bg-teal-700 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase">
        <span>Medium</span>
      </div>
      <div className="absolute top-0 left-0 mt-2 mr-4 text-white rounded-full pt-1 pb-1 pl-4 pr-5 text-xs uppercase shadow-med"  onClick={ () => { addFavorite(user) }  }>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
      {
        modal == true ? 
        <Modal onModalChange={setModal} type="alert" title="Need to register" content="You need to register in order to favorite this." /> 
        : ''
      }
    </div>
  );

  
    
}




export default RecipeCard;