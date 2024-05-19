import React from 'react';
import Nav from './Components/Nav';
import { NavLink } from 'react-router-dom';
import RouteComponent from '../Routes/RouteComponent';




const App = () => {
  return (
    <div>
      <Nav />
      <RouteComponent/>
      
      <nav className="flex gap-5">
    <NavLink className={(e) => (e.isActive ? "text-white" : "")} to="/"></NavLink>
    <NavLink className={(e) => (e.isActive ? "text-white" : "")} to="/recipe"></NavLink>
    <NavLink className={(e) => (e.isActive ? "text-white" : "")} to="/create"></NavLink>
  </nav>
    </div>
  );
}

export default App;
