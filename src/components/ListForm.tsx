'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from '@phosphor-icons/react';
import { Howl } from 'howler';

const ListForm = () => {
  const router = useRouter();
  const [listName, setListName] = useState('');

  const addList = async (e: any) => {
    e.preventDefault();

    var scribble = new Howl({
      src: ['scribble.mp3'],
    });

    // Update the field name to match the Prisma schema
    const list = {
      name: listName,
    };

    const res = await fetch('/api/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(list),
    });

    if (res.status === 201) {
      console.log('success');
    }

    scribble.play();
    setListName('');
    router.refresh();
  };

  const handleListNameChange = (e: any) => {
    setListName(e.target.value);
  };

  return (
    <form
      onSubmit={addList}
      className="mt-4 flex items-center tooltip"
      data-tip="Write something unique!"
    >
      <input
        value={listName}
        type="text"
        onChange={handleListNameChange}
        className="input input-bordered w-full ml-8 mr-2"
      />
      <button
        type="submit"
        className="btn btn-accent mr-8"
        disabled={!listName.trim()}
      >
        <Plus size={24} />
      </button>
    </form>
  );
};

export default ListForm;
