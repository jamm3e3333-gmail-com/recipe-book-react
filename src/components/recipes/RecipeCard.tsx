import classes from './RecipeCard.module.scss'
import { Recipe } from '../../store/storeSlices/recipeSlice'
import EditIcon from '../icons/EditIcon'

const RecipesContainer: FunComponent<Pick<Recipe, 'image' | 'name' | 'duration'> & {id: string, viewRecipe: (id: string) => void}> = (props) => {
    const handleViewRecipeDetail = () => {
        props.viewRecipe(props.id)
    }
    return (
        <div onClick={handleViewRecipeDetail} className={classes['recipe-card']}>
            <div className={classes['recipe-card--image']}>
                <img src={props.image.src} alt={props.name} />
                <EditIcon className={classes['recipe-card--icon']} />
            </div>
            <p>{props.name}</p>
            <p>Preparation: {props.duration.value} {props.duration.unit}</p>
        </div>
    )
}

export default RecipesContainer
