import React from "react";
//import { render, screen } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    test("renders the Quiz Records somewhere", () => {
        const linkElement = screen.getByText("Quiz Records");
        expect(linkElement).toBeInTheDocument();
    });
});
