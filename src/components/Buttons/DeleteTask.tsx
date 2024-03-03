'use client';
import { Trash } from '@phosphor-icons/react'; // we need to render the icons server side, otherwise the file ends /react
import { useRouter } from 'next/navigation';

function DeleteTaskButton({ taskId }: { taskId: number }) {
  const router = useRouter();

  const deleteItemHandler = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/task/${taskId}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        // You may want to update the UI to reflect the deletion
        router.refresh();
      } else {
        console.error('Failed to delete list. Response status:', res.status);
      }
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  return (
    <button onClick={deleteItemHandler}>
      <Trash size={22} className="text-red-600 mx-2" />
    </button>
  );
}

export default DeleteTaskButton;
