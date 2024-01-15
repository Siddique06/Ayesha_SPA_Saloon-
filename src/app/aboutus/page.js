import SpaDeals from '@/Components/SpaDeals';
import Image from 'next/image';

function Page() {
  return (
    <>
      <div className='w-screen h-[715px] bg-about  object-fill bg-cover bg-scroll md:h-[179px] md:mt-32' >

        
      </div>
      <h1 className='text-[#931796D4] font-body text-6xl font-medium uppercase text-center underline underline-offset-1 mt-[53px] cm:text-xl cm:font-black md:text-5xl '>what we are</h1>
      <div className='flex justify-around mt-[274px] relative '>
        <div className='w-[515px] h-[313px] rounded-[28px] bg-[#931796B5] ml-5 cm:w-[349px] cm:h-[212px] cm:ml-[0px] md:ml-[20px] lg:ml-0 lg:mt-24 xl:ml-44'>
          <p className='w-[445px] h-[293px] text-2xl font-body font-medium leading-[33.605px] text-[#fff] flex flex-col justify-center pl-[32px] pt-[22px] cm:w-[315px] cm:h-[216px] cm:text-base cm:leading-[22.404px] cm:pl-[25px] cm:pt-[12px]'  >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>

        </div>
        <div className='md:hidden'>
          <span className=' relative right-[11rem] bottom-[9rem] lg:right-0 lg:left-[4.25rem] lg:bottom-1' >
            <Image
              src="/assests/about2.jpg"
              alt="My Image"
              width={249}
              height={299}
              className="cm:w-[127px] cm:h-[153px]  "
            />
          </span>
          <span className='relative  right-[20rem] bottom-[19rem] lg:right-[5rem] lg:bottom-[13.25rem]' >
            <Image
              src="/assests/about3.jpg"
              alt="My Image"
              width={269}
              height={329}
              className="cm:w-[127px] cm:h-[153px]  "
            />
          </span>

        </div>

      </div>
      <h1 className='text-[#931796D4] font-body text-6xl font-medium uppercase text-center underline underline-offset-1 mt-[0px] cm:text-xl cm:font-black md:mt-10 md:text-5xl'>locations</h1>
      <div className='flex justify-around  mt-[91px] cm:flex-col'>
        <div className='cm:flex cm:justify-around'>

          <div>
            <Image
              src="/assests/Medinah.jpg"
              alt="My Image"
              width={304}
              height={350}
              className="cm:w-[127px] cm:h-[153px] md:w-[200px] md:h-[220px] "
            />
            <h1 className='font-body text-3xl font-medium uppercase ml-[5rem] mt-[1rem] cm:text-xs cm:font-black cm:ml-[2rem] cm:mt-[0rem]'>Medinah</h1>
          </div>
          <div>
            <Image
              src="/assests/Multan.jpg"
              alt="My Image"
              width={304}
              height={350}
              className="cm:w-[127px] cm:h-[153px] md:w-[200px] md:h-[220px]"
            />
            <h1 className='font-body text-3xl font-medium uppercase ml-[5rem] mt-[1rem] cm:text-xs cm:font-black cm:ml-[2rem] cm:mt-[0rem]'>Multan</h1>
          </div>
        </div>
        <div className='cm:flex cm:justify-around cm:mt-[1rem]'>


          <div>
            <Image
              src="/assests/Thailand.jpg"
              alt="My Image"
              width={304}
              height={350}
              className="cm:w-[127px] cm:h-[153px] md:w-[200px] md:h-[220px]"
            />
            <h1 className='font-body text-3xl font-medium uppercase ml-[5rem] mt-[1rem] cm:text-xs cm:font-black cm:ml-[2rem] cm:mt-[0rem]'>Thailand</h1>
          </div>
          <div>
            <Image
              src="/assests/Jeddah.jpg"
              alt="My Image"
              width={304}
              height={350}
              className="cm:w-[127px] cm:h-[153px] md:w-[200px] md:h-[220px] "
            />
            <h1 className='font-body text-3xl font-medium uppercase ml-[5rem] mt-[1rem] cm:text-xs cm:font-black cm:ml-[2rem] cm:mt-[0rem]'>Jeddah</h1>
          </div>
        </div>

      </div>
      <SpaDeals />
    </>
  )
}

export default Page