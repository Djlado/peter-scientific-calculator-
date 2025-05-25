import { useState } from 'react'

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const inputOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '×':
        return firstValue * secondValue
      case '÷':
        return firstValue / secondValue
      default:
        return secondValue
    }
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const clearEntry = () => {
    setDisplay('0')
  }

  return (
    <div className="calculator">
      <div className="calculator-display">
        <div className="display-value">{display}</div>
      </div>
      
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <button className="key-clear" onClick={clear}>AC</button>
            <button className="key-clear-entry" onClick={clearEntry}>CE</button>
            <button className="key-sign">±</button>
            <button className="key-operator" onClick={() => inputOperation('÷')}>÷</button>
          </div>
          
          <div className="digit-keys">
            <button className="key-0" onClick={() => inputNumber(0)}>0</button>
            <button className="key-dot" onClick={() => inputNumber('.')}>●</button>
            <button onClick={() => inputNumber(1)}>1</button>
            <button onClick={() => inputNumber(2)}>2</button>
            <button onClick={() => inputNumber(3)}>3</button>
            <button onClick={() => inputNumber(4)}>4</button>
            <button onClick={() => inputNumber(5)}>5</button>
            <button onClick={() => inputNumber(6)}>6</button>
            <button onClick={() => inputNumber(7)}>7</button>
            <button onClick={() => inputNumber(8)}>8</button>
            <button onClick={() => inputNumber(9)}>9</button>
          </div>
        </div>
        
        <div className="operator-keys">
          <button className="key-operator" onClick={() => inputOperation('+')}>+</button>
          <button className="key-operator" onClick={() => inputOperation('-')}>−</button>
          <button className="key-operator" onClick={() => inputOperation('×')}>×</button>
          <button className="key-equals" onClick={performCalculation}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
