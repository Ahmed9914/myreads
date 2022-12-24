import { BookShelfChanger } from "../Book/BookShelfChanger";

export const BookTop = ({ cover, book, shelf, onChangeShelf }) => {
    return (
        <div className="book-top">
            <div
            className="book-cover"
            style={{
                width: 128,
                height: 193,
                backgroundImage:
                `url(${cover})`,
            }}
            ></div>
            < BookShelfChanger
                book={book}
                onChangeShelf={onChangeShelf}
            />
        </div>
    )
}