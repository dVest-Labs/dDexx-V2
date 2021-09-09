import React from 'react';
import {Card, Grid, makeStyles, Typography} from '@material-ui/core';
import {Container} from 'react-bootstrap';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)

  },
  container: {
    marginTop: "10rem",

  },
  paper: {
    marginLeft: theme.spacing(7),
    marginRight: theme.spacing(7),
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
    color: "white",
    backgroundColor: "black",
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0)
    },
  },
  paper1: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(7),
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
    color: "white",
    backgroundColor: "black",
    display: "block"
  },
  subText: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  gridContainer: {
    backgroundColor: "black"
  },
  mediaIcons: {
    marginTop: theme.spacing(10),
    color: "white"
  },
  individualIcon: {
    margin: theme.spacing(3)
  }

}));

const SectionF = () => {
  const classes = useStyles();
  return (

    <Container>
      <div className={classes.gridContainer}>
        <Grid container direction="row" alignItems="center" spacing={4}  justifyContent="flex-start"
              >
          <Grid item xs={6} sm={6} md={3}>
            <Card className={classes.paper} elevation={0}>
              <Typography className={classes.subText} variant="h6">Products</Typography>
              <Typography className={classes.subText} variant="body1">Swapping</Typography>
              <Typography className={classes.subText} variant="body1">Staking</Typography>
              <Typography className={classes.subText} variant="body1">Farming</Typography>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={3} >
            <Card className={classes.paper} elevation={0}>
            <Typography className={classes.subText} variant="h6">Analytics</Typography>
            <Typography className={classes.subText} variant="body1">Coins</Typography>
            <Typography className={classes.subText} variant="body1">Tokens</Typography>
            <Typography className={classes.subText} variant="body1">Wallet</Typography>
          </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={3} >
            <div className={classes.paper} elevation={0}>
              <Typography className={classes.subText} variant="h6">Services</Typography>
              <Typography className={classes.subText} variant="body1">Swap</Typography>
              <Typography className={classes.subText} variant="body1">Advanced Training</Typography>
              <Typography className={classes.subText} variant="body1">Liqudity Pool</Typography>
            </div>
          </Grid>

          <Grid item xs={6} sm={6} md={3} >
            <div className={classes.paper} elevation={0}>
              <Typography className={classes.subText} variant="h6">More</Typography>
              <Typography className={classes.subText} variant="body1">Markets</Typography>
              <Typography className={classes.subText} variant="body1">Overall</Typography>
              <Typography className={classes.subText} variant="body1">Pools</Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center" className={classes.mediaIcons}>
          <TwitterIcon className={classes.individualIcon}/>
          <FacebookIcon className={classes.individualIcon}/>
          <InstagramIcon className={classes.individualIcon}/>
          <EmailIcon className={classes.individualIcon}/>
        </Grid>

      </div>
    </Container>

  );
};

export default SectionF;
