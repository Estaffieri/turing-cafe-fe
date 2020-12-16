import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Card", () => {
    it("Should render a card with correct reservation information", () => {

        const testCard = {
            id: 1,
            name: "Napoleon",
            date: "11/15",
            time: "3:15",
            number: "4"
        }

        render(
            <Card reservation={testCard} />
        )

        expect(screen.getByText("Napoleon")).toBeInTheDocument()
        expect(screen.getByText("11/15")).toBeInTheDocument()
        expect(screen.getByText("3:15")).toBeInTheDocument()
        expect(screen.getByText("Number of guests: 4")).toBeInTheDocument()
    })
})