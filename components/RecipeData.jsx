import React, { useEffect, useState } from 'react' //importing the useState, and the UseEffect
import { Link } from 'react-router-dom'

const RecipeData = () => { //creating a component to store data
    const [recipe, setRecipes] = useState([]) //created a useState to display given data

    useEffect(() => { //using useEffect to instantly display data on first render

        const getRecipes = async () => { //creating a function to fetch the api
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
                setRecipes(result.results); //if array is inside an object we'll reference the data with what we want to display
            } catch (error) {
                console.error(error);
            }

        }

        getRecipes() //referencing getRecipes to display changes or updates in the data.

    }, [])

    return ( //returning html elements
        <div className='recipe-container'> 
    
        {recipe.map((item)=>( //mapping through the array
            <article key={item.id} className='recipe-article'>
            <div>
    <Link to = {`/Instructions/${item.id}`}>
            <h3>{item.name}</h3>
            </Link>
            </div>
            <img src={item.thumbnail_url} alt={item.thumbnail_alt_text} className='recipe-pictures' />
            <p>{item.description}</p>
            <hr/>

            </article>


        ))}

        </div>
    )
}

export default RecipeData