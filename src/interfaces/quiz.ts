import { Question } from "./question";

/** 3.28 A representation of a Quiz */
export interface Quiz {
    /** The human-friendly title of the Quiz */
    title: string;
    /** A description for what the quiz is about */
    description: string;
    /** A unique identifier for the Quiz */
    id: string;
    /** The number of questions the quiz has */
    numQuestions: number;
    /** The array of questions that make up the quiz */
    questions: Question[];
}
