import "bootstrap/dist/css/bootstrap.css"
import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Show = (props) => {
    const [shows, setShows] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/Products")
        .then((serverResponse)=>{
            console.log(serverResponse.data);
            setShows(serverResponse.data)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[props.refresh])

  // delete function
  const deleteShow = (id) =>{
    axios.delete("http://localhost:8000/api/Products/"+id)
    .then((res)=>{
        // TODO !!
        setShows(shows.filter((oneShow)=>{
            return (oneShow._id !== id)
        }))
    })
    .catch((err)=>{
        console.log("❌❌❌ Something Went Wrong", err)
    })
}
  return (
    <div>
        <h2>Shows List</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Discription</th>

                </tr>
            </thead>
            <tbody>
                {shows.map((oneShow)=>{
                    return(
                        <tr key={oneShow._id}>
                            <td><Link to={`products/${oneShow._id}`}>{oneShow.title}</Link></td>
                            <td>{oneShow.price}</td>
                            <td>{oneShow.description}</td>
                            <td>
                            <Link to={`products/edit/${oneShow._id}`} > edit </Link>
                            <button onClick={() => deleteShow(oneShow._id)}>delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Sho