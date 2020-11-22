import React, { Component } from 'react';
// add any needed imports here
// import { createStore } from 'redux';
// import Provider from 'react-redux';
import { connect } from 'react-redux';


// { console.log(this.state) }
//  console.log(this.state)



// we don't have a backend so it pshouldn't persist users after refreshing the page

// after you make a user and submit the form it should show them under the form

// we have to use the spread operator in the reducers users part so the users persist.

// review the actions and reducers stuff in the chat


// ?


class Users extends Component {


  render() {
      console.log(this.props.users)
      console.log(this.props)

    return (
      <div>
        <ul>
          Users:

           { this.props.users.map(x =>
             <li key={x.username}>{x.username}</li>
           ) }

           Count of Users:

           {
             this.props.users.length
           }





          {/* 1 Write code here that displays the usernames of all users in the Redux store */}
          {/* 2 In addition, display the total number of users currently in the store */}
            // <p> {this.props.users.count} </p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  console.log("State", state)
  console.log("State.users.length", state.users.length)

  return { users: state.users }
  return { userCount: state.users.length }

}


// connect this component to Redux
export default connect(mapStateToProps)(Users);
