import { Recipe } from './dummyRecipes'
import classes from './RecipeDescription.module.scss'
import RecipeIngredients from './RecipeIngredients'
import RecipePreparation from './RecipePreparation'

const RecipeDescription: FunComponent<{
    recipe: Recipe
}> = ({ recipe }) => {
    return (
        <div className={classes['recipe-description']}>
            <h1>Description</h1>
            <div className={classes['recipe-description--preparation']}>
                <RecipeIngredients ingredients={recipe.ingredients} />
                <RecipePreparation description={recipe.description} />
            </div>
        </div>
    )
}

export default RecipeDescription