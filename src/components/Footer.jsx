import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  Typography,
  Paper,
  Grid,
  Divider,
  Button
} from '@material-ui/core'

import classNames from 'classnames'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  divider: {

  },
  verticalDivider: {
  borderLeft: `1px solid ${theme.palette.divider}`,
  marginTop: '40px',
  height: '200px',
},
});

class Footer extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    //const { value } = this.state;

    return (
      <Fragment className={classes.root}>
        <Paper>
          <Grid container spacing={24}>
            <Grid item xs={6}
            align="left"
            style={{
              padding: "50px",
            }}>
              <Typography
                gutterBottom
                variant="headline">
                  Contactanos
              </Typography>
              <Typography
                gutterBottom
                variant="title">
                  Avian Travel & services c.a
              </Typography>
              <Typography
                gutterBottom
                variant="subheading">
                <img src={require('../img/email.png')} width="18" height="18" alt="logo" />
                  ventasonline@aviantravel.com.ve
              </Typography>
              <Typography
                gutterBottom
                variant="subheading">
                  <img src={require('../img/phone.png')} width="18" height="18" alt="logo" />
                  +58295.253.48.65 / +58295.253.25.39
              </Typography>
              <Typography
                gutterBottom
                variant="subheading">
                  Nueva Esparta, Porlamar, Av. 4 De Mayo, Centro Comercial Galerias Fente, Piso 1, Local G-9, Sector Porlamar
              </Typography>
            </Grid>

            <Grid item xs={6}
              align="right"
              className={classNames(classes.verticalDivider)}
              style={{
                padding: "50px",
              }}>
              <Button
                className={classes.button}
                variant="fab"
                href="https://www.instagram.com/aviantravels/?hl=es-la"
                  style={{
                    margin: "10px",
                  }}>
                <img src={require('../img/Instagram.png')} width="60" height="60" alt="logo"  />
              </Button>
              <Button
                className={classes.button}
                variant="fab"
                href="https://twitter.com/aviantravels"
                style={{
                  margin: "10px",
                }}>
                <img src={require('../img/Twitter.png')} width="60" height="60" alt="logo" />
              </Button>
              <Button
                className={classes.button}
                variant="fab"
                href="https://www.facebook.com/aviantravels/"
                  style={{
                    margin: "10px",
                  }}>
                <img src={require('../img/Facebook.png')} width="60" height="60" alt="logo" />
              </Button>
              <Typography
                gutterBottom
                variant="subheading"
                  style={{
                    padding: "10px",
                  }}>
                Siguenos en nuestras redes y enterate de nuestras promosiones y eventos
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.divider}>
            <Divider />
          </Grid>
          <Grid container
          spacing={24}>
          <Grid item xs={7}>
          <Typography
            variant="headline"
            gutterBottom
            color="inherit"
            align="right"
              style={{
                padding: "50px",
            }}>
            Powered by Avian Tourism Software
          </Typography>
          </Grid>
          <Grid item xs={5}
            style={{
            padding: "25px",
          }}>
            <img src={require('../img/logo2.png')} width="250" height="120" alt="logo" align="left" />
          </Grid>
          </Grid>
        </Paper>
      </Fragment>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)
