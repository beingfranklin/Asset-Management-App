import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';


class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      type: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('The form was submitted with the following data:');
    console.log(this.state);
    console.log(this.state.username);
    console.log(this.state.password)
    console.log(this.state.type);

  }
  render() {
    return (
      <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">

            </NavLink>
          </div>
          <div className="FormTitle">
            <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink>
          </div>
          <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="">Username</label>
                <input type="text" id="" className="FormField__Input" placeholder="Enter your Type" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField" onChange={this.handleChange}>
                <input type="radio" value="Admin" name="type" /> Admin
                 <input type="radio" value="User" name="type" /> User
              </div>
              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-up" className="FormField__Link">Not a member</Link>
              </div>
            </form>
          </div>
        </div>
      </div >
    );
  }
}
export default SignInForm;
