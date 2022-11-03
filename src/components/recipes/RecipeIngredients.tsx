import IngredientIcon from '../icons/IngredientIcon'
import { Recipe } from '../../store/storeSlices/recipeSlice'
import classes from './RecipeIngredients.module.scss'

const RecipeIngredients: FunComponent<{
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
