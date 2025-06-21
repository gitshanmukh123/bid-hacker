import React from "react";

export const Intro = () => {
  return (
    <section className="p-36 px-24 w-full flex justify-between items-center gap-16 overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="flex  h-96 mt-8">
        <div className="w-1/2 p-8">
          <div className="mb-6 text-3xl text-white-800">
            Find Your Perfect Job Match with AI-Powered Technology
          </div>
          <div className="mb-8 text-white-600">
            Our AI-driven job matching service uses advanced technology to
            connect you with the best job opportunities that match your skills
            and experience. Say goodbye to endless job searches and let our
            intelligent algorithms do the work for you.
          </div>
          <div className="flex h-screen gap-4">
            <div className="mb-8z">
              <div className="text-xl font-semibold text-white-800">
                Discover Opportunities
              </div>
              <p className="text-white-600">
                Take our skill test to unlock a world of job opportunities
                tailored for you.
              </p>
            </div>
            <div>
              <div className="text-xl font-semibold text-white-800">
                Learn and Grow
              </div>
              <p className="text-white-600">
                Access recommended courses through AI to enhance your skills and
                career prospects.
              </p>
            </div>
          </div>
        </div>
<div
  className="w-1/2 h-96 bg-cover bg-center"
  style={{ backgroundImage: "url('https://img.freepik.com/free-vector/business-background-design_1200-14.jpg?w=1480&t=st=1725130702~exp=1725131302~hmac=a5d7349285de631138e961a6a2b67ec08321d100ecb3c0e82b410f966f8d5e19')" }}
>
        </div>
      </div>
    </section>
  );
};