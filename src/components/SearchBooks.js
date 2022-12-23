import { SearchBar } from "./SearchBooks/SearchBar";
import { SearchResults } from "./SearchBooks/SearchResults";

export const SearchBooks = ({ showingBooks, onFilterBooks, onSetShowSearchpage }) => {
    
    return (
        <div className="search-books">
          < SearchBar onFilterBooks={onFilterBooks} onSetShowSearchpage={ onSetShowSearchpage } />
          < SearchResults showingBooks={showingBooks} />
        </div>
    )

};