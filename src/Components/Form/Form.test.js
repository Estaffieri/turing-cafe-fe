import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import { screen, render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom";

describe("Form", () => {
    it("should render a form to make a reservation", () => {
        const mockFunction = jest.fn()
        render(<Form handleReservation={mockFunction}/>)

        expect(screen.getByPlaceholderText("Name")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Date (mm/dd)")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Time")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Number of guests")).toBeInTheDocument();
        expect(screen.getByText("Make Reservation")).toBeInTheDocument();
    })

    it("should accept user inputs", () => {
        const mockNewReservation = jest.fn()
        render(<Form handleReservation={mockNewReservation}/>)

        const inputName = screen.getByPlaceholderText("Name");
        const inputDate = screen.getByPlaceholderText("Date (mm/dd)");
        const inputTime = screen.getByPlaceholderText("Time");
        const inputNumber = screen.getByPlaceholderText("Number of guests");
        const resButton = screen.getByText("Make Reservation");

        fireEvent.change(inputName, {target: { value: "Estelle" }});
        fireEvent.change(inputDate, {target: { value: "12/25" }});
        fireEvent.change(inputTime, {target: { value: "7:00" }});
        fireEvent.change(inputNumber, {target: { value: "2" }});
        fireEvent.click(resButton);

        expect(inputName.value).toBe("Estelle");
        expect(inputDate.value).toBe("12/25");
        expect(inputTime.value).toBe("7:00");
        expect(inputNumber.value).toBe("2");
        expect(mockNewReservation).toHaveBeenCalledTimes(1);

    })
})
