import {
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom'


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ArticleList from '../pages/ArticleList'
import ArticlePage from '../pages/ArticlePage'

const routes = [
  {path:'/', element: <HomePage/>},
  {path:'/about', element: <AboutPage/>},
  {path:'/articles', element: <ArticleList/>},
  {path:'/articles/individual', element:<ArticlePage/>}
]

const router = createBrowserRouter(routes)

function App() {
  const [count, setCount] = useState(0)
  return (
     <RouterProvider router={router}/>
  )
}

export default App
