export default function manageUsers(state = {
  users: [],
  primaryUser: {}
}, action){
  switch (action.type) {

    case 'ADD_USER':
      return {...state, users: state.users.concat(action.user)};

    case 'FETCH_USERS'
      return {...state, users: action.users}
    default:
      return state;
  }
};