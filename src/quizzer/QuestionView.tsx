import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Question } from "../interfaces/question";

export function QuestionView({
    question,
    deleteQuestion,
    editQuestion,
    setQuestionPublished
}: {
    question: Question;
    deleteQuestion: (id: string) => void;
    editQuestion: (id: string, newQuestion: Question) => void;
    setQuestionPublished: (id: string, p: boolean) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <QuestionEditor
            changeEditing={changeEditing}
            question={question}
            editQuestion={editQuestion}
            deleteQuestion={deleteQuestion}
        ></QuestionEditor>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{question.title}</h3>
                    <RecordControls
                        setQuestionPublished={(published: boolean) =>
                            setQuestionPublished(question.id, published)
                        }
                        published={question.published}
                        changeEditing={changeEditing}
                    ></RecordControls>
                    <MovieRating rating={movie.rating}></MovieRating>
                    <i> Released {movie.released}</i>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{movie.description}</p>
                    <SongList songs={movie.soundtrack}></SongList>
                </Col>
                <Col>
                    <MovieTrailer id={movie.id}></MovieTrailer>
                </Col>
            </Row>
        </Container>
    );
}