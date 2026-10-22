import { NextResponse } from "next/server";
import connectDB  from "@/lib/mongodb";


export async function GET(){
    try{
        await connectDB()
        return NextResponse.json(
            {message:'db connect successfully'}
        )
    }
    catch (error) {
        console.error("MongoDB error:", error);

        return NextResponse.json(
            { message: "MongoDB connection failed" },
            { status: 500 }
        );
    }
}