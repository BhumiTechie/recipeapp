import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNavVisible(true);
    }, 100);
  }, []);

  return (
    <div>
      <nav className={`flex items-center justify-between px-4 py-2 ${navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'} transition-all duration-500 ease-in-out`}>
        <img className={`w-[6%] mx-16 ${navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'} transition-all duration-600 ease-in-out`} src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg" alt="" />
        <div className="flex flex-row gap-4 font-bold mr-64"> 
          <NavLink to="/" activeClassName="text-white" className="mr-4">
            Home
          </NavLink>
          <NavLink to="/recipe" activeClassName="text-white" className="mr-4">
            Recipes
          </NavLink>
          <NavLink to="/create" activeClassName="text-white" className="mr-4">
            Create 
          </NavLink>
          <NavLink to="/contact" activeClassName="text-white" className="mr-4">
            Contact
          </NavLink>
          <div className="flex justify-end">
            <img className='w-[6%]' src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/menu.png" alt="" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
