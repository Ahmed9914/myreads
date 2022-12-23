import { BookTop } from "./Book/BookTop"

export const Book = ({ bookDetails }) => {
  return (
      <div className="book">
        < BookTop cover={bookDetails.imageLinks.thumbnail} shelf={bookDetails.shelf} />  
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