import { BooksGrid } from "../BooksGrid"

export const SearchResults = ({ books }) => {
    return (
        <div className="search-books-results">
            < BooksGrid books={books} />
        </div>
    )
}