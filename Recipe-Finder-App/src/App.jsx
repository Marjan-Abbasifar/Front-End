import RecipeCard from './Components/RecipeCard'
import RecipeDetails from './Components/RecipeDetails'
import { Routes, Route } from 'react-router-dom'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<RecipeCard/>}/>
      <Route path='/RecipeDetails/:id' element={<RecipeDetails/>}/>
    </Routes>
  )


}

export default App
