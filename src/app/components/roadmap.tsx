import React from 'react'

function Roadmap() {
  return (
    <div className="w-full flex justify-around p-12 items-start overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]" >
      <div className="space-y-2 flex-1">
        <p>Innovate</p>
        <p className="text-5xl">
          By subscribing, you agree to our Terms and Conditions.
        </p>
        <div className="flex gap-2">
          <button className="p-4 border-2 border-black">Learn More</button>
          <button>Sign up &gt;</button>
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <div className="w-full flex gap-8 items-start justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="size-16 rounded-full bg-slate-500"></div>
            <div className="h-full min-h-20 w-1 bg-slate-700"></div>
          </div>
          <div className="space-y-3">
            <p className="text-xl">Our Journey</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iusto recusandae laudantium saepe
            </p>
          </div>
        </div>
        <div className="w-full flex gap-8 items-start justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="size-16 rounded-full bg-slate-500"></div>
            <div className="h-full min-h-20 w-1 bg-slate-700"></div>
          </div>
          <div className="space-y-3">
            <p className="text-xl">Our Impact</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iusto recusandae laudantium saepe
            </p>
          </div>
        </div>
        <div className="w-full flex gap-8 items-start justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="size-16 rounded-full bg-slate-500"></div>
            <div className="h-full min-h-20 w-1 bg-slate-700"></div>
          </div>
          <div className="space-y-3">
            <p className="text-xl">Our Team</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iusto recusandae laudantium saepe
            </p>
          </div>
        </div>
        <div className="w-full flex gap-8 items-start justify-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="size-16 rounded-full bg-slate-500"></div>
            <div className="h-full min-h-20 w-1 bg-slate-700"></div>
          </div>
          <div className="space-y-3">
            <p className="text-xl">Our Vision</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iusto recusandae laudantium saepe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap
