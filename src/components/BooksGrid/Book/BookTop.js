import { BookShelfChanger } from "../Book/BookShelfChanger";

export const BookTop = ({ cover, shelf }) => {
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
            < BookShelfChanger currentShelf={shelf} />
        </div>
    )
}