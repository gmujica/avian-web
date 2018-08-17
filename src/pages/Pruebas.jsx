import React, {
  Component,
  Fragment
} from 'react'
import Grid from '@material-ui/core/Grid'
import ProgressMobileStepper from '../components/ProgressMobileStepper.jsx'
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper.jsx'

export class Pruebas extends Component {
  render() {
    return (
      <Fragment>
        <Grid container spacing={24} style={{padding: 150}}>
          <Grid item xs={12} align="center">
            <ProgressMobileStepper />
          </Grid>
          <Grid item xs={12}>
            <SwipeableTextMobileStepper />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
export default Pruebas
