import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Showone = () => {
    const { id } = useParams()
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((response) => {
                setAuthor(response.data.author)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            <fieldset>
                <legend>Showone.jsx</legend>
                {author ? (
                    <div>
                        <h1>{author.name}</h1>
                        <p>{author.book}</p>
                        <p>{author.isDead ? "☠💀" : "🦋"}</p>
                        <p>{new Date(author.createdAt).toLocaleDateString()}</p>
                        </div>) : (
                    "...Loading"
                )
                }
            </fieldset>
        </div>
    )
}

export default Showone