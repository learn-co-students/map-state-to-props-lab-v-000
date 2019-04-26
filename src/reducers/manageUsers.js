this.props.dispatch({type: 'ADD_USER', user: this.state})


export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action.user);
      return {
        ...state,
        users: [...state.users, action.user]
      }

    default:
      return state;
  }
};
