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
            <h1>Quiz Records</h1>
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
                </ul>
            </div>
            <hr></hr>
            <ShowHideTasks></ShowHideTasks>
            <hr></hr>
        </div>
    );
}

export default App;
