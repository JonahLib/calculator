import React, { useState } from "react";
import './index.css'

export const Calculator = () => {
    const [value, setValue] = useState('')
    let prevValue

    const addNum = (e) => {
        prevValue = value
        setValue(prevValue + e.target.innerHTML)
    }

    const clear = () => {
        setValue('')
    }

    const oparation = (e) => {
        prevValue = value
        setValue(prevValue + ' ' + e.target.innerHTML + ' ')
    }

    const sum = () => {
        let sumArray = value.split(' ')
        if(sumArray[1] === '+') {
            setValue(parseFloat(sumArray[0]) + parseFloat(sumArray[2]))
        }
        else if(sumArray[1] === '-') {
            setValue(parseFloat(sumArray[0]) - parseFloat(sumArray[2]))
        }
        else if(sumArray[1] === 'x') {
            setValue(parseFloat(sumArray[0]) * parseFloat(sumArray[2]))
        }
        else if(sumArray[1] === '÷') {
            setValue(parseFloat(sumArray[0]) / parseFloat(sumArray[2]))
        }else{
            alert('an error has ocurred')
        }
        

    }

    return(
        <main>
            <input type="text" value={value} />
            <div>
                <button className="num" onClick={addNum}>1</button>
                <button className="num" onClick={addNum}>2</button>
                <button className="num"onClick={addNum}>3</button>
            </div>
            <div>
                <button  className="num" onClick={addNum}>4</button>
                <button  className="num" onClick={addNum}>5</button>
                <button  className="num" onClick={addNum}>6</button>
            </div>
            <div>
                <button  className="num" onClick={addNum}>7</button>
                <button  className="num" onClick={addNum}>8</button>
                <button  className="num" onClick={addNum}>9</button>
            </div>
            <div>
                <button className="zero" onClick={addNum}>0</button>
                <button  className="zero" onClick={addNum}>.</button>
            </div>
            <div>
                <button className="oparator" onClick={oparation}>+</button>
                <button className="oparator" onClick={oparation}>-</button>
                <button className="oparator" onClick={oparation}>÷</button>
                <button className="oparator" onClick={oparation}>x</button>
            </div>
            <div>
                <button className="functions" onClick={clear}>C</button>
                <button className="functions" onClick={sum}>=</button>
            </div>
        </main>
    )
}