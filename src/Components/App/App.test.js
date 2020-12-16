import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render all new reservations from form input values", () => {
    render(<App />)


        const inputName = screen.getByPlaceholderText("Name");
        const inputDate = screen.getByPlaceholderText("Date (mm/dd)");
        const inputTime = screen.getByPlaceholderText("Time");
        const inputNumber = screen.getByPlaceholderText("Number of guests");
        const resButton = screen.getByText("Make Reservation");

        fireEvent.change(inputName, { target: { value: "Sally" } });
        fireEvent.change(inputDate, { target: { value: "01/11" } });
        fireEvent.change(inputTime, { target: { value: "11:00" } });
        fireEvent.change(inputNumber, { target: { value: "10" } });
        fireEvent.click(resButton);

        expect(screen.getByText("Sally")).toBeInTheDocument();
        expect(screen.getByText("01/11")).toBeInTheDocument();
        expect(screen.getByText("11:00")).toBeInTheDocument();
        expect(screen.getByText("Number of guests:10")).toBeInTheDocument();
  })

  it("should be able to add a new reservation" , () => {
    render(<App />);

    const inputName = screen.getByPlaceholderText("Name");
    const inputDate = screen.getByPlaceholderText("Date (mm/dd)");
    const inputTime = screen.getByPlaceholderText("Time");
    const inputNumber = screen.getByPlaceholderText("Number of guests");
    const resButton = screen.getByText("Make Reservation");

    fireEvent.change(inputName, { target: { value: "William" } });
    fireEvent.change(inputDate, { target: { value: "06/01" } });
    fireEvent.change(inputTime, { target: { value: "11:00" } });
    fireEvent.change(inputNumber, { target: { value: "10" } });
    fireEvent.click(resButton);

    expect(screen.getByText("William")).toBeInTheDocument();
    expect(screen.getByText("06/01")).toBeInTheDocument();
    expect(screen.getByText("11:00")).toBeInTheDocument();
    expect(screen.getByText("Number of guests:10")).toBeInTheDocument();

  })

})


