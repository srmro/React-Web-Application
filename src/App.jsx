import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import '../App.css';
import NavBar from '../components/NavBar';
import RecipeData from '../components/RecipeData'
import MyCookBook from '../components/MyCookBook';
import Details from '../components/Details';


function App() {

  return (
  <div>
<NavBar />
<Routes>

<Route path="/" element= {<RecipeData/>} />
<Route path="/about" element = {<About/>} />
<Route path="/mycookbook" element={<MyCookBook/>}/>
<Route path="/details/:id" element={<Details/>} />

</Routes>

  </div>
  )
}

export default App
