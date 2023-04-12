import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState,useEffect} from 'react';
import {API} from './global';

function MovieDetail() {
  const [book,setBook]=useState({});
  const { movieid } = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{
    fetch(`${API}/movie/${movieid}`,{
      method:"GET",
    })
  .then((data)=>data.json())
  .then((bk)=>
  {setBook(bk)})
     },[]);



  return (
    <>
      <div>
        <iframe width="100%" height="514" src={book.trailer} title="you tube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="card-body">
          <h3 className="card-title">{book.name}</h3>
          <p>⭐{book.rating}</p>
        </div>
      </div>
      <Button variant="contained" onClick={() => navigate(-1)}><ArrowBackIosIcon />Back</Button>
      <Button> <DeleteIcon /></Button>
    </>
  );
  
}

export default MovieDetail