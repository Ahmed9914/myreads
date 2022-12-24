import { BooksGrid } from "../BooksGrid"

export const SearchResults = ({ showingBooks, onChangeShelf }) => {
    return (
        <div className="search-books-results">
            < BooksGrid books={showingBooks} onChangeShelf={onChangeShelf} />
        </div>
    )
}