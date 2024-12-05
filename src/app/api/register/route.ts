import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
     
        const { email, password } = await req.json();

       
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required." },
                { status: 400 }
            );
        }

       
        const hashed = await hash(password, 12);

     
        const user = await prisma.user.create({
            data: {
                email,
                password: hashed,
            },
        });

        return NextResponse.json(
            {
                user: {
                    email: user.email,
                },
            },
            { status: 201 }
        );
    } catch (err: any) {
        
        
        return NextResponse.json(
            {
                error: err.message || "An error occurred.",
            },
            { status: 500 }
        );
    }
}
