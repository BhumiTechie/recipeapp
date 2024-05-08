import React from 'react';

const Create = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-stone-400">
      <div className="w-1/2 h-1/2  bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-8">Create New Recipe</h1>
        <div className="mb-6">
          <label htmlFor="recipeImage" className="block text-gray-700 font-semibold mb-2">Recipe Image URL:</label>
          <input type="text" id="recipeImage" className="w-full rounded-md border-gray-300 px-4 py-3 focus:outline-none focus:border-red-500 placeholder-gray-400" placeholder="e.g., https://example.com/recipe.jpg" />
        </div>
        <div className="mb-6">
          <label htmlFor="recipeName" className="block text-gray-700 font-semibold mb-2">Recipe Name:</label>
          <input type="text" id="recipeName" className="w-full rounded-md border-gray-300 px-4 py-3 focus:outline-none focus:border-red-500 placeholder-gray-400" placeholder="Enter Recipe Name" />
        </div>
        <div className="mb-6">
          <label htmlFor="recipeDescription" className="block text-gray-700 font-semibold mb-2">Recipe Description:</label>
          <textarea id="recipeDescription" className="w-full rounded-md border-gray-300 px-4 py-3 focus:outline-none focus:border-red-500 placeholder-gray-400" rows="4" placeholder="Describe your recipe in a few words"></textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="recipeIngredients" className="block text-gray-700 font-semibold mb-2">Recipe Ingredients:</label>
          <textarea id="recipeIngredients" className="w-full rounded-md border-gray-300 px-4 py-3 focus:outline-none focus:border-red-500 placeholder-gray-400" rows="4" placeholder="List the ingredients here, each on a separate line"></textarea>
        </div>
        <div className="flex justify-center">
          <button className="bg-red-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-md hover:shadow-lg">Create Recipe</button>
        </div>
      </div>
    </div>
  );
}

export default Create;
