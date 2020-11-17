import { actionsType } from './actions';

const initalState = [{
  id: '1',
  label: 'Dormir',
  checked: false
},
{
  id: '2',
  label: 'Manger',
  checked: false
}
];

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

const deleteTask = (state, action) => (
  state.filter((supp) => {
    if (supp.id === action.value) {
      return false;
    }
    return true;
  })
);
const checkTask = (state, action) => (
  state.map((todo) => {
    if (todo.id === action.value) {
      return {
        id: todo.id,
        label: todo.label,
        checked: !todo.checked
      };
    }
    return todo;
  })
);

const tasks = (state = initalState, action) => {
  switch (action.type) {
    case actionsType.ADD_TASK:
      return addTask(state, action);
    case actionsType.DELETE_TASK:
      return deleteTask(state, action);
    case actionsType.CHECK_TASK:
      return checkTask(state, action);
    default:
      return state;
  }
};

export default tasks;
