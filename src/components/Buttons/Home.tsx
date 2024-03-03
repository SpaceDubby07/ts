'use client';
import { useRouter } from 'next/navigation';
import { Howl } from 'howler';

function HomeButton() {
  const router = useRouter();
  const goHome = () => {
    // var pop = new Howl({
    //   src: ['/door.mp3'],
    // });

    // pop.play();
    router.push('/');

    // setTimeout(() => {
    //   router.push('/');
    // }, 200);
  };

  return (
    <div onClick={goHome} className="cursor-pointer heartbeat text-[24px]">
      Home
    </div>
  );
}

export default HomeButton;
