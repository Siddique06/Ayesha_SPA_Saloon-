import Image from 'next/image';


const Footer = () => {
  return (

    <>
      <footer className='w-screen h-[425px] border-[#93179654] border-t-4 mt-8'>
        <div className='flex justify-around mt-[115px] md:flex-col md:mt-3  '>
        <div>
            <h1 className="font-body text-5xl font-medium uppercase md:text-center md:text-2xl md:font-black md:mt-5">contact</h1>
            <div className='flex justify-center mt-3 cursor-pointer  '>
            <Image
                src="/assests/phone_light.png"
                alt="My Image"
                width={24}
                height={24}
                className="ml-2 md:w-[17px] md:h-[14px] "
              />


              <h2 className='text-xl font-body font-medium   ml-2 md:text-xs '>+966 56 616 6794</h2>
              
            </div>
            <div className='flex justify-center mt-3 cursor-pointer '>
              <Image
                src="/assests/phone_light.png"
                alt="My Image"
                width={24}
                height={24}
                className=" ml-2 md:w-[17px] md:h-[14px]"
              />


              <h2 className='text-xl font-body font-medium ml-2  md:text-xs '>+ 92 3011880880</h2>

            </div>
            
          </div>
          <div >
            <h1 className="font-body text-5xl font-medium uppercase md:text-center md:text-2xl md:font-black md:mt-5">ADDRESS</h1>
            <div className='flex justify-center mt-3 cursor-pointer '>
            <Image
                src="/assests/pin_alt.png"
                alt="My Image"
                width={24}
                height={24}
                className="ml-0 md:w-[17px] md:h-[14px]"
              />


              <h2 className='text-xl font-body font-medium   ml-2 md:text-xs '>Medinah Saudia Arabia</h2>
              
            </div>
            <div className='flex justify-center mt-3 cursor-pointer '>
              <Image
                src="/assests/pin_alt.png"
                alt="My Image"
                width={24}
                height={24}
                className=" ml-0 md:w-[17px] md:h-[14px]"
              />


              <h2 className='text-xl font-body font-medium ml-2  md:text-xs '>Bangkok Thailand</h2>

            </div>
            <div className='flex justify-center mt-3 cursor-pointer '>
            <Image
                src="/assests/pin_alt.png"
                alt="My Image"
                width={24}
                height={24}
                className="ml-0 md:w-[17px] md:h-[14px] "
              />


              <h2 className='text-xl font-body font-medium ml-2   md:text-xs '>Jeddah Saudia Arabia</h2>
              
            </div>
            <div className='flex justify-center mt-3 cursor-pointer '>
            <Image
                src="/assests/pin_alt.png"
                alt="My Image"
                width={24}
                height={24}
                className="ml-0 md:w-[17px] md:h-[14px] "
              />


              <h2 className='text-xl font-body font-medium ml-2   md:text-xs '>Multan Pakistan</h2>
              
            </div>
          </div>
          <div>
            <h1 className="font-body text-5xl font-medium uppercase md:text-center md:text-2xl md:font-black md:mt-5">social media</h1>
            <div className='flex  justify-center mt-3 cursor-pointer '>
            <Image
                src="/assests/instagram2.png"
                alt="My Image"
                width={24}
                height={24}
                className=" md:w-[17px] md:h-[14px]"
              />


              <h2 className='text-xl font-body font-medium   ml-2 md:text-xs '>ayesha_spa_saloon</h2>
              
            </div>
            <div className='flex justify-center mt-3 cursor-pointer '>
              <Image
                src="/assests/facebook-circle.png"
                alt="My Image"
                width={24}
                height={24}
                className="  md:w-[17px] md:h-[14px]"
              />


              <h2 className='text-xl font-body font-medium ml-2  md:text-xs '>ayesha_spa_saloon</h2>

            </div>
            <div className='flex justify-center mt-3 cursor-pointer '>
            <Image
                src="/assests/TikTok.png"
                alt="My Image"
                width={24}
                height={24}
                className=" md:w-[17px] md:h-[14px]"
              />


              <h2 className='text-xl font-body font-medium ml-2   md:text-xs '>ayesha_spa_saloon</h2>
              
            </div>
          </div>
        </div>
        <span>
          <h1 className='font-body text-center text-2xl font-medium mt-10 cm:text-xs md:font-black md:text-lg '>© 2023 SidByte. All rights reserved. </h1>
        </span>

      </footer>

    </>
  )
}

export default Footer