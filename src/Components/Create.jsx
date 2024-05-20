import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: nanoid(),
      image,
      title,
      description,
      ingredients: ingredients.split(",").map(ingredient => ingredient.trim()),
      instructions: instructions.split(",").map(instruction => instruction.trim())
    };

    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    toast.success("Recipe created successfully!!");
    navigate("/recipe");
  };

  return (
    <form onSubmit={SubmitHandler} className="w-[70%] m-auto pb-5">
      <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
        Create <br /> New Recipe
      </h1>
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        type="url"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Image URL"
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Name"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Description..."
      ></textarea>
      <textarea
        onChange={(e) => setIngredients(e.target.value)}
        value={ingredients}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Ingredients (use commas to separate)..."
      ></textarea>
      <textarea
        onChange={(e) => setInstructions(e.target.value)}
        value={instructions}
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="Recipe Instructions (use commas to separate)..."
      ></textarea>
      <div className="w-full text-right">
        <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
          Publish Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
};

export default Create;
