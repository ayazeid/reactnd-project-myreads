import React, { Component } from "react";
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf.js";
import Heading from "./Heading.js";
import PropTypes from "prop-types";


class Library extends Component{
  static propTypes = {
    shelves: PropTypes.array.isRequired,
    books:PropTypes.array.isRequired
  }
  
    render(){
    
        return(
        <div className="list-books">
        {/*heading*/}
          <Heading/>
          {/*library*/}
          <div className="list-books-content">
            <div>
            {/* bookshelfs*/}
            {this.props.shelves.map(shelf=>{
              const shelfbooks=this.props.books.filter(book=> book.shelf === shelf.id)
              return(<BookShelf key={shelf.id} shelf={shelf.name} shelfbooks={shelfbooks} />)
              }
            )}
            </div>
            {/*search*/}
          <div className="open-search">
          <Link to="/search" className="button">Add a book</Link>
          </div>
        </div>
        </div>
        )
    }
}
export default Library;