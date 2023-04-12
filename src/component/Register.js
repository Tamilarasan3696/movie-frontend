import React from 'react';
import { useFormik } from 'formik';
// import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { API } from './global';
import axios from 'axios';

// const  validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });

 function Register() {
  const navigate =useNavigate();


  let formik = useFormik({
    initialValues: {
      email: "",
      name:"",
      password: "",
    },
    validate: () => {},
    onSubmit: async (values) => {
      try {
        const Register = await axios.post(`${API}/user/signup`, values);
        console.log(Register)
               if (Register.data.message==="succesfully signup") {
                console.log("successful")
                navigate("/home");
                window.location.reload();
          
        } 
        
      } catch (error) {
        alert("Invalid credentials");
        console.log(error);
      }
    },
  });
  return (
    <div className='form'>
      <form onSubmit={formik.handleSubmit}>
      <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
             /><br/>
        <br/>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br/>
        <br/>
        
    
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
          <br/>  <br/>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register