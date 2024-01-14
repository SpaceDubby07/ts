'use server';
import DeleteTaskButton from '@/components/Buttons/DeleteTask';
import HomeButton from '@/components/Buttons/Home';
import TaskForm from '@/components/TaskForm';
import { db } from '@/db';
import { formatDate } from '@/lib/utils';

async function page({ params }: any) {
  console.log(params.id);
  const todoListId = parseInt(params.id, 10);
  let currentList = null; // Initialize currentList to null

  if (isNaN(todoListId)) {
    // Handle the case where params.id is not a valid number
    console.error('Invalid todoList ID:', params.id);
  } else {
    currentList = await db.todoList.findUnique({
      where: {
        id: todoListId,
      },
    });

    if (!currentList) {
      // Handle the case where the TodoList with the specified ID is not found
      console.error('TodoList not found for ID:', todoListId);
    }
  }

  // find the task lists only for the current list you are in
  const taskList = todoListId
    ? await db.task.findMany({
        where: {
          todoListId: todoListId,
        },
      })
    : [];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="ml-8">
          <HomeButton />
        </div>
        <div className="text-center my-4 text-[32px]">{currentList?.name}</div>
        <div>
          {/* placeholder div, a cheat to keep middle div cenetered, do not delete */}
        </div>
      </div>
      <TaskForm listId={currentList?.id} />

      <ul className="px-8 my-4">
        {taskList.map((task, index) => (
          <li
            className="dots text-secondary px-4 py-6 mb-4 mx-2 rounded-lg flex justify-between items-center shadow-xl border border-accent cursor-pointer flex-1"
            key={index}
          >
            <div className="flex flex-col">
              <div className="space-x-4 first-letter:capitalize text-2xl">
                {task.content}
              </div>
              <div className="opacity-70">
                <small>{formatDate(task?.createdAt)}</small>
              </div>
            </div>
            {/* edit and delete component */}
            <div className="flex">
              <DeleteTaskButton taskId={task?.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
