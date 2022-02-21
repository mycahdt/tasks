import { arrayBuffer } from "stream/consumers";
import { formatDiagnosticsWithColorAndContext } from "typescript";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let firstAndLast = [];

    firstAndLast[0] = numbers[0];
    numbers.length === 1
        ? firstAndLast[1] = numbers[0]
        : firstAndLast[1] = numbers[numbers.length - 1];

    numbers.length === 0 ? firstAndLast = [] : firstAndLast;
    return firstAndLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const myInts = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );

    return myInts;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const myStrings = amounts.map((amount: string): string =>
        amount.includes("$") ? amount.slice(1) : amount
    );
    const myInts = stringsToIntegers(myStrings);
    return myInts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const myMessages = messages.filter(
        (message: string): boolean => !message.includes("?")
    );
    const myMess = myMessages.map((words: string): string =>
        words.includes("!") ? words.toUpperCase() : words
    );
    return myMess;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWord = words.filter(
        (myWord: string): boolean => myWord.length < 4
    );
    return shortWord.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const withoutRBG = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    const flag = colors.length === withoutRBG.length ? true : false;
    return flag;
    /*
    const withoutRBG = colors.filter(
        (color: string): boolean =>
            !color.includes("red") &&
            !color.includes("blue") &&
            !color.includes("green")
    );
    const flag = colors.length === withoutRBG.length;
    return flag;*/

    /*
    const onlyRBG = colors.every(
        (color: string): boolean =>
            color.includes("red") ||
            color.includes("blue") ||
            color.includes("green")
    );
    // eslint-disable-next-line no-extra-parens
    //colors.length === 0 ? (onlyRBG = true) : onlyRBG;
    return onlyRBG;*/
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sums = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const myString = addends.map((num: number): string => num.toString());
    let finalString = sums + "=" + myString.join("+");
    // eslint-disable-next-line no-extra-parens
    addends.length === 0 ? (finalString = "0=0") : finalString;
    return finalString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const indOfNeg = values.findIndex((val: number): boolean => val < 0);
    const numsToBeAdded = indOfNeg !== -1 ? values.slice(0, indOfNeg) : values;
    const sum = numsToBeAdded.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );

    let myVals = [...values];
    indOfNeg !== -1
        ? myVals.splice(indOfNeg + 1, 0, sum)
        : myVals = [...values, sum];

    return myVals;
}
