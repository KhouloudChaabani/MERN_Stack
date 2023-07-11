import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router";

const Form = (props) => {
    const [personId, SetPersonId] = useState(1)
    const [value, SetValue] = useState("people")
    const navigate = useNavigate("");
    const handleSub = (e) => {
        e.preventDefault();
        navigate(`/${value}/${personId}`)
    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <div>
                <form onSubmit={(e) => { handleSub(e) }}>
                    <label>Search for:</label>
                    <select onChange={(e) => { SetValue(e.target.value) }}>
                        <option value="people">People</option>
                        <option value="planets">Planet</option>
                    </select>
                    <label>ID:</label>
                    <input onChange={(e) => { SetPersonId(e.target.value) }} type="number" value={personId} />
                    <button>Search</button>
                </form>
            </div>
        </fieldset>
    )
}

export default Form