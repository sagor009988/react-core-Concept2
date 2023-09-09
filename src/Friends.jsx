import { useEffect, useState } from "react"
import './Friends.css'
import Friend from "./Friend"
export default function Friends(){
    const [friends,setFriends]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])

    return (
        <div className="border">
            <h2>Friends:{friends.slice(0,3).length}</h2>
            {
                friends.map(friend=><Friend friendBio={friend}></Friend>)
            }
        </div>
    )
}