import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-teal-500 animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-r-4 border-l-4 border-transparent border-t-teal-300 border-b-teal-700 animate-ping opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 bg-teal-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
