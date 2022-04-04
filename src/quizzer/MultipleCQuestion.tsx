import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleCQuestion({
    questionOptions,
    questionExpected
}: {
    questionOptions: string[];
    questionExpected: string;
}): JSX.Element {
    //This is the State (Model)
    const [choice, setChoice] = useState<string>(questionOptions[0]);

    //This is the Control
    function updateChoice(event: ChangeEvent) {
        setChoice(event?.target.value);
    }

    //This is the View
    return (
        <div>
            <Form.Group controlId="userChoice">
                <Form.Label>Choose your answer:</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {questionOptions.map((myChoice: string) => (
                        <option key={myChoice}>{myChoice}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                Your answer is {choice === questionExpected ? "✔️" : "❌"}
            </div>
        </div>
    );
}
