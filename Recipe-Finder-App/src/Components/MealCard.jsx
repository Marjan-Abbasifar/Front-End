import React from 'react'
import '../Styles/MealCard.css'

const MealCard = () => {





  return (
    <div className='container'>
        <div className='meal-card-container'>
            <h1>Recipe Finder</h1>
            <form className='search'>
                <div className='search-bar'>
                    <input type="text" placeholder='Search your meal'/>
                    
                </div>
                <div className='search-type-section'>
                    <p className='search-type-lable'>Search type:</p>
                    <div className='radio-group'>
                        <label htmlFor="">
                            <input type="radio" name='search-type'/>
                            Ingredient
                        </label>

                        <label htmlFor="">
                            <input type="radio" name='search-type' />
                           Name
                        </label>
                    </div>

                </div>
                <button>Search</button>
            </form>

            <div className='result'>
                <div className='meal-card-placeholder'>
                    <div className='image-placeholder'></div>
                    <div className='text-placeholder title-placeholder'>Why do we use it?</div>
                    <div className='text-placeholder description-placeholder'>
                        It is a long established fact that a reader will be distracted by 
                        the readable content of a page when looking at its layout.
                    </div>
                    <button className='recipe-detail'>view recipe</button>
                </div>
                  <div className='meal-card-placeholder'>
                    <div className='image-placeholder'></div>
                    <div className='text-placeholder title-placeholder'>Why do we use it?</div>
                    <div className='text-placeholder description-placeholder'>
                        It is a long established fact that a reader will be distracted by 
                        the readable content of a page when looking at its layout.
                    </div>
                    <button className='recipe-detail'>view recipe</button>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default MealCard
