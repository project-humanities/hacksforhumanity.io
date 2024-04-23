import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div>
        <Image
          src={'/images/hero.png'}
          alt={'hero'}
          width={1920}
          height={1080}
          style={{ height: 'auto', width: 'auto' }}
          priority
        />
      </div>
    </>
  );
}
