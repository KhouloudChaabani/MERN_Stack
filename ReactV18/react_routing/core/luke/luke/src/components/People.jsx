import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const People = (props) => {
    const [starWarsData, setStarWarsData] = useState([]);
    const { id } = useParams();
    const { value } = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${value}/${id}`)
            .then(response => { setStarWarsData(response.data) })
            .catch(err => {console.log("There is an error", err)})
    }, [value, id]);
    console.log(starWarsData)
    return (
        <div>
            <fieldset>
                <legend>Display.jsx</legend>
                <h1>{starWarsData.name}</h1>
                {setStarWarsData ? (
                value === "people" ? (
                    <>
                        <p>Height:{starWarsData.height}</p>
                        <p>Mass: {starWarsData.mass}</p>
                        <p>Hair Color:{starWarsData.hair_color}</p>
                        <p>Skin Color:{starWarsData.skin_color}</p>
                    </>
                ) : ( 
                    <>
                        <p>Climate: {starWarsData.climate}</p>
                        <p>Terrain: {starWarsData.terrain}</p>
                        <p>Surface Water: {starWarsData.surface_water}</p>
                        <p>Population: {starWarsData.population === 1 ? "True" : "False"}</p>
                    </>)
                ) : (
                    <p>Loading</p>
                )}
            </fieldset>
        </div>
    )
}

export default People