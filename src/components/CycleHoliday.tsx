import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
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
    
    return <div> 
        <div>Cycle Holiday</div>
        <Button onClick={setHolidayByAlphabet}>Advance by Alphabet</Button><Button onClick={setHolidayByYear}>Advance by Year</Button><div>Holiday: {Holiday}</div>
    </div>;
}
