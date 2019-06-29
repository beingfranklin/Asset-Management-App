import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import '../../firebase'




export default class LockTable extends Component {
  state = { data: [] };

  componentDidMount() {
    const database = firebase.database().ref("/");
    database.on("value", snapshot => {
      const data = [];

      snapshot.forEach(childSnapShot => {
        const asset = {
          AssetNumber: childSnapShot.key.toString(),
          GivenBy: childSnapShot.val().GivenBy,
          TakenBy: childSnapShot.val().TakenBy
        };

        data.push(asset);
      });

      this.setState(prevState => {
        return { data: [...prevState.data, ...data] };
      });
    });
  }

  render() {
    const columns = [
      {
        Header: "Asset Number",
        accessor: "AssetNumber"
      },
      {
        Header: "Given By",
        accessor: "GivenBy"
      },
      {
        Header: "Taken By",
        accessor: "TakenBy"
      },

    ];

    return (
      <div>
        <ReactTable data={this.state.data} columns={columns} />
      </div>
    );
  }
}