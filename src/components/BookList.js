import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/book";
import useBooksContext from "../hooks/use-books-context";



function BookList() {

    const { books } =  useBooksContext(); 
   
    const renderedBooks = books.map((book) => {
        return <BookShow  key={book.id} book={book} />;
    });
    return <div className="book-list">
       
        {renderedBooks}
        </div>;
}

export default BookList;