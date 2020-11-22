

const increaseCount = { type: 'INCREASE_COUNT'}

store.dispatch(increaseCount)







function dispatch(action){
  reducer(state, action)
}











function dispatch(action) {
  reducer(state, action)
}

function reducer(state = {
  count: 0,
}, action) {
  switch (action.type) {

    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;

  }
}
