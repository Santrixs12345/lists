//import Home from './Home/Home.js';
import Header from '../Shared/Layout/Header.js'
import './App.css';
import Footer from '../Shared/Layout/Footer.js';
import Content from '../Shared/Layout/Content.js';
//import ToDo from './ToDo/ToDo.js';
//import Timer from './Pomodoro/Timer.js';
//import Coins from './Cripto/Coins.js'
//import Charthome from './Chart/Charthome.js';
//import Number from './PureComponent/Numbers';
//import Animation from './Animating/Animation.js';
//import Calculator from './Calculator/Calculator.js';
//import Person from './Forms/Person';
import Person from './Formu/Person'
import Popup from 'reactjs-popup';

function App() {
  return (
    <div className="App">
      <Header title="Mi app" url="https://github.com/" />
      <Content>
        <Person /> {/* <Calculator/> <Number/> <Animation/> <Charthome/> <Coins/> <Home/> <Todo/> <Timer/>*/}
      </Content>
      <Popup/>
      <Footer/> 
    </div>
  );
}

export default App;
