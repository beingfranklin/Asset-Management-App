import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import firebase from 'firebase/app';
// import 'firebase/auth';
import 'firebase/database';
import '../../firebase';
import TopNavigation from '../topNavigation';
import SideNavigation from '../sideNavigation';


export default class LockTable extends Component {
  state = { data: [] };

  // componentDidMount() {
  //   console.log("Inside ComponentDidMount");
  //   const database = firebase.database().ref("/Assets");
  //   console.log(database);
  //   database.on("value", snapshot => {
  //     console.log(snapshot);
  //     const data = [];

  //     snapshot.forEach(childSnapShot => {
  //       const asset = {
  //         AssetNumber: childSnapShot.key.toString(),
  //         GivenBy: childSnapShot.val().GivenBy,
  //         TakenBy: childSnapShot.val().TakenBy
  //       };
  //       console.log(asset);
  //       data.push(asset);
  //     });

  //     this.setState(prevState => {
  //       return { data: [...prevState.data, ...data] };
  //     });
  //   });
  // }

  componentDidMount() {
    console.log("Inside ComponentDidMount");
    const database = firebase.database().ref("/Assets");
    console.log(database);
    database.on("value", async snapshot => {
      const data = [];
      console.log(data);
      await snapshot.forEach(childSnapShot => {
        const asset = {
          Asset: childSnapShot.key.toString(),
          GivenBy: childSnapShot.val().GivenBy,
          TakenBy: childSnapShot.val().TakenBy
        };

        data.push(asset);
      });

      this.setState({ data: [...this.state.data, ...data] });
      console.log(data);
    });

  }

  render() {
    const columns = [
      {
        Header: "Asset Item",
        accessor: "Asset"
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

        <TopNavigation />
        <SideNavigation />
        <main id="content" className="p-5">
          <ReactTable data={this.state.data} columns={columns} />
        </main>
      </div>
    );
  }
}