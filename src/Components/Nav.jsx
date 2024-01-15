import Image from 'next/image';
// pages/index.js or any other Next.js file
import Link from 'next/link';
import Example from './Example';


const Nav = () => {
  return (
    <div className="w-screen mx-auto width-auto  h-30 bg-bg-pink flex justify-between ms:rounded sm:border-customColor relative  ">
      <div className='flex justify-evenly'>
        <Example />

        <div class=" w-40 h-12 ml-8 rounded-2xl border-2 border-customColor bg-slate-100 flex items-center justify-center mt-14 lg:ml-[5.25rem] xl:relative xl:right-20   md:w-28   ms:relaive ms:top-16 ms:left-4 ms:w-24 ms:rounded-xl mm:w-24 mm:rounded-xl mm:relative mm:top-20 mm:left-16  ml:w-24 ml:rounded-xl ml:relative ml:top-20 ml:left-[7rem]">
          <span className="cursor-pointer font-Navbody text-txColor "> book me</span>
        </div>
      </div>
      <div className=''>


        <Link href="/"><div className="text-7xl font-Navheading text-txColor  mt-5 2xl:text-8xl lg:text-6xl md:text-6xl ms:text-4xl  ms:right-[11rem] mm:text-5xl cm:absolute mm:right-[12rem] ml:text-5xl  ml:right-[15rem]  m767:text-6xl  ">
          AYESHA
          <div className="text-xl font-Navbody text-spa 
        pb-9 pl-16 xl:text-xs md:pl-9   ms:pl-2 cm:text-xs mm:pl-8  ml:pl-8 


        
        
        ">Spa & Salooon</div>
        </div>
        </Link>
      </div>

      <div className="  mt-16 mr-10 flex justify-between gap-10  m767:absolute  ms:bottom-8 ms:right-[0.75rem] mm:gap-[0.5rem] ms:gap-[0.5rem]    mm:bottom-8 mm:right-[0.25rem]  ml:gap-[1rem] ml:right-[0.25rem] ml:bottom-8 m767:gap-[1rem]  m767:right-[0.25rem] m767:bottom-8 md:absolute md:right-[1rem] md:gap-[0.5rem] md:bottom-[2rem] lg:absolute lg:right-1 ">
        <span className='cursor-pointer ms:w-7 mm:w-8 ml:w-8'><Image src="/assests/whatsapp.png" alt="Whatsapp of Ayesha SPA & Saloon" width={56} height={49} /></span>
        <span className=' cursor-pointer ms:w-7 mm:w-8 ml:w-8 '><Image src="/assests/call.png" alt="Mobile numebr  of Ayesha SPA & Saloon" width={56} height={49} /></span>
        <span className='cursor-pointer ms:w-7 mm:w-8 ml:w-8'><Image src="/assests/insta.png" alt="Instagram   of Ayesha SPA & Saloon" width={56} height={49} /></span>

      </div>





    </div>
  )
}

export default Nav