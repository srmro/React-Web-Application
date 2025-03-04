import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RecipeData from '../components/RecipeData.jsx';
import About from '../components/About.jsx';
import MyCookBook from '../components/MyCookBook.jsx';
import Instructions from '../components/Details.jsx';


const router = createBrowserRouter([
    {path:"/", element:<RecipeData/>},
    {path:"/about", element:<About/>},
    {path:"/MyCookBook", element:<MyCookBook/>},
    {path:"/Instructions/:id", element:<Instructions/>}
]);
createRoot(document.getElementById('root')).render(
   <>
       <App />
    <RouterProvider router={router} />

    </>
)
