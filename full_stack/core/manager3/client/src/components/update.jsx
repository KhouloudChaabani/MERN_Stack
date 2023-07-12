import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"

const Update = (props) => {
const {id} = useParams();
const nav = useNavigate();
const [title, setTitle] = useState("")
const [price, setPrice] = useState(0)
const [description, setDescription] = useState("")
    useEffect(()=>{
        // go to the server and bring the show from DB
        axios.get("http://localhost:8000/api/products/"+id)
        .then((res)=>{
            console.log(res.data);
            setTitle(res.data.Product.title)
            setPrice(res.data.Product.price)
            setDescription(res.data.Product.description)
           
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])

   const handleForm = (e) =>{
    e.preventDefault();
    
    // console.log(title, genre, episodes);
    const updatedShow = {
        title,
        price,
        description
    }
    
    // send it to the server
    
    axios.put("http://localhost:8000/api/Products/"+id, updatedShow)
    .then((response)=>{
        console.log(response.data);
        nav("/")
    })
    .catch((err)=>{
        console.log("❌❌❌ Something Went Wrong", err);
    })
   }    

  return (
    <div>
        <h2>Edit Show</h2>
        {/* update form */}
        <form onSubmit={handleForm}>
        <label >Title:</label>
            <br />
             <input onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
              <br />
            <label >Price:</label>
            <br />
            <input type="number" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
             <br />
           <label >Discription: </label>
           <br /> <input onChange={(e)=>{setDescription(e.target.value)}}value={description}/> 
           <br />
            <button>Update</button>
        </form>
    </div>
  )
}

export default Update
