
import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <div className=" w-full h-16 px-16 flex justify-center items-center gap-4 bg-slate-300">
    <Link href={"/"}><p className="text-3xl font-serif gap-5">Logo</p></Link>

    <Link href={"/LearningPathway"}><p className='text-md font-medium'>Learning Pathways</p></Link>
    <Link href={"/Community"}><p className='text-md font-medium'>Community Support</p></Link>
   <Link href={"/trainings"}> <p className='text-md font-medium'>Personailsed Trainings</p></Link>
   <Link href={"/resume"}> <p className='text-md font-medium'>AI-Resume Builder</p></Link>
    <Link href={"/trending"}><p className='text-md font-medium'>Trendings</p> </Link>
   <div className="ml-auto space-x-4">
      <button className="p-2 px-4 border-2 border-black text-black">
        Login
      </button>
      <button className="p-2 px-4 bg-black text-white">
        Sign Up
      </button>
    </div>
  </div>
  );
}

export default Navbar