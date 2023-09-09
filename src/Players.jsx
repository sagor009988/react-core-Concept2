import { useState } from "react"

export default function Players(){
 const [player,setplayer]=useState(0)

    const handleincrease=()=>{
        setplayer(player+1)
    }



    return(
        <div>
            <h1>players:{player}</h1>
            <button onClick={handleincrease}>Add player</button>
        </div>

    )
}