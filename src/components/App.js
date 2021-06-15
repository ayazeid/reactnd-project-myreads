import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import '../App.css'
import {Route} from "react-router-dom";
import SearchBooks from "./SearchBooks.js";
import Library from "./Library.js";



class App extends Component {
    state={
    shelves:[{
    id:"currentlyReading",
    name:"Currently Reading",
    books:[]

    },
           {
             id:"wantToRead",
             name:"Want to Read",
             books:[]
          
           },
           {id:"read",
           name:"Read",
           books:[]
        
            }
          ],
    searchQuery:[]
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books)=>{
      this.setState((currState)=>{
        currState.shelves.map(shelf=>
          (
          shelf.books= books.filter(book=> book.shelf === shelf.id )
        ))
      })
      this.setState({
        books:books
      })
    })
  };
  
  

 
  
  searchForBook=(query)=>{
    BooksAPI.search(query)
        .then(response=>{
          this.setState((prevState)=>({
            ...prevState,
            searchQuery:response}))
        })
  };

  updateBooks(book, newShelfID){ 
    
    BooksAPI.update(book, newShelfID)
    .then(response=>{
      this.setState((currState)=>{
        currState.shelves.map(shelf=>(
          shelf.books= response[shelf.id]
        ))
      })
         })
  }
  
 
  render(){
    
    return (
      <div className="app">
       <Route exact path="/" render={()=>(
          <Library shelves={this.state.shelves}
          onUpdate={(book, newShelfID)=>{this.updateBooks(book, newShelfID)
          }}/>
          
       
      )} />
      <Route path="/search" render={()=>(
                 <SearchBooks onSearch={(query)=>{
                   this.searchForBook(query)
                 }}
                   books={this.state.searchQuery}
                   onUpdate={(book, newShelfID)=>{
                     this.updateBooks(book, newShelfID)
                     
                   } }
                 />
         )} />
         
      
      </div>
    );
  }
}

export default App;
