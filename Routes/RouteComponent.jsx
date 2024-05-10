import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/Components/Home'
import Recipe from '../src/Components/Recipe'
import Create from '../src/Components/Create'

const RouteComponent = () => {
  return (
	<div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path = "/create" element ={<Create/>}/>
      </Routes>
  </div>
  )
}

export default RouteComponent