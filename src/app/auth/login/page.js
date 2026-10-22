"use client"
import { useState } from "react"; 
export default function LoginFun() {
    const [user,setUser]=useState({
        username:'',
        password:''
    })

    const handleChange=(e)=>{
        const{name,value}=e.target
        setUser((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    console.log(user)

    
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        // Read the JSON response body
        const data = await res.json();

        console.log("Status:", res.status);
        console.log("Response data:", data);
    } catch (error) {
        console.log("Request failed:", error);
    }
};

    return(
        <div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div>
                    <h1>Username</h1>
                    <input type="text" name="username" value={user.username} placeholder='username' onChange={handleChange} />
                </div>
                <div>
                    <h1>Password</h1>
                    <input type="password" name="password" value={user.password} placeholder='password' onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )    
}