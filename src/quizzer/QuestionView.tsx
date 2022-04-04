import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { QuestionEditor } from "./QuestionEditor";
import { MultipleCQuestion } from "./MultipleCQuestion";
import { ShortAnsQuestion } from "./ShortAnsQuestion";

export function QuestionView({
    question,
    deleteQuestion,
    editQuestion
}: {
    question: Question;
    deleteQuestion: (id: string) => void;
    editQuestion: (id: string, newQuestion: Question) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <QuestionEditor
            changeEditing={changeEditing}
            question={question}
            deleteQuestion={deleteQuestion}
            editQuestion={editQuestion}
        ></QuestionEditor>
    ) : (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h3>{question.title}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Body: </h4>
                        <p>{question.body}</p>
                    </Col>
                    <Col>
                        <h4>Points: </h4>
                        <p>{question.points}</p>
                    </Col>
                    <Col>
                        <h4>
                            {question.published
                                ? "Question is Published"
                                : "Question is Unpublished"}
                        </h4>
                    </Col>
                </Row>
                <Row>
                    {question.type === "multiple_choice_question" ? (
                        <MultipleCQuestion
                            questionOptions={question.options}
                            questionExpected={question.expected}
                        ></MultipleCQuestion>
                    ) : (
                        <ShortAnsQuestion
                            questionExpected={question.expected}
                        ></ShortAnsQuestion>
                    )}
                </Row>
                <Row>
                    <Button
                        className="float-right"
                        size="sm"
                        onClick={changeEditing}
                    >
                        Edit Question
                    </Button>
                </Row>
            </Container>
        </div>
    );
}
