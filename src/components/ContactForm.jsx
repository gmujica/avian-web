import React, {
  Component,
  Fragment
} from 'react'
import {
  Grid,
  Paper,
  Typography,
  Button
} from '@material-ui/core/'
import SelectionSex from '../components/SelectionSex.jsx'

export class ContactForm extends Component {
  render() {
    return (
      <Fragment>
        <Paper style={{
          backgroundColor: "#8e24aa",
        }}>
          <Grid container spacing={24} style={{padding: 24}}>
          <Grid item  xs={12}>
            <Typography variant="display2" gutterBottom style={{color: "#FFF"}}>
              Contactanos
            </Typography>
          </Grid>
          </Grid>
        </Paper>
        <Paper>
        <Grid container spacing={24}
        style={{padding: "100px"}}>
          <Grid item xs={3}>
            <Typography className="label" align="left">
              Nombre
            </Typography>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </Grid>
          <Grid item xs={3}>
            <Typography className="label" align="left">
              Apellido
            </Typography>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography className="label" align="left" color="primary">
              Telefono (Opcional)
            </Typography>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography className="label" align="left">
              Correo
            </Typography>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography className="label" align="left">
              Edad
            </Typography>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography className="label" align="left">
              Pais
            </Typography>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </Grid>
          <Grid item xs={6}>
            <SelectionSex />
          </Grid>
          <Grid item xs={12}>
            <Typography className="label" align="left">
              Mensaje
            </Typography>
            <textarea class="textarea"></textarea>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
        </Paper>
      </Fragment>
    );
  }
}
export default ContactForm
