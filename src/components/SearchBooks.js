import { SearchBar } from "./SearchBooks/SearchBar";
import { SearchResults } from "./SearchBooks/SearchResults";

export const SearchBooks = ({ showingBooks, onFilterBooks, onChangeShelf, onSetShowSearchpage }) => {
    
    return (
        <div className="search-books">
          < SearchBar
              onFilterBooks={onFilterBooks}
              onChangeShelf={onChangeShelf}
              onSetShowSearchpage={ onSetShowSearchpage } />
          < SearchResults showingBooks={showingBooks} />
        </div>
    )

};