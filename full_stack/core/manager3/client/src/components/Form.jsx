import React from 'react'
import {useState} from "react"
import axios from "axios"


const Update = (props) => {


    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    
   const handleForm = (e) =>{
    e.preventDefault();
    const updatedShow = {
        title,
        price,
        description
    }
    
    // send it to the server
    
    axios.post("http://localhost:8000/api/Products/", updatedShow)
    .then((response)=>{
        console.log(response.data);
       setTitle("")
       setPrice(0)
       setDescription("")
      props.setrefresh(updatedShow)
    })
    .catch((err)=>{
        console.log("❌❌❌ Something Went Wrong", err);
    })
   }    
   
  return (
    <div>

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
           <br /> <input   onChange={(e)=>{setDescription(e.target.value)}}value={description}/> 
           <br />
            <button>Create</button>
        </form>
    </div>
  )
}

export default Update
