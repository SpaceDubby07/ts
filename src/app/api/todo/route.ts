import { db } from '@/db';
import { NextResponse } from 'next/server';

// This function allows us to post a new list, and is connected to our ListForm component
export async function POST(req: Request, res: any) {
  try {
    // request the data
    const requestData = await req.json();
    // make a prisma create call with the request data
    const newlist = await db.todoList.create({ data: requestData });

    // if all is good, send a response with the data and status
    return NextResponse.json({ data: newlist }, { status: 200 });
  } catch (err: any) {
    // Otherwise send an error
    return NextResponse.json(
      { error: 'Failed to create a new list' },
      { status: err.status || 500 }
    );
  }
}
