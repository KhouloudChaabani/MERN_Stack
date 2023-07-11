import React from "react";
const Personcard = ({person, idx}) => {
    console.log(person.name)
    console.log(idx)

    return(
        <div>
                <h1>{person.name}, {person.lastname}</h1>
                <p>Age: {person.age}</p>
                <p>Hair Color: {person.haircolor}</p>
                
            
        </div>
    )
}

export default Personcard