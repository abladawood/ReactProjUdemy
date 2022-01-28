import React, { Component } from "react";
export default class MainContent extends Component {
  //each time we update the state internally based on the virtual dom the real browser dom should be updated by react!
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Tala", phone: "1234", address: { city: "New Delhi" } },
      { id: 2, name: "Scott", phone: "47856", address: { city: "New Jersey" } },
      { id: 3, name: "Nala", phone: "84957", address: { city: "London" } },
      { id: 4, name: "Sheer", phone: "9585", address: { city: "New York" } },
      { id: 5, name: "Salman", phone: "2746", address: { city: "Berlin" } },
    ],
  };
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2 text-white bg-dark">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info " onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>CustomerName</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {/* map method recieves an arrow function and executes the arrow function for each element inside the array */}
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  //executes when user clicks on refresh
  onRefreshClick = () => {
    //overwrites value 5
    //this has to refer to the Component class rather than the button so we convert the method to an array function!
    //so the this keyword refers now to the Component
    //setState method updates the state of the Component so we updated just the value of 7 rather than rerendiring the complete h4
    this.setState({
      customersCount: 7,
    });
  };
}
