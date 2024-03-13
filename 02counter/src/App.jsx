import { useState } from 'react';
import './App.css'

function App() {
  //setCounter is a method(name can be changed)
  const[counter, setCounter]=useState(0);//useState is for updation in UI
  //let counter = 15

  //addValue function
  const addValue = ()=>{
    //counter = counter + 1;
    setCounter(prevcounter=>prevcounter+1);//we are taking previous state
    setCounter(prevcounter=>prevcounter+1);//callback functions are performed 
    setCounter(prevcounter=>prevcounter+1);//the number is sent in batches
    setCounter(prevcounter=>prevcounter+1);
    if(counter>=20){
      setCounter(counter);
    }
  }

  //removeValue function
  const removeValue = ()=>{
    setCounter(counter-1);
    if(counter<=0){
      setCounter(counter);
    }
    
  }

  return (
    <>
      <h1>Mandavi Dubey</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br></br>
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
