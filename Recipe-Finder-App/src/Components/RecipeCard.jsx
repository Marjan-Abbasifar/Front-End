import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/RecipeCard.css'

const RecipeCard = () => {
    const[recipes, setRecipes] = useState({})
    const[query, setQuery] = useState('')
    const[searchType, setSearchType] = useState('name')
    const navigate = useNavigate()




    
    

    const handleInputChange = (e) =>{
        setQuery(e.target.value)
    }


    const search = async (e) =>{
        e.preventDefault();
        //console.log('function test');
        try{
             //const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
             let url = ''
             if( searchType === 'name'){
                url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
             } 
             
             else if (searchType=== 'ingredient') {
                url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
             }
             const res = await fetch(url)
             const SearchData = await res.json()
             console.log(SearchData);
             
             if(!SearchData.meals){
             throw new Error()
             }

             setRecipes(SearchData)
             setQuery('')
           }

        catch {
                alert('Please enter a valid value')
                //console.log('error');
              }
             
       } 
       

  const handleRecipeId = (id) =>{
    navigate(`/RecipeDetails/${id}`)
  }
    





return (
    <div className='container'>
        <div className='meal-card-container'>
            <div className='theme'>
              <i className='fa-regular fa-moon'></i>
              <i  className='fa-regular fa-sun'></i>
            </div>
            <h1>Recipe Finder</h1>
            <form className='search' onSubmit={search}>
                <div className='search-bar'>
                    <input type="text" placeholder={searchType === 'name' ? 'Enter the meal' : 'Enter the main ingredient (e.g., chicken)'} value={query} onChange={handleInputChange}/>
                    
                </div>
                <div className='search-type-section'>
                    <p className='search-type-lable'>Search type:</p>
                    <div className='radio-group'>
                        <label htmlFor="">
                            <input type="radio" name='search-type' value={'ingredient'} checked={searchType ==='ingredient'} onChange={(e)=> setSearchType(e.target.value)}/>
                            Ingredient
                        </label>

                        <label htmlFor="">
                            <input type="radio" name='search-type' value={'name'}  checked={searchType ==='name'} onChange={(e)=> setSearchType(e.target.value)}/>
                                Name
                        </label>
                    </div>

                </div>
                <button type='submit'>Search</button>
            </form>

            <div className='result'>
                {recipes.meals ? (
                    recipes.meals.map((meal)=>(
                    <div className='meal-card-placeholder' key={meal.idMeal}>
                        <div className='image-placeholder'>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                        </div>
                    <div className='text-placeholder title-placeholder'>{meal.strMeal}</div>
                    <div className='text-placeholder description-placeholder'>
                        {meal.strTags || '' }
                    </div>
                    <button className='recipe-detail' onClick={()=> handleRecipeId(meal.idMeal)}>view recipe</button>
                </div>

                )) 
                ): null}


            </div>
        </div>
    </div>
    
    )
}

export default RecipeCard
