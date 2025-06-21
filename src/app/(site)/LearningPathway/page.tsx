"use client";


const pathways = [
  {
    domain: "Frontend Development",
    subtopics: [
      {
        name: "HTML & CSS",
        description:
          "Learn the basics of HTML and CSS, the building blocks of web development.",
      },
      {
        name: "JavaScript",
        description:
          "Understand the fundamentals of JavaScript, the language that powers interactive web features.",
      },
      {
        name: "React",
        description:
          "Build interactive UIs with React, a popular JavaScript library for creating dynamic web applications.",
      },
    ],
  },
  {
    domain: "Backend Development",
    subtopics: [
      {
        name: "Node.js",
        description:
          "Learn server-side JavaScript with Node.js to build scalable network applications.",
      },
      {
        name: "Express.js",
        description:
          "Build web applications using Express.js, a fast, unopinionated framework for Node.js.",
      },
      {
        name: "Databases",
        description:
          "Understand SQL and NoSQL databases to efficiently store and manage application data.",
      },
    ],
  },
  {
    domain: "DevOps",
    subtopics: [
      {
        name: "Continuous Integration",
        description:
          "Learn about automating code integration and testing to improve development workflows.",
      },
      {
        name: "Continuous Deployment",
        description:
          "Automate deployment processes to ensure smooth and frequent releases.",
      },
      {
        name: "Monitoring & Logging",
        description:
          "Implement monitoring and logging practices to maintain and troubleshoot applications.",
      },
    ],
  },
  {
    domain: "Cybersecurity",
    subtopics: [
      {
        name: "Threat Analysis",
        description:
          "Understand how to identify and analyze potential security threats.",
      },
      {
        name: "Vulnerability Assessment",
        description:
          "Learn techniques to discover and address security vulnerabilities in applications.",
      },
      {
        name: "Ethical Hacking",
        description:
          "Explore ethical hacking practices to assess and improve system security.",
      },
    ],
  },
  {
    domain: "Cloud Computing",
    subtopics: [
      {
        name: "AWS Fundamentals",
        description:
          "Get acquainted with AWS, a leading cloud services platform for building and deploying applications.",
      },
      {
        name: "Azure Basics",
        description:
          "Learn about Microsoft Azure, another major cloud service provider, and its offerings.",
      },
      {
        name: "Cloud Storage Solutions",
        description:
          "Understand different cloud storage options and their use cases.",
      },
    ],
  },
  {
    domain: "Machine Learning",
    subtopics: [
      {
        name: "Introduction to ML",
        description:
          "Learn the basics of machine learning, including types of learning and common algorithms.",
      },
      {
        name: "Supervised Learning",
        description:
          "Understand supervised learning techniques such as regression and classification.",
      },
      {
        name: "Unsupervised Learning",
        description:
          "Explore unsupervised learning methods like clustering and dimensionality reduction.",
      },
    ],
  },
];

export default function Page() {
  return (
    <>

      <div className="mb-11 bg-sla"></div>

      <div className="mt-26">
        <div
          id="pathways"
          className="flex flex-col items-center gap-[40px] mt-[50px]"
        >
          <div className="title relative">
            <h1 className="font-bold text-5xl text-gray-600">
              Learning Pathways
            </h1>
          </div>
          <div className="services flex flex-wrap justify-around w-full">
            {pathways.map((item, index) => (
              <div
                key={index}
                className="hover:bg-slate-200 transition-transform duration-300 hover:scale-105 border-white-500 text-white bg-gradient-to-r from-slate-600 to-slate-700 hover:shadow-2xl shadow-lg shadow-slate-400 service items-center mb-[30px] flex flex-col gap-[20px] p-[20px] border-[3px] w-[30%] rounded-lg cursor-pointer border-slate-300"
              >
                <h2 className="text-3xl font-bold">{item.domain}</h2>
                {item.subtopics.map((subtopic, subIndex) => (
                  <div key={subIndex} className="flex flex-col items-start">
                    <h3 className="text-2xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-yellow-500 bg-clip-text text-transparent">
                      {subtopic.name}
                    </h3>

                    <p>{subtopic.description}</p>
                  </div>
                ))}
                <div className="flex-grow" />
                <div className="readmore flex items-center justify-center mt-4">
                  <p className="bg-slate-300 rounded-lg p-2 font-semibold cursor-pointer transition-colors duration-300 text-black hover:bg-slate-900 hover:text-slate-300">
                    Explore the Domain
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
