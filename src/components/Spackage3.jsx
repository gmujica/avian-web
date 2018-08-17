import React, {Component} from 'react'
import {
  Grid,
   Paper
 } from '@material-ui/core'
 import SpecialCard from '../components/SpecialCard.jsx'
 import SpecialCard4 from '../components/SpecialCard4.jsx'



class Spackage3 extends Component {

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
                    <SpecialCard4 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={5} xl={3} align="right">
                    <SpecialCard />
                  </Grid>
              </Grid>
              </Paper>
          </div>
      </div>
    )
  }
}
export default Spackage3
