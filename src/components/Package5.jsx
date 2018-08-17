import React, {Component} from 'react'
import {
  Grid,
   Paper,
   Typography
 } from '@material-ui/core'
import Card7 from '../components/Card7.jsx'
import Card8 from '../components/Card8.jsx'
import Card2 from '../components/Card2.jsx'
import Card4 from '../components/Card4.jsx'

class ListPackages extends Component {

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
              <Grid item  xs={12}>
                <Typography variant="display2" gutterBottom color="inherit">
                    Paquetes Simples
                </Typography>
              </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card7 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card8 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card2 />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3} xl={3}>
                    <Card4 />
                  </Grid>
              </Grid>
              </Paper>
          </div>
      </div>
    )
  }
}
export default ListPackages;
