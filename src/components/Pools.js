import React from 'react'
import {Typography,  Grid, Button, Paper, makeStyles, Box, useMediaQuery, useTheme,} from '@material-ui/core';
import blue from "./images/blue.jpg"

const useStyles = makeStyles((theme) => ({
    root: {  
    },
    image:{
        backgroundImage: `url(${blue})`,
        backgroundSize: "cover",
      height: "100vh",
      width: "100%",
      [theme.breakpoints.down('sm')]: {
        height: "100vh",  
        
      },
      color: "white"
    },
 
  }));

const Pools = () => {
    const classes = useStyles();
    return (
        <div className={classes.image}>
            
        </div>
    )
}

export default Pools
