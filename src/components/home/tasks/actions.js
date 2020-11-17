export const actionsType = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
  CHECK_TASK: 'CHECK_TASK'
};

export const addTask = (value) => ({
  type: actionsType.ADD_TASK,
  value
});

export const deleteTask = () => ({
  type: actionsType.DELETE_TASK
});

export const checkTask = () => ({
  type: actionsType.CHECK_TASK
});
