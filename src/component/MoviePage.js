import Movie from './Movie';
import { useState , useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {API} from './global';
import { useNavigate } from 'react-router-dom';



 function MoviePage({bookItem}) {
  const[bookList,setBookList]=useState([])
  const navigate = useNavigate();

  
   

  useEffect(()=> {fetch(`${API}/movie`,{     
    method:"GET",
  })
.then((data)=>data.json())
.then((bk)=>{setBookList(bk)})
   },[]);
    

  return (

   
    <div className='cards'>
{/* 
<Slider>
{bookList.map((bk, index) => {
return<div></div>
})}
</Slider> */}

      {bookList.map((bk, index) => (<Movie book={bk} key={bk.id}
        id={bk.id}
         deleteButton={<IconButton aria-label="deleteButton" color="danger"
        onClick={()=>{
          fetch(`${API}/movie/${bk.id}`,{
            method:"DELETE",
          });
          navigate(-1) ;
          }}>
        <DeleteIcon />
      </IconButton> 
      } 
      editButton={<IconButton aria-label="editButton" color="secondary"
      onClick={()=>{
        navigate(`/movie/edit/${bk.id}`)
        }}>
      <EditIcon />
    </IconButton> 
    }
       
      />))
        }
    </div>
    
  );
}
export default MoviePage