import React,{useState} from 'react';
import Questions from './Questions.json';
import Display from './Display.js';
import './App.css'

const App = () => {
  let tempmarks=[]
  const[marks,setmarks] = useState([]);
  const changehandler = (value,index) => {
    tempmarks=marks;
    tempmarks[index]=value;
    setmarks([...tempmarks]);
  }
  return (
    <div>
      <center>
        <h1>quiz application</h1>
        {Questions.map((qa,index) => < Display question = {qa} index={index} changehandler = {changehandler}/>)}

      <button onClick= {() => alert (marks.reduce((a,b) => a+b,0)+'/10')}> End Quiz </button> 
      </center>
    </div>
  )
}

export default App

