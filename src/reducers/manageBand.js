export default function manageUsers(state = {
  users: [], primaryUser: null
}, action){
  switch (action.type) {

    case 'ADD_USER':
      if(state.users.length === 0) {
        return {users: state.users.concat(action.user), primaryUser: action.user}
      } else {
        return Object.assign({}, state, {
          users: state.users.concat(action.user)
        });
      }
    default:
      return state;
  }
};
