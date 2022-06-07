import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            result: 0,
            selector: ''
        };
    }

    handleOnChange = e => {
        const {target: {value, name, type}} = e;

        const val = type === 'text'? Number(value) : value;

        this.setState({
            [name]: val
        })
    }

    hanldeResult = e => {
        const {number1, number2, selector} = this.state;

        this.setState({
            result: calculateResult(number1, number2, selector)
        })
    }

    render() {
        return (
            <div>
                <input
                onChange={this.handleOnChange}
                    name="number1"
                    type="text"
                    value={this.state.number1}
                    
                />
                <select name='selector' value={this.state.value} handleonChange={this.handleOnChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input
                    onChange={this.handleOnChange}
                    name="number2"
                    type="text"
                    value={this.state.number2}
                />
                <button onClick={this.hanldeResult}>=</button>

                <p className='result'>{this.state.result}</p>
            </div>
        );
    }
}                             

function calculateResult(number1, number2, selector) { 
    switch(selector){
        case "+":
            return number1 + number2;
        break;
        case "-":
            return number1 - number2;
        break;
        case "*":
            return number1 * number2;
        break;
        case "/":
            return number1 / number2;
        break;

        default:
            return number1 + number2
        break;
    }
}

export default Calculator;