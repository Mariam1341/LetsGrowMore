import React, { useState } from "react";
import './App.css';

const App =()=>{
  const [result, setResult] = useState("");

  const handelClick = (e) =>{
    setResult(result.concat(e.target.name))
  }

const handelClear = () => {
  setResult("");
}

const handelbackSpace =()=>{
  setResult(result.slice(0,-1));
}

const handelResult = () =>{
  try{
    setResult(eval(result).toString());
  }catch{
    setResult("Error")
  }
}

  return(
  <div className="container dark-container">

    <form>
      <input type="text" className ="dark-input" value={result}/>
    </form>
    <div className="keypad">
      <button className = "highlight dark-highlight" onClick={handelClear} id = "clear">Clear</button>
      <button className = "highlight dark-highlight" onClick={handelbackSpace} id = "backspace">C</button>
      <button className = "highlight dark-highlight" name = "/" onClick={handelClick}>&divide;</button>
      <button className = "dark-button" name = "7" onClick={handelClick}>7</button>
      <button className = "dark-button" name = "8" onClick={handelClick}>8</button>
      <button className = "dark-button" name = "9" onClick={handelClick}>9</button>
      <button className = "highlight dark-highlight" name = "*" onClick={handelClick}>&times;</button>
      <button className = "dark-button" name = "4" onClick={handelClick}>4</button>
      <button className = "dark-button" name = "5" onClick={handelClick}>5</button>
      <button className = "dark-button" name = "6" onClick={handelClick}>6</button>
      <button className = "highlight dark-highlight" name = "-" onClick={handelClick}>&ndash;</button>
      <button className = "dark-button" name = "1" onClick={handelClick}>1</button>
      <button className = "dark-button" name = "2" onClick={handelClick}>2</button>
      <button className = "dark-button" name = "3" onClick={handelClick}>3</button>
      <button className = "highlight dark-highlight" name = "+" onClick={handelClick}>+</button>
      <button className = "dark-button" name = "0" onClick={handelClick}>0</button>
      <button className = "dark-button" name = "." onClick={handelClick}>.</button>
      <button className = "highlight dark-highlight" onClick={handelResult} id ="result">=</button>
    </div>
  </div>);
}
export default App;