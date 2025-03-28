// export default function ToDo({task}){
//     return(
//         <div>
//             <ul>
//                 <li >Task : {task}</li>
//             </ul>
//         </div>
//     )
// }
// export default function ToDo({task, isDone, time=0}){
//     return isDone ? <li>{task} is done duration is {time}</li>  : <li>Task {task} is Not done yet </li>
// }

// export default function ToDo({task, isDone, time=0}){
//     return isDone && <li>Done task {task} at time {time} </li>
// }
export default function ToDo({task, isDone, time=0}){
    return isDone || <li>Npt done task {task} at time {time} </li>
}