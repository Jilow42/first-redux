import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core';

const Task = ({ checked, label }) => (
  <Grid container item xs={12}>
    <FormControlLabel
      control={<Checkbox checked={checked} />}
      label={label}
    />
    <Button color="secondary">Delete</Button>
  </Grid>
);

const Tasks = ({ tasks }) => (
  <Grid container item xs={12}>
    {tasks.map((task) => (<Task checked={task.checked} label={task.label} />))}
  </Grid>
);

const mapToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapToProps)(Tasks);
