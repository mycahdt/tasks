import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function ShortAnsQuestion({
    questionExpected
}: {
    questionExpected: string;
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
            <Form.Group controlId="formAnswer">
                <Form.Label>Type your answer:</Form.Label>
                <Form.Control
                    value={givenAnswer}
                    onChange={updateCorrectness}
                />
            </Form.Group>
            <div>
                Your answer is {givenAnswer === questionExpected ? "✔️" : "❌"}
            </div>
        </div>
    );
}
