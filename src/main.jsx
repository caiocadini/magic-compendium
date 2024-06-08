import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import HomePage from './pages/HomePage'
import CompendiumPage from './pages/CompendiumPage'
import './index.css'

const router = createBrowserRouter([{
  path: "/", 
  element: <App/>,
  children: [
    {path: "/", element: <HomePage/>},
    {path: "compendium", element: <CompendiumPage/>}
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
