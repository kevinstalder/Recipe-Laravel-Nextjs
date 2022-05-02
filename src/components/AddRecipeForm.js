import React, {useState, useEffect} from 'react';
import axios from "../lib/axios";

function  RecipeAddForm({userID}) {
  const initialDataState = {
    title: "",
    prep_time: "",
    total_time: "",
    description: "",
    instructions: "",
    servings: "",
    serving_size: "",
    calories: "",
  };
const intialIngredientState = { name:"", value: "" }
  const [ingredients, setingredients] = useState([intialIngredientState]);
  const [data, setData] = useState([initialDataState]);
  const handleInputChange = (e, index) => {
    // const { name, value } = e.target;
    // let match = name.match( /\[.*\]/);
    // let list = [...ingredients];

    // if( match && value != '' ) { 
    //   match = match[0].replace('[', '').replace(']','')
    //   console.log('array')
    //   let key = name.replace(/\[.*\]/, '');
    //   console.log(key);
    //   console.log(match);
    //   if(list[key] == undefined){
    //     console.log('once')
    //     list[key] = [];
    //     list[key][match] = [];
    //   } 
    //   // let index = list[key].findIndex((el) => {
    //   //   console.log('match ' + match)
    //   //   console.log('id ' + el.id)
    //   //   return el.id=match
    //   // })
    //   // console.log(index)
      

    // list[key][match]['value'] = value;
    // list[key][match]['id'] = match;
    // setingredients(list);
    //   // if(index) {
    //   //   state[key][index]['value'] = value;
    //   // }
    //   // setState(state[key]);
    // } else {
    //   console.log('single')
    //   // setState({
    //   //   [name]: value
    //   // });
    // list[index][name] = value;
    // setingredients(list);
    // }
    // console.log(ingredients)

    
    const { name, value } = e.target;
    const list = [...ingredients];
    list[index]['name'] = name;
    list[index]['value'] = value;
    setingredients(list);
    console.log(ingredients);
  };
  const handleNormalInputChange = (e) => {
    const { name, value } = e.target;
    const list = [...data];
    list[0][e.target.name]= value
   setData(list)
    console.log(data);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...ingredients];
    list.splice(index, 1);
    setingredients(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setingredients([...ingredients, intialIngredientState]);
  };
  
  const handleSubmit =  (event) =>  {
    //  const { logout, user } = useAuth({ middleware: 'auth' })
    event.preventDefault();
    let test = process.env.NEXT_PUBLIC_BACKEND_URL;
    console.log(test);
    let body = {
      data: data,
      ingredients: ingredients,
      userID: userID
    }
    console.log(body)
    axios
      .post(test+'/api/recipe/',{
        body: body,
      })
      .then((response) => {
        console.log(response)
        if(response.data.status == "success"){
          const test = initialDataState
          setData([test])
          const test2 = intialIngredientState
          setingredients([test2]);

        }
      }).catch((error) => console.error(error));
    // const res =  fetch(
    //   test+'/api/recipe/',
    //   {
    //     body: JSON.stringify(body),
    //     headers: {
    //       // 'Content-Type': 'application/json',
    //       // 'credentials': true.
    //       // 'XSRF-TOKEN': cookie,
    //     },
    //     // mode: 'no-cors',
    //     method: 'POST'
    //   }
    // )

    // console.log(res);
    // const result = await res.json()
    // console.log(result);
    // result.user => 'Ada Lovelace'
  };
  const handleInputChange2 = (event)  => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let match = name.match( /\[.*\]/);

    if( match && value != '' ) { 
      match = match[0].replace('[', '').replace(']','')
      console.log('array')
      let key = name.replace(/\[.*\]/, '');
      console.log(key);
      console.log(match);
      if(state[key] == undefined){
        console.log('once')
        state[key] = [];
      } 
      let index = state[key].findIndex((el) => {
        console.log('match ' + match)
        console.log('id ' + el.id)
        return el.id=match
      })
      console.log(index)
      if(index) {
        state[key][index]['value'] = value;
      }
      // setState(state[key]);
    } else {
      console.log('single')
      setState({
        [name]: value
      });
    }
    console.log(ingredients)
  };
  // constructor(props) {
  //   super(props);
  //   let key = Math.floor(Math.random() * (9999999 - 10000) + 10000)
  //     state = {
  //       ingredients: [
  //         {
  //           id: key,
  //           value: ''
  //         }
  //       ],
  //     };
  
  //   console.log(state)
  //   handleSubmit = handleSubmit.bind(this);
  //   handleInputChange = handleInputChange.bind(this);
      
  // }

  // handle input change



  // addMoreFields() {
  //   // var newArr = [];
  //   // newArr[new Date().getTime()] = ''
  //   let key =  Math.floor(Math.random() * new Date().getTime())
  //   console.log(key)
  //   let obj = [{id: key, value: ''}] 
  //   setState({
  //     ingredients: ingredients.concat(obj) 
  //   })
  //   //   setState(prevState => ({
  //   //     ingredients: [
  //   //       ...prevState.ingredients,
  //   //       obj
  //   //     ]
  //   // }))
  //   console.log(state)
  // }
  // removeOther(index) {
  //   console.log('remove ' + index)
  //   let removeIndex = state.ingredients.indexOf(index);
  //   console.log('remove ' + removeIndex)
  //   console.log(state.ingredients)
  //   // let ingredRepeater = [
  //   //   ...state.ingredRepeater.slice(0, index, true),
  //   //   ...state.ingredRepeater.slice(index + 1)
  //   // ]
  //   // state.ingredRepeater[index].delete = true;
  //   // setState({
  //   //   ingredRepeater
  //   // })
  //   let ingredients = [
  //     ...state.ingredients.slice(0, removeIndex), 
  //     ...state.ingredients.slice(removeIndex + 1)
  //   ]
  //   console.log(ingredients)
  //   // setState({
  //   //   ingredients
  //   // })
  //   setState(prevState => ({
  //     state: {
  //       ingredients: ingredients
  //   }}))
    
  // }


  // render() {

  return (
    <form onSubmit={handleSubmit}>
      {userID}
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-2 gap-2 w-full">
            <div className="recipe-item col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
              <input required type="text" name="title" id="title" value={data[0].title} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={handleNormalInputChange}/>
            </div>

            <div className="recipe-item">
              <label htmlFor="prep-time" className="block text-sm font-medium text-gray-700">Prep Time</label>
              <input required type="text" name="prep_time" id="prep-time" value={data[0].prep_time} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={handleNormalInputChange}/>
            </div>
            <div className="recipe-item">
              <label htmlFor="total-time" className="block text-sm font-medium text-gray-700">Total Time</label>
              <input required type="text" name="total_time" id="total-time" value={data[0].total_time} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={handleNormalInputChange}/>
            </div>

            <div className="recipe-item col-span-2">
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients -- {ingredients.length }</label>
              { ingredients.map((item, i) => {
                return (
                <div key={i} className="flex items-center">
                  <div className="flex-grow">
                    <input required type="text" name={ 'ingredients-' + i} id="ingredients"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  value={item.value} onChange={e => handleInputChange(e, i)}/>
                  </div> 
                  <div className="mr-2 ml-6" onClick={handleAddClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div> 
                  
                  { ingredients.length != 1 ? (
                    <div onClick={() => handleRemoveClick(i)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                      ) : null
                  }
                </div>
                )
              })
            }
              
            </div>
            <div className="recipe-item col-span-2">
              <label htmlFor="recipe-description" className="block text-sm font-medium text-gray-700">Recipe Description</label>
              <textarea required name="description" id="description" value={data[0].description} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-32" onChange={handleNormalInputChange}></textarea>
            </div>
            <div className="recipe-item col-span-2">
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Directions</label>
              <textarea required type="text" name="instructions" id="instructions" value={data[0].instructions} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-32" onChange={handleNormalInputChange}/>
            </div>
            <div className="p-4 bg-gray-100 col-span-2">
              <div className="text-gray-900">
                <h3>Nutritional Information</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="recipe-item">
                  <label htmlFor="servings" className="block text-sm font-medium text-gray-700">Servings</label>
                  <input required type="text" name="servings" id="servings" value={data[0].servings} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={handleNormalInputChange}/>
                </div>
                <div className="recipe-item">
                  <label htmlFor="serving-size" className="block text-sm font-medium text-gray-700">Serving Size</label>
                  <input required type="text" name="serving_size" id="serving-size" value={data[0].serving_size} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"  onChange={handleNormalInputChange} />
                </div>
                <div className="recipe-item">
                  <label htmlFor="calories" className="block text-sm font-medium text-gray-700">Calories</label>
                  <input required type="text" name="calories" id="calories" value={data[0].calories} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={handleNormalInputChange}
 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
        </div>
      </div>
    </form>
    );
    
  // }
}


export default RecipeAddForm;