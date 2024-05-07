import React from 'react';

const RecipesIn = () => {
  return (
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* Recipe Card */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Chai Recipe</h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Ingredients</h3>
                <ul className="list-disc pl-5">
                  <li>1 cup water</li>
                  <li>1 tsp tea leaves</li>
                  <li>2 tbsp milk</li>
                  <li>1 tsp sugar (optional)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Instructions</h3>
                <ol className="list-decimal pl-5">
                  <li>Boil water in a pan.</li>
                  <li>Add tea leaves and boil for 2 minutes.</li>
                  <li>Add milk and sugar (if using) and boil for another 2 minutes.</li>
                  <li>Strain into a cup and serve hot.</li>
                </ol>
              </div>
            </div>
          </div>
          {/* Recipe Card End */}

          {/* Add more recipe cards as needed */}
        </div>
      
  );
}

export default RecipesIn;
