import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecipeProvider } from "./context/Recipecontext.jsx"; 
import { store } from './store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <RecipeProvider>
       <Provider store={store}>
            <App />
            <ToastContainer />
            </Provider>
        </RecipeProvider>
    </BrowserRouter>
);
