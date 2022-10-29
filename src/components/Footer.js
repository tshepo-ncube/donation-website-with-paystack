import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';

function Footer() {
  return (
  <>
     

        <Paper elevation={0} 
        sx={{
            marginTop:0.01,
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 52,
          boxShadow: 4,
          borderRadius: 2,
          color: '#0588BC',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 21,
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            verticalAlign: "middle",
        },
      }} bottom>
            <Typography variant="h5" align="center"  sx={{ flexGrow: 1 ,justifyContent:'center' }} center>
            Made With Love 
        </Typography>
        </Paper>
        
        
        </>
  )
}

export default Footer