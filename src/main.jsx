import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Recipecontext from './context/Recipecontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
   <Recipecontext>
    <App />
    <ToastContainer/>
    </Recipecontext>
</BrowserRouter>
)
