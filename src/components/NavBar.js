import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography, Grid, useMediaQuery, useTheme, Paper} from '@material-ui/core';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu"
import DashboardIcon from '@material-ui/icons/Dashboard';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ddexxImage from "./images/ddexxImage.png"
import { Container } from 'react-bootstrap';
import PersistentDrawer from "./utils/PersistentDrawer.js"
import { useHistory, Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(5),
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(1),
      display: "inline"
    },
    btn:{
        marginRight: theme.spacing(4)
    },
    btnSmall:{
      marginLeft: theme.spacing(0),
      marginBottom: theme.spacing(1)
  },
    expandIcon:{
      marginTop: "20rem",
      flexGrow: 1,
    },
    appBar:{
     backgroundColor: "black",
     width: "100%",
     color: "white"
    },
    logo:{
      width: "10rem",
      flexGrow: 1,
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        width: "8rem",
           }
    },
    container:{
      width: "100%"
    },
    menuPaper:{
      padding: theme.spacing(3)
    }
  }));


export default function NavBar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"))
  console.log(isMatch);
  const history = useHistory();

  function home() {
    history.push("/ddexHome");
  }

   //Menu Icon
   const [anchorEl, setAnchorEl] = React.useState(null);
  //  const open = Boolean(anchorEl);
   const [isDrawerOpened, setIsDrawerOpened] = useState(false)
  //  const [isMenuOpen, setIsMenuOpen] = useState(false)

   const toggleDrawerStatus =() => {
       setIsDrawerOpened(true)
   }

   const closeDrawer =() => {
       setIsDrawerOpened(false)
   }


 
   const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
    const classes = useStyles();
    return (
        <div>
         <Container className={classes.container}>
         <AppBar className={classes.appBar} elevation={0}  position="fixed">
        <Toolbar>

        {isMatch ?
        <>
        <PersistentDrawer toggleDrawerStatus={toggleDrawerStatus}
           closeDrawer={closeDrawer}
           isDrawerOpened={isDrawerOpened}
          />
      <img src={ddexxImage} alt="ddex" className={classes.logo}/>
       <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
                <Button color="primary"  className={classes.btnSmall}  variant="contained" >Connect Wallet</Button>
       </Grid>
          </>
         :(
         <>
         <img src={ddexxImage} alt="ddex" className={classes.logo}/>
     

     <Grid container direction="row" justify="flex-start" alignItems="flex-start">
  
      <IconButton onClick={handleClick} >
      <DashboardIcon style={ { verticalAlign: "middle"}, {color: "white"}} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
       {/* <MenuItem className={classes.menuPaper} onClick={handleClick}>Profile</MenuItem> */}
        <MenuItem className={classes.menuPaper} onClick={home}> Profile </MenuItem>
        <MenuItem className={classes.menuPaper} >My account</MenuItem>
        <MenuItem className={classes.menuPaper} >Logout</MenuItem> 
     </Menu>
      
 
    

     <Typography variant="h6" className={classes.title}>
      Trade<ExpandMoreOutlinedIcon style={ { verticalAlign: "middle"}} fontSize="small"/>
     </Typography>

     <Typography variant="h6" className={classes.title} >
       Earn <ExpandMoreOutlinedIcon style={ { verticalAlign: "middle"}} fontSize="small"/>
     </Typography>

     <Typography variant="h6" className={classes.title} >
     Analytics <ExpandMoreOutlinedIcon style={ { verticalAlign: "middle"}} fontSize="small"/>
     </Typography>

     <Typography variant="h6" className={classes.title}>
       More <ExpandMoreOutlinedIcon style={ { verticalAlign: "middle"}} fontSize="small"/>
     </Typography>

    

     </Grid>
     <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
           <Button color="primary"  className={classes.btn}  variant="contained" >Connect Wallet</Button>
     </Grid>
         </>
          ) }
     
           
        </Toolbar>
      </AppBar>
      </Container>  
        </div>
    )
}
