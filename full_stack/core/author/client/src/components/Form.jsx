import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Form = () => {
    const [name, setName] = useState('');
    const [book, setBook] = useState('');
    const [isDead, setIsDead] = useState(false);
    const [errors, setErrors] = useState([]);
    const nav = useNavigate()
    const handleSubmit = (e) => {
        
        e.preventDefault();
        const newAuthor = {
            name,
            book,
            isDead
        }

        axios.post('http://localhost:8000/api/authors', newAuthor)
        .then((oneAuthor)=>{
            console.log(oneAuthor)
            setName('')
            setBook('')
            setIsDead(false)
            nav('/')
        })
        .catch((err)=>{
            const errorResponse = err.response.data.errors;
            console.log(errorResponse)
            const errorArr = [];
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
                setErrors(errorArr)
            }

        })

    };

    return (
        <div>
            <fieldset>
                <legend>Form.jsx</legend>
                {errors.map((err, index)=>{
                    return(
                        <p style={{color: "red"}} key={index}>
                            {err}
                        </p>
                    )
                })}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Name</label>
                    <input type="text"  onChange={(e) => setName(e.target.value)} value={name}/> <br />
                    <label htmlFor="">Book</label>
                    <input type="text" value={book} onChange={(e) => setBook(e.target.value)}  /> <br />
                    <label>
                        <input type="checkbox" checked={isDead} onChange={(e) => setIsDead(e.target.checked)} />
                        Is Dead
                    </label><br />
                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </div>
    );
};

export default Form;