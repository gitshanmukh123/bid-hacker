import React from "react";

function Encourage() {
  return (
    <div className="p-12 w-full overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="flex w-full justify-around items-start flex-1 gap-16 pb-16">
        <h3 className="font-extrabold">
          {" "}
          <p className="text-md pb-2">Discover</p>{" "}
          <p className="text-5xl">Find your dream job with AI</p>
        </h3>
        <p className="flex-1">
          Our AI-driven job matching and skill development process is designed
          to empower your career. We use advanced algorithms to analyze your
          skills and match you with the perfect job opportunities. Additionally,
          our platform recommends courses tailored to your needs, provides
          community support, and organizes virtual events like webinars to help
          you enhance your skills. With our resume builder, you can create a
          professional resume that stands out from the competition.
        </p>
      </div>
      <div className="flex w-full justify-between items-center gap-12">
        <div className="w-full max-w-lg space-y-6 p-8 bg-slate-200 rounded-xl">
          <h2 className="text-4xl">Find Your perfect job</h2>
          <p>Take a skill test to unlock job opportunities.</p>
        </div>
        <div className="w-full max-w-lg space-y-6 p-8 bg-slate-200 rounded-xl">
          <h2 className="text-4xl">Enhance Your Skills</h2>
          <p>Discover recommended courses through AI technology.</p>
        </div>
        <div className="w-full max-w-lg space-y-6 p-8 bg-slate-200 rounded-xl">
          <h2 className="text-4xl">Join Our Community</h2>
          <p>Get support and connect with like-minded professionals.</p>
        </div>
      </div>
    </div>
  );
}

export default Encourage;
