import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
	<div >
		<nav className="flex items-center justify-between px-4 py-2 bg-gray-200">
    <img className="w-[6%] mx-16" src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg" alt="" />
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
  <div class="flex justify-end">
  <img class='w-[6%]' src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/menu.png" alt="" />
</div>


</div>
       
    </nav>
    <img class='w-[50%] py-11 px-5 rounded-full  float-right mr-4' src="https://images.unsplash.com/photo-1539136788836-5699e78bfc75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1 className='text-7xl tracking-wider text-center text-green-800 font-[Voyage] font-bold py-11 px-11'>Healthy Food <br/> Wealthy Food</h1>
	</div>
  )
}

export default Nav