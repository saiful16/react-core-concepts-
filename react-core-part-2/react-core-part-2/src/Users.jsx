import { use } from "react"

export default function Users({userList}){

    const users = use(userList)
    console.log(users)

    const usersStyle = {
        border : "2px solid blue",
        margin : "5px"
    }
    return(
        <div style={usersStyle}>
            <h1>users : {userList.length}</h1>
        </div>
    )
}