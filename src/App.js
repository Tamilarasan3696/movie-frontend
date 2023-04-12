
import './App.css';
import {  Route,Routes} from 'react-router-dom';
import MoviePage  from './component/MoviePage.js';
import  MovieDetail  from './component/MovieDetail.js';
import Edit from './component/Edit.js';
import Login from './component/login.js';
import Register from './component/Register.js';
import PageNot from './component/PageNot';
 import AddMovie from './component/AddMovie.js';
 import Home from './component/Home.js';
 import { useState } from 'react';





function App() {
  const [bookItem,setBookItem]=useState();
   

  return (
   
    <div className="App">
      
         
   
    
    <Routes>
      
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<Register/>}/>
      <Route path="/home" element={<Home />}/>
    
      <Route path="/movie" element={<MoviePage bookItem={bookItem} setBookItem={setBookItem} />}/>
      <Route path="/movie/:movieid" element={<MovieDetail  bookItem={bookItem}/>}/>
      {/* <Route path="/price" element={<Price />}/> */}
     <Route path="/addmovie" element={<AddMovie />}/>
     <Route path="/movie/edit/:movieid" element={<Edit/>}/>
      <Route path="*" element={<PageNot/>}/> 
    </Routes>

    </div>
    
  );
}

export default App;
