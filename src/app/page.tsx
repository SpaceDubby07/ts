export const dynamic = 'force-dynamic';
import { formatDate } from '@/lib/utils';
import { db } from '@/db';
import ListForm from '@/components/ListForm';
import DeleteButton from '@/components/Buttons/Delete';
import InfoButton from '@/components/Buttons/Info';

export default async function Home() {
  const todo = await db.todoList.findMany();

  return (
    <div className="flex flex-col">
      {/* This is the page title */}
      <div className="text-center my-4 text-[32px]">Your Lists</div>
      {/* A form to create, or edit a list name */}
      <ListForm />
      {/* Render the lists */}
      <ul className="px-8 my-4">
        {todo.map((list, index) => (
          <li
            className="dots text-secondary px-4 py-6 mb-4 mx-2 rounded-lg flex justify-between items-center shadow-xl border border-accent flex-1"
            key={index}
          >
            <div className="flex flex-col">
              <div className="space-x-4 first-letter:capitalize text-2xl">
                {list.name}
              </div>
              <div className="opacity-70">
                <small>{formatDate(list.createdAt)}</small>
              </div>
            </div>

            {/* edit and delete component */}
            <div className="flex">
              <InfoButton listId={list.id} />
              <DeleteButton listId={list.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
