import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
};

class CenteredTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar position="fixed" color="inherit">
        <Paper className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={2} align="right">
              <img src={require('../img/avianLogo.png')} width="125" height="65" alt="logo"/>
            </Grid>
            <Grid item xs={2}>
            <Typography
              variant="title"
              color="primary"
              align="left"
                style={{
                  padding: "25px",
                }}>
              Travels & Services
            </Typography>
            </Grid>
            <Grid item xs={8}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth
              style={{
                padding: "10px",
              }}>
              <Tab label="Inicio" component={Link} to="/" />
              <Tab label="Paquetes" component={Link} to="/Packages" />
              <Tab label="Promociones" component={Link} to="/Promotions"/>
              <Tab label="Acerca de Nosotros" component={Link} to="/About" />
              <Tab label="Contactanos" component={Link} to="/Contact" />
            </Tabs>
            </Grid>
          </Grid>
        </Paper>
      </AppBar>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
