import React, { useState } from 'react';
import './calculator.css';
export default function Calculator() {
    const [input, setInput] = useState(" ");
    //calculate Result
    const calculateResult = () => {
        try {
            // const result = ("return" + input)(); //for safe 
            // setInput(result.toString());
            setInput(eval(input).toString());
            //setInput(evaluate(input).toString()); // Safe evaluation
        } catch {
            setInput("Error");
        }
    }
    // handle click handleClick() function
    const handleClick = (value) => {
        setInput((prev) => prev + value);
    }
    //clear Input function
    const clearInput = () => {
        setInput(" ");
    }
    return (
        <div className="Calculator">
            <input type="text" value={input} readOnly />
            <div className="buttons">
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((btn) => (
                    <button key={btn} onClick={() =>
                        btn === 'C' ? clearInput() :
                            btn === "=" ? calculateResult() : handleClick(btn)
                    }>
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    )
}
