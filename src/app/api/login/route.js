
import { NextResponse } from "next/server";
export async function POST(request){
    try{
        const body=await request.json();
        const {username,password}=body;

        if(!username || !password){
            return NextResponse.json(
                {message:'username and password required'},
                {status:200}
            )
        }
        return NextResponse.json(
            {message:'request recived sucessfully'},
            {status:200}
        )
        console.log('recived')
    }
    catch{
         return NextResponse.json(
      { message: "Invalid request" },
      { status: 400 }
    );
    }
    
}