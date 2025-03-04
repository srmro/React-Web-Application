import React, { useEffect, useState } from 'react'

const RecipeData = () => {
    const [recipe, setRecipes] = useState([])

    useEffect(() => {

        const getRecipes = async () => {
            const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=15&q=pasta&sort=popular';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '1f54c98be1mshf7aeebf520ad56cp1ed8abjsn26f6a243ba61',
                    'x-rapidapi-host': 'tasty.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setRecipes(result.results);
            } catch (error) {
                console.error(error);
            }

        }

        getRecipes()

    }, [])

    return (
        <div>
    
        {recipe.map((item)=>(
            <article className='recipe-article'>

            <h3>{item.name}</h3>
            <img src={item.thumbnail_url} alt={item.thumbnail_alt_text} className='recipe-pictures' />
            <p>{item.description}</p>
            <hr/>

            </article>


        ))}

        </div>
    )
}

export default RecipeData