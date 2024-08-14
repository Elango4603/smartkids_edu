import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import header from "../../assets/images/header.png";
import '../../App.css';
import image1 from "../../assets/images/improvement.png";
import image2 from "../../assets/images/growth.png";
import image3 from "../../assets/images/goal.png";
import google from "../../assets/images/google_logo.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import questionmark from "../../assets/images/questions.png";
import boy from "../../assets/images/young-boy.png";
import StarButton from '../../components/StarButton';
import video from "../../assets/videos/welcome_video (1).mp4";
import ReviewsCard from '../../components/ReviewsCard';

export default function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardSection = [
    { image: image1, title: "Better Grades", description: "We offer a range of engaging after-school and virtual school programs designed to develop critical thinking" },
    { image: image2, title: "More Confidence", description: "We offer a range of engaging after-school and virtual school programs designed to develop critical thinking." },
    { image: image3, title: "Better Career", description: "We offer a range of engaging after-school and virtual school programs designed to develop critical thinking" },
  ];

  const cardimages = [
    {
      title: "Better Grades",
      subtitle: "7 - 8 years",
      image: image1,
    },

    {
      title: "More Confidence",
      subtitle: "10 - 12 years",
      image: image2
    },
    {
      title: "Better Career",
      subtitle: "15 - 18 years",
      image: image3,
    },
  ];

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });


  return (
    <div className='w-full h-full relative overflow-hidden'>
      <div className='relative w-full min-h-screen'>
          <video  className="absolute top-0 left-0  w-full h-full object-cover z-0"
              autoPlay
              loop
              muted >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10'></div>
              <div className='flex w-full min-h-screen z-20 relative flex-col items-center text-center p-2 justify-center'>
          <span className='flex absolute flex-col text-white items-center gap-4'>
            <p className='font-bold text-7xl'> Speak Confidently Write Brilliantly</p>
            <p className='font-medium xl:w-[700px] max-md:w-96 max-sm:w-72 text-lg md:p-5 text-gray-200'> Just 2 hours a week with smartkids will build essential communication skills in your child</p>
            <button className='bg-green-700 p-3 rounded-lg text-medium hover:bg-green-500 '>
            Get Started a Demo
            <ArrowForwardIosIcon sx={{fontSize:"small"}}/>
          </button>
          </span>
         
        </div>
      </div>

      {/* Center Content */}
      <div ref={ref1} className={`flex transition-all duration-700 ease-in-out ${inView1 ? 'animated' : 'animating'}`}>
        <div className='flex relative flex-col xl:items-end xl:mr-24 items-center justify-center p-4 w-full'>
          <div className='ml-96 max-sm:p-4 max-sm:ml-12 sm:ml-40'>
            <p className='text-center text-5xl max-sm:text-xl sm:text-xl xl:text-5xl lg:text-3xl text-green-700 font-extrabold tracking-wide mt-16'>
              #India 1st children potential find center
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-3 xl:py-20 md:grid-cols-1 lg:grid-cols-3 gap-20 py-8">
              {cardSection.map((item, index) => (
                <div className='flex flex-col xl:gap-2 items-center text-center justify-center ' key={index}>
                  <img className="h-24 max-sm:h-18 xl:h-28 lg:h-16 " src={item.image} alt="" />
                  <p className='text-2xl xl:text-2xl max-sm:text-lg lg:text-xl p-1 font-medium'>{item.title}</p>
                  <p className='pt-1 text-center lg:text-xs lg:w-40 xl:text-sm xl:w-88 max-sm:text-xs md:w-80 max-sm:w-52 xl:w-48 sm:w-60 sm:text-xs text-sm text-gray-600'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <img className="w-[40%] xl:w-[30%] lg:w-[35%] absolute top-0 left-0" src={questionmark} alt="" />
        </div>
      </div>
      {/* Center Content */}

      {/* Boy Image Content */}
      <div ref={ref2} className={`flex flex-col md:flex-row py-12 transition-all duration-700 ease-in-out ${inView2 ? 'animated' : 'animating'}`}>
        <div className='w-full md:w-[33%] flex items-center p-4'>
          <img className="w-full" src={boy} alt="" />
        </div>

        <div ref={ref5} className={`right-image transition-all duration-700 ease-in-out ${inView5 ? 'animated' : 'animating'}`}>
          <p className='text-5xl md:text-4xl max-sm:text-xl sm:text-2xl text-green-700 font-extrabold p-10'> Why Smartkids </p>
          {cardSection.map((item, index) => (
            <div className='flex flex-col' key={index}>
              <ol className="relative border-dashed border-s-2 border-gray-200 dark:border-gray-400">
                <li className="mb-10 ms-10">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-green-200 rounded-full -start-5">
                    <img src={item.image} alt="" />
                  </span>
                  <h3 className="font-medium leading-tight text-xl md:text-lg max-sm:text-sm sm:text-sm">{item.title}</h3>
                  <p className="text-lg md:text-sm max-sm:text-xs sm:text-xs font-normal"> {item.description}</p>
                </li>
              </ol>
            </div>
          ))}
          <button className='btn-book mt-8 text-xl'> Book a free demo! </button>
        </div>
      </div>
      {/* Boy Image Content */}

      {/* Card Image Content */}
      <div ref={ref3} className={`flex justify-center items-center my-24 transition-all duration-700 ease-in-out ${inView3 ? 'animated' : 'animating'}`}>
        <div className='flex flex-col text-center space-y-6 mx-24'>
          <p className='lg:text-6xl xl:text-5xl md:text-4xl sm:text-3xl max-sm:text-3xl tracking-wide text-green-700 font-extrabold'> Programs designed to build
            confident communicators </p>
          <p className='xl:text-3xl md:text-2xl sm:text-xl max-sm:text-xl font-bold p-4'> Our Courses </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-2 gap-12">
            {cardimages.map((item, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="rounded-xl p-6 flex-grow hover:shadow-2xl cursor-pointer border bg-gray-100 border-gray-400">
                  <div className='flex items-center justify-between space-y-4'>
                    <img className='h-20 max-sm:h-14' src={item.image} alt={item.title} />
                    <span className='space-y-3'>
                      <p className="items-end font-semibold max-sm:text-lg text-xl"> {item.title} </p>
                      <p className="font-medium text-sm max-sm:text-xs border border-solid border-[#e5e4e4] p-1 rounded-lg">{item.subtitle} </p>
                      <button className='btn-book'> Book Now! </button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Card Image Content */}

      {/* Google Content */}
      <div ref={ref4} className={`transition-all duration-700 ease-in-out ${inView4 ? 'animated' : 'animating'}`}>
        <div className='flex flex-col items-center p-4 gap-3'>
          <p className='text-xl text-green-700 font-semibold'> Happy Parents </p>
          <p className='lg:text-4xl xl:text-4xl md:text-3xl sm:text-2xl tracking-wide text-green-700 font-extrabold mb-4'> What Parents are saying About Us </p>
          <StarButton />
          <a href='#' target='__blank'>
            <img className="h-10" src={google} alt='' />
          </a>
          <span className='gap-2 flex items-center'>
            <p className='text-green-700 font-medium'> MysmartKids.net</p>
            <a className="text-blue-700" href='#' alt="Reviews" target='__blank'> Reviews</a>
          </span>
        </div>
      </div>
      {/* Google Content */}

      {/* ReviewsCard Content */}
      <div>
        <ReviewsCard />
      </div>
      {/* ReviewsCard Content */}
    </div>
  );
}
