import React from "react";

function Ratings() {
  return (
    <div className=" flex w-full justify-center items-center flex-col p-12 overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="mx-auto space-x-4 text-black text-2xl pb-12">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <p className="text-3xl font-extrabold text-center max-w-3xl mb-12">
        I am extremely impressed with the job matching capabilities of this
        platform. It has helped me find the perfect job that aligns with my
        skills and interests.
      </p>
      <div className="flex gap-4 mx-auto">
        <div className="size-16 bg-slate-400 rounded-full"></div>
        <div className="space-y-2 border-r-2 pr-3 border-black">
          <p className="text-xl">John Doe</p>
          <p className="">Software Engineer, ABC Inc.</p>
        </div>
        <div className="h-full w-2"></div>
        <p className="text-2xl my-auto">qwertyjuj</p>
      </div>
    </div>
  );
}

export default Ratings;
