import { useState } from 'react';
import './App.css';
import './index.css'
const App = () => {

const [diceNumber, setDiceNumber]=useState(1);
const rollDice = () => {
  const x = Math.floor(Math.random() * 6) + 1;
  setDiceNumber(x);
}

  return (
    <div>
   <center>  <img width={300} height={300} src={require(`./assets/${diceNumber}.png`)}></img>
   <br/>
   <button onClick={()=>rollDice()} className='button'>Roll</button>
   
   
   
   </center>
    </div>
  );
}

export default App;
