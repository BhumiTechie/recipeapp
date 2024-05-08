import React from 'react'
import RecipesIn from './RecipesIn'
import Create from './Create'

const Recipe = () => {
  return (
	<div>
	<div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        <h1 className="text-3xl font-semibold text-center text-gray-800 py-6 bg-gradient-to-r from-yellow-300 to-red-400">Here Recipes</h1>
		<RecipesIn/>
	
	</div>
	</div>
    </div>	
  )
}

export default Recipe