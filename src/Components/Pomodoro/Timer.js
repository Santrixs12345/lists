import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    constructor(){
        super();

        this.state = {
            alert: {
                type: '',
                message: '',
            },
            pause: false,

            time: 0
        };

        this.times = {
            defaultTime: 1500, // 25 min
            shortBreak: 300, // 5 min
            longBreak: 900, // 15 min 
        }
    };

    componentDidMount(){
        //pone tiempo por defecto cuando el componente es montado
        this.setDefaultTime()
    }

    setDefaultTime() {
        this.setState({
            time: this.times.defaultTime
        })
    }

    setTimeWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'WORK WORK WORK!!!'
            }
        })

        this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'BREAK!!!'
            }
        })

        this.setTime(this.times.longBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'BREAK!!!'
            }
        })

        this.setTime(this.times.shortBreak);
    }


    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime,
        })
    }

    restartInterval = () => {
        clearInterval(this.interval);

        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beeeeeeeeeeeeeeeeeeeep'
                }
            })
        }else {
            this.setState({
                time: this.state.time - 1
            })
        }
    }

    PPause(){

    }

    Interval = () => {
        if(!this.state.time){
            this.state.time = setInterval(this.PInterval, 1000);
        }
    }

    PInterval = () => {
        const oElem = document.getElementById("my_box");
        if (oElem.className === "go") {
            oElem.className = "stop";
        } else {
            oElem.className = "go";
        }
    }

    countPause = () => {
        clearInterval(this.state.time);

        this.state.time = null;
    }

    displayTimer (seconds) {

        let minutes = Math.floor(seconds / 60)
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        
        let second = seconds%60
        second = (second < 10) ? '0' + second : second;

        return `${minutes}:${second}`
    }

    render() {

        const {alert: {message, type}, times} = this.state;
        return (
            <div className='Pomodoro' id="my_box">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "timer">
                    {this.displayTimer(this.state.time)}
                </div>

                <div className = "types">
                    <button
                        className = " start"
                        onClick={this.setTimeWork}
                    >
                        Start Working
                    </button>

                    <button
                        className = " short"
                        onClick={this.setTimeForLongBreak}
                    >
                        Short Break
                    </button>

                    <button
                        className = " long"
                        onClick={this.setTimeForShortBreak}
                    >
                        Long Break
                    </button>
                </div>
                    <button
                        className = " pausa"
                        id="stop"
                        onClick={this.countPause}
                    >
                        <i class="fa fa-pause" aria-hidden="true"></i>
                    </button>
                    <button
                        className = " stop"
                        onClick={this.Interval}
                    >
                        Stop
                    </button>
                
            </div>
        );
    }
}

export default Timer;