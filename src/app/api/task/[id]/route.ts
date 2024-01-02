import { db } from '@/db';
import { NextResponse } from 'next/server';

export async function DELETE(req: any, { params }: any) {
  const id = params.id;
  console.log(id);
  try {
    const list = await db.task.delete({ where: { id: Number(id) } });
    console.log(list);

    return NextResponse.json({ list }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Failed to fetch a list' },
      { status: err.status || 500 }
    );
  }
}
