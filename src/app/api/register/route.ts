import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        // Parse the JSON request body
        const { email, password } = await req.json();

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required." },
                { status: 400 }
            );
        }

        // Hash the password
        const hashed = await hash(password, 12);

        // Create user in the database
        const user = await prisma.user.create({
            data: {
                email,
                password: hashed,
            },
        });

        // Return a success response with the created user
        return NextResponse.json(
            {
                user: {
                    email: user.email,
                },
            },
            { status: 201 }
        );
    } catch (err: any) {
        // Catch errors and return an error response
        return NextResponse.json(
            {
                error: err.message || "An error occurred.",
            },
            { status: 500 }
        );
    }
}
