export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action.user);
      return Object.assign({}, state, {
        users: [...state.users, action.user]
      });
      debugger

      // return {
      //   ...state,
      //   users: [...state.users, action.user]
      // }

    default:
      return state;
  }
};
