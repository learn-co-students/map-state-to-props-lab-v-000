import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserInput extends Component {

  // local state
  state = {
    username: '',
    hometown: ''
  }

  // set local state
  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  // disatch update to store on form submit
  // the dispatched action includes an object called user 
  // with username and hometown properties, e.g. 
  // { user: { username: "whatever", hometown: "whatever" } }
  // 

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_USER', user: this.state});
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(UserInput);
