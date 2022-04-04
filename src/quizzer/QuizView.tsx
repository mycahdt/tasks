import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { Questioner } from "./Questioner";
import { QuizEditor } from "./QuizEditor";

export function QuizView({
    quiz,
    deleteQuiz,
    editQuiz
}: {
    quiz: Quiz;
    deleteQuiz: (id: string) => void;
    editQuiz: (id: string, newQuiz: Quiz) => void;
}): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const [editing, setEditing] = useState<boolean>(false);

    function changeQuizEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <QuizEditor
            changeQuizEditing={changeQuizEditing}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
        ></QuizEditor>
    ) : (
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
                            <h4>Description: </h4>
                            <p>{quiz.description}</p>
                        </Col>
                        <Col>
                            <h4>Number of Questions: </h4>
                            <p>{quiz.numQuestions}</p>
                        </Col>
                    </Row>
                    <Button variant="info" onClick={changeQuizEditing}>
                        Edit Quiz (Title, Description, Delete)
                    </Button>
                    <Row>
                        <div>
                            {visible && (
                                <Questioner
                                    QUESTIONS={quiz.questions}
                                ></Questioner>
                            )}
                        </div>
                    </Row>
                </Container>
            </div>
            <div>
                <Button onClick={() => setVisible(!visible)}>
                    Open/Close this Quiz
                </Button>
            </div>
        </div>
    );
}
