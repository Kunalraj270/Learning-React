import { useState } from "react";

const User = ({name , location})=>{
    //state variable
    const [count , setCount] = useState(0)
    const [count2] = useState(2)
    return (
        <div className="user-card" >
            <h1>Count : {count}</h1>
            <button onClick={()=>{
                setCount(count + 1)
            }}>Click</button>
            <h1>Count : {count2}</h1>
            <h1>Name : {name}</h1>
            <h2>Location : {location}</h2>
            <h3>User-Id : amdoc@gmail.com</h3>
        </div>
    )
}
export default User;