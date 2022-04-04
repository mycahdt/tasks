import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MultipleCQuestion } from "./MultipleCQuestion";

describe("MultipleCQuestion Component tests", () => {
    test("There is a select box", () => {
        render(
            <MultipleCQuestion
                questionOptions={[
                    "Joe Biden",
                    "Bill Clinton",
                    "George Washington",
                    "Theodore Roosevelt"
                ]}
                questionExpected={"George Washington"}
            />
        );
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    test("The answer is initially incorrect", () => {
        render(
            <MultipleCQuestion
                questionOptions={[
                    "Joe Biden",
                    "Bill Clinton",
                    "George Washington",
                    "Theodore Roosevelt"
                ]}
                questionExpected={"George Washington"}
            />
        );
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Can choose the correct answer", () => {
        render(
            <MultipleCQuestion
                questionOptions={[
                    "Joe Biden",
                    "Bill Clinton",
                    "George Washington",
                    "Theodore Roosevelt"
                ]}
                questionExpected={"George Washington"}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "George Washington");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Can choose the correct answer and then incorrect", () => {
        render(
            <MultipleCQuestion
                questionOptions={[
                    "Joe Biden",
                    "Bill Clinton",
                    "George Washington",
                    "Theodore Roosevelt"
                ]}
                questionExpected={"George Washington"}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "George Washington");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
        userEvent.selectOptions(select, "Joe Biden");
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    test("Can start off initially correct", () => {
        render(
            <MultipleCQuestion
                questionOptions={["2", "0", "4", "8"]}
                questionExpected={"2"}
            />
        );
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "2");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("One more test of choosing the right answer", () => {
        render(
            <MultipleCQuestion
                questionOptions={["46", "51", "45", "50"]}
                questionExpected={"50"}
            />
        );
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "50");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
});
