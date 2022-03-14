import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    //This is the State (Model)
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [givenName, setGivenName] = useState<string>("Your Name");

    //This is the Control
    function updateName(event: ChangeEvent) {
        setGivenName(event.target.value);
    }

    //This is the View
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing:"
                    checked={isEditMode}
                    onChange={() => setIsEditMode(!isEditMode)}
                />
            </div>
            <div>
                {isEditMode ? (
                    <Form.Group controlId="formEditMode">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={givenName} onChange={updateName} />
                        <Form.Check
                            type="checkbox"
                            id="check-isStudent"
                            label="Is Student?"
                            name="student"
                            checked={isStudent}
                            onChange={(event: ChangeEvent) =>
                                setIsStudent(event.target.checked)
                            }
                        />
                    </Form.Group>
                ) : (
                    <div>
                        {givenName + " "}
                        {isStudent ? " is a student" : " is not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}
