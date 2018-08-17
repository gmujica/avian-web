import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  AppBar,
  Typography,
  Paper,
  Grid
} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


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
            <Grid item xs={6}>1</Grid>
            <Grid item xs={6}>
              <Typography gutterBottom align="right">
                Siguenos en nuestras redes y enterate de nuestras promosiones y eventos
              </Typography>
            </Grid>
          </Grid>
            <Divider />
          <Grid container spacing={24}>
            <Grid item xs={6}>
            <Typography gutterBottom align="left">
              Avian Travel & services c.a - Direccion fiscal de avian travel
            </Typography>
            <Typography gutterBottom align="left">
              Direccion fiscal de avian travel
            </Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography gutterBottom align="right">
              Ayuda
              Politica de privacidad
              Terminos de file-custo
              FAQ
            </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper>
          <AppBar position="static">
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <div className="logo">
                <img src={require('../img/logo.png')} width="125" height="65" alt="logo"/>
              </div>
            </Grid>
            <Grid item xs={3}>

            <Typography>
              Powered by Avian Turism Software
            </Typography>

              <img src={require('../img/avian.png')} width="125" height="65" alt="logo"/>
            </Grid>
            </Grid>
        </AppBar>
        </Paper>

      </Fragment>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
