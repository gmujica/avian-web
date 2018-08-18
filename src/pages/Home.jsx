import React from 'react'
//import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import SimpleList from '../components/SimpleList.jsx'
import MostSoldPackages from '../components/MostSoldPackages.jsx'
import LatestPromotions from '../components/LatestPromotions.jsx'
import Footer from '../components/Footer.jsx'
import AboutContent from '../components/AboutContent.jsx'
import Package2 from '../components/Package2.jsx'
import Spackage2 from '../components/Spackage2.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  //SideBar open
  drawerPaper: {
    height: "100%",
    position: 'relative',
  // position: 'fixed',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  //SideBar closed
  drawerPaperClose: {
    overflowX: 'hidden',
    //
    //position: 'fixed',
    //
    //backgroundColor: '#08253C',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "100%",
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#08253C',
    padding: theme.spacing.unit * 3,
  },
});

class Home extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed" color="inherit"
          className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Grid container spacing={24}>
              <Grid item xs={2} style={{padding: 24}}>
                <img src={require('../img/Logo3.png')} width="150" height="150" alt="logo"/>
              </Grid>
              <Grid item xs={10}>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  fullWidth
                  style={{
                    padding: "10px",
                    marginTop: "20px",
                  }}>
                  <Tab label="Inicio" />
                  <Tab label="Paquetes"  />
                  <Tab label="Promociones" />
                  <Tab label="Acerca de Nosotros" />
                  <Tab label="Contactanos" />
                </Tabs>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
            <SimpleList />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <Grid container spacing={24}>
              <Grid item xs={12}>
              <Typography variant="display2" gutterBottom style={{color: "#FFF"}}>
                Card Principal 2
              </Typography>
              </Grid>
              <Grid item xs={12}>
                <MostSoldPackages />
              </Grid>
              <Grid item xs={12}>
                <LatestPromotions />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <AboutContent />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Spackage2 />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Package2 />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <ContactForm />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home)
