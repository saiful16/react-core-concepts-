import './App.css'
export default function Singer({singer}){
    return(
        <div className="singer">
            <h2>Singer Name :{singer.name} </h2>
            <h3>Age : {singer.age} </h3>
        </div>
    )
}