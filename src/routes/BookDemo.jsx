import React from "react";

function BookDemo() {
  return (
    <div>
      <div className="text-center py-40 text-2xl bg-blue-300 text-white">
        <p className="my-4">
          Please email us to{" "}
          <a href="mailto:getinspired@simpli-ai.com" className="hover:text-red-700 text-slate-500">
            getinspired@simpli-ai.com
          </a>
        </p>
        <p className="text-bold">One of our team members will connect with you shortly</p>
      </div>
    </div>
  );
}

export default BookDemo;
