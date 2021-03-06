import React, { Component } from 'react';
import Chart from './Chart';

class Charthome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charType: 'line'
        };

        this.columns = [
            ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
            ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
            ['XRP', 100, 200, 300, 500, 400, 300],
        ]
    }

    setBarChart = () => {
        this.setState({
            charType: 'bar'
        })
    }

    setLineChart = () => {
        this.setState({
            charType: 'line'
        })
    }

    render() {
        return (
            <div>
                <Chart
                columns = {this.columns}
                chartType = {this.state.charType}
                />
                <p>
                    Chart type
                    <button onClick={this.setBarChart}>Bar</button>
                    <button onClick={this.setLineChart}>Line</button>
                </p>
            </div>
        );
    }
}

export default Charthome;



































































































































































































































































































































































































































































































































































































































































































































































































































































































































































