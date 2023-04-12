import React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate} from 'react-router-dom';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';

function NavBar() {
    const navigate= useNavigate();
    const [mode,setMode]=useState("light");
  
  
    const darkTheme = createTheme({
      palette: {
        mode: mode,
      },
    });


  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
<AppBar  className='appbar'>
       <Toolbar >
      
      <Button className='HomeMenu' variant="contained" color='inherit' onClick={()=>navigate("/home")}>Home</Button>
      <Button  className='HomeMenu' variant="contained" color='inherit'  onClick={()=>navigate("/movie")}>Movie</Button>
      <Button   className='HomeMenu' variant="contained" color='inherit' onClick={()=>navigate("/addmovie")}>addMovie</Button>
      <Button  className='HomeMenu' variant="contained" color='inherit' onClick={()=>setMode(mode==="light"? "dark":"light")}>{mode==="light"? "dark":"light"}mode</Button>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  )
}

export default NavBar