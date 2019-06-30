import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      type: 'User'
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
  }
  render() {
    return (
      <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">

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
                <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">Already a member</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUpForm;