import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { AddQuestionModal } from "./AddQuestionModal";
import { QuestionList } from "./QuestionList";

/*
function publishQuestion(question: Question, published: boolean): Question {
    return {
        ...question,
        published: published
    };
}*/

export function Questioner({
    QUESTIONS
}: {
    QUESTIONS: Question[];
}): JSX.Element {
    const [questions, setQuestions] = useState<Question[]>(QUESTIONS);
    const [showAddModal, setShowAddModal] = useState(false);
    const [onlyPublished, setOnlyPublished] = useState<boolean>(false);

    function editQuestion(id: string, newQuestion: Question) {
        setQuestions(
            questions.map(
                (question: Question): Question =>
                    question.id === id ? newQuestion : question
            )
        );
    }

    function deleteQuestion(id: string) {
        setQuestions(
            questions.filter(
                (question: Question): boolean => question.id !== id
            )
        );
    }

    function addQuestion(newQuestion: Question) {
        const existing = questions.find(
            (question: Question): boolean => question.id === newQuestion.id
        );
        if (existing === undefined) {
            setQuestions([...questions, newQuestion]);
        }
    }

    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published
    );

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <h3>Questions</h3>
            <div>
                <Form.Group controlId="formQuestionJustPublish" as={Row}>
                    <Form.Label column sm={2}>
                        Filter (Only Show Published):
                    </Form.Label>
                    <Col>
                        <Form.Check
                            type="switch"
                            id="is-only-published"
                            label=""
                            checked={onlyPublished}
                            onChange={() => setOnlyPublished(!onlyPublished)}
                        />
                    </Col>
                </Form.Group>
            </div>
            <div>
                <QuestionList
                    questions={questions}
                    deleteQuestion={deleteQuestion}
                    editQuestion={editQuestion}
                    onlyPublished={onlyPublished}
                    publishedQuestions={publishedQuestions}
                ></QuestionList>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add New Question
                </Button>
                <AddQuestionModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addQuestion={addQuestion}
                ></AddQuestionModal>
            </div>
        </div>
    );
}
