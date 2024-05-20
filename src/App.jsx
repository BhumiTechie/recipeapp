import React from 'react';
import Nav from './Components/Nav';
import { Route, Routes } from "react-router-dom";
import RouteComponent from '../Routes/RouteComponent';
import Home from './Components/Home';
import Recipe from './Components/Recipe';
import Create from './Components/Create';
import Details from './Components/Details';
import Update from './Components/Update';
import Layout from './Components/Layout';
import Contact from './Components/Contact';

import { store } from './store/store';



const App = () => {
  return (
    <div>
      <Nav />
      <RouteComponent/>
      
      <Routes>
                <Route path="/layout" element={<Layout />} />
                <Route path="/create-recipe" element={<Create />} />
                <Route path="/update-recipe/:id" element={<Update />} />
                <Route path="/recipes" element={<Recipe />} />
                <Route path="/recipes/:id" element={<Details />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
    </div>
  );
}

export default App;
