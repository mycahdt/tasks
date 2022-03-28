import React from "react";
import { Question } from "../interfaces/question";
import { Stack } from "react-bootstrap";
import { QuestionView } from "./QuestionView";

export function QuestionList({
    questions,
    deleteQuestion,
    editQuestion,
    setQuestionPublished
}: {
    questions: Question[];
    deleteQuestion: (id: string) => void;
    editQuestion: (id: string, newQuestion: Question) => void;
    setQuestionPublished: (id: string, p: boolean) => void;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((myQuestion: Question) => (
                <div key={myQuestion.id} className="bg-light border m-2 p-2">
                    <QuestionView
                        question={myQuestion}
                        deleteQuestion={deleteQuestion}
                        editQuestion={editQuestion}
                        setQuestionPublished={setQuestionPublished}
                    ></QuestionView>
                </div>
            ))}
        </Stack>
    );
}