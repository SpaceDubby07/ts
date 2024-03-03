'use client';
import { useRouter } from 'next/navigation';

function HomeButton() {
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };

  return (
    <div onClick={goHome} className="cursor-pointer heartbeat text-[24px]">
      Home
    </div>
  );
}

export default HomeButton;
