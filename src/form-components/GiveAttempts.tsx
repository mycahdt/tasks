import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    //This is the State (Model)
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    function useAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempt() {
        setAttemptsLeft(attemptsLeft + attemptsRequested);
    }

    //This is the View
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label> Attempts Requested: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: ChangeEvent) =>
                        setAttemptsRequested(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <Button onClick={gainAttempt}>gain</Button>
            <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                use
            </Button>
            <div>Current Attempts: {attemptsLeft}</div>
        </div>
    );
}
