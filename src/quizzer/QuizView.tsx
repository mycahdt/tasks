import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";

export function QuizView({
    quiz,
    deleteQuiz,
    seeQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (id: string) => void;
    seeQuiz: (id: string, newQuiz: Quiz) => void;
}): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h3>{quiz.title}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>{quiz.description}</p>
                        </Col>
                        <Col>
                            <p>{quiz.numQuestions}</p>
                        </Col>
                    </Row>
                    <Row>
                        <div>{visible && "Questions View Will go here"}</div>
                    </Row>
                </Container>
            </div>
            <Button onClick={() => setVisible(!visible)}>
                Show/Hide Previous Tasks
            </Button>
        </div>
    );
}
