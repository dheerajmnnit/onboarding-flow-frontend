import React from "react";
import LayoutWrapper from "../../layout/LayoutWrapper";
import Logo from "../Logo";
import Progress from "../Progress";
import { useNavigate } from "react-router-dom";

const Second = () => {
  const navigate = useNavigate();
  return (
    <LayoutWrapper>
      <Logo />
      <Progress />
      <section className="mb-16 text-center ">
        <h1 className="mb-2 font-bold text-2xl">
          Let's set up a home for all your work
        </h1>
        <p className="text-gray-600 text-sm">
          You can always create another workspace later.
        </p>
      </section>
      <section className="">
        <label
          className="block text-gray-700 text-xs mb-2 font-semibold"
          for="workspace"
        >
          Workspace Name
        </label>
        <input
          className="mb-4 appearance-none border rounded w-full py-3 px-3  text-gray-700 leading-tight text-sm focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-600 "
          id="workspace"
          type="text"
          placeholder="Eden"
        />

        <label
          className="block text-gray-700 text-xs mb-2 font-semibold"
          for="workspace_url"
        >
          Workspace URL <span className="text-gray-300">(optional)</span>
        </label>
        <div className="flex mb-4">
          <span className="inline-flex items-center px-3 text-sm text-gray-400 font-semibold bg-gray-100 rounded-l-md border border-r-0  ">
            www.eden.com/
          </span>
          <input
            type="text"
            id="workspace_url"
            className="rounded border text-gray-700 focus:outline-none focus:shadow-outline focus:ring-1 focus:ring-indigo-600  focus:border-indigo-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
            placeholder="Example"
          />
        </div>

        <button
          className="w-full text-sm shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded  "
          type="button"
          onClick={() => navigate("/third")}
        >
          Create Workspace
        </button>
      </section>
    </LayoutWrapper>
  );
};

export default Second;
