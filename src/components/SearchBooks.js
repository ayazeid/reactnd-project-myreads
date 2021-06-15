import React, { Component } from "react";
import {Link} from "react-router-dom";
import Book from "./Book.js";
import PropTypes from "prop-types";


class SearchBooks extends Component{
  static propTypes = {
    books: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
  }
  state={
    query: "",
    result:[]
  }
  

   handleChange=(event)=>{
     this.setState({
        query: event.target.value
        });

        this.props.onSearch(this.state.query);

        
    }


    render(){
      

     

  return(
    <div className="search-books">
  <div className="search-books-bar">

    <Link to="/" className="close-search" >Close</Link>
    <div className="search-books-input-wrapper">
  
      {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
      */}
      <input type="text" onChange={this.handleChange} placeholder="Search by title or author" value={this.state.query}/>

    </div>
  </div>
  <div className="search-books-results">
    <ol className="books-grid">
    {(this.props.books !== undefined)?
      this.props.books.map(book=>(
          <Book 
          key={book.id}
          book={book}
          title={book.title} 
          author={book.author} 
          imageURL={book.imageLinks.thumbnail}
          />
      )):
      (<h3>Sorry no book matchs</h3>)}
    </ol>
  </div>
</div>


  );
}
}

export default SearchBooks;