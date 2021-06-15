import React, {useState, useEffect} from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import {Route} from "react-router-dom";
import SearchBooks from "./SearchBooks.js";
import Library from "./Library.js";


function BooksApp(){

  const [state, setState]=useState({
    shelves:[{
            id:"currentlyReading",
            name:"Currently Reading"
            },
           {
             id:"wantToRead",
             name:"Want to Read"
          
           },
           {id:"read",
           name:"Read"
            }
          ],
    books:[],
    searchQuery:[]
  });

  useEffect(() => {
    BooksAPI.getAll()
    .then((recievedbooks)=>(
      setState((preState)=>({...preState,
        books:recievedbooks})
        )
    )); 
  })
  
  function searchForBook(query){
    BooksAPI.search(query)
        .then(response=>{
          setState((prevState)=>({
            ...prevState,
            searchQuery:response}))
        })
  };

  

 return (
    <div className="app">
     <Route exact path="/" render={()=>(
        <Library shelves={state.shelves} books={state.books}/>
    )} />
    <Route path="/search" render={()=>(
               <SearchBooks onSearch={(query)=>{
                 searchForBook(query)
               }}
                 books={state.searchQuery}
               />
       )} />
       
    
    </div>
  );
}


export default BooksApp;
