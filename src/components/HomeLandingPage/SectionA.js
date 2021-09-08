import React from 'react'
import {Typography,  Grid, Button, Paper, makeStyles, Box} from '@material-ui/core';
import landing from "../images/landing.jpeg"
import { Container } from 'react-bootstrap';



const useStyles = makeStyles((theme) => ({
    root: {

      
    },
    container:{
        width: "100%",
        marginTop:theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    },
    headerText:{
        marginBottom:theme.spacing(0),
        marginTop:theme.spacing(20)
    },
    headerText1:{
        marginTop:theme.spacing(1)
    },
    subText:{
        marginTop:theme.spacing(1)
    },
    btnGroup:{
        marginTop: theme.spacing(5)
    },
    btn:{
        margin: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    headerGrid:{
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(1),
        padding: theme.spacing(1)
    },
    image:{
        backgroundImage: `url(${landing})`,
        backgroundSize: "cover",
      height: "85vh",
      width: "100%",
      [theme.breakpoints.down('sm')]: {
        height: "100vh",  
        
      },
      color: "white"
    },
 
  }));

const SectionA = () => {
    const classes = useStyles();
    return (
     
            <div className={classes.image}>
             <Container className={classes.container}>
             <div className={classes.headerGridSection}>
             <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.headerGrid}>
                     <Typography variant="h3" className={classes.headerText}>The leading DeFi protocol & platform to</Typography>
                     <Typography variant="h3" className={classes.headerText1}>invest, earn and manage your crypto</Typography>
                    <Typography variant="body1" className={classes.subText}>An all-in-one decentralized finance ecosystem built by the people for the people for financial freedom</Typography>
             </Grid>
             </div>
 
             <Grid container direction="column" justifyContent="center" alignItems="center" className={classes.btnGroup} spacing={0}>
             <Grid item  md={6} xs={12} >
                 <Button color="primary" className={classes.btn} variant="contained">Start Trading Now</Button>
                 </Grid>
                <Grid item  md={6} xs={12} >
                 <Button color="primary" className={classes.btn} variant="outlined">Earn form Farming</Button>
                 </Grid>
             </Grid>
             </Container>

            </div>
      
    )
}

export default SectionA
