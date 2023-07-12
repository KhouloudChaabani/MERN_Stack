import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Main = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then((response) => {
                // setAuthors(response.data.authors);
                console.log(response.data.authors)
                const sortedAuthors = response.data.authors.sort((a, b) => a.name.localeCompare(b.name));
                setAuthors(sortedAuthors);
                console.log(sortedAuthors);
            })
            .catch((err) => {
                console.log('There is an error:', err);
            });
    }, []);
    const handleDel = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then((res) => {
                setAuthors(authors.filter((oneAuthor) => oneAuthor._id !== id));
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <fieldset>
                <Link to={"/new"}  >Add an author</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Book</th>
                            <th>Dead</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((oneAuthor) => {
                            return (
                                <tr key={oneAuthor._id}>
                                    <td>
                                    <Link to={'/author/' + oneAuthor._id} >{oneAuthor.name}</Link>
                                    </td>
                                    <td>{oneAuthor.book}</td>
                                    <td>{oneAuthor.isDead ? "YES" : "NO"}</td>
                                    <td>
                                        <Link to={'/edit/' + oneAuthor._id} >Edit</Link>
                                        <button onClick={() => { handleDel(oneAuthor._id) }} >Delete</button>
                                    </td>
                                </tr>
                            )
                        })

                        }
                    </tbody>
                </table>
            </fieldset>
        </div>

    )
}

export default Main