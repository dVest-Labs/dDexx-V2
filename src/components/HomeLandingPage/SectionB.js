import React from 'react';
import {Box, Button, Grid, makeStyles, Typography, useMediaQuery, useTheme,} from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import phoneAsset from "../images/phoneAsset.png";
import trade from "../images/trade.jpg";
import chart from "../images/chart.png";
import {Container} from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {

    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),

      //    width: "23rem",
      //    marginRight: "50%",
    }
  },
  btn: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1)
  },
  btn1: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2)
  },
  headerText: {
    marginBottom: theme.spacing(3)
  },
  subText: {
    marginBottom: theme.spacing(2)
  },
  secondGrid: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),

      //    width: "23rem",
      //    marginRight: "50%",
    }
  },
  subText1: {
    marginLeft: theme.spacing(3.5),
    marginBottom: theme.spacing(3)
  },
  phoneAsset: {
    width: "55%",
    marginLeft: theme.spacing(15)
  },
  trade: {
    width: "30rem",
    [theme.breakpoints.down('md')]: {
      // marginTop: theme.spacing(15),
      //    width: "23rem",
      //    marginRight: "50%",
    }
  }
}));

const SectionB = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Container className={classes.container}>

        <Grid container direction="row" alignItems="center" spacing={3}>

          <Grid item md={6} xs={12}>
            <img src={chart} alt="image 1" className={classes.trade}/>
          </Grid>

          <Grid item md={6} xs={12}>
            <Grid container direction="column" justifyContent="flex-end" alignItems="flex-start">
              <Button color="primary" alignItems="left" variant="outlined" className={classes.btn}>Decentralized &
                non-custodial</Button>
              <Typography variant="h3" className={classes.headerText}>No registration required</Typography>
              <Typography variant="body2" className={classes.subText}>Infinity Crypto is a leading decentralized,
                non-custodial financial</Typography>
              <Typography variant="body2" className={classes.subText}>hub and exchange platform. Simply connect with
                your Infinity Wallet</Typography>
              <Typography variant="body2" className={classes.subText}>or any other compatible wallet and start trading,
                earning and</Typography>
              <Typography variant="body2" className={classes.subText}>interacting with the platform securely in
                seconds.</Typography>
            </Grid>
          </Grid>
        </Grid>


        <Grid container direction="row" alignItems="center" spacing={3} className={classes.secondGrid}>

          <Grid item md={6} xs={12}>
            <Button color="primary" alignItems="left" variant="outlined" className={classes.btn}>Trade, Buy &
              Sell</Button>
            <Typography variant="h3" className={classes.headerText}><Box fontWeight="700"
                                                                         display='inline'>Trade</Box> like a
              pro</Typography>

            <Typography variant="body1"><CheckBoxIcon style={{ verticalAlign: "top" }} color="primary"/> Exchange
              decentralized directly between the assets you want</Typography>
            <Typography variant="body1" className={classes.subText1}> without needing to manually navigate multiple
              trading pairs.</Typography>

            <Typography variant="body1"><CheckBoxIcon style={{ verticalAlign: "top" }} color="primary"/> Competitive
              rates at less than 1% spread between buy and sell</Typography>
            <Typography variant="body1" className={classes.subText1}> thanks to a unique AMM exchange
              model.</Typography>

            <Typography variant="body1"><CheckBoxIcon style={{ verticalAlign: "top" }} color="primary"/> Smart Order
              Routing to ensure you get the best price execution</Typography>
            <Typography variant="body1" className={classes.subText1}> across every pair.</Typography>

            <Button color="primary" alignItems="left" size="large" variant="contained" className={classes.btn1}>Start
              Trading Now</Button>
          </Grid>

          <Grid item md={6} xs={12}>
            <img src={phoneAsset} alt="Phone Asset" className={classes.phoneAsset}/>
          </Grid>

        </Grid>

        <Grid container direction="row" alignItems="center" spacing={3} className={classes.secondGrid}>

          <Grid item md={6} xs={12}>
            <img src={trade} alt="Trade" className={classes.trade}/>
          </Grid>
          <Grid item md={6} xs={12}>
            <Button color="primary" alignItems="left" variant="outlined" className={classes.btn}>Trade, Buy &
              Sell</Button>
            <Typography variant="h3" className={classes.headerText}><Box fontWeight="700"
                                                                         display='inline'>Trade</Box> like a
              pro</Typography>

            <Typography variant="body1"><CheckBoxIcon style={{ verticalAlign: "top" }} color="primary"/> Exchange
              decentralized directly between the assets you want</Typography>
            <Typography variant="body1" className={classes.subText1}> without needing to manually navigate multiple
              trading pairs.</Typography>

            <Typography variant="body1"><CheckBoxIcon style={{ verticalAlign: "top" }} color="primary"/> Competitive
              rates at less than 1% spread between buy and sell</Typography>
            <Typography variant="body1" className={classes.subText1}> thanks to a unique AMM exchange
              model.</Typography>

            <Typography variant="body1"><CheckBoxIcon style={{ verticalAlign: "top" }} color="primary"/> Smart Order
              Routing to ensure you get the best price execution</Typography>
            <Typography variant="body1" className={classes.subText1}> across every pair.</Typography>

            <Button color="primary" alignItems="left" size="large" variant="contained" className={classes.btn1}>Start
              Trading Now</Button>
          </Grid>

        </Grid>
      </Container>
    </div>
  );
};

export default SectionB;
