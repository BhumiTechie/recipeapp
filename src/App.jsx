import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Component } from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Layout from './Components/Layout'
import Recipe from "./Components/Recipe";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Contact from "./Components/Contact";
import { useDispatch } from "react-redux";
import { asyncgetrecipies } from "./Actions/recipeAction";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncgetrecipies());
    }, []);

    return (
        <div className="w-[80%] m-auto ">
            <Nav />

            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/update-recipe/:id" element={<Update />} />
                <Route path="/recipe" element={<Recipe />} />
                <Route path="/recipe/:id" element={<Details />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;