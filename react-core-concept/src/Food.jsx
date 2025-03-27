export default function Food({food, time=0}){
    let foodList;

    if(food === "apple"){
        foodList = <p>There is an Apple time {time}</p>
    }
    else if(food==="orange"){
        foodList = <p>There is an Orange at time {time}</p>
    }
    return foodList;
}
// export default function Food({food, time=0}){
//     if(food === "apple"){
//         return <p>There is an Apple time {time}</p>
//     }
//     else if(food==="orange"){
//         return <p>There is an Orange at time {time}</p>
//     }
// }