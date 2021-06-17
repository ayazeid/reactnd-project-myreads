import React, { useState } from "react";
import {Link} from "react-router-dom";
import Book from "./Book.js";
import {search} from "../BooksAPI";


function SearchBooks(props){
  const [searchQuery, setSearch]=useState({
    query:'',
    result:[]
  });
  
  function handleChange(e){
    const newquery=e.target.value;
    setSearch({query:newquery});
   searchForBook(searchQuery.query);
     
   }


   function searchForBook(query){
    search(query)
    .then((response)=>(
          setSearch((preState)=>({...preState,
            result:response})
            )
        ));
        
     };
   

  return(
    <div className="search-books">
  <div className="search-books-bar">

    <Link to="/" className="close-search" >Close</Link>
    <div className="search-books-input-wrapper">
      <input type="text" onChange={(e)=>handleChange(e)} placeholder="Search by title or author" />

    </div>
  </div>
  <div className="search-books-results">
    <ol className="books-grid">
    {(searchQuery.query !== "")?
    ((Array.isArray(searchQuery.result))?
      searchQuery.result.filter(book=> book.imageLinks!== undefined).map(book=>( <Book 
          key={book.id}
          book={book}
          title={book.title} 
          author={book.authors} 
          imageURL={book.imageLinks.thumbnail}
          />)):
          (<p>No Match found</p>)  ):
          (<p></p>)
    }
    </ol>
  </div>
</div>
  );
}


export default SearchBooks;