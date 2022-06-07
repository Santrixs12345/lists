import React, { Component } from 'react';
import Result from './Result';
import './Numbers.css';
class Numbers extends Component {

    constructor() {
        super();
        this.state = {
            numbers: '',
            resul: [], 
        }
    }
    
    handleNumberChange = e => {{/*esto es para que se actualise cada interacion*/}
        const {target: {value}} = e; 
        const numbers = Array.from(value);
        const result = numbers.reduce((a, b) => Number(a) + Number(b), 0); {/*esto hace la suma de los numeros que es el anterior mas el nuevo*/}

        this.setState({
            numbers: value,
            resul: [...this.state.resul, result]
        })
    }

    render() {
        const {resul} = this.state;
        return (
            <div className= "Numbers">
                <input 
                    type="number"
                    value={this.state.numbers}
                    onChange= {this.handleNumberChange} 
                />  {/*se llama en el imput para que se actualisen los valores cada que se introduce un valor*/}

                <ul>
                    {
                        resul.map((result, i) => (
                            <Result key={i} result={result}/> 
                        ))
                    }
                </ul> {/*aqui se crean las casillas para */}
            </div>
        );
    }
}

export default Numbers;