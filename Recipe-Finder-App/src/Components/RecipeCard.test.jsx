import React from "react";
import { render, screen } from "@testing-library/react";
import RecipeCard from './RecipeCard'
import '@testing-library/jest-dom/vitest'
import userEvent from "@testing-library/user-event";
import { describe, it, vi } from "vitest";   //this line fixes your error
import { MemoryRouter } from "react-router-dom";


describe ('RecipeCard', () => {
    it('Shows the app title',() => {
         global.fetch=vi.fn().mockResolvedValue({
            json: async() => ({
                meals: [{

                idMeal: '7070',
                strMeal: 'cake',
                strMealThumb: 'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg',
                strTags: 'cake, dessert'

                }]
            })

        })

         render (
            <MemoryRouter>
            <RecipeCard/>
            </MemoryRouter>
            )
       
     
        
       expect(screen.queryByText(/recipe finder/i)).toBeInTheDocument();
    })


    it('Updates the meal input field when user types', async() => {
        global.fetch=vi.fn().mockResolvedValue({
            json: async() => ({
                meals: [{

                idMeal: '7070',
                strMeal: 'cake',
                strMealThumb: 'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg',
                strTags: 'cake, dessert'

                }]
            })

        })

        render(
           <MemoryRouter>
            (<RecipeCard/>)
           </MemoryRouter> 
        )

        const input = screen.getByPlaceholderText(/enter the meal/i)
         await userEvent.type(input, 'cake');
          expect(input).toHaveValue('cake');
    })
})