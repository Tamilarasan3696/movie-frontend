import React from 'react';
import { useFormik } from 'formik';
// import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { API } from './global';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';




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

 function Form() {
  const navigate =useNavigate();
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
    
  // });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: () => {},
    onSubmit: async (values) => {
      try {
        let loginReq = await axios.post(`${API}/user/login`, values);
        console.log(loginReq)
               if (loginReq.data.message==="succesfully login") {
                console.log("successful")
          navigate("/home");
          window.location.reload();
        } 
        else {
          alert("Invalid credentials");
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
          login
        </Button>
        <Grid container>
                        <Grid item xs>
                            <Link to="/signup" variant="body2">
                                sign up ?
                            </Link>
                        </Grid>
                    </Grid>

      </form>
    </div>
  );
};

export default Form