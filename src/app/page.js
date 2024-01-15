'use client'
import Image from 'next/image';
import './globals.css'
import Link from 'next/link';
import SpaDeals from '@/Components/SpaDeals';
import Star from '@/Components/Star';

import { useEffect, useState } from 'react';
import { useRef } from 'react'
import { IoIosStarOutline } from "react-icons/io";





export default function Home() {

  const form = useRef();




  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);
  const [star_check, setStar_check] = useState(false);







  async function getData() { ///For Comments
    try {
      let data = await fetch('http://localhost:3000/api/project');
      data = await data.json();
      return data;
    } catch (error) {
      console.error("An error occurred", error);
      throw error; // Rethrow the error so it can be caught by the calling function
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setComments(data.result); // Assuming result is an array
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);








  const handleRatingStar = (value) => {

    setRating(value);
    setStar_check(true);


  };









  const data = async (e) => {
    e.preventDefault()
    // Your form submission logic goes here
    // if(Star){

    // }
    // else()
    try {
      let result = await fetch("http://localhost:3000/api/project", {
        method: "POST",
        body: JSON.stringify({ name, feedback, rating })
      });

      if (result.ok) {
        // The request was successful, you can handle the response data here
        const data = await result.json();
        console.log(data);
        setSubmitted(true);

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);

      } else {
        // Handle error cases
        console.error(`HTTP error! Status: ${result.status}`);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
    }






  }

  if (loading) return <div className='flex justify-center'>

    <Image
      src="/assests/loader.gif"
      alt="My Image"
      width={209}
      height={172}
      className="cm:w-24 cm:h-16 lg:w-44 lg:h-20 "
    />

  </div>;
  if (error) return <div>Error: {error.message}</div>;



  return (
    <>


      <div className="mt-5 flex justify-between cm:flex cm:flex-col  cm:mt-[5rem]  lg:flex lg:flex-col  ">
        <div className="w-48% max-h-787 bg-BackgroundContainer border-t-4 border-r-4 border-customColor cm:w-screen cm:h-80 cm:border-2 shadow-lg lg:w-screen lg:h-96 lg:border-2  ">

          <h1 className="text-HeadingColor font-body text-6xl text-center mt-20 font-bold cm:text-2xl cm:mt-5  lg:text-4xl lg:mt-6 ">SPA<br /> SALOON SERVICES</h1>
          <div >
            <span className='relative top-11 left-16 cm:absolute cm:left-6 cm:top-72 ml:left-20 lg:absolute lg:top-72 lg:left-36 '>
              <Image
                src="/assests/Shampo.jpg"
                alt="My Image"
                width={209}
                height={172}
                className="cm:w-24 cm:h-16 lg:w-44 lg:h-20 "
              />
            </span>
            <span className='relative left-150 cm:absolute cm:left-16 cm:top-20.75rem ml:left-7.6rem lg:absolute lg:top-21rem lg:left-14.9rem'>
              <Image
                src="/assests/Massage2.jpg"
                alt="My Image"
                width={314}
                height={197}
                className="cm:w-32 cm:h-16 lg:w-48 lg:h-24"
              />
            </span>
            <span className='relative left-96 bottom-20 cm:absolute cm:left-44 cm:top-23rem ml:left-56 lg:absolute lg:top-96 lg:left-25rem'>
              <Image
                src="/assests/Massage3.jpg"
                alt="My Image"
                width={167}
                height={260}
                className="cm:w-16 cm:h-24 lg:w-28 lg:h-36"
              />
            </span>
            <span className='relative bottom-484 left-476 cm:absolute cm:top-17.3rem cm:left-12.9rem ml:left-16rem lg:absolute lg:top-16.7rem lg:left-29.3rem'>
              <Image
                src="/assests/Massage5.jpg"
                alt="My Image"
                width={184}
                height={279}
                className="cm:w-73px cm:h-28 lg:w-24 lg:h-36"
              />
            </span>
          </div>

        </div>
        <div className="  w-45 max-h-787  bg-BackgroundContainer border-t-4 border-l-4 border-customColor relative cm:w-screen cm:h-80 cm:border-2 cm:mt-3 lg:w-screen lg:h-96 lg:border-2 lg:mt-3  ">
          <h1 className='text-HeadingColor font-body text-6xl text-center mt-12 cm:text-2xl cm:mt-4 lg:text-4xl lg:mt-6'>F A T I M A</h1>
          <h1 className='text-HeadingColor font-body text-6xl text-center  font-bold mb-7 cm:text-2xl lg:text-4xl'>MAID CLEANING<br className='cm:hidden lg:hidden' /> SERVICES</h1>
          <span className='absolute left-16 cm:left-3 cm:top-28 ml:left-16 lg:left-40 lg:top-28'>
            <Image
              src="/assests/Maid.jpg"
              alt="My Image"
              width={281}
              height={176}
              className="cm:w-32 cm:h-73px lg:w-44 lg:h-32"
            />
          </span>
          <span className='absolute left-16rem bottom-13.25rem cm:left-24 cm:top-36 ml:left-40 lg:left-72 lg:top-40 '>
            <Image
              src="/assests/Maid2.jpg"
              alt="My Image"
              width={159}
              height={235}
              className="cm:w-73px cm:h-104px lg:w-32 lg:h-36"
            />
          </span>
          <span className='absolute left-32 bottom-12  cm:left-12 cm:top-[13.25rem] ml:left-28 lg:top-16.7rem lg:left-60 '>
            <Image
              src="/assests/Maid3.jpg"
              alt="My Image"
              width={159}
              height={196}
              className="cm:w-73px cm:h-24 lg:w-20 lg:h-28"
            />
          </span>
          <span className='absolute bottom-32 left-96  cm:left-36 cm:bottom-8 ml:left-13.25rem lg:left-96 lg:bottom-12 '>
            <Image
              src="/assests/Maid4.jpg"
              alt="My Image"
              width={260}
              height={158}
              className="cm:w-28 cm:h-73px lg:w-44 lg:h-24"
            />
          </span>

        </div>
      </div>
      <div className='flex justify-evenly '>

        <hr className="w-[38%] mt-[72px]  border-t-2 border-[#931796D4]  cm:hidden" />
        <div className='flex items-center justify-center w-[411px] h-[73px] border-[#931796D4]  cursor-pointer rounded-xl border-8 mt-[2%] cm:mt-[24px] cm:w-[177px] cm:h-[45px] '>
          <span className='text-center font-body text-4xl text-HeadingColor font-bold cm:text-sm '>Book Appointment</span>
        </div>
        <hr class="w-[35%] mt-[72px]  border-t-2 border-[#931796D4] cm:hidden" />

      </div >

      <SpaDeals />
      {/*  COMMENT SECTION */}

      <div>
        <h1 className='font-body font-medium text-[#931796D4] text-center uppercase text-6xl mt-10b cm:text-3xl cm:font-black'>REVIEWS</h1>
        <div className='flex justify-between mt-10 lg:flex-col  cm:ml-0 md:ml-[100px] lg:ml-[300px]  '>
          {comments.map((item) => (
            <div key={item.id} className='w-[425px] h-[437px] rounded-[32px] border-[#931796D4] border-[5px] ml-5 cm:w-screen cm:ml-0 md:mt-3  '>
              <h2 className='font-body text-[32px] font-medium uppercase text-center mt-8 cm:text-3xl cm:font-black'>{item.name}</h2>
              <p className='capitalize font-Navbody text-[17px] w-[400px] mt-4 ml-4 cm:w-[90%] cm:ml-[2px] cm:text-lg'>
                {item.feedback}
              </p>
              <div className='pt-5 ml-4 cm:pt-0'>
                <Star rating={item.rating} />

              </div>

            </div>
          ))}
        </div>
      </div>
      {/* ADD COMMENT SECTION */}

      <div className='w-[1000px] h-[366px] bg-[#FFFFFF] m-auto mt-10 md:w-screen ' >
        <h1 className='font-body font-medium text-[#931796D4] text-center uppercase text-6xl mt-10b cm:text-3xl cm:font-black'>Feedback</h1>

        <div className='ml-10 cm:ml-0 md:ml-[8rem]' >
          <form ref={form} onSubmit={data}>


            <div className='pt-7 pl-24 cm:pl-0 md:pl-0'>

              <input

                type="text"
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={17}
                required
                placeholder='Write Name..........'
                className='w-[689px] h-[41px]  bg-[#D9D9D9] rounded-[6px] border-0 ring-2 ring-[#931796D4]   focus:outline-none focus:caret-[#931796D4] cm:w-screen  md:w-[500px]'
              />
              <br />
            </div>
            <div className='pt-3 pl-24 md:pl-0 '>




              <textarea
                type="text"
                id='feedback'
                name='feedback'
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}

                maxLength={251}
                required
                placeholder='Write Feedback........'
                className='w-[689px] h-[101px] resize-none  bg-[#D9D9D9] rounded-[6px] border-0   ring-2 ring-[#931796D4]   focus:outline-none focus:caret-[#931796D4] cm:w-screen  md:w-[500px]'


              />

              <br />
            </div>
            {/* rating */}

            <div className='flex pt-1 pl-24 md:pl-0'>

              <div className="rating" >

                {
                  star_check ? (
                    <Star rating={rating} star={star_check} onClick={() => setStar_check(!star_check)} />
                  ) : (
                    [1, 2, 3, 4, 5].map((value) => (
                      <span key={value} onClick={() => handleRatingStar(value)} className='rating2'>
                        <input type="radio" name="rating" value={value} />
                        <label htmlFor={`star${value}`}>
                          <IoIosStarOutline className='cursor-pointer bg-rose-500' />
                        </label>
                      </span>
                    ))
                  )
                }







                {/* <p>Selected Rating: {rating}</p> */}
              </div>
            </div>




            <div className='w-[301px] h-[61px] rounded-xl border-[1px] border-[#931796D4] border-solid bg-[#FFF] ml-[280px] mt-1 text-center pt-3 cursor-pointer  cm:ml-[130px] cm:mt-[2.25rem] cm:w-[150px] cm:h-[34px] cm:pt-[6px] cm:rounded-xl md:ml-[130px]  hover:bg-[#93179630] '>
              {submitted ? (
                <button className='text-[#0B6623] font-body text-3xl font-black uppercase cm:text-base cm:font-black'>
                  POSTED
                </button>
              ) : (
                <button type='submit' className='text-HeadingColor font-body text-3xl font-medium uppercase cm:text-base cm:font-black'>
                  SUBMIT
                </button>
              )}

            </div>
          </form>


        </div>




      </div>
      {/* {submitted && (
                    <div className="w-[500px] h-[100px] rounded-[1px] border-[#931796D4] border-[1px] bg-[#A5A5A5]  ml-[30rem]">
                        <h3 className='font-Navheading  text-center uppercase text-xl font-medium text-[#931796D4]  '> Thanks for your Feedback!</h3>
                        
                    </div>
                )} */}

    </>
  )
}


