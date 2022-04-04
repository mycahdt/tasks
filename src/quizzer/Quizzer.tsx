import React, { useState } from "react";
import { Button } from "react-bootstrap";
import my_quizzes from "../data/my_quizzes.json";
import { Quiz } from "../interfaces/quiz";
import { AddQuizModal } from "./AddQuizModal";
import { QuizList } from "./QuizList";
//import { Quiz } from "../interfaces/quiz";

const QUIZZES = my_quizzes.map(
    (theQuiz): Quiz => ({
        ...theQuiz
    })
);

export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [showAddModal, setShowAddModal] = useState(false);

    /**See Quiz makes the questions hidden, and
     * allows you to see the quiz after clicking the button
     */
    /*
    function seeQuiz(id: string, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map(
                (myQuiz: Quiz): Quiz => (myQuiz.id === id ? newQuiz : myQuiz)
            )
        );
    }*/

    function deleteQuiz(id: string) {
        setQuizzes(quizzes.filter((myQuiz: Quiz): boolean => myQuiz.id !== id));
    }

    function addQuiz(newQuiz: Quiz) {
        const existing = quizzes.find(
            (myQuiz: Quiz): boolean => myQuiz.id === newQuiz.id
        );
        if (existing === undefined) {
            setQuizzes([...quizzes, newQuiz]);
        }
    }

    function editQuiz(id: string, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div>
            <h1>Quiz Records</h1>
            <h3>Quizzer</h3>
            <div>
                <QuizList
                    quizzes={quizzes}
                    deleteQuiz={deleteQuiz}
                    editQuiz={editQuiz}
                ></QuizList>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add New Quiz
                </Button>
                <AddQuizModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addQuiz={addQuiz}
                ></AddQuizModal>
            </div>
        </div>
    );
}
