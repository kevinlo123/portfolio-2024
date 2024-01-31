import Link from 'next/link'
import LightDarkToggle from '../components/LightDarkToggle.js'
 
export default function Header() {
  return (
    <header className="px-[30px] md:px-[60px] py-[30px] flex items-center justify-between absolute top-0 left-0 right-0">
      <Link href="/" className="text-[28px] xl:text-[32px] 2xl:text-[40px] font-[300] text-heading">Kevin Lopez</Link>
      <LightDarkToggle />
    </header>
  );
}