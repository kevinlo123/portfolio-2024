import { sql } from "@vercel/postgres";
import Image from 'next/image'

console.log({
  POSTGRES_URL: process.env.POSTGRES_URL,
  POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING
});

console.log(sql)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      testing
      <Image
        src="/next.svg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </main>
  );
}
