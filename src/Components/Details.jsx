import React from 'react'
import { Link } from 'react-router-dom'
import Recipe from './Recipe'

const Details = () => {
  return (
	<div>
       <Link to={<Recipe/>}></Link>
	</div>
  )
}

export default Details