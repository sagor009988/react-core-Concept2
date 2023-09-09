import { useState } from "react"

export default function Counter(){
const [count,setcount]= useState(0)
const increase=()=>{
    const newcount=count +1
    setcount(newcount)
}

const reduce=()=>{
    const newvalue=count -1
    setcount(newvalue)
}


    return(
        <div>
            <h1>counter : {count} </h1>
            <button className="increase" onClick={increase}>Increase</button>
            <button onClick={reduce} className="reduce">reduce</button>
        </div>
    )
}