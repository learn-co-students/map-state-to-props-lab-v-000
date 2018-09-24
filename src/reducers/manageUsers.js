export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action);
      console.log(action.user.username)
      console.log(action.user.hometown)
      return {
        ...state,
        users: [...state.users, action.user]
      }

    default:
      return state;
  }
};
