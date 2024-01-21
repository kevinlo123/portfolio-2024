import Image from 'next/image'
import Projects from './projects.js'
 

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/next.svg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    <Projects />
    </main>
  );
}
