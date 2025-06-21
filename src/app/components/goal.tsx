import React from "react";

function Goal() {
  return (
    <section className="p-12 px-24 w-full flex justify-between items-center gap-16 overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="flex h-96 mb-14">
        <div className="w-1/2 p-8">
          <div className="mb-6 text-2xl font-bold text-white-800">
            Build an Impressive Resume with Our User-Friendly Tool
          </div>
          <div className="mb-8 text-white-600">
            Craft a professional resume that highlights your skills and
            experience, and impress potential employers.
          </div>
          <div className="flex h-screen">
            <div className="mb-8">
              <div className="text-xl font-semibold text-white-800">
                Easy-to-Use
              </div>
              <p className="text-white-600">
                Our resume builder simplifies the process, allowing you to
                create a polished resume quickly.
              </p>
            </div>
            <div>
              <div className="text-xl font-semibold text-white-800">
                Customizable
              </div>
              <p className="text-white-600">
                Tailor your resume to specific job applications with our
                flexible templates and formatting options.
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 justify-center items-center">
          <video
            src="https://cdn.enhancv.com/1080_ai_resume_builder_005c790816.mp4?updated_at=2023-12-21T13:15:17.985Z"
            autoPlay
            loop
            muted
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export { Goal };