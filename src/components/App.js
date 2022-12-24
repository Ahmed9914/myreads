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

  const changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
        BooksAPI.getAll()
        .then((res) => {
          setBooks(res);
        })
      })
      
    console.log(books);
    shelves = prepareShelves();
  }
  
 useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      //console.log(res);
    };
      getBooks();
  }, []);
 
  const prepareShelves = () => {
    const currentShelves = {"currentlyReading": [], "wantToRead": [], "read": []};
    for (const book of books) {
      const shelf = book["shelf"];
      currentShelves[shelf].push(book);
    }
    return currentShelves;
  }

  let shelves = prepareShelves();
 

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
            onChangeShelf={changeShelf}
            onSetShowSearchpage={() => setShowSearchpage(false)} />
      ) : (
        < ListShelves
            shelves={shelves}
            onChangeShelf={changeShelf}
            onSetShowSearchpage={() => setShowSearchpage(true)} />
      )}
    </div>
  );
}

export default App;
