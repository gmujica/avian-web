import React from 'react';
import {Link} from 'react-router-dom';
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Tabs
} from '@material-ui/core';
//import Icons from '@material-ui/core/Icon';

const styles = {
  root: {
    flexGrow: 1,
  },
};
/*
state = {
  value: 0,
},

handleChange = (event, value) => {
  this.setState({ value });
},
*/


function NavBar(props) {

  const { classes } = props;

  return (




    <div className={classes.root}>
      <AppBar position="static" color="#FFF">
        <Toolbar>
          
          <div className="logo">
            <img src={require('../img/logo.png')} width="125" height="65" alt="logo"/>
          </div>


          <Typography variant="title" color="Blue">
            Travels & Services
          </Typography>

            <Tabs
            value={0}

            indicatorColor="primary"
            textColor="primary"
             className="tabs-container">
              <Tab label="Inicio" component={Link} to="/"/>
              <Tab label="Paquetes" component={Link} to="/Packages"/>
              <Tab label="Promociones" component={Link} to="/Promotions"/>
              <Tab label="Acerca de nosotros" component={Link} to="/About"/>
              <Tab label="Contactanos" component={Link} to="/Contact" />
            </Tabs>

        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(NavBar);
