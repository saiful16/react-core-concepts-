export default function Book({book}){
    console.log(book)
    return(
        <div className="student">
            <p>Book name : {book.name} </p>
            <p>Book price : {book.price} </p>
        </div>

    )
}