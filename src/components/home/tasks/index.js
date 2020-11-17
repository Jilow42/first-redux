import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core';
import { checkTask, deleteTask } from './actions';
import store from '../../../store';

const Task = ({ checked, label, id }) => {
  const onChecked = () => {
    store.dispatch(checkTask(id));
  };
  const onDeleted = () => {
    store.dispatch(deleteTask(id));
  };

  return (
    <Grid container item xs={12}>
      <FormControlLabel
        control={<Checkbox checked={checked} />}
        label={label}
        onClick={() => onChecked()}
      />
      <Button color="secondary" onClick={() => onDeleted()}>Delete</Button>
    </Grid>
  );
};

const Tasks = ({ tasks }) => (
  <Grid container item xs={12}>
    {tasks.map((task) => (<Task checked={task.checked} label={task.label} id={task.id} />))}
  </Grid>
);

const mapToProps = (state) => ({
  tasks: state.tasks
});

export default connect(mapToProps)(Tasks);
