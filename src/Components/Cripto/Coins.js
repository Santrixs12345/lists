import React, { Component } from 'react';
import './Coins.css'

class Coins extends Component {
    constructor(){
        super();

        this.state = {
            Dollarss: 0,
        };
    }

    handleOnChange = e => {
        this.setState({
            Dollarss:Number(e.target.value)
        })
    }

    shouldComponentUpdate(props, state){

        if (state.Dollarss % 10 === 0){
            return true;
        }

        return false;

        //return !(state.Dollarss %10);
        //return state.Dollarss %10 === 0;
    }

    render(){
        return(
        <div className='Coins'>
            <h1>Compra Cryptos</h1>
            <div className='question'>
                <p>¿Cuantos dolares Cambiaras?</p>
                <p>
                    <input
                        placeholder='0'
                        onChange={this.handleOnChange}
                        type='number'
                    />
                </p>
            </div>
            <div className='answer'>
                <p>Precio de la Crypto: $10</p>
                <p>
                    Puedes comprar <strong>{this.state.Dollarss/10}</strong> coins.
                </p>
            </div>
        </div>
        )
    }

}

export default Coins;