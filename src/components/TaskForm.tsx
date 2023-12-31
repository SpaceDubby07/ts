'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from '@phosphor-icons/react';
import { Howl } from 'howler';

interface TaskFormProps {
  listId?: number | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ listId }) => {
  const router = useRouter();
  const [taskName, setTaskName] = useState('');

  const addTask = async (e: any) => {
    e.preventDefault();

    var scribble = new Howl({
      src: ['scribble.mp3'],
    });

    // Update the field name to match the Prisma schema
    const task = {
      content: taskName,
      todoListId: listId,
    };

    const res = await fetch('/api/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });

    if (res.status === 201) {
      console.log('success');
    }

    scribble.play();
    setTaskName('');
    router.refresh();
  };

  const handleTaskNameChange = (e: any) => {
    setTaskName(e.target.value);
  };

  return (
    <form onSubmit={addTask} className="mt-4 flex items-center justify-around">
      <input
        value={taskName}
        type="text"
        onChange={handleTaskNameChange}
        className="input input-bordered w-full ml-8 mr-2"
      />
      <button
        type="submit"
        className="btn btn-accent mr-8 text-lg"
        disabled={!taskName.trim()}
      >
        <Plus size={24} />
      </button>
    </form>
  );
};

export default TaskForm;
