import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Recipe = () => {
    const { recipes } = useSelector((state) => state.recipeReducer);
    const { pathname } = useLocation();

    return (
        <div className="bg-[#d4a373] min-h-screen">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-center text-4xl md:text-5xl font-bold mb-8 text-white">
                    <span role="img" aria-label="Cooking">🍳</span> OUR RECIPES
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {recipes.length > 0 ? (
                        recipes.map((r) => <Card key={r.id} recipe={r} />)
                    ) : (
                        <h1 className="w-full text-white text-3xl md:text-4xl font-extrabold text-center mt-10">
                            No Recipe Found
                        </h1>
                    )}
                </div>
                {pathname === "/recipe" && (
                    <Link
                        to="/create"
                        className="absolute bottom-10 left-10 py-3 px-6 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center gap-x-3 cursor-pointer transition-colors duration-300"
                    >
                        <i className="text-3xl text-white ri-add-box-line"></i>
                        Create Recipe
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Recipe;
