import React, {useState} from 'react'
import "../styles.css"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import newlogo from "./images/newlogo.png";
import {Container} from 'react-bootstrap';
import PersistentDrawer from "./utils/PersistentDrawer.js";
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import OpacityIcon from '@material-ui/icons/Opacity';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
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
  btn: {
    marginRight: theme.spacing(4)
  },
  btnSmall: {
    marginLeft: theme.spacing(0),
    marginBottom: theme.spacing(1)
  },
  expandIcon: {
    marginTop: "20rem",
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "black",
    width: "100%",
    color: "white"
  },
  logo: {
    width: "10rem",
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: "8rem",
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
    },
    menuTabIcon:{
      marginRight: theme.spacing(2)
    }
  },
  container: {
    width: "100%"
  },
  menuPaper: {
    padding: theme.spacing(3)
  },
  menuTabIcon: {
    marginRight: theme.spacing(2)
  }
}));


export default function NavBar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch);
  const history = useHistory();

   //Menu Icon
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [openDefi, setOpenDefi] = React.useState(null);
   const [openToken, setOpenToken] = React.useState(null);
  //  const open = Boolean(anchorEl);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  //  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDrawerStatus = () => {
    setIsDrawerOpened(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpened(false);
  };


 // Handle Click functions
   const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickDefi= (event) => {
    setOpenDefi(event.currentTarget);
  };
 
  const handleClickToken= (event) => {
    setOpenToken(event.currentTarget);
  };


//Handle Close functions
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseDefi = () => {
    setOpenDefi(null);
  };
  const handleCloseToken= () => {
    setOpenToken(null);
  };


  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <AppBar className={classes.appBar} elevation={0} position="fixed">
          <Toolbar>

            {isMatch ?
              <>
                <PersistentDrawer toggleDrawerStatus={toggleDrawerStatus}
                                  closeDrawer={closeDrawer}
                                  isDrawerOpened={isDrawerOpened}
                />
                <img src={newlogo} alt="ddex" className={classes.logo}/>
                <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
                  <Button color="primary" className={classes.btnSmall} variant="contained">Connect Wallet</Button>
                </Grid>
              </>
              : (
                <>
                  <img src={newlogo} alt="ddex" className={classes.logo}/>
                  <Grid container alignContent={"center"} alignItems={"center"}>
                    <Grid item md={9}>
                      <Grid container direction="row" spacing={1} justify="flex-tart" alignItems="center">
                        <IconButton onClick={handleClick}>
                          <DashboardIcon style={{ verticalAlign: "middle", color: "white" }}/>
                        </IconButton>

                        <Grid item>
                          <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                          >

                            <a href="/ddexhome" className="text-link"><MenuItem className={classes.menuPaper}> <HomeIcon
                              className={classes.menuTabIcon} style={{ verticalAlign: "middle" }}/> Home </MenuItem>
                            </a>
                            <a href="/swap" className="text-link"><MenuItem className={classes.menuPaper}>
                              <SwapHorizIcon
                                className={classes.menuTabIcon}
                                style={{ verticalAlign: "middle" }}/> Swap</MenuItem></a>
                            <MenuItem className={classes.menuPaper}><AccountBalanceIcon className="icons"
                                                                                        className={classes.menuTabIcon}/> Farms</MenuItem>
                            <MenuItem className={classes.menuPaper}><OpacityIcon className="icons"
                                                                                 className={classes.menuTabIcon}/> Pools</MenuItem>
                          </Menu>
                          <Typography variant="h6" className={classes.title} onClick={handleClickDefi}>
                            DeFi<ExpandMoreOutlinedIcon style={{ verticalAlign: "middle" }} fontSize="small"/>
                          </Typography>
                          <Menu
                            id="simple-menu"
                            anchorEl={openDefi}
                            keepMounted
                            open={Boolean(openDefi)}
                            onClose={handleCloseDefi}
                          >

                            <a href="/ddexhome" className="text-link"><MenuItem className={classes.menuPaper}>
                              <ShowChartIcon
                                className={classes.menuTabIcon} style={{ verticalAlign: "middle" }}/> DeFi Index Funds
                            </MenuItem> </a>
                            <a href="/swap" className="text-link"><MenuItem className={classes.menuPaper}>
                              <InsertChartIcon
                                className={classes.menuTabIcon} style={{ verticalAlign: "middle" }}/> DeFi
                              Stocks</MenuItem></a>
                          </Menu>
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" className={classes.title} onClick={handleClickToken}>
                            Get Tokens <LocalOfferIcon style={{ verticalAlign: "middle" }} fontSize="small"/>
                          </Typography>
                          <Menu
                            id="simple-menu"
                            anchorEl={openToken}
                            keepMounted
                            open={Boolean(openToken)}
                            onClose={handleCloseToken}
                          >

                            <a href="/ddexhome" className="text-link"><MenuItem
                              className={classes.menuPaper}> Home </MenuItem> </a>
                            <a href="/swap" className="text-link"><MenuItem className={classes.menuPaper}>
                              <SwapHorizIcon
                                className={classes.menuTabIcon}
                                style={{ verticalAlign: "middle" }}/> Swap</MenuItem></a>
                            <MenuItem className={classes.menuPaper}><AccountBalanceIcon className="icons"
                                                                                        className={classes.menuTabIcon}/> Farms</MenuItem>
                            <MenuItem className={classes.menuPaper}><OpacityIcon className="icons"
                                                                                 className={classes.menuTabIcon}/> Pools</MenuItem>
                          </Menu>
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" className={classes.title}>
                            GameFi <SportsEsportsIcon style={{ verticalAlign: "middle" }} fontSize="medium"/>
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h6" className={classes.title}>
                            Info <ExpandMoreOutlinedIcon style={{ verticalAlign: "middle" }} fontSize="small"/>
                          </Typography>
                        </Grid>


                      </Grid>
                    </Grid>
                    <Grid item md={3}>
                      <Grid container direction="row" justifyContent="flex-end" alignItems="flex-end">
                        <Button color="primary" className={classes.btn} variant="contained">Connect Wallet</Button>
                      </Grid>

                    </Grid>
                  </Grid>
                </>
              )}


          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
