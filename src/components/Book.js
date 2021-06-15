import React from "react";
import Select from "./Select.js";
import PropTypes from "prop-types";


function Book(props){
    const { book,title ,author, imageURL} = props;
    
    function updateBook(newShelfID){

      props.shelfUpdate(book, newShelfID);
        // update(book , newShelfID)
        // .then(response=>console.log(response))
    }
        return(
                    <li >
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})` }}></div>
                          <Select shelf={book.shelf} onUpdate={(newShelfID)=>{updateBook(newShelfID)}}/>
                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{author}</div>
                      </div>
                    </li>
        
        )
    
}

Book.propTypes={
  book: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  author:PropTypes.array.isRequired,
  imageURL: PropTypes.string.isRequired
}

export default Book;