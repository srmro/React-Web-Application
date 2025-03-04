import RecipeData from '../components/RecipeData'
import '../App.css';
import Header from '../components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Instructions from '../components/Details';

function App() {

  return (
    <div>
      {/* <Header />
<RecipeData /> */}

<Instructions/>

    </div>

  )
}

export default App
