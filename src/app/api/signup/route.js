
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";


export async function POST(request) {
    try {
        const { username, email, password, confirm_password } =
            await request.json();

        // 1. Validate required fields
        if (
            !username?.trim() ||
            !email?.trim() ||
            !password ||
            !confirm_password
        ) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        // 2. Validate passwords
        if (password !== confirm_password) {
            return NextResponse.json(
                { message: "Passwords do not match" },
                { status: 400 }
            );
        }

       

        // 3. Connect to MongoDB
        await connectDB();

        const normalizedEmail = email.trim().toLowerCase();

        // 4. Check whether email already exists
        const existingUser = await User.findOne({
            email: normalizedEmail,
        });

        if (existingUser) {
            return NextResponse.json(
                { message: "Email already registered" },
                { status: 409 }
            );
        }

        
     

        // 6. Save user to MongoDB
        await User.create({
            username: username.trim(),
            email: normalizedEmail,
            password: password,
        });

        // 7. Return success
        return NextResponse.json(
            { message: "User created successfully" },
            { status: 201 }
        );

    } catch (error) {
        console.error("Signup error:", error);

        // Handle duplicate-email race conditions
        if (error?.code === 11000) {
            return NextResponse.json(
                { message: "Email already registered" },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { message: "Unable to create account" },
            { status: 500 }
        );
    }
}
