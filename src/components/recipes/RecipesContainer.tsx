import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store'
import RecipeCard from './RecipeCard'
import classes from './RecipesContainer.module.scss'

const RecipesContainer: FunComponent = () => {
    const navigate = useNavigate()
    const viewRecipeDetail = (id: string) => {
        navigate(id)
    }
    const recipes = useAppSelector(state => state.recipeSlice)
    return (
        <div className={classes['recipes-container']}>
            {recipes.length && recipes.map(x => (
                <RecipeCard
                    id={x.id}
                    key={x.id}
                    image={x.image}
                    name={x.name}
                    duration={x.duration}
                    viewRecipe={viewRecipeDetail}
                />
            ))}
        </div>
    )
}

export default RecipesContainer
