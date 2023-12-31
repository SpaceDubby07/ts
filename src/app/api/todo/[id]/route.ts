import { db } from '@/db';
import { NextResponse } from 'next/server';

export async function GET(req: any, { params }: any) {
  const id = params.id;
  try {
    const list = await db.todoList.findUnique({ where: { id: Number(id) } });

    return NextResponse.json({ list }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Failed to fetch a list' },
      { status: err.status || 500 }
    );
  }
}

// export async function PUT(req: any, { params }: any) {
//   // get the id
//   const id = params.id;

//   try {
//     const updateListName = await db.todoList.update({
//       where: { id: Number(id) },
//       data: {
//         name: 'updated',
//       },
//     });

//     return NextResponse.json({ updateListName }, { status: 200 });
//   } catch (err: any) {
//     return NextResponse.json(
//       { error: 'Failed to fetch a list' },
//       { status: err.status || 500 }
//     );
//   }
// }

export async function DELETE(req: any, { params }: any) {
  const id = params.id;
  try {
    const list = await db.todoList.delete({ where: { id: Number(id) } });
    return NextResponse.json({ list }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Failed to fetch a list' },
      { status: err.status || 500 }
    );
  }
}
