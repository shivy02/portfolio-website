import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { message } = await req.json();

    if(!message) {
        return NextResponse.json(
          { error: "Message is required" },
          { status: 400 }
        );
    }

    try {
        const response = await fetch("")
    }
}