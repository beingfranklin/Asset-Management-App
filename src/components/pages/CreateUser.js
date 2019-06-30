import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';


class CreateUser extends Component {
  constructor() {
    super();

    this.state = {
      UserName: '',
      CreatedBy: ''
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

    console.log('The Asset was created with the following data:');
    console.log(this.state);
    console.log(this.state.UserName);
    console.log(this.state.CreatedBy);

  }

  render() {
    return (
      <div>
      <TopNavigation />
      <SideNavigation />
      <div className="App" >
        <div className="App__Forms">

 
          <div className="FormTitle">
            <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Create User</NavLink>
            {/* or <NavLink to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink> */}
          </div>
          <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="">User Name</label>
                <input type="text" id="" className="FormField__Inputs" placeholder="Enter User Name" name="UserName" value={this.state.UserName} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="">Created By</label>
                <input type="text" id="" className="FormField__Inputs" placeholder="Enter Issuers Name" name="CreatedBy" value={this.state.CreatedBy} onChange={this.handleChange} />
              </div>

              
           
            

              <div className="FormField">
                <button className="FormField__Button mr-20">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>


    );
  }
}

export default CreateUser;
