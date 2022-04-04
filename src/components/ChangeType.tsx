import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<string>("short_answer_question");

    function changeType(): void {
        setType(
            type === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <div>Change Type</div>
            <Button onClick={changeType}>Change Type</Button>
            <div>Current Type: </div>{" "}
            {type === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
