import Card from "./Card"
import React, {useContext} from 'react'
import {Link , useLocation} from "react-router-dom";


const Recipe = () => {
  const [recipe, setrecipes] = useContext(Recipecontext);
  const {pathname} = useLocation();
  console.log(recipe);
  return (
    <div className=" ">
      <h1 className="text-center text-2xl font-semibold">Recipes Here-</h1>
          <div className="recipe-cards mt-[5%]  flex flex-wrap p-5">
            <Card/>
            {recipe.length > 0 ? (
                    recipe.map((r) => <Card key={r.id} recipe={r} />)
                ) : (
                    <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-10">
                        No Recipe Found
                    </h1>
                )}
          </div>
    </div>
  )
}

export default Recipe