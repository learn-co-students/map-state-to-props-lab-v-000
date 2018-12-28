import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    //debugger;
    return (
      <div>
        <ul>
          {this.props.items.length} Users!
          {this.props.items.map((item) =>
            <li key={item.username}>{item.username}</li>
          )
        }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  //debugger;
  return { items: state.users }
}

export default connect(mapStateToProps)(Users)
