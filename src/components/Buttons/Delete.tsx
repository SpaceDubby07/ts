'use client';
import { Trash } from '@phosphor-icons/react'; // we need to render the icons server side, otherwise the file ends /react
import { useRouter } from 'next/navigation';
import { Howl } from 'howler';

function DeleteButton({ listId }: { listId: number }) {
  const router = useRouter();

  const deleteItemHandler = async (e: any) => {
    e.preventDefault();
    var pop = new Howl({
      src: ['pop.wav'],
    });
    try {
      const res = await fetch(`/api/todo/${listId}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        pop.play();
        console.log('List deleted successfully');
        router.refresh();
        // You may want to update the UI to reflect the deletion
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

export default DeleteButton;
