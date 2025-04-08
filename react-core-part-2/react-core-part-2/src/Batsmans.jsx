import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0)
    const [fours, setfours] = useState(0)

    const handleSingles = () =>{
        let currentRuns = runs+1;
       setRuns(currentRuns)
    }
    const handleDoubles = () =>{
        let currentRuns = runs+2;
       setRuns(currentRuns)
    }
    const handleTriples = () =>{
        let currentRuns = runs+3;
       setRuns(currentRuns)
    }
    const handleFours = () =>{
        let currentRuns = runs+4;
       setRuns(currentRuns)
       let curreentFours = fours +1;
       setfours(curreentFours)
    }
    const handleSix = () =>{
        let currentRuns = runs+6;
       setRuns(currentRuns)
       let currentsixes = sixes +1;
       setSixes(currentsixes)
    }

    const batsmanStyle = {
        border : '2px solid green',
        margin :"5px"
    }
    return(
        <div style={batsmanStyle}>
            <h1>Bangla Tigers</h1>
            <small>Sixes : {sixes} </small> 
            <small>Fours : {fours} </small>
            <h3>Runs : {runs}</h3>
            <button onClick={handleSingles}>Add 1</button>
            <button onClick={handleDoubles}>Add 2</button>
            <button onClick={handleTriples}>Add 3</button>
            <button onClick={handleFours}>Add 4</button>
            <button onClick={handleSix}>Add 6</button>
        </div>
    )
}