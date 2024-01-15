import React from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';


export default function Star({ rating,star }) {
    console.log(star)
  const Rating_Star = Array.from({ length: 5 }, (elem, index) => {
    return (
      <span key={index} className='rating'  >
        {rating >= index + 1 ? (
          <IoIosStar color="#A53EA8"  />
        ) : (
          <IoIosStarOutline color="#A53EA8" />
        )}
      </span>
    );
  });

  return <div>{Rating_Star}</div>;
}
