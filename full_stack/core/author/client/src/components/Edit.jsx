import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'


const Edit = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [name, setName] = useState('')
    const [book, setBook] = useState('')
    const [isDead, setIsDead] = useState(false)



    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((author) => {
                setName(author.data.author.name);
                setBook(author.data.author.book);
                setIsDead(author.data.author.isDead);
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/authors/${id}`, {
                name,
                book,
                isDead,
            })
            .then((editedAuthor) => {
                console.log(editedAuthor);
                navigate('/');
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                <label htmlFor="">Book</label>
                <input type="text" value={book} onChange={(e) => setBook(e.target.value)} />
                <label>
                    <input type="checkbox" checked={isDead} onChange={(e) => setIsDead(e.target.checked)} />
                    Is Dead
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Edit
