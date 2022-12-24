import { SearchBar } from "./SearchBooks/SearchBar";
import { SearchResults } from "./SearchBooks/SearchResults";
import { useState } from "react";

export const SearchBooks = ({ books, onChangeShelf }) => {
    const [showingBooks, setShowingBooks] = useState([]);
    
    const filterBooks = (query) => {
    const showingBooks =
    query.trim() === ""
      ? []
      : books.filter((b) =>
          b.title.toLowerCase().includes(query.toLowerCase())
        );
      setShowingBooks(showingBooks);
    }

    return (
        <div className="search-books">
          < SearchBar
            onFilterBooks={filterBooks}
             />
          < SearchResults
            showingBooks={showingBooks}
            onChangeShelf={onChangeShelf}
            />
        </div>
    )

};