import { Book } from "./BooksGrid/Book";

export const BooksGrid = ({ books }) => {
    console.log(books[books.length-1],books.length)
    return (
        <ol className="books-grid">
            {
                books.map((book, key) => (
                    <li key={key}>
                        < Book bookDetails={book} />
                    </li>
                    )
                )
            }
        </ol>

    )
}