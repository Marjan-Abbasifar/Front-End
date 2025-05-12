import React, { useEffect, useState } from 'react'
 import '../Styles/RecipeDetails.css'
import { useParams } from 'react-router-dom'
const RecipeDetails = () => {

  const[recipe, setRecipe]= useState('null')
  const {selectedId} =  useParams()

  useEffect(()=>{
    const fetchRecipeDetails = async () =>{
      try{
        const selectedMealUrl=  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedId}`
        const res = await fetch(selectedMealUrl)
        const data = await res.json()

         if(!data.meals){
             throw new Error()
             }
             setRecipe(data.meals[0])
         }

         
        catch(error) {
                alert('No recipe is available')
                
              }
    }
    fetchRecipeDetails()
  },[selectedId])




















  return (
    <div className='container'>
      <div className='recipe-details-container'>
      {recipe ? (
        <div>
        <h1>{recipe.strMeal}</h1>
      <div className='image-placeholder-details'>
        <img src={recipe.strMealThumb} alt="" />
      </div>
      <h2>Recipe:</h2>
      
         <p>
       {recipe.strInstructions}
      </p>
      </div>
        
      ) : (
        <p>Recipe is not available</p>
      )}
      
     
     
    </div>
     
    </div>
  )
}

export default RecipeDetails
