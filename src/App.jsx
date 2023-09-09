import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import counter from './Counter'
import Counter from './Counter'
import Players from './Players'
import Users from './Usestate'
import Friends from './Friends'

function App() {
  function handleClcik (){
    alert('clcik frist')
  }
  // 2nd way array function
  const arryfunvtion=()=>{
    alert('clcik 2')
  }
  // arrow function with pera meter pass
  const arrowperameter=(number)=>{
    alert(number+5)
  }
  


  return (
    <>
      
      <h1>React core c. 2</h1>
      <Friends></Friends>

      <Users></Users>



      <Players></Players>


      <Counter></Counter>
    









     <button onClick={handleClcik}>click herre</button>
     <button onClick={arryfunvtion}>clcik here2</button>
     <button onClick={()=>{alert('click 3')}}>clcik here3</button>
     <button onClick={()=>arrowperameter(3)}>clcik here4</button>
    </>
  )
}

export default App
