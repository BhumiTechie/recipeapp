import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecipeProvider } from "./context/Recipecontext.jsx"; // Use named export

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <RecipeProvider>
            <App />
            <ToastContainer />
        </RecipeProvider>
    </BrowserRouter>
);
