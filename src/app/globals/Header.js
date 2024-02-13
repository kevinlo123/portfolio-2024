'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LightDarkToggle from '../components/LightDarkToggle.js';
import { Divide as Hamburger } from 'hamburger-react';

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName('body')[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName('body')[0].style.overflow = "auto";
    }
  }, [isOpen]);

  const close = () => {
    document.getElementsByClassName('hamburger-react')[0].click();
  }

  return (
    <header className="h-[100%] px-[30px] md:px-[60px] py-[30px] flex items-center justify-between absolute top-0 left-0 right-0 items-baseline">
      <Link href="/" className="text-[28px] xl:text-[32px] 2xl:text-[40px] font-[300] text-heading">Kevin Lopez</Link>
      <div className="w-[135px] flex justify-between">
        <LightDarkToggle />
        <Hamburger
          toggled={isOpen} 
          toggle={setOpen} 
        />
        {
          isOpen &&
            <nav className="lg:py-[4rem] text-center lg:text-left lg:px-[4rem] py-[3rem] px-[3rem] absolute w-[100%] h-[100%] bg-black left-0 top-0 z-[51] flex flex-col">
              <Link onClick={close} href="/" className="mb-5 text-[40px] tracking-widest lg:text-[60px] font-[300] text-heading">Home</Link>
              <Link onClick={close} href="/about" className="mb-5 text-[40px] tracking-widest lg:text-[60px] font-[300] text-heading">About</Link>
              <Link onClick={close} href="/projects/acoustic" className="mb-5 text-[40px] tracking-widest lg:text-[60px] font-[300] text-heading">Projects</Link>
              <Link onClick={close} href="/contact" className="mb-5 text-[40px] tracking-widest lg:text-[60px] font-[300] text-heading">Contact</Link>
            </nav>
        }
      </div>
    </header>
  );
}
