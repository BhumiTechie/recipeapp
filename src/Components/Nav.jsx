import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNavVisible(true);
    }, 100);
    setTimeout(() => {
      setImageVisible(true);
    }, 300);
    setTimeout(() => {
      setTitleVisible(true);
    }, 500);
    setTimeout(() => {
      setTextVisible(true);
    }, 700);
    setTimeout(() => {
      setButtonVisible(true);
    }, 900);
  }, []);

  return (
    <div>
      <nav className={`flex items-center justify-between px-4 py-2  ${navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'} transition-all duration-500 ease-in-out`}>
        <img className={`w-[6%] mx-16 ${navVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'} transition-all duration-600 ease-in-out`} src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg" alt="" />
        <div className="flex flex-row gap-4 font-bold mr-64"> 
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/recipes" className="mr-4">
            Recipes
          </Link>
          <Link to="/create" className="mr-4">
            Create 
          </Link>
          <Link to="/contact" className="mr-4">
            Contact
          </Link>
          <div className="flex justify-end">
            <img className='w-[6%]' src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/menu.png" alt="" />
          </div>
        </div>
      </nav>
      <img className={`w-[50%] py-11 px-5 rounded-full float-right mr-4 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[20px]'} transition-all duration-500 ease-in-out`} src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1 className={`text-7xl tracking-wider text-center font-[Voyage] text-green-800 font-bold py-20 px-20 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'} transition-all duration-500 ease-in-out`}>Healthy Food <br/> Wealthy Food !!</h1>
      <p className={`px-40 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'} transition-all duration-500 ease-in-out`}>The Foundational guide to balancing <br/> Your Nutritional Diets and Everyday<br/>Lifestyle</p>
      <Link to="/recipes">
        <button className={`absolute left-36 my-5 bg-gradient-to-r from-sky-500 to-green-500 hover:from-red-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg transform transition duration-300 hover:scale-105 ${buttonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'} transition-all duration-500 ease-in-out`}>Get Started</button>
      </Link>
    </div>
  );
}

export default Nav;
