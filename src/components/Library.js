import React, { Component } from "react";
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf.js";
import PropTypes from "prop-types";


class Library extends Component{
  static propTypes = {
    shelves: PropTypes.array.isRequired,
  }
  
    render(){
     const {shelves}=this.props;
        return(
        <div className="list-books">
        {/*heading*/}
          <div className="list-books-title"> 
            <h1>MyReads</h1>
          </div>
          {/*library*/}
          <div className="list-books-content">
            <div>
            {/* bookshelfs*/}
            {shelves.map(shelf=>
              (<BookShelf key={shelf.id} shelf={shelf.name} shelfbooks={shelf.books} LibraryUpdate={(book, newShelfID)=>this.props.onUpdate(book, newShelfID)}/>)
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