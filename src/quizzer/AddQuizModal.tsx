import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
//import { EditableQuestionList } from "./EditableQuestionList";

export function AddQuizModal({
    show,
    handleClose,
    addQuiz
}: {
    show: boolean;
    handleClose: () => void;
    addQuiz: (newQuiz: Quiz) => void;
}) {
    const [id, setId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const questions = ["", ""];

    function saveChanges() {
        addQuiz({
            title: title,
            description: description,
            id: id,
            numQuestions: 0,
            questions: questions.map(
                (question: string): Question => ({
                    title: "",
                    id: question,
                    name: "",
                    body: "",
                    type: "",
                    options: ["", ""],
                    expected: "",
                    points: 0,
                    published: true
                })
            )
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* ID */}
                <Form.Group controlId="formQuizId" as={Row}>
                    <Form.Label column sm={5}>
                        ID of New Quiz:
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
                <Form.Group controlId="formQuizTitle" as={Row}>
                    <Form.Label column sm={5}>
                        Title of New Quiz:
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
                {/* Description */}
                <Form.Group controlId="formQuizDescription" as={Row}>
                    <Form.Label column sm={5}>
                        Description of New Quiz:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={description}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setDescription(event.target.value)}
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
