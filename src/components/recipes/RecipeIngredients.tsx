import React from 'react'
import IngredientIcon from '../icons/IngredientIcon'
import { Recipe } from './dummyRecipes'
import classes from './RecipeIngredients.module.scss'

const RecipeIngredients: React.FC<{
    ingredients: Recipe['ingredients']
}> = ({ ingredients }) => {
    return (
        <div className={classes['recipe-ingredients']}>
        <p>Ingredients:</p>
        <div className={classes['recipe-ingredients--listbox']}>
            <ul>
                {ingredients.map(x => (
                    <li key={x.name}><IngredientIcon /> {x.amount} {x.name}</li>
                ))}
            </ul>
        </div>
    </div>
    )
}

export default RecipeIngredients
