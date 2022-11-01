import React from 'react'
import Container from '../UI/Container'
import { useParams } from 'react-router-dom'
import * as lodash from 'lodash'
import classes from './RecipeView.module.scss'
import recipes from './dummyRecipes'
import ErrorPage from '../ErrorPage'
import ClockIcon from '../icons/ClockIcon'
import StarIcon from '../icons/StarIcon'
import RecipeDescription from './RecipeDescription'

const RecipeView: React.FC = () => {
    const params = useParams()
    
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
