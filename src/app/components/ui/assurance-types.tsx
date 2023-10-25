import React from "react";

function AssuranceTypes() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[750px] h-[40px] relative border-2 ">
        <div className=" w-full grid grid-cols-6 ">
          <p className="text-center text-zinc-600 text-xl font-medium tracking-tight">
            One
          </p>
          <p className="text-center text-zinc-600 text-xl font-medium tracking-tight">
            Two
          </p>
          <p className="text-center text-zinc-600 text-xl font-medium tracking-tight">
            Three
          </p>
          <p className="text-center text-zinc-600 text-xl font-medium tracking-tight">
            Four
          </p>
          <p className="text-center text-zinc-600 text-xl font-medium tracking-tight">
            Five
          </p>
          <p className="text-center text-zinc-600 text-xl font-medium tracking-tight">
            Six
          </p>
        </div>
        <div className="w-[600px] absolute border-2 left-4"></div>
      </div>
    </div>
  );
}

export default AssuranceTypes;
