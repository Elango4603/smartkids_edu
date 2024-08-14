import React, { useEffect } from 'react'
import video from "../../assets/videos/welcome_video (1).mp4"

 function Careers () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobListings = [
    {
      title: "Course Development SME - English",
      location: "Hybrid",
      type: "Full-Time/Contract",
      description:
        "We are looking for a skilled frontend developer who is proficient in React and Tailwind CSS.",
    },
    {
      title: "Course Development SME - Math",
      location: "Hybrid",
      type: "Full-Time/Contract",
      description:
        "Join our team as a backend developer with expertise in Node.js and Express.",
    },
    {
      title: "Course Development SME - Coding",
      location: "Hybrid",
      type: "Full-Time/Contract",
      description:
        "We need a creative UX/UI designer to help us design amazing user experiences.",
    },
    {
      title: "Course Development SME - Social Development",
      location: "Hybrid",
      type: "Full-Time/Contract",
      description:
        "We need a creative UX/UI designer to help us design amazing user experiences.",
    },
    {
      title: "Business Development/Marketing Specialist",
      location: "Hybrid",
      type: "Full-Time/Contract",
      description:
        "We need a creative UX/UI designer to help us design amazing user experiences.",
    },
    {
      title: "Academic & Research Officer (ARO)",
      location: "Hybrid",
      type: "Full-Time/Contract",
      description:
        "We need a creative UX/UI designer to help us design amazing user experiences.",
    },
    
  ];
  
      
  return (
    <div className='w-full h-full relative overflow-hidden'>
   
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoPlay
      loop
      muted
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay Content */}
    <div className="w-full min-h-screen p-16 bg-black bg-opacity-70 z-10 relative">
              {/* Header Section */}
              <div className="bg-green-700 text-white text-center py-12">
                <h1 className="text-2xl font-bold">Join Our Team</h1>
                <p className="mt-4 text-lg">We're looking for talented individuals to join us.</p>
              </div>

              {/* Job Listings */}
              <div className="max-w-5xl mx-auto mt-8">
                {jobListings.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-300 transform transition-transform hover:scale-105"
                  >
                    <h2 className="text-lg font-bold text-gray-800">{job.title}</h2>
                    <p className="text-gray-600  text-sm mt-2">
                      <span className="font-medium" >Location: </span>
                      {job.location}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      <span className="font-medium">Employment Type: </span>
                      {job.type}
                    </p>
                    <p className="text-gray-600 text-sm mt-3">{job.description}</p>
                    <button className="mt-4 text-sm bg-green-700 text-white px-4 py-2 rounded hover:bg-green-500 transition duration-300">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="bg-gray-200 text-center py-12 mt-12">
                <h2 className="text-3xl font-bold text-gray-800">
                  Don’t see a role that fits? 
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  We’re always looking for talented people to join our team.
                </p>
                <button className="mt-4 bg-green-700 text-white px-6 py-3 rounded hover:bg-green-500 transition duration-300">
                  Send us your resume
                </button>
              </div>
            </div>

        </div>
  )
}

export default Careers

