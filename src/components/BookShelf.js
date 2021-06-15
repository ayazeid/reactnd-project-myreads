import React, { Component } from "react";
import Book from "./Book.js";
import PropTypes from "prop-types";

class BookShelf extends Component{
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        shelfbooks: PropTypes.array.isRequired,
      }

    render(){

        const { shelf, shelfbooks}=this.props;

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                {shelfbooks.map(book=>(
                    <Book 
                    key={book.id}
                    book={book}
                    title={book.title} 
                    author={book.authors} 
                    imageURL={book.imageLinks.thumbnail}
                    />
                ))}
                </ol>
                </div>
              </div>
        )
    }
}
export default BookShelf;