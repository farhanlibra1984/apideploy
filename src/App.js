
import './App.css';
import { useState } from 'react';

function App() {
  const[result, setResult]=useState("")
  const fetchApi= async()=>{
    const url =`${process.env.REACT_APP_API_URL}/test`;
    const response = await fetch("url");
    const data = await response.json();
    setResult(data);


  }
  return (
    <>
    <button onClick={fetchApi}>fetch api</button>
    <p>Result: {result}</p>
    </>
  );
}

export default App;
