'use client';
import { Info } from '@phosphor-icons/react'; // we need to render the icons server side, otherwise the file ends /react
import { useRouter } from 'next/navigation';
import { Howl } from 'howler';

function InfoButton({ listId }: { listId: number }) {
  const router = useRouter();

  const routeHandler = () => {
    var inspire = new Howl({
      src: ['inspiration.wav'],
    });

    inspire.play();
    setTimeout(() => {
      router.push(`/task/${listId}`);
    }, 300);
  };

  return (
    <button onClick={routeHandler}>
      <Info size={22} className="text-secondary mx-2 hover:animate-spin" />
    </button>
  );
}

export default InfoButton;
