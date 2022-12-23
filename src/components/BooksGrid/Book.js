import { BookTop } from "./Book/BookTop"

export const Book = ({ bookDetails }) => {
  console.log(bookDetails);
  return (
      <div className="book">
        < BookTop cover={bookDetails.previewLink} shelf={bookDetails.shelf} />  
        <div className="book-title"> {bookDetails.title} </div>
        <div className="book-authors"> {bookDetails.authors} </div>
      </div>
  )
}