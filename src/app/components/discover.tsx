import React from "react";

function Discover() {
  return (
    <section className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
    <div className="p-12 w-full">
      <div className="bg-slate-500 flex flex-col justify-center items-center gap-6 p-12">
        <h5 className="text-5xl text-center">
          Discover your dream career today
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, eaque
          ipsam nam maxime et iste.
        </p>
        <div className="flex gap-8">
          <button className="p-4 px-12 bg-slate-700 text-white">Sign up</button>
          <button className="p-4 px-12 border border-white text-white">
            Sign up
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Discover;
