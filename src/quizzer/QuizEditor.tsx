import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export function QuizEditor({
    changeQuizEditing,
    quiz,
    editQuiz,
    deleteQuiz
}: {
    changeQuizEditing: () => void;
    quiz: Quiz;
    editQuiz: (id: string, newQuiz: Quiz) => void;
    deleteQuiz: (id: string) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(quiz.title);
    const [description, setDescription] = useState<string>(quiz.description);
    const [numQuestions, setNumQuestions] = useState<string>(
        quiz.numQuestions.toString()
    );

    function save() {
        editQuiz(quiz.id, {
            ...quiz,
            title: title,
            description: description,
            numQuestions: parseInt(numQuestions) || 0
        });
        changeQuizEditing();
    }

    function cancel() {
        changeQuizEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    {/* Title */}
                    <Form.Group controlId="formQuizTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Quiz Title:
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
                        <Form.Label column sm={2}>
                            Quiz Description:
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
                    {/* NumQuestions */}
                    <Form.Group controlId="formQuizNumQuestions" as={Row}>
                        <Form.Label column sm={2}>
                            Number of Questions:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={numQuestions}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setNumQuestions(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Save/Cancel */}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    {/* Delete */}
                    <Button
                        onClick={() => deleteQuiz(quiz.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Quiz
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
