import React from 'react'
import { Recipe } from './dummyRecipes'
import classes from './RecipePreparation.module.scss'

const RecipePreparation: React.FC<{
    description: Recipe['description'],
}> = ({description}) => {
    return (
        <div className={classes['recipe-preparation']}>
            <p className={classes['recipe-preparation--header']}>Method:</p>
            <div className={classes['recipe-method']}>
                {(Object.keys(description) as unknown as number[]).map(x => (
                    <div className={classes['recipe-method--description']} key={x}>
                        <div className={classes['recipe-method--part']}>
                            <span>{x}</span>
                        </div>
                        <div className={classes['recipe-method--preparation']}>
                            {description[x]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecipePreparation