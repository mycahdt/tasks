import React from "react";
import "./App.css";
//import { ChangeType } from "./components/ChangeType";
//import { RevealAnswer } from "./components/RevealAnswer";
//import { StartAttempt } from "./components/StartAttempt";
//import { TwoDice } from "./components/TwoDice";
//import { CycleHoliday } from "./components/CycleHoliday";
//import { Counter } from "./components/Counter";
//import { DoubleHalf } from "./bad-components/DoubleHalf";
//import { ColoredBox } from "./bad-components/ColoredBox";
//import { ShoveBox } from "./bad-components/ShoveBox";
//import { ChooseTeam } from "./bad-components/ChooseTeam";
//import { CheckAnswer } from "./form-components/CheckAnswer";
//import { GiveAttempts } from "./form-components/GiveAttempts";
//import { EditMode } from "./form-components/EditMode";
//import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
//import { ChangeColor } from "./form-components/ChangeColor";
import { Quizzer } from "./quizzer/Quizzer";
//import { Button } from "react-bootstrap";
import { ShowHideTasks } from "./ShowHideTasks";
//import { Sketch } from "./quizzer/Sketch";
//import myQuizzes from "./data/my_quizzes.json";
//import { Quiz } from "./interfaces/quiz";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Mycah Detorres
            </header>
            <Quizzer></Quizzer>
            <hr></hr>
            <div>
                <img
                    src={require("./mySketch.jpg")}
                    alt="Image of my sketch."
                />
            </div>
            <hr></hr>
            <div>
                Completed Features:
                <ul>
                    <li>Application is Sketched</li>
                    <li>
                        Users can see a list of quizzes, including the quizzes
                        title, description, and how many questions it has
                    </li>
                    <li>
                        Users can select a specific quiz to see the questions,
                        including the questions name, body, and points
                    </li>
                    <li>
                        Quiz questions can be of AT LEAST two types: a short
                        answer question or multiple choice question
                    </li>
                    <li>
                        Users can enter or choose an answer for a quiz question,
                        and be told if they are correct
                    </li>
                    <li>Users can publish or unpublish a question</li>
                    <li>
                        Users can filter the questions in a list so that only
                        published questions are shown
                    </li>
                    <li>Users can edit the questions and fields of a quiz</li>
                    <li>Users can add a new quiz question</li>
                    <li>Users can delete an existing quiz question</li>
                    <li>Users can add a new quiz</li>
                    <li>Users can delete an existing quiz</li>
                </ul>
            </div>
            <hr></hr>
            <ShowHideTasks></ShowHideTasks>
            <hr></hr>
        </div>
    );
}

export default App;
