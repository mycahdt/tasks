import { Question } from "./question";
import { Publish } from "./publish";

export interface Quiz {
    title: string;
    description: string;
    id: string;
    numQuestions: number;
    questions: Question[];
    published: Publish;
}
