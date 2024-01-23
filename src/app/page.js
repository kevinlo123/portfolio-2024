import Projects from './projects.js'
import TextAnimation from './components/TextAnimation.js'
 

export default function Home() {

  return (
    <main>
      <section className="flex items-center h-screen relative px-[30px] lg:px-[60px]">
        <div id="awwwards" className="fixed z-50 -translate-y-1/2 top-1/2 right-0 rotate-[270deg] translate-x-[36%] text-center flex items-center">
          <a href="/Kevin-lopez-resume.pdf" target="_blank" rel="noreferrer" className="w-44 h-12 bg-white text-black flex justify-center items-center hover:text-black">
            <span className="uppercase font-bold tracking-widest text-xl">resume</span>
          </a>
        </div>
        <h1 className="overflow-hidden text-heading font-bold text-[45px] leading-[100%] xl:text-[120px] 2xl:text-[150px] xl:leading-[120px] 2xl:leading-[140px] uppercase mb-16 text-white">
          Frontend Developer
        </h1>
        <div className="absolute left-0 bottom-[60px] right-0 flex items-end lg:items-start justify-between px-[30px] lg:px-[60px]">
          <div className="xl:h-[100px] xl:w-[100px] 2xl:w-[125px] 2xl:h-[125px] flex items-center">
            <div className="animate-bounce">
              <svg className="translate-y-12 lg:translate-y-4" width="50px" height="100px" viewBox="0 0 80 40">
                <polyline fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="inherit" strokeLinejoin="inherit" points="
              0,0 40,20 80,0"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col mb-2 lg:mb-0">
            <div className="flex items-center gap-4 xl:gap-[20px] 2xl:gap-[30px] down" >
              <h3 className="uppercase xl:text-[26px] 2xl:text-[32px] font-[400] text-white">Open to work</h3>
              {/* <div className="relative h-[28px] w-[28px]"><img src="/icons/asterisk.svg" alt="asterisk" className="object-contain animate-spin" /></div> */}
            </div>
            <h4 className="font-[200] text-white lg:ml-1 based-in" >Based in Boston, MA</h4>
          </div>
        </div>
      </section>

      <TextAnimation />
      <Projects />
    </main>
  );
}