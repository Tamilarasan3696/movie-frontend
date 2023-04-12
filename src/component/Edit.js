import React from 'react'
import {TextField,Button} from '@mui/material';
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import {API} from './global';


function Edit() {
  
const [movie,setMovie]=useState(null)
const {movieid}= useParams();
    
  useEffect(()=> 
  {fetch(`${API}/movie/${movieid}`,{     
    method:"GET",
  })
.then((data)=>data.json())
.then((bk1)=>{setMovie(bk1)})
   },[]);
  
    return(
    
      movie    ? <EditForm movie={movie}/>: "loading......"
  
        
    )
}




function EditForm({movie}) {
    const [name,setName]=useState(movie.name);
    const [poster,setPoster]=useState(movie.poster);
    const [rating,setRating]=useState(movie.rating);
    const [summary,setSummary]=useState(movie.summary);
    const[trailer,setTrailer]=useState(movie.trailer);
    const navigate= useNavigate();
  return (
    <div className='editForm'>
         <TextField className="filled-basic" label="NAME" value={name} variant="filled" onChange={(e)=>setName(e.target.value)} /> <br/>
         <TextField className="filled-basic" label="Summary" value={summary}   variant="filled" onChange={(e)=>setSummary(e.target.value)} /> <br/>
         <TextField className="filled-basic" label="rating" value={rating} variant="filled"  onChange={(e)=>setRating(e.target.value)}/> <br/>
         <TextField className="filled-basic" label="trailer" value={trailer} variant="filled"  onChange={(e)=>setTrailer(e.target.value)} /> <br/>
         <TextField className="filled-basic" label="poster" value={poster} variant="filled" onChange={(e)=>setPoster(e.target.value)}  /><br/>
         <Button variant="contained" color="success" className='btn'
         onClick={()=>{
            const updateMovie={
                name:name,
                poster:poster,
                rating:rating,
                summary:summary,
                trailer:trailer,
                
            };
             fetch(`${API}/movie/${movie.id}`,{
              method: "PUT",
              body: JSON.stringify(updateMovie),
              headers: { "Content-Type": "application/json" },
            })
              .then((data) => data.json())
              .then(() => navigate("/movie"));
             }
            }
         
         >SAVE</Button>
    </div>
  )

  
}

export default Edit