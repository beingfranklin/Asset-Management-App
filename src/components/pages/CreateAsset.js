import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';


class CreateAsset extends Component {
  constructor() {
    super();

    this.state = {
      AssetName: '',
      GivenBy: '',
      TakenBy: ''
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
    console.log(this.state.AssetName);
    console.log(this.state.GivenBy);
    console.log(this.state.TakenBy);

  }

  render() {
    return (
      <div>
      <TopNavigation />
      <SideNavigation />
      <div className="App" >
        <div className="App__Forms">

 
          <div className="FormTitle">
            <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Create Asset</NavLink>
            {/* or <NavLink to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink> */}
          </div>
          <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="">Asset Name</label>
                <input type="text" id="" className="FormField__Inputs" placeholder="Enter Asset Name" name="AssetName" value={this.state.AssetName} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="">Issued By</label>
                <input type="text" id="" className="FormField__Inputs" placeholder="Enter Issuers Name" name="GivenBy" value={this.state.GivenBy} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="TakenBy">Issued to</label>
                <input type="text" id="TakenBy" className="FormField__Inputs" placeholder="Enter Name" name="TakenBy" value={this.state.TakenBy} onChange={this.handleChange} />
              </div>
              {/* 
              <div className="FormField">
                <label className="FormField__Label" htmlFor="hospitalid">Hospital Id</label>
                <input type="text" id="hospitalid" className="FormField__Inputs" placeholder="Enter your Hospital Id" name="Hospital Id" value={this.state.hospitalid} onChange={this.handleChange} />
              </div> */}

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

export default CreateAsset;
