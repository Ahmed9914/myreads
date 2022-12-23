import { Book } from "./BooksGrid/Book";

export const BooksGrid = ({ books }) => {
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