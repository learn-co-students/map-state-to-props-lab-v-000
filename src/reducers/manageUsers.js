export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action.user)
      if (action.user.username) {
        return {
          ...state,
          users: [...state.users, action.user]
        }
      }

      return state

    default:
    
      return state
  }
}


