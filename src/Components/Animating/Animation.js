import React, { Component } from 'react';
import './Animation.css'

class Animation extends Component {

    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
    }

    componentDidUpdate(newProps, newState){
        if(!newState.show){
            document.getElementById('fade').style = 'animation-direction: left 800px;';
        }else{
            document.getElementById('fade').style = 'animation-direction: right 800px;';
        }
    }

    toggleCollapse = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className="Animation">
                <button onClick={this.toggleCollapse}>
                   {this.state.show ? 'cerralo nalgas meadas' : 'abreme culero'}
                </button>
                <div
                    id='fade'
                    className={this.state.show? 'transition show' : 'transition'}
                >
                    voa a desaparece
                </div>
            </div>
        );
    }
}

export default Animation;