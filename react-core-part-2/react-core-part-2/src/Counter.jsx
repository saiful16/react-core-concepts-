import { useState } from "react"

export default function Counter(){
     const [state, setState] = useState(0)
     const handleAdd = () =>{
        let count = state +1
        setState(count)
     }
    const counterStyle = {
        border : "2px solid salmon"
    }
    return(

        <div style={counterStyle}>
            <h1>Count : {state}</h1>
            <button onClick={handleAdd}>Add Count</button>
        </div>
    )
}