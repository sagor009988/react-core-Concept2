export default function Friend({friendBio}){
const {id,name,username,email}=friendBio
    return(
        <div className="border">
            <h2>Id:{id}</h2>
            <h2>Name:{name}</h2>
            <h2>User Name:{username}</h2>
            <h2>Email:{email}</h2>
        </div>
    )
}