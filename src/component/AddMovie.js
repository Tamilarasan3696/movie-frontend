import React from 'react';
import { API } from './global';
import { useNavigate } from 'react-router-dom';
import {TextField,Button} from '@mui/material';
import {useFormik} from 'formik';
import * as yup from "yup";
import NavBar from './NavBar';

  const formSchema= yup.object({
    name: yup.string()
        .min(4, "Paste a valid title")
        .required("name is mandatory "),
    poster: yup.string()
        .min(10, "Please enter valid url")
        .required("url is mandatory "),
    rating: yup.number()
        .min(0, "Rating is necessary").max(10)
        .required("Rating is necessary "),
    summary: yup.string()
        .min(10, "Summary is required")
        .required("Summary is required "),
   trailer: yup.string()
        .min(10, "trailer  is required")
        .required("trailer is required "),
   id: yup.number()
        .min(0, "trailer  is required").max(1000)
        .required("Id is required "),
});
  
  


function AddMovie({bookList,setBookList}) {
  const navigate= useNavigate();
   
    const formik=useFormik({
      initialValues:{
      name:"",
      poster:"",
      summary:"",
      trailer:"",
      rating:"",
       id:"",
      },
      validationSchema:formSchema,
      onSubmit:(newMovie)=>{
       console.log("onSubmit",newMovie)
       
          creatMovie(newMovie);
      }

  })

  const  creatMovie=(newMovie)=>{
    console.log("creatMovie",newMovie)
    fetch(`${API}/movie`,{
      method:"POST",
      body:JSON.stringify(newMovie),
        headers:{"content-Type":"application/json"},})
        .then((data)=>data.json())
        .then(()=>navigate("/movie"))
        setBookList(...bookList,newMovie)

  }



    
  return (

    <div>  <NavBar/>

<form onSubmit={formik.handleSubmit} style={{ marginLeft: '100px', marginTop: '60px' }} className="add-user-form">
            <h1 style={{ fontWeight: 'bolder'}}>ADD MOVIE</h1><br />
    <TextField
                id="name"
                name="name"
                label="title"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
            <br />
            <TextField
                id="poster"
                name="poster"
                label="poster"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.poster}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.poster && formik.errors.poster
                ? formik.errors.poster
                : ""}
            <br />
            <TextField
                id="summary"
                name="summary"
                label="summary"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.summary}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.summary && formik.errors.summary
                ? formik.errors.summary
                : ""}
            <br />
            <TextField
                id="trailer"
                name="trailer"
                label="trailer"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.trailer}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.trailer && formik.errors.trailer
                ? formik.errors.trailer
                : ""}
    <br/>
    <TextField
                id="rating"
                name="rating"
                label="rating"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rating}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.rating && formik.errors.rating
                ? formik.errors.rating
                : ""}
                <br/>
                <TextField
                id="id"
                name="id"
                label="id"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.id}
                style={{ width: '800px' }}
            /><br />
            {formik.touched.id && formik.errors.id
                ? formik.errors.id
                : ""}
                <br/>
        <Button  type="submit" onClick={creatMovie}>Add Movie</Button>
    </form>
    </div>
  )
}

export default  AddMovie
