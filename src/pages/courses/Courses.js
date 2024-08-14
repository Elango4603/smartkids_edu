import React, { useEffect } from 'react';
import boy from "../../assets/images/course-image-boy.jpeg"
import "../../App.css";
import course1 from "../../assets/images/course1.jpg"
import course2 from "../../assets/images/course2.jpg"
import course3 from "../../assets/images/course3.jpg"
import course4 from "../../assets/images/course4.jpg"
import course5 from "../../assets/images/course5.jpg"


export default function Courses() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const courseSection = [
    {title:"Math Mystery",image:course1,level1:"3.5 years - to 8 years",level2:"8years - 12years", duration:"2.5 years (8 Levels)", description:"Develop a strong foundation in mathematical concepts through engaging activities using Abacus and Vedic Math methods"},
    {title:"Math Mystery",image:course2,level1:"3.5 years - to 8 years",level2:"8years - 12years", duration:"2.5 years (8 Levels)", description:"Develop a strong foundation in mathematical concepts through engaging activities using Abacus and Vedic Math methods"},
    {title:"Math Mystery",image:course3,level1:"3.5 years - to 8 years",level2:"8years - 12years", duration:"2.5 years (8 Levels)", description:"Develop a strong foundation in mathematical concepts through engaging activities using Abacus and Vedic Math methods"},
    {title:"Math Mystery",image:course4,level1:"3.5 years - to 8 years",level2:"8years - 12years", duration:"2.5 years (8 Levels)", description:"Develop a strong foundation in mathematical concepts through engaging activities using Abacus and Vedic Math methods"},
    {title:"Math Mystery",image:course5,level1:"3.5 years - to 8 years",level2:"8years - 12years", duration:"2.5 years (8 Levels)", description:"Develop a strong foundation in mathematical concepts through engaging activities using Abacus and Vedic Math methods"},
  ]

  return (
    <>
    <div className='w-full h-full'>
            <div className=' relative flex items-center justify-center'>
          <img className="w-full" src={boy} alt="" />

          <span className='absolute text-center flex flex-col items-center gap-4 sm:gap-6 max-sm:right-20 max-sm:left-20'>
            <p className='best-seller p-2 text-lg md:text-xl lg:text-2xl  max-sm:text-xs font-bold'>Best Seller</p>
            <p className='text-4xl md:text-5xl lg:text-6xl max-sm:text-xl font-bold'>Young Readers Program</p> 
          </span>
        </div>



        <div className="flex flex-col justify-center text-center items-center mx-8 my-8 md:mx-32">
  <p className="text-xl sm:text-2xl md:text-3xl font-bold py-6">Our Courses Details</p>
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 py-4">
    {courseSection.map((item, index) => (
      <div
        key={index}
        className="rounded-xl p-6 hover:scale-105 cursor-pointer border bg-[#fff6c8] border-gray-400 transition-transform duration-300 transform hover:shadow-lg hover:bg-yellow-200 animated"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col md:mr-8 gap-4">
            <p className="text-3xl md:text-3xl xl:text-2xl font-bold transition-all duration-300 transform hover:text-green-700">
              {item.title}
            </p>
            <img
              className="h-40 md:h-28 xl:h-64 xl:w-96 rounded-lg mt-4 md:mt-0 transition-transform duration-300 hover:scale-110"
              src={item.image}
              alt={item.title}
            />
          </div>

          <div className="flex flex-col items-start max-sm:items-center sm:items-center sm:gap-1 sm:text-center sm:w-100 md:ml-8">
            <p className="font-medium text-lg">Junior Level:</p>
            <span className="bg-gray-600 p-1 rounded-lg text-sm text-white">{item.level1}</span>
            <p className="font-medium text-lg mt-4">Senior Level:</p>
            <span className="bg-gray-600 p-1 rounded-lg text-sm text-white">{item.level2}</span>
            <p className="font-medium text-lg mt-4">Duration:</p>
            <span className="bg-gray-600 p-1 rounded-lg text-sm text-white">{item.duration}</span>
            <p className="font-medium text-lg mt-4">Description:</p>
            <span className="p-1 text-wrap text-xs">{item.description}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>

   
    </>
  );
}





// import React from 'react';
// import children from "../assets/images/children.jpg"
// import Footer from '../layout/Footer';
// import "../App.css";
// import course1 from "../assets/images/course1.jpg"
// import course2 from "../assets/images/course2.jpg"
// import course3 from "../assets/images/course3.jpg"
// import course4 from "../assets/images/course4.jpg"
// import course5 from "../assets/images/course5.jpg"


// export default function Courses() {

//   const courseSection = [
//     {title:"Math Mystery",image:course1,level1:"3.5 years - to 8 years",level2:"8years - 12years", duration:"2.5 years (8 Levels)", description:"Develop a strong foundation in mathematical concepts through engaging activities using Abacus and Vedic Math methods"},
//     {title:"Math Mystery",image:course2,level1:"3.5 years - to 8 years",level2:"8years - 12years", duration:"2.5 years (8 Levels)", description:"Develop a strong foundation in mathematical concepts through engaging activities using Abacus and Vedic Math methods"},
//     {title:"Math Mystery",image:course3,level1:"3.5 years - to 8 years",level2:"8years - 12years", duration:"2.5 years (8 Levels)", description:"Develop a strong foundation in mathematical concepts through engaging activities using Abacus and Vedic Math methods"},
//     {title:"Math Mystery",image:course4,level1:"3.5 years - to 8 years",level2:"8years - 12years", duration:"2.5 years (8 Levels)", description:"Develop a strong foundation in mathematical concepts through engaging activities using Abacus and Vedic Math methods"},
//     {title:"Math Mystery",image:course5,level1:"3.5 years - to 8 years",level2:"8years - 12years", duration:"2.5 years (8 Levels)", description:"Develop a strong foundation in mathematical concepts through engaging activities using Abacus and Vedic Math methods"},
//   ]

//   return (
//     <>
//      <div className='w-full h-full'>
//       <div className='courses-banner'>
//         <div className='relative  w-full h-full flex items-center justify-center'>
//         <div className='w-[35%] flex gap-4 flex-col justify-center items-center min-w-[430px]'> 
//         <p className='best-seller'> Best Seller </p>
//          <p className='text-4xl md:text-2xl  xs:text-lg  sm:text-xl font-bold text-white'> Young Readers Program </p>
//       </div>

//       <div className='children-wrapper'>
//         <div className='children'> 
//           <img src={children} alt=""/>

//         </div>
//       </div>
      
//         </div>
//       </div>

//       <div className="flex flex-col justify-center items-center mx-8 my-8 md:mx-32">
//       <p className="text-xl sm:text-2xl md:text-3xl font-bold py-12">Our Courses Details</p>
//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 py-4">
//         {courseSection.map((item, index) => (
//           <div key={index} className="rounded-xl p-6 hover:scale-105 cursor-pointer border bg-[#fff6c8]  border-gray-400">
//             <div className="flex   flex-col md:flex-row items-center">
//               <div className="flex flex-col md:mr-8 gap-4">
//                 <p className="text-3xl md:text-3xl xl:text-2xl font-bold">{item.title}</p>
//                 <img className="h-40 md:h-28 xl:h-60 xl:object-cover mt-4 md:mt-0" src={item.image} alt={item.title} />
//               </div>

//               <div className="flex flex-col items-start max-sm:items-center sm:items-center sm:gap-1 sm:text-center sm:w-100 md:ml-8">

//                 <p className="font-medium text-lg">Junior Level:</p>
//                 <span className="bg-gray-600 p-1 rounded-lg text-sm text-white">{item.level1}</span>
//                 <p className="font-medium text-lg mt-4">Senior Level:</p>
//                 <span className="bg-gray-600 p-1 rounded-lg text-sm text-white">{item.level2}</span>
//                 <p className="font-medium text-lg mt-4">Duration:</p>
//                 <span className="bg-gray-600 p-1 rounded-lg text-sm text-white">{item.duration}</span>
//                 <p className="font-medium text-lg mt-4">Description:</p>
//                 <span className="p-1 text-wrap text-xs">{item.description}</span>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>

   
//     </>
//   );
// }

