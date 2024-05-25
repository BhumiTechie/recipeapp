
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {asyncgetrecipe} from "../Actions/recipeAction"

const Details = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    
    useEffect(() => {
        dispatch(asyncgetrecipe());
    }, [dispatch]);

    const { recipes } = useSelector((state) => state.recipeReducer);
    const recipe = recipes.find((r) => r.id === parseInt(id));

    const DeleteHandler = () => {
        const updatedRecipes = recipes.filter((r) => r.id !== parseInt(id));
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        dispatch(asyncgetrecipe());
        toast.success("Recipe Deleted Successfully!");
        navigate("/recipe");
    };

    return recipe ? (
        <div className="w-[80%] m-auto p-5">
            <Link to="/recipe" className="text-3xl ri-arrow-left-line"></Link>
            <div className="details w-full flex h-[75vh] mt-3">
                <div className="dets w-[50%] p-[3%] shadow">
                    <img src={recipe.image} alt={recipe.title} />
                    <h1 className="text-xl mb-5 mt-[10%] text-center">{recipe.title}</h1>
                    <p className="text-zinc-400">{recipe.description}</p>
                    <div className="flex justify-between py-10 px-5">
                        <Link to={`/update-recipe/${id}`} className="text-blue-400 border-blue-400 border py-2 px-5">Update</Link>
                        <button onClick={DeleteHandler} className="text-red-400 border-red-400 border py-2 px-5">Delete</button>
                    </div>
                </div>
                <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
                    <h1 className="text-3xl border-b border-green-600 text-green-600">Ingredients</h1>
                    <ul className="text-zinc-600 list-disc p-3">
                        {recipe.ingredients.split(",").map((ingredient, index) => (
                            <li key={index} className="list-item text-sm mb-2">{ingredient}</li>
                        ))}
                    </ul>
                    <h1 className="text-3xl border-b border-green-600 text-green-600">Instructions</h1>
                    <ul className="text-zinc-600 list-decimal p-3">
                        {recipe.instructions.split(".").map((instruction, index) => (
                            <li key={index} className="list-item text-sm mb-2">{instruction}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) : (
        <h1 className="w-full text-center text-4xl text-green-600 mt-10">Loading Recipe...</h1>
    );
};

export default Details;
