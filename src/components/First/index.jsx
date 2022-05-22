import React from "react";
import LayoutWrapper from "../../layout/LayoutWrapper";
import Progress from "../Progress";
import Logo from "../Logo";

import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate();

  return (
    <LayoutWrapper>
      <Logo />
      <Progress />
      <section className="mb-16 text-center ">
        <h1 className="mb-2 font-bold text-2xl">
          Welcome! First things first...
        </h1>
        <p className="text-gray-600 text-sm">
          You can always change them later.
        </p>
      </section>
      <section className="">
        <label
          className="block text-gray-700 text-xs mb-2 font-semibold"
          for="fullName"
        >
          Full Name
        </label>
        <input
          className="mb-4 appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight text-sm focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-600 "
          id="fullName"
          type="text"
          placeholder="Full Name"
        />
        <label
          className="block text-gray-700 text-xs mb-2 font-semibold"
          for="fullName"
        >
          Display Name
        </label>
        <input
          className="mb-4 appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight text-sm focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-600 "
          id="fullName"
          type="text"
          placeholder="Steve"
        />
        <button
          className="w-full text-sm shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded  "
          type="button"
          onClick={() => navigate("/second")}
        >
          Create Workspace
        </button>
      </section>
    </LayoutWrapper>
  );
};

export default First;
