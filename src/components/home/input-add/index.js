import React from 'react';
import {
  Grid,
  TextField,
  Button
} from '@material-ui/core';

import store from '../../../store';
import { addTask } from '../tasks/actions';

class InputAdd extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      value: ''
    };
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  onClick() {
    const { value } = this.state;

    store.dispatch(addTask(value));
  }

  render() {
    const { value } = this.state;

    return (
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <TextField fullWidth value={value} onChange={this.onChange} label="Add task" />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={this.onClick}>Add</Button>
        </Grid>
      </Grid>
    );
  }
}

export default InputAdd;
