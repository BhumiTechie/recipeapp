import React, { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(JSON.parse(localStorage.getItem("recipes")) || []);
    }, []);

    return (
        <RecipeContext.Provider value={[recipes, setRecipes]}>
            {props.children}
        </RecipeContext.Provider>
    );
};
