import React from "react";
import { Stack } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions,
    deleteQuestion,
    editQuestion,
    onlyPublished,
    publishedQuestions
}: {
    questions: Question[];
    deleteQuestion: (id: string) => void;
    editQuestion: (id: string, newQuestion: Question) => void;
    onlyPublished: boolean;
    publishedQuestions: Question[];
}): JSX.Element {
    return onlyPublished ? (
        <Stack gap={3}>
            {publishedQuestions.map((question: Question) => (
                <div key={question.id} className="bg-light border m-2 p-2">
                    <QuestionView
                        question={question}
                        deleteQuestion={deleteQuestion}
                        editQuestion={editQuestion}
                    ></QuestionView>
                </div>
            ))}
        </Stack>
    ) : (
        <Stack gap={3}>
            {questions.map((question: Question) => (
                <div key={question.id} className="bg-light border m-2 p-2">
                    <QuestionView
                        question={question}
                        deleteQuestion={deleteQuestion}
                        editQuestion={editQuestion}
                    ></QuestionView>
                </div>
            ))}
        </Stack>
    );
}
