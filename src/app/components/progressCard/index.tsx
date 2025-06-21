"use client";
 const ProgressCard = () =>{
  return (
  <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4">
  <div className="flex justify-between items-center mb-2">
    <div className="text-lg font-semibold">Backend Engineer</div>
    <div className="text-sm text-gray-500">2 days ago</div>
  </div>
  <div className="flex items-center mb-4">
    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
      <span className="text-purple-600 font-bold">H</span>
    </div>
    <div className="ml-3">
      <div className="text-sm font-medium">HeyGen / Generative AI - Software</div>
      <div className="text-sm text-gray-500">San Francisco, CA • Hybrid • Entry, Mid Level</div>
    </div>
  </div>
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center text-green-600">
      <div className="bg-green-100 text-green-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
        96% STRONG MATCH
      </div>
    </div>
    <button className="bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-md">
      APPLY NOW
    </button>
  </div>
  <div className="flex justify-between items-center">
    <div className="text-sm text-gray-500">Less than 10 applicants</div>
    <div className="flex items-center space-x-2">
      <button className="text-gray-400 hover:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm0 11c-4 0-7 2-7 4v1h14v-1c0-2-3-4-7-4z" clip-rule="evenodd" />
        </svg>
      </button>
      <button className="text-gray-400 hover:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 2a3 3 0 00-3 3v9a3 3 0 003 3h10a3 3 0 003-3V5a3 3 0 00-3-3H5zm4 12H7v-2h2v2zm4 0h-2v-2h2v2zm-4-4H7V8h2v2zm4 0h-2V8h2v2z" clip-rule="evenodd" />
        </svg>
      </button>
      <button className="text-gray-400 hover:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M6 4a1 1 0 000 2h8a1 1 0 100-2H6zm-3 4a1 1 0 000 2h14a1 1 0 100-2H3zm3 4a1 1 0 000 2h8a1 1 0 100-2H6zm-3 4a1 1 0 000 2h14a1 1 0 100-2H3z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>
  )
 }
 export default ProgressCard;