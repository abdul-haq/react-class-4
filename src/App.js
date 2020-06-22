import React,{useState} from 'react';
import logo from './logo.svg';
import bulboff from './images/OFFbulb.jpg';
import bulbon from './images/ONbulb.jpg'
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  let [isMorning,setMorning]=useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
  <h1>Value of counter {count}</h1>
  <button onClick={()=>{setCount(++count)}}>counter add</button>
  
      </div>
     <br></br>
      <div>
      <img src={isMorning ? bulbon : bulboff} alt="off"></img>
  <button onClick={()=>{setMorning(!isMorning)}}>Turn {isMorning?'OFF':'ON'}</button></div>
    </div>
    
    
  );
}

export default App;
