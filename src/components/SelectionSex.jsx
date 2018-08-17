import React, {
  Fragment
} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
};

class SelectionSex extends React.Component {
  state = {
    selectedValue: 'c',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography align="left">
              Sexo
            </Typography>
          </Grid>
          <Grid item xs={4}>
              Masculino
            <Radio
              checked={this.state.selectedValue === 'a'}
              onChange={this.handleChange}
              value="a"
              color="default"
              name="radio-button-demo"
              aria-label="A"
            />
          </Grid>
          <Grid item xs={4}>
            Femenino
            <Radio
              checked={this.state.selectedValue === 'b'}
              onChange={this.handleChange}
              value="b"
              color="default"
              name="radio-button-demo"
              aria-label="B"
            />
          </Grid>
          <Grid item xs={4}>
            Otro
            <Radio
              checked={this.state.selectedValue === 'c'}
              onChange={this.handleChange}
              value="c"
              color="default"
              name="radio-button-demo"
              aria-label="C"
              className={classes.size}
              icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
              checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

SelectionSex.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectionSex)
