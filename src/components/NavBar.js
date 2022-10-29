import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  
} from "@mui/material";
//import {makeStyles} from "@mui/styles";
import { Link } from "react-router-dom";

/**
 * const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
 * 
 */


function Navbar({isAuth,signUserOut}) {
 // const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4">
          Navbar
        </Typography>
          <div  >
            

            {!isAuth ? (
          <>
              <Link to="/login"> Login </Link>
              <Link to="/"> About </Link>
          </>
           
        ) : (
          <>
             <Link to="/home"> Home </Link>
             <Link to="/"> About </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}                



          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;