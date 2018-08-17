// this is a contaires for Latest Promotions on home page
import React, {Component} from 'react'
import {
  Grid,
  Paper,
  Typography
} from '@material-ui/core'
import SpecialCard from '../components/SpecialCard.jsx'
import SpecialCard2 from '../components/SpecialCard2.jsx'

class LatestPromotions extends Component {

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
                <Grid item xs={12}>
                <Typography variant="display2" gutterBottom color="primary">
                    Ultimas Promociones
                </Typography>
                </Grid>
                  <Grid item xs={12} sm={6} lg={5} xl={3} align="right">
                    <SpecialCard />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={5} xl={3} align="right">
                    <SpecialCard2 />
                  </Grid>
                </Grid>
            </Paper>
          </div>
      </div>
    )
  }
}
export default LatestPromotions
