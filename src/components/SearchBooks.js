import { SearchBar } from "./SearchBooks/SearchBar";
import { SearchResults } from "./SearchBooks/SearchResults";

export const SearchBooks = ({ books, onSetShowSearchpage }) => {
    
    return (
        <div className="search-books">
          < SearchBar onSetShowSearchpage={ onSetShowSearchpage } />
          < SearchResults books={books} />
        </div>
    )

};