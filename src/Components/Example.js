'use client'

import { Fragment, useState ,useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [activeSpa, setActiveSpa] = useState(false);
  const [activeMaid, setActiveMaid] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);

  

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="font-Navbody text-txColor font-black cm:font-medium flex ml-5 mt-16 cursor-pointer xl:text-lg md:text-sm md:relative md:right-4 ms:relative ms:top-14 ms: mm:relative mm:top-20 ml:relative ml:top-20">
          all services
          <span className='md:w-3 md:mt-2 xl:w-6 '><Image src="/assests/downArrow.png" alt="Whatsapp of Ayesha SPA & Saloon" width={21} height={15} className='' /></span>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-Navbody font-medium text-txColor ">
          <div className="py-1">
            <Menu.Item>
             
                <Link
                  href="/services"
                  
                  onClick={() => {
                    setActiveMaid(false);
                    setActiveSpa(true);
                    setActiveAbout(false);
                  }}
                  className={
                    activeSpa
                      ? 'bg-black-100 text-spa block px-4 py-2 text-sm'
                      : ' block px-4 py-2 text-sm'
                  }

                    
                   
                >
                  <span
                    
                  >
                    Spa Saloon Services
                  </span>
                </Link>
              
            </Menu.Item>
            <Menu.Item>
              
                <Link
                  href="/maidservices"
                  
                  onClick={() => {
                    setActiveMaid(true);
                    setActiveSpa(false);
                    setActiveAbout(false);
                  }}
                  className={
                    activeMaid
                      ? 'bg-black-100 text-spa block px-4 py-2 text-sm'
                      : ' block px-4 py-2 text-sm'
                  }
                  
                >
                  
                    Maid Cleaning Services
                  
                </Link>
              
            </Menu.Item>
            <Menu.Item>
              
                <Link
                  href="/aboutus"
                  onClick={() => {
                    setActiveMaid(false);
                    setActiveSpa(false);
                    setActiveAbout(true);
                  }}
                  className={
                    activeAbout
                      ? 'bg-black-100 text-spa block px-4 py-2 text-sm'
                      : ' block px-4 py-2 text-sm'
                  }

                >
                  
                    About US
                  
                </Link>
              
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}





// 'use client'

// import { Fragment } from 'react'
// import { Menu, Transition } from '@headlessui/react'
// import Image from 'next/image';
// import Link from 'next/link';




// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <Menu.Button className="font-Navbody text-txColor flex ml-5 mt-16  cursor-pointer
//       xl:text-lg  md:text-sm md:relative md:right-4 ms:relaive ms:top-14 mm:relative mm:top-20 ml:relative ml:top-20">
//           all services
//           <span className='md:w-3 md:mt-2 xl:w-6 ms:w-1'><Image src="/assests/downArrow.png" alt="Whatsapp of Ayesha SPA & Saloon" width={21} height={15} /></span>

//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-Navbody font-medium text-txColor ">
//           <div className="py-1">
//             <Menu.Item>
//               {({ active }) => (



//                 <Link href="/services " className={classNames(
//                   active ? 'bg-black-100 text-gray-900 text-5xl' : 'text-gray-700',
//                   'block px-4 py-2 text-sm'
//                 )}>
//                   Spa Saloon Services
//                 </Link>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <Link href="/maidservices " className={classNames(
//                   active ? 'bg-black-100 text-gray-900 text-5xl' : 'text-gray-700',
//                   'text-[#000000] text-sm'
//                 )}>
//                   Maid Cleaning Services
//                 </Link>
//               )}
//             </Menu.Item>
//             <Menu.Item>
//               {({ active }) => (
//                 <Link href="/aboutus" className={classNames(
//                   active ? 'bg-black-100 text-gray-900 text-5xl' : 'text-gray-700',
//                   'block px-4 py-2 text-sm'
//                 )}>
//                   About US
//                 </Link>
//               )}
//             </Menu.Item>

//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   )
// }
