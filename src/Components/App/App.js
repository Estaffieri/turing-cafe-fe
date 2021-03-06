import React, { Component } from "react";
import "./App.css";
import Card from "../Card/Card";
import Form from "../Form/Form";
import { getAllReservations } from "../../apiCalls"

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    };
  }

  componentDidMount = async () => {
    await getAllReservations()
      .then((data) => this.setState({ reservations: data }))
      .catch((error) => alert(error.message));
  };

  displayReservations = () => {
    if (this.state.reservations.length > 0) {
      return this.state.reservations.map((reservation, i) => {
        return <Card reservation={reservation} key={i} />;
      });
    }
  };

  createNewReservation = (newReservation) => {
    this.setState({
      reservations: [...this.state.reservations, newReservation],
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <div className="resy-form">
          <Form handleReservation={this.createNewReservation} />
        </div>
        <div className="resy-container">{this.displayReservations()}</div>
      </div>
    );
  }
}

export default App;
