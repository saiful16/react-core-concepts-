import Book from "./Book"
export default function Library({books}){
    return(
        <div>
            <h2>National central library</h2>
            <p>books collection : {books.length}</p>
            <p>address : Dhaka central library</p>
            <ul>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </ul>

        </div>
    )
}