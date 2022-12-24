import "../css/App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import { ListShelves } from "./ListShelves";
import { Route, Routes } from "react-router-dom";
import { SearchBooks } from "./SearchBooks";

function App() {

  const [books, setBooks] = useState([]);
  

  const changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
        BooksAPI.getAll()
        .then((res) => {
          setBooks(res);
        })
      })
      
    // console.log(books);
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
    <div className="app">
      <div className="list-books-title">
            <h1>MyReads</h1>
      </div>
      
      <Routes>
        <Route
          exact
          path="/"
          element={
            < ListShelves
              shelves={shelves}
              onChangeShelf={changeShelf}/>
          }
        />
        <Route 
          exact
          path="/search"
          element={
            < SearchBooks
              books={books}
              onChangeShelf={changeShelf} />
          }
        />
      </Routes>
      
    </div>
  );
}

export default App;
