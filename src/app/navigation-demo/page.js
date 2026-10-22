"use client";
import {useRouter} from "next/navigation"

export default function DemoNavigation(){
    const router=useRouter()
    return (
        <div>
            <h1>Navigation page</h1>
            

            <button onClick={()=>router.push('/contact')}>
                Click
            </button>

            <button onClick={()=>router.back('/')}>
                go back
            </button>
        </div>
    )
}