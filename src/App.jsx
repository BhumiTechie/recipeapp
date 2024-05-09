import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { NavLink } from 'react-router-dom';
import Recipe from './Components/Recipe';


const App = () => {
  return (
    <div>
      <Nav />
       < Home />
      
      <nav className="flex gap-5">
    <NavLink className={(e) => (e.isActive ? "text-white" : "")} to="/"></NavLink>
    <NavLink className={(e) => (e.isActive ? "text-white" : "")} to="/recipe"></NavLink>
    <NavLink className={(e) => (e.isActive ? "text-white" : "")} to="/create"></NavLink>
  </nav>
    </div>
  );
}

export default App;
