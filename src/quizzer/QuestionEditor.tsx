import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Question } from "../interfaces/question";

export function QuestionEditor({
    changeEditing,
    question,
    editQuestion,
    deleteQuestion
}: {
    changeEditing: () => void;
    question: Question;
    editQuestion: (id: string, newQuestion: Question) => void;
    deleteQuestion: (id: string) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>(question.title);
    const [body, setBody] = useState<string>(question.body);
    const [publish, setPublish] = useState<boolean>(question.published);
    const [points, setPoints] = useState<string>(question.points.toString());

    function save() {
        editQuestion(question.id, {
            ...question,
            title: title,
            body: body,
            published: publish,
            points: parseInt(points) || 0
        });
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    {/* Title */}
                    <Form.Group controlId="formQuestionTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Question Title:
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
                    <Form.Group controlId="formQuestionBody" as={Row}>
                        <Form.Label column sm={2}>
                            Question Body:
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
                    {/* Points */}
                    <Form.Group controlId="formQuestionPoints" as={Row}>
                        <Form.Label column sm={2}>
                            Points:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={points}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setPoints(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/* Publish */}
                    <Form.Group controlId="formQuestionPublish" as={Row}>
                        <Form.Label column sm={2}>
                            Published:
                        </Form.Label>
                        <Col>
                            <Form.Check
                                type="switch"
                                id="is-published"
                                label=""
                                checked={publish}
                                onChange={() => setPublish(!publish)}
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
                        onClick={() => deleteQuestion(question.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Question
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
