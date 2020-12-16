import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            date: "",
            time: "",
            number: ""
        }
    }


    render() {
        return (
          <form className="reservation-form">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
            />

            <input
              type="text"
              placeholder="Date(mm/dd)"
              name="date"
              value={this.state.date}
            />

            <input
              type="text"
              placeholder="Time"
              name="time"
              value={this.state.time}
            />

            <input
              type="text"
              placeholder="Number of guests"
              name="number"
              value={this.state.number}
            />

            <button type="button">
                Make Reservation
            </button>
          </form>
        );
    }
}

export default Form;