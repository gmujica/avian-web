import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import SpecialCard from '../components/SpecialCard.jsx'
import SpecialCard2 from '../components/SpecialCard2.jsx'
import SpecialCard3 from '../components/SpecialCard3.jsx'
import SpecialCard5 from '../components/SpecialCard5.jsx'

class PromotionsList extends Component {

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
              <Grid container spacing={24} style={{padding: 24}}>
                  <Grid item xs={6} sm={6} lg={6} xl={6}>
                    <SpecialCard5 />
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6} xl={6}>
                    <SpecialCard3 />
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6} xl={6}>
                    <SpecialCard />
                  </Grid>
                  <Grid item xs={6} sm={6} lg={6} xl={6}>
                    <SpecialCard2 />
                  </Grid>
              </Grid>
          </div>
      </div>
    )
  }
}
export default PromotionsList
