// Update.jsx

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../Actions/recipeAction"; // Correct import statement

const Update = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const { recipes } = useSelector((state) => state.recipeReducer);
    const recipe = recipes && recipes.find((r) => r.id == params.id);

    const [image, setImage] = useState(recipe?.image || "");
    const [title, setTitle] = useState(recipe?.title || "");
    const [description, setDescription] = useState(recipe?.description || "");
    const [ingredients, setIngredients] = useState(recipe?.ingredients || "");
    const [instructions, setInstructions] = useState(recipe?.instructions || "");

    const UpdateHandler = async (e) => {
        e.preventDefault();

        const updatedRecipe = {
            id: recipe.id,
            title,
            image,
            description,
            ingredients,
            instructions,
        };

        try {
            const copyRecipe = [...recipes];
            const recipeIndex = recipes.findIndex((r) => r.id == params.id);
            copyRecipe[recipeIndex] = updatedRecipe;

            localStorage.setItem("recipes", JSON.stringify(copyRecipe));
            await dispatch(asyncgetrecipies());
            toast.success("Recipe Updated Successfully!");
            navigate("/recipe");
        } catch (error) {
            console.error("Error updating recipe:", error);
            toast.error("Failed to update recipe.");
        }
    };

    return recipe ? (
        <form onSubmit={UpdateHandler} className="w-[70%] m-auto">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Update <br /> Existing Recipe
            </h1>
            <input
                onChange={(e) => setImage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
                required
            />
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
                required
            />
            <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Description..."
                required
            ></textarea>
            <textarea
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Ingredients (comma separated)..."
                required
            ></textarea>
            <textarea
                onChange={(e) => setInstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Instructions (comma separated)..."
                required
            ></textarea>
            <div className="w-full text-right">
                <button
                    type="submit"
                    className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200"
                >
                    Re-Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    ) : (
        <h1 className="w-full text-center text-4xl text-green-600 mt-10">
            Loading Recipe...
        </h1>
    );
};

export default Update;
