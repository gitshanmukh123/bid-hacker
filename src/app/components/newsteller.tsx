import React from "react";

function Newsteller() {
  return (
    <div className="py-16 px-12 flex justify-between items-center overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="space-y-3 flex-1">
        <p className="text-4xl font-extrabold">
          Stay updated with our newsteller
        </p>
        <p>Get the latest updates and opportunities</p>
      </div>
      <div className="ml-auto ">
        <div className="flex gap-4">
          <button className="p-4 px-16 border border-black text-black">
            Sign up
          </button>
          <button className="p-4 px-16 bg-slate-700 text-white">Sign up</button>
        </div>
        <p className="text-sm">
          By subscribing, you agree to our Terms and Conditions.
        </p>
      </div>
    </div>
  );
}

export default Newsteller;
