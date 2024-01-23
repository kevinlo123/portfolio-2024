'use client'
import React, { useEffect }from 'react'
import { gsap } from 'gsap'
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';


function TextAnimation() {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#first",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl.to("#first", { backgroundPositionX: '0%' })
    
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#second",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl2.to("#second", { backgroundPositionX: '0%' })   


    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#third",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl3.to("#third", { backgroundPositionX: '0%' })

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#fourth",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl4.to("#fourth", { backgroundPositionX: '0%' })

    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#fifth",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl5.to("#fifth", { backgroundPositionX: '0%' })

    let tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: "#sixth",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl6.to("#sixth", { backgroundPositionX: '0%' })

    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: "#seventh",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl7.to("#seventh", { backgroundPositionX: '0%' })

    let tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: "#eighth",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl8.to("#eighth", { backgroundPositionX: '0%' })


  }, []);

    return (
      <section className="py-[80px] lg:py-[200px] relative grid grid-cols-12 px-[30px] lg:px-[60px]">
        <div className="col-span-6 relative hidden lg:block">
          <div className="fixed top-1/2 -translate-y-1/2 text-white -rotate-90 w-[400px] -left-24">
            {/* <p className="citation opacity-1 font-[300] tracking-wide text-xl ml-20">‟&nbsp;Addiction is anything that drains life of meaning while making it seem better.&nbsp;”</p> */}
          </div>
        </div>
        <div className="text col-span-12 lg:col-span-6 flex flex-col gap-14">
          <p id="first" className="about uppercase font-bold text-right text-[40px] lg:text-[100px] first-p">FRONTEND ADDICT</p>
          <p id="second" className="about uppercase font-bold text-right text-[40px] lg:text-[100px]">PIXEL PERFECT</p>
          <p id="third" className="about uppercase font-bold text-right text-[40px] lg:text-[100px]">RESPONSIVE</p>
          <p id="fourth" className="about uppercase font-bold text-right text-[40px] lg:text-[100px]">GSAP</p>
          <p id="fifth" className="about uppercase font-bold text-right text-[40px] lg:text-[100px]">CREATIVE CODER</p>
          <p id="sixth" className="about uppercase font-bold text-right text-[40px] lg:text-[100px]">I love discovering new creative worlds</p>
          <p id="seventh" className="about uppercase font-bold text-right text-[40px] lg:text-[100px]">ACCESSIBLE</p>
          <p id="eighth" className="about uppercase font-bold text-right text-[40px] lg:text-[100px]">SEO</p>
        </div>
      </section>
    )
}

export default TextAnimation