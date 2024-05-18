import  { createContext, useEffect, useState } from 'react'

export const Recipecontext = createContext(null)

const Recipecontext = (props) => {
	const [recipe, setrecipes] = useState([]);

    useEffect(()=>{
		setrecipes(JSON.parse(localStorage.getItem("recipes"))|| []);
	}, []);

   return (
	  <Recipecontext.Provider value={[recipe, setrecipes]}>
            {props.children}
	  </Recipecontext.Provider>
  )
}

export default Recipecontext