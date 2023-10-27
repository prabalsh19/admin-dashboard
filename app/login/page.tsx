import React from "react";

const page = () => {
  return (
    <div className="flex items-center flex-col mt-36">
      <h2 className="text-3xl block m-auto mb-6">Login</h2>
      <form className="flex flex-col gap-4">
        <label className="text-lg ">
          Email <br />
          <input type="text" className="border-2 border-black rounded-sm p-1" />
        </label>
        <label className="text-lg">
          Password <br />
          <input type="text" className="border-2 border-black rounded-sm p-1" />
        </label>
        <button className="bg-[#013CC6] text-white py-2 rounded-lg mt-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default page;
