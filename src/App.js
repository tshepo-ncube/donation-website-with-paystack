import './App.css';
import Mapp from './Mapp';
import React, { useState,useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
 

import IconButton from '@mui/material/IconButton';
import { alpha,styled } from '@mui/material/styles';
import ButtonAppBar from './donateComp/AppbarDonate';

import InputBase from '@mui/material/InputBase';
import { margin } from '@mui/system';
 

 

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function App() {
   
 
  
  
 

   
  

  return (
    <>
     <ButtonAppBar style={{marginBottom:10}}/>
            <br/>
      {/* <center> */}
      {/* <form id="paymentForm"> */}
        {/* <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email-address" required />
        </div> */}



        {/* <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">Email Address</span>
  </div>
  <input type="text" class="form-control"  aria-describedby="basic-addon3" id="email-address" required/>
</div> */}


        {/* <div class="form-group">
          <label for="amount">Amount</label>
          <input type="tel" id="amount" required />
        </div> */}


        {/* <div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">$</span>
  </div>
  <input type="text" class="form-control" id="amount" aria-label="Amount (to the nearest dollar)"/>
  <div class="input-group-append">
    <span class="input-group-text">.00</span>
  </div>
</div>


        <div class="form-group">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" />
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>
        <div class="form-submit">
          <button type="submit" onclick="payWithPaystack()">Donate</button>
        </div>
      </form> */}
    {/* </center> */}
    </>
     

      
  );
}

export default App;