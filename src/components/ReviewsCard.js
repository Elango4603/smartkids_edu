
import React, { useRef } from 'react';
import image1 from "../assets/images/improvement.png";
import image2 from "../assets/images/growth.png";
import image3 from "../assets/images/goal.png";
import StarButton from './StarButton';
import google from "../assets/images/google_logo.png";

const ReviewsCard = () => {
  const ReviewsContents = [
    { image: image2, name: "Supported Devices", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image3, name: "System Requirements", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image1, name: "Features", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image2, name: "Supported Devices", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image3, name: "System Requirements", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image1, name: "Features", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image2, name: "Supported Devices", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image3, name: "System Requirements", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image1, name: "Features", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image2, name: "Supported Devices", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image3, name: "System Requirements", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },
    { image: image1, name: "Features", reviews: "I hope this school was very useful to us and our children. I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children, I hope this school was very useful to us and our children" },

  ];

  const scrollRef = useRef(null);

  const scrollLeft = (multiplier = 1) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth * multiplier,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = (multiplier = 1) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth * multiplier,
        behavior: 'smooth',
      });
    }
  };

  const handleSingleClickLeft = () => scrollLeft(1);
  const handleDoubleClickLeft = () => scrollLeft(2);

  const handleSingleClickRight = () => scrollRight(1);
  const handleDoubleClickRight = () => scrollRight(2);

  return (
    <div className="relative mx-12 max-sm:mx-4 py-8">
      <button 
        onClick={handleSingleClickLeft} 
        onDoubleClick={handleDoubleClickLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-200 rounded-full p-2">
        &lt;
      </button>
      <div ref={scrollRef} className="flex mx-12 overflow-x-hidden">
        {ReviewsContents.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/2  xl:w-1/3 max-sm:w-[100%] px-4 py-6">
            <div className="rounded-xl p-6 hover:shadow-xl cursor-pointer bg-slate-200">
              <div className="flex gap-4">
                <img className="h-12 max-sm:h-6" src={item.image} alt={item.name} />
                <div className='reviews'>
                  <p className="font-semibold max-sm:text-xs text-medium">{item.name}</p>
                  <StarButton />
                </div>
              </div>
              <p className="p-2 font-light text-sm max-sm:text-xs">{item.reviews}</p>
              <span className='flex flex-col items-start pl-1'>
                <p className="font-normal text-xs"> Posted on </p>
                <img className='h-4' src={google} alt="" />
              </span>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={handleSingleClickRight} 
        onDoubleClick={handleDoubleClickRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-200 rounded-full p-2">
        &gt;
      </button>
    </div>
  );
};

export default ReviewsCard;


// import React from 'react'
// import image1 from "../assets/images/improvement.png";
// import image2 from "../assets/images/growth.png";
// import image3 from "../assets/images/goal.png"
// import StarButton from './StarButton';


// const ReviewsCard = () => {
//       const ReviewsContents = [
//     { image: image1, name: "Features",reviews:"I hope this school was very useful to us and our children.I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children" },
//     { image:  image2, name: "Supported Devices",reviews:"I hope this school was very useful to us and our childr,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children.I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children" },
//     { image: image3, name: "System Requirements",reviews:"I hope this school was very useful to us and our children.I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children" }, 
//     { image: image1, name: "Features",reviews:"I hope this school was very useful to us and our children.I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children" },
//     { image:  image2, name: "Supported Devices",reviews:"I hope this school was very useful to us and our childr,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children.I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children" },
//     { image: image1, name: "Features",reviews:"I hope this school was very useful to us and our children.I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children" },
//     { image:  image2, name: "Supported Devices",reviews:"I hope this school was very useful to us and our childr,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children.I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children" },
//     { image: image3, name: "System Requirements",reviews:"I hope this school was very useful to us and our children.I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children" }, 
//     { image: image3, name: "System Requirements",reviews:"I hope this school was very useful to us and our children.I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children,I hope this school was very useful to us and our children" }, 
  
//   ];
//   return (
           
//      <div>       
//           <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 py-20 mx-24  gap-12">
//               {ReviewsContents.map((item, index) => (
//                <div key={index} className="flex ">
//                  <div className=" rounded-xl p-6 hover:shadow-2xl cursor-pointer bg-slate-200 ">
//                    <span className='flex gap-4'>
//                     <img className='h-12 ' src={item.image} />
//                         <span>
//                         <p className=" font-semibold text-medium"> {item.name} </p>
//                          <StarButton/>
//                         </span>
//                     </span>
//                     <p className=" p-4 font-normal text-sm ">{item.reviews} </p>
//                   </div>
                 
//                </div>
//              ))}
//             </div>
//     </div>
    
//   )
// }

// export default ReviewsCard