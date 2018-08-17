import React, {Component} from 'react';
import {
  Grid,
   Paper,
   Typography
 } from '@material-ui/core'
import Card5 from '../components/Card5.jsx'
import Card6 from '../components/Card6.jsx'
import Card8 from '../components/Card8.jsx'
import Card2 from '../components/Card2.jsx'

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
            backgroundColor: "#7cb342",
          }}>
            <Grid container spacing={24} style={{padding: 24}}>
            <Grid item  xs={12}>
              <Typography variant="display2" gutterBottom style={{color: "#FFF"}}>
                Paquetes
              </Typography>
            </Grid>
            </Grid>
          </Paper>
          <Paper>
            <Grid container spacing={24} style={{padding: 24}}>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card5 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card8 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card6 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card2 />
                  </Grid>
              </Grid>
              </Paper>
          </div>
      </div>
    )
  }
}
export default Package2
