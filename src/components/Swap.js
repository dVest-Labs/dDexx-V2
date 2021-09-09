import React from 'react'
import {Typography,  Grid, Button, Paper, makeStyles, Box, useMediaQuery, useTheme,} from '@material-ui/core';
import coinswap from "./images/coinswap.jpg"

const useStyles = makeStyles((theme) => ({
    root: {

      
    },
    image:{
        backgroundImage: `url(${coinswap})`,
        backgroundSize: "cover",
      height: "100vh",
      width: "100%",
      [theme.breakpoints.down('sm')]: {
        height: "100vh",  
        
      },
      color: "white"
    },
 
  }));

const Swap = () => {
    const classes = useStyles();
    return (
        <div className={classes.image}>
            
        </div>
    )
}

export default Swap
