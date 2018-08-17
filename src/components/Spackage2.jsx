import React, {Component} from 'react'
import {
  Grid,
   Paper,
   Typography
 } from '@material-ui/core'
 import SpecialCard5 from '../components/SpecialCard5.jsx'
 import SpecialCard3 from '../components/SpecialCard3.jsx'



class Package2 extends Component {

  onSearchInputChange = (event) => {
    if (event.target.value){
      this.setState({searchString: event.target.value})
    }else {
      this.setState({searchString: ''})
    }
    this.getPackages()
  }
  render() {
    return(
      <div>
          <div>
          <Paper style={{
            backgroundColor: "#fdd835",
          }}>
            <Grid container spacing={24} style={{padding: 24}}>
            <Grid item  xs={12}>
              <Typography variant="display2" gutterBottom style={{color: "#000000"}}>
                Promociones
              </Typography>
            </Grid>
            </Grid>
          </Paper>
          <Paper>
              <Grid container spacing={24} style={{padding: 24}}>
                  <Grid item xs={12} sm={6} lg={5} xl={3} align="right">
                    <SpecialCard5 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={5} xl={3} align="right">
                    <SpecialCard3 />
                  </Grid>
              </Grid>
              </Paper>
          </div>
      </div>
    )
  }
}
export default Package2
