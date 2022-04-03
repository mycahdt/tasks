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
    const [questions, setQuestions] = useState<string[]>([]);

    function saveChanges() {
        addQuiz({
            title: "",
            description: "",
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
                {/* Title */}
                <Form.Group controlId="formQuizId" as={Row}>
                    <Form.Label column sm={3}>
                        YouTube ID:
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
                {/* Questions */}
                <span>Question IDs:</span>
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
