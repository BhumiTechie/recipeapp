import React from 'react';
import Card from './Card';
import { useRecipeContext } from '../context/Recipecontext';

const Recipe = () => {
  const { recipes } = useRecipeContext();

  return (
    <div className="">
      <h1 className="text-center text-2xl font-semibold">--Recipes Here-</h1>
      <div className="recipe-cards mt-[5%]  flex flex-wrap p-5">
        {recipes.length > 0 ? (
          recipes.map((r) => <Card key={r.id} recipe={r} />)
        ) : (
          <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-10">
            No Recipe Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default Recipe;
