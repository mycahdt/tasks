import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ShortAnsQuestion } from "./ShortAnsQuestion";

describe("ShortAnsQuestion Component tests", () => {
    test("There is an input box", () => {
        render(<ShortAnsQuestion questionExpected="Mars" />);
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();
    });
    test("The answer is originally incorrect.", () => {
        render(<ShortAnsQuestion questionExpected="Mars" />);
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Entering the right answer makes it correct.", () => {
        render(<ShortAnsQuestion questionExpected="Mars" />);
        const inputBox = screen.getByRole("textbox");
        userEvent.type(inputBox, "Mars");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Entering the wrong answer makes it incorrect.", () => {
        render(<ShortAnsQuestion questionExpected="Mars" />);
        const inputBox = screen.getByRole("textbox");
        userEvent.type(inputBox, "Earth");
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Entering a different right answer makes it correct.", () => {
        render(<ShortAnsQuestion questionExpected="Alexander Hamilton" />);
        const inputBox = screen.getByRole("textbox");
        userEvent.type(inputBox, "Alexander Hamilton");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Entering a different wrong answer still makes it incorrect.", () => {
        render(<ShortAnsQuestion questionExpected="Alexander Hamilton" />);
        const inputBox = screen.getByRole("textbox");
        userEvent.type(inputBox, "Hello");
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
});
