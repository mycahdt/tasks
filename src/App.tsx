import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { d6, TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { QuestionType } from "./interfaces/question";

function App(): JSX.Element {
    
    const [counter, setCounter] = useState<number>(0);

    function addOne(): void {
        setCounter(counter+1);
    }

    const [visible, setVisible] = useState<boolean>(false);

    function flipVisibility(): void {
        setVisible(!visible);
    }

    const [type, setType] = useState<QuestionType>("short_answer_question");

    function changeType(): void {
        setType(type === "short_answer_question" ? "multiple_choice_question" : type === "multiple_choice_question" ? "short_answer_question": "short_answer_question");
    }

    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setAttempts(attempts-1);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        setAttempts(attempts+1);
    }

    const [leftDie, setLeftDie] = useState<number>(6);
    const [rightDie, setRightDie] = useState<number>(5);

    const [Holiday, setHoliday] = useState<string>("❤️");

    const holidayByYear: Record<string, string> = {
        "❤️":"🍀",
        "🍀":"🎃",
        "🎃":"🦃",
        "🦃":"🎄",
        "🎄":"❤️"
    };

    const holidayByAlphabet: Record<string, string> = {
        "🎄":"🎃",
        "🎃":"🍀",
        "🍀":"🦃",
        "🦃":"❤️",
        "❤️":"🎄"
    };

    function setHolidayByYear(): void {
        setHoliday(holidayByYear[Holiday]);
    }

    function setHolidayByAlphabet(): void {
        setHoliday(holidayByAlphabet[Holiday])
    }
    
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Mycah Detorres
            </header>
            <hr></hr>
            
            <Counter></Counter>
            <Button onClick={addOne}>{counter}</Button>;    

            <hr />
            
            <RevealAnswer></RevealAnswer>
            <Button onClick={flipVisibility}>Reveal Answer</Button> {visible && <div>42</div>}

            <hr />
            
            <StartAttempt></StartAttempt>
            <Button onClick={startQuiz} disabled={inProgress || attempts === 0}>Start Quiz</Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>Stop Quiz</Button>
            <Button onClick={mulligan} disabled={inProgress}>Mulligan</Button>
            <div>Attempts: {attempts}</div>

            <hr />

            <TwoDice></TwoDice>
            <Button onClick={()=>setLeftDie(d6)}>Roll Left</Button>
            <Button onClick={()=>setRightDie(d6)}>Roll Right</Button>
            <div>Left Die: <span data-testid="left-die">{leftDie}</span></div>
            <div>Right Die: <span data-testid="right-die">{rightDie}</span></div>
            <div> {leftDie === rightDie ? <span>You Lose</span> : <span>You Win</span>}</div>

            <hr />
            
            <ChangeType></ChangeType>
            <Button onClick={changeType}>Change Type</Button> 
            <div>Current Type: {type}</div>
            
            <hr />
            <CycleHoliday></CycleHoliday>
            <Button onClick={setHolidayByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={setHolidayByYear}>Advance by Year</Button>
            <div>Holiday: {Holiday}</div>

        </div>
    );
}

export default App;
