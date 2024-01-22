import Link from 'next/link'
 
export default function Header() {
  return (
    <header className="px-[30px] md:px-[60px] py-[30px] flex items-center justify-between absolute top-0 left-0 right-0">
      <Link href="/" className="xl:text-[32px] 2xl:text-[40px] font-[300] text-white text-heading">Kevin Lopez</Link>
    </header>
  );
}