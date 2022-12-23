import "../css/App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import { ListShelves } from "./ListShelves";
import { SearchBooks } from "./SearchBooks";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
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
  
 useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      //console.log(res);
    };
      getBooks();
  }, []);
 
  const prepareShelves = (books) => {
    const shelves = {"currentlyReading": [], "wantToRead": [], "read": []};
    for (const book of books) {
      const shelf = book["shelf"];
      shelves[shelf].push(book);
    }
    return shelves;
  }

  const shelves = prepareShelves(books);
 

  return (
    // TODO: replace onSetShowSearchpage with routing
    <div className="app">
      <div className="list-books-title">
            <h1>MyReads</h1>
      </div>
      {showSearchPage ? (
        < SearchBooks
            showingBooks={showingBooks}
            onFilterBooks={filterBooks}
            onSetShowSearchpage={() => setShowSearchpage(false)} />
      ) : (
        < ListShelves
            shelves={shelves}
            onSetShowSearchpage={() => setShowSearchpage(true)} />
      )}
    </div>
  );
}

export default App;
