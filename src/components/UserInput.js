import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()

    if (!this.state.username || 
        !this.state.hometown
       ) {
           alert('All fields are required!')
         }
    else {
            // * connect will return dispatch as a prop to
            // * the component we're wrapping with connect
            this.props.dispatch({type: 'ADD_USER', user: this.state})
            this.setState({
              username: '',
              hometown: ''
            })
          }
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="hometown"
            value={this.state.hometown}
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default connect()(UserInput)
