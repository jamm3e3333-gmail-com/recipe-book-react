import React from 'react'
import { useNavigate } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import classes from './RecipesContainer.module.scss'
import recipes from './dummyRecipes'

const RecipesContainer: React.FC = () => {
    const navigate = useNavigate()
    const viewRecipe = (id: string) => {
        navigate(id)
    }
    return (
        <div className={classes['recipes-container']}>
            {recipes.length && recipes.map(x => (
                <RecipeCard
                    id={x.id}
                    key={x.id}
                    image={x.image}
                    name={x.name}
                    duration={x.duration}
                    viewRecipe={viewRecipe}
                />
            ))}
        </div>
    )
}

export default RecipesContainer
