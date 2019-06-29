import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import '../../firebase'

const columns = ["Name", "Company", "City", "State"];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'dropdown',
  print: false,
  download: false,
  onRowsDelete: deleteFire => (
    console.log("Lets delete this")
  )
};


export default class TablesPage extends Component {

  constructor() {
    super();
  }

  componentDidMount() {

  }
  render() {
    const database = firebase.database().ref("Assets");
    const data1 = [];


    return (
      <div>
        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}
