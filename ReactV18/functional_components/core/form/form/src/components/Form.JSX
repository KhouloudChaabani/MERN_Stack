import React, { useState } from 'react'
import Display from './display';
const Form = (props) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [valname, setValname] = useState(false);
    const [vallast, setVallast] = useState(false);
    const [valemail, setValemail] = useState(false);
    const [valpassword, setValpassword] = useState(false);
    const [valconfirm, setValconfirm] = useState(false);




    const [User, setUser] = useState({
        Firstname: "",
        Lastname: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    })

    const validateName = (e) => {
        setFirstname(e.target.value)
        if (e.target.value.length <= 2) {
            setValname(true)
        } else setValname(false)
    }
    const validateLastname = (e) => {
            setLastname(e.target.value)
            if (e.target.value.length <= 2) {
                setVallast(true)
            } else setVallast(false)
        }
    const validateEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length <= 2) {
            setValemail(true)
        } else setValemail(false)
    }
    const validatePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setValpassword(true)
        } else setValpassword(false)
    }
    const validateConfirm = (e) => {
        setConfirm(e.target.value)
        if (e.target.value !== password){
            setValconfirm(true)
        } else setValconfirm(false)
    }
    const createUser = (e) => {
        e.preventDefault()
        const newUser = {
            firstname,
            lastname,
            email,
            password,
            confirm
        }
        setUser(newUser)
    }
    return (
        <div>
                <form onSubmit={(e) => { createUser(e) }}>
                    <div>
                        <label>Firstname: </label>
                        <input onChange={(e) => { validateName(e) }} /> <br />
                        {valname ? 
                        <p>"First Name must be at least 2 characters"</p>  : "" 
                        }                   
                    </div>
                    <div>
                        <label>Lastname: </label>
                        <input onChange={(e) => { validateLastname(e) }} />
                        {vallast ? 
                        <p> "Last Name must be at least 2 characters"</p> : ""}
                    </div>
                    <div>
                        <label>Email Address: </label>
                        <input onChange={(e) => { validateEmail(e) }} />
                        {valemail ? 
                        <p> "Email must be at least 2 characters" </p>: ""}
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type='password' onChange={(e) => { validatePassword(e) }} />
                        {valpassword ? 
                        <p> "Password must be at least 8 characters" </p>: ""}
                    </div>
                    <div>
                        <label>ConfirmPassword: </label>
                        <input type='password' onChange={(e) => {validateConfirm(e)}} />
                        {valconfirm ? 
                        <p> "Password must match" </p>: ""}
                    </div>
                </form>
                <Display User={User} />
        </div>
    )
}

export default Form
