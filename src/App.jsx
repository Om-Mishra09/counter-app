import React from 'react';
import {useState} from 'react'

export default function App() {
  const [count,setCount]=useState(0)

  const [incId,setIncId]=useState(null)
  const [decId,setDecId]=useState(null)

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }

  function incrementCounter(){
    const id = setInterval(()=>{
      setCount((count)=> count+1)
    },1000)

    setIncId(id)
  }

  function decrementCounter(){
    const id = setInterval(()=>{
      setCount((count)=> count-1)
    },1000)

    setDecId(id)
  }

  function stopCounter(){
    clearInterval(incId)
    clearInterval(decId)
  }

  return (
    <div>
      <p> Counter : {count}</p>

      <button onClick={()=>{increment()}}>
        increment
      </button>

      <button onClick={()=>{decrement()}}>
        decrement
      </button>

      <button onClick={()=>{incrementCounter()}}>
        incrementCounter
      </button>

      <button onClick={()=>{decrementCounter()}}>
        decrementCounter
      </button>

      <button onClick={()=>{stopCounter()}}>
        stop
      </button>
    </div>
  )
}