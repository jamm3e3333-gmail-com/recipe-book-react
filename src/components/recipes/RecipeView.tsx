import Container from '../UI/Container'
import { useParams } from 'react-router-dom'
import lodash from 'lodash'
import classes from './RecipeView.module.scss'
import ErrorPage from '../ErrorPage'
import ClockIcon from '../icons/ClockIcon'
import StarIcon from '../icons/StarIcon'
import RecipeDescription from './RecipeDescription'
import { useAppSelector } from '../../store'

const RecipeView: FunComponent = () => {
    const params = useParams()
    const recipes = useAppSelector(state => state.recipeSlice)
    const idToRecipe = lodash.keyBy(recipes, x => x.id)
    const recipe = idToRecipe[params.id ?? '-1']
    if (!recipe) {
        return <ErrorPage />
    }
    return (
        <Container className={classes['recipe-view']}>
                <h1 className={classes['recipe-view--name']}>{recipe.name}</h1>
                <div className={classes['recipe-view--subheader']}>
                    <ClockIcon /> Preparation: {recipe.duration.value} {recipe.duration.unit}
                    <StarIcon /> Rating: {recipe.rating}
                </div>
                <div className={classes['recipe-view--img']}>
                    <img src={recipe.image.src} alt={recipe.name} />
                </div>
                <RecipeDescription recipe={recipe}/>
        </Container>
    )
}

export default RecipeView
