import React, {Component} from 'react'
import {
  Grid,
   Paper
 } from '@material-ui/core';
 import SpecialCard3 from '../components/SpecialCard.jsx'
 import SpecialCard5 from '../components/SpecialCard5.jsx'



class Spackage4 extends Component {

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
export default Spackage4
