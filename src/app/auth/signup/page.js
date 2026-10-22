"use client"
import {useState} from "react"
export default function SignupFucntion(){
    const [user,setUser]=useState({
        username:'',
        email:'',
        password:'',
        confirm_password:''
    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setUser((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const res=await fetch('/api/signup',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            const data=await res.json()
            console.log(data)
        }
        catch{
            console.log('there is no api call')
        }
    }
    return(
        <div>
            <form action="" metho="post" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" value={user.username} placeholder="uername" onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}/>
                </div>
                <div>
                    <input type="password" name="password" value={user.password} placeholder="password" onChange={handleChange} />
                </div>
                <div>
                    <input type="password" name="confirm_password" value={user.confirm_password} placeholder="confirm_password" onChange={handleChange} />
                </div>
                <button type="submit">Singup</button>
            </form>
        </div>
    )
}