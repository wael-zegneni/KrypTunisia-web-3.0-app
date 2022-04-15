// import React from 'react'
// import { BsShieldFillCheck } from 'react-icons/bs'
// import { BiSearchAlt } from 'react-icons/bi'
// import { RiHeart2Fill } from 'react-icons/ri'

// const ServiceCard = ({color, title, icon, subtitle}) => (
//   <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
//     <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
//       {icon}
//     </div>
//     <div className='ml-5 flex flex-col flex-1'>
//       <h1 className="mt-4 text-white text-lg">{title}</h1>
//       <p className="mt-4 text-white text-sm md:w-9/12">{subtitle} className="mt-4</p>
//     </div>
//   </div>
// )

// const Services = () => {
//   return (
//     <div className='flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services'>
//       <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-44'>
//         <div className='flex-1 flex flex-col justify-start items-start'>
//           <h1 className='text-white text-3xl sm:text-6xl py-2 text-gradient'>Services that we 
//             <br />
//             continue to improve
//           </h1>
//         </div>
//       </div>
//       <div className='flex-1 flex flex-col justify-start items-center'>
//         <ServiceCard 
//           color="bg-[#2952E3]"
//           title="Security guaranteed"
//           icon={<BsShieldFillCheck fontSize={21} className="text-white"/>}
//           subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our product"
//         />

//         <ServiceCard 
//           color="bg-[#8945F8]"
//           title="Best exchange rates"
//           icon={<BiSearchAlt fontSize={21} className="text-white"/>}
//           subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our product"
//         />

//         <ServiceCard 
//           color="bg-[#F84550]"
//           title="Fastest transactions"
//           icon={<RiHeart2Fill fontSize={21} className="text-white"/>}
//           subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our product"
//         />
//       </div>
//     </div>
//   )
// }

// export default Services

import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

 const ServiceCard = ({color, title, icon, subtitle}) => (
   <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl'>
     <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
       {icon}
     </div>
     <div className='ml-5 flex flex-col flex-1'>
       <h1 className="mt-2 text-white text-lg">{title}</h1>
       <p className="mt-2 mb-1 text-white text-sm md:w-9/12">{subtitle}</p>
     </div>
   </div>
 )

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security guarantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
);

export default Services;