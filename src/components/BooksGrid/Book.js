import { BookTop } from "./Book/BookTop"

export const Book = ({ bookDetails, onChangeShelf }) => {
  return (
      <div className="book">
        < BookTop
            cover={bookDetails.imageLinks.thumbnail}
            book={bookDetails}
            shelf={bookDetails.shelf}
            onChangeShelf={onChangeShelf}
          />  
        <div className="book-title"> {bookDetails.title} </div>
        <div className="book-authors"> 
        {
          bookDetails.authors.map((author, key) => (
            <div key={key}> {author} </div>
          ))
        
        } 
        </div>
      </div>
  )
}