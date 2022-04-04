import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Question } from "../interfaces/question";
//import { Quiz } from "../interfaces/quiz";
//import { EditableQuestionList } from "./EditableQuestionList";

export function AddQuestionModal({
    show,
    handleClose,
    addQuestion
}: {
    show: boolean;
    handleClose: () => void;
    addQuestion: (newQuestion: Question) => void;
}) {
    const [id, setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    function saveChanges() {
        addQuestion({
            title: title,
            id: id,
            name: title,
            body: body,
            type: "",
            options: ["", ""],
            expected: "",
            points: 0,
            published: true
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* ID */}
                <Form.Group controlId="formQuestionId" as={Row}>
                    <Form.Label column sm={5}>
                        ID of New Question:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/* Title */}
                <Form.Group controlId="formQuestionTitle" as={Row}>
                    <Form.Label column sm={5}>
                        Title of New Question:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/* Body */}
                <Form.Group controlId="formQuesitonBody" as={Row}>
                    <Form.Label column sm={5}>
                        Body of New Question:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={body}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setBody(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
