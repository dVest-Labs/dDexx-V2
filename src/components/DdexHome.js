import React from 'react'
import {Typography,  Grid, Button, Paper, makeStyles, Box} from '@material-ui/core';
import ddexmain from "./images/ddexmain.png"
import quote from "./images/quote.png"
import { Container } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
    container:{
        width: "100%",
        marginTop:theme.spacing(0),
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    },
    image:{
        backgroundImage: `url(${ddexmain})`,
        backgroundSize: "cover",
      height: "100vh",
      width: "100%",
      margin: 0,
      padding: "3rem",
      [theme.breakpoints.down('sm')]: {
        height: "100vh",  
        
      },
      color: "white"
    },
 
    realContainer:{
      marginTop: theme.spacing(3)
    },
    benImage:{
      width: "80%",
      marginTop: theme.spacing(15)
    }
  }));

const DdexHome = () => {
    const classes = useStyles();
    return (
        <div className={classes.container} >
        <div className={classes.image}>
        <Container className={classes.realContainer} >
        <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
           <img src={quote} className={classes.benImage} />
           </Grid>
        </Container>
        </div>
          
        </div>
    )
}

export default DdexHome
