import { SearchBar } from "./SearchBooks/SearchBar";
import { SearchResults } from "./SearchBooks/SearchResults";
import { useState } from "react";
import { search } from "../BooksAPI";

export const SearchBooks = ({ books, onChangeShelf }) => {
    const [showingBooks, setShowingBooks] = useState([]);
    
    const filterBooks = (query) => {
      if (query) {
        search(query, 20)
        .then((res) => {
          console.log(res);
          if (res && !("error" in res)) {
            for (const book of res) {
              for (const existBook of books) {
                if (book.id === existBook.id) {
                  book["shelf"] = existBook.shelf;
                }
              }
            }
            setShowingBooks(res);
          } else {
            setShowingBooks([]);
          }
        })
      } else {
        setShowingBooks([]);
      }
    };

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