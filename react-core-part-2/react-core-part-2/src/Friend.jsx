export default function Friend({friend}){
    console.log(friend)
    const {name,email ,phone, username, address} = friend
    return(
        <div className="card">
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Username : {username}</p>
            <p>City : {address['city']}</p>
        </div>
    )
}