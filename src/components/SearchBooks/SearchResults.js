import { BooksGrid } from "../BooksGrid"

export const SearchResults = ({ showingBooks }) => {
    return (
        <div className="search-books-results">
            < BooksGrid books={showingBooks} />
        </div>
    )
}