import { use } from "react"
import Friend from "./Friend"

export default function Friends({friends}){
    const friendss = use(friends)
    console.log(friendss)
    return(
        <div>
            <h1>Friends list : {friendss.length} </h1>
            {
                friendss.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}