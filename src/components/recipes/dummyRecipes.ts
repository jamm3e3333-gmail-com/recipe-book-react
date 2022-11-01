export interface Recipe {
    id: string,
    name: string,
    ingredients: Array<{
        name: string
        amount: string
    }>,
    image: {
        src?: string
    }
    description: Record<number, string>
    rating: number
    duration: {
        value: number
        unit: 'min' | 'h'
    }
    userId: string
}

const recipes: Recipe[] = [
    {
        id: '1',
        image: {
            src: 'https://www.recipetineats.com/wp-content/uploads/2018/04/Chicken-Tikka-Masala_0.jpg',
        },
        ingredients: [
            {
                name: 'garlic',
                amount: '1 pc'
            },
        ],
        name: 'Tikka masala',
        rating: 4.5,
        description: {
            1: 'Buy the chicken breasts in the bag. Take the chicken from the bag. Wash the chicken properly under the running hot watter. Next cut the chicken into tiny slices. Season the chicken with 1 tbsp of pepper, sault and chilli. Put the seasoned chicken in the fridge and leave it there for 15 minutes.',
            2: 'Put the chicken into the oven and that\'s it',
        },
        duration: {
            value: 30,
            unit: 'min',
        },
        userId: '1',
    },
    {
        id: '2',
        image: {
            src: 'https://www.simplyrecipes.com/thmb/Nzzc_CcpkSHx_b6bT4bM9GovNB0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg',
        },
        ingredients: [
            {
                name: 'garlic',
                amount: '1 pc'
            },
            {
                name: 'onion',
                amount: '1 pc'
            },
        ],
        name: 'Butter chicken',
        rating: 4.5,
        description: {
            1: 'Buy the chicken in the back',
            2: 'Put the butter chicken into the oven and that\'s it',
        },
        duration: {
            value: 30,
            unit: 'min',
        },
        userId: '1',
    },
    {
        id: '3',
        image: {
            src: 'https://www.simplyrecipes.com/thmb/Nzzc_CcpkSHx_b6bT4bM9GovNB0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg',
        },
        ingredients: [
            {
                name: 'garlic',
                amount: '1 pc'
            },
            {
                name: 'onion',
                amount: '1 pc'
            },
        ],
        name: 'Butter chicken',
        rating: 4.5,
        description: {
            1: 'Buy the chicken in the back',
            2: 'Put the butter chicken into the oven and that\'s it',
        },
        duration: {
            value: 30,
            unit: 'min',
        },
        userId: '1',
    },
    {
        id: '4',
        image: {
            src: 'https://www.simplyrecipes.com/thmb/Nzzc_CcpkSHx_b6bT4bM9GovNB0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg',
        },
        ingredients: [
            {
                name: 'garlic',
                amount: '1 pc'
            },
            {
                name: 'onion',
                amount: '1 pc'
            },
        ],
        name: 'Butter chicken',
        rating: 4.5,
        description: {
            1: 'Buy the chicken in the back',
            2: 'Put the butter chicken into the oven and that\'s it',
        },
        duration: {
            value: 30,
            unit: 'min',
        },
        userId: '1',
    },
    {
        id: '5',
        image: {
            src: 'https://www.simplyrecipes.com/thmb/Nzzc_CcpkSHx_b6bT4bM9GovNB0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg',
        },
        ingredients: [
            {
                name: 'garlic',
                amount: '1 pc'
            },
            {
                name: 'onion',
                amount: '1 pc'
            },
        ],
        name: 'Butter chicken',
        rating: 4.5,
        description: {
            1: 'Buy the chicken in the back',
            2: 'Put the butter chicken into the oven and that\'s it',
        },
        duration: {
            value: 30,
            unit: 'min',
        },
        userId: '1',
    },
    {
        id: '6',
        image: {
            src: 'https://www.simplyrecipes.com/thmb/Nzzc_CcpkSHx_b6bT4bM9GovNB0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg',
        },
        ingredients: [
            {
                name: 'garlic',
                amount: '1 pc'
            },
            {
                name: 'onion',
                amount: '1 pc'
            },
        ],
        name: 'Butter chicken',
        rating: 4.5,
        description: {
            1: 'Buy the chicken in the back',
            2: 'Put the butter chicken into the oven and that\'s it',
        },
        duration: {
            value: 30,
            unit: 'min',
        },
        userId: '1',
    },
    {
        id: '7',
        image: {
            src: 'https://www.simplyrecipes.com/thmb/Nzzc_CcpkSHx_b6bT4bM9GovNB0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-2-6ca76f24bbe74114a09958073cb9c76f.jpg',
        },
        ingredients: [
            {
                name: 'garlic',
                amount: '1 pc'
            },
            {
                name: 'onion',
                amount: '1 pc'
            },
        ],
        name: 'Butter chicken',
        rating: 4.5,
        description: {
            1: 'Buy the chicken in the back',
            2: 'Put the butter chicken into the oven and that\'s it',
        },
        duration: {
            value: 30,
            unit: 'min',
        },
        userId: '1',
    },
]

export default recipes
