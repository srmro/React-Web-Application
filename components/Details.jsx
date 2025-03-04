import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

    const { id } = useParams(); //get recipe id from URL
    const [preparations, setPreparations] = useState([])
    const [start, setStart] = useState([])

    useEffect(() => { //using useEffect to instantly display data on first render

        const getPreperations = async () => { //creating a function to fetch the api
            const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=15&q=pasta&sort=popular`;
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
                setPreparations(result.results);
                setStart(result.results.intructions);
            } catch (error) {
                console.error(error);
            }
        }

        getPreperations() //referencing getRecipes to display changes or updates in the data.

    }, [id]);


    return (
        <div>
            {preparations.map((item) => (
                <div>
                    <h2>Preparing <br />{item.name}</h2>
                    <video controls width={600} >
                        <source src={item.original_video_url} type='mp4' />
                    </video>

                    {/* <div> */}
                        {/* {start.map((item) => ( */}
                            <div>
                                <h3>Getting Started</h3>
                                <li>{item.intructions}</li>
                            </div>
                        {/* ))} */}

{/* 
                    </div> */}
                </div>


            ))}
            <h2>How to prepare{ }</h2>


        </div>
    )
}

export default Details