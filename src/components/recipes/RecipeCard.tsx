import React from 'react'
import classes from './RecipeCard.module.scss'
import { Recipe } from './dummyRecipes'
import EditIcon from '../icons/EditIcon'

const RecipesContainer: React.FC<Pick<Recipe, 'image' | 'name' | 'duration'> & {id: string, viewRecipe: (id: string) => void}> = (props) => {
    const handleViewRecipe = () => {
        props.viewRecipe(props.id)
    }
    return (
        <div onClick={handleViewRecipe} className={classes['recipe-card']}>
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
