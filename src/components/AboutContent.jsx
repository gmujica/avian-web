import React, {
  Fragment
} from 'react'
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import {
  Paper,
  Grid,
  Typography
} from '@material-ui/core'


const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
//    height: '150px',
  },
});

function AboutContent(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography variant="display2" gutterBottom color="primary"
                style={{
                  padding: "50px",
                }}>
                  Quienes Somos
                </Typography>
              </Grid>
              <Grid item xs={6} style={{
                padding: "150px",
              }}>
                <img src={require('../img/A.png')} width="500" height="500" alt="logo" />
              </Grid>
              <Grid item xs={6}>
                <Grid item xs={12}>
                  <Typography variant="headline" gutterBottom align="left" color="primary">
                    Historia
                  </Typography>
                  <Typography align="justify">
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="headline" gutterBottom align="left" color="primary">
                    Mision
                  </Typography>
                  <Typography align="justify">
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="headline" gutterBottom align="left" color="primary">
                    Vision
                  </Typography>
                  <Typography align="justify">
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="headline" gutterBottom align="left" color="primary">
                    Valores
                  </Typography>
                  <Typography align="justify">
                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                  </Typography>
                </Grid>
              </Grid>
          </Grid>
      </Paper>
    </Fragment>

  );
}
/*
FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};
*/
export default withStyles(styles)(AboutContent)
