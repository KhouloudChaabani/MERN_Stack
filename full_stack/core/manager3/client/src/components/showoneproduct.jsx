import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
const ShowOne = (props) => {


    const [oneShow, setOneShow] = useState({})
    // get the id from :id in the route
    const {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((serverResponse)=>{
            console.log(serverResponse);
            setOneShow(serverResponse.data.Product)

        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])
  return (
    <div>
       <h1>About {oneShow.title}</h1> 
        <ul>
            <li>{oneShow.title}</li>
            <li>{oneShow.price}</li>
            <li>{oneShow.description}</li>
        </ul>
    </div>
  )
}

export default ShowOne