import { actionsType } from './actions';

const initalState = [{
  id: '1',
  label: 'Dormir',
  checked: false
}, {
  id: '1',
  label: 'Manger',
  checked: false
}];

/**
 * Add task
 * @param { Object } state
 * @param { Object } action
 * @return { Object } stateUpdated
 */
const addTask = (state, action) => (
  state.concat([{
    id: String(state.length + 1),
    label: action.value,
    checked: false
  }])
);

const deleteTask = (state) => (state);
const checkTask = (state) => (state);

const tasks = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.ADD_TASK:
      return addTask(state, action);
    case actionsType.DELETE_TASK:
      return deleteTask(state);
    case actionsType.CHECK_TASK:
      return checkTask(state);
    default:
      return state;
  }
};

export default tasks;
