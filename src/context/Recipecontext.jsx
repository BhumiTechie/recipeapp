import React, { createContext, useContext, useState } from 'react';


const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem('recipes')) || []
  );

  const addRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};


export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export default RecipeContext;
