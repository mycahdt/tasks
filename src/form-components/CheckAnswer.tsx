import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    //This is the State (Model)
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    //This is the Control
    function updateCorrectness(event: ChangeEvent) {
        setGivenAnswer(event.target.value);
    }

    //This is the View
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Type your answer:</Form.Label>
                <Form.Control
                    value={givenAnswer}
                    onChange={updateCorrectness}
                />
            </Form.Group>
            <div>
                Your answer is {givenAnswer === expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
