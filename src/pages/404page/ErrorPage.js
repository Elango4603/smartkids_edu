import React, { useEffect } from 'react'
import errorimage from "../../assets/images/errorimage.jpg"


function ErrorPage  () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <div className='w-full h-full'>
          <div className='flex flex-col justify-center items-center'>
            <img className="md:h-80 lg:h-[260px] xl:h-[400px]"   src={errorimage} alt="error" />
          </div>
        

      </div> 
  )
}
export default ErrorPage;

