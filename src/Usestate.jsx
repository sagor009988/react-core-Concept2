import { useEffect, useState } from "react"

export default function Users(){
    const [users,setuser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setuser(data))
    },[])

    return (
        <div> 
            <h2>users:{users.length}</h2>
        </div>
    )
}