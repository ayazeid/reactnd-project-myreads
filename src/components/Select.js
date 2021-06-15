import React from "react";
import PropTypes from "prop-types";

function Select(props){

    return(
        <div className="book-shelf-changer">
                            <select onClick={(e)=>{props.onUpdate(e.target.value)}} defaultValue={props.shelf}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>

    )
}

Select.propTypes={
    shelf: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired
  }
export default Select;