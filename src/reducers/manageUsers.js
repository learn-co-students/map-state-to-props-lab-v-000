export default function manageUsers(state = {
  users: [], userCount: 0
}, action){
  switch (action.type) {
    case 'ADD_USER':
      //debugger;
      console.log('adding ', action.user);
      return {
        ...state,
        users: [...state.users, action.user], userCount: state.userCount + 1
      }

    default:
      return state;
  }
};
