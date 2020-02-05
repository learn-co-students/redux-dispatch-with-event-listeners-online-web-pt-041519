let state;

// Take action with default state
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

// Call reducer and upate state. Render, too.
function dispatch(action){
  state = reducer(state, action);
  render();
}

// Write state to DOM
function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}

// Activate reducer default for initial value
dispatch({type: '@@INIT'});

// Assign button to dispatch
let button = document.getElementById('button'); 
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
});