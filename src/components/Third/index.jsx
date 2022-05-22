import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutWrapper from "../../layout/LayoutWrapper";
import Logo from "../Logo";
import Progress from "../Progress";

const Third = () => {
  const navigate = useNavigate();

  return (
    <LayoutWrapper>
      <Logo />
      <Progress />
      <section className="">
        <section className="mb-16 text-center ">
          <h1 className="mb-2 font-bold text-2xl">
            How are you planning to use Eden?
          </h1>
          <p className="text-gray-600 text-sm">
            We'll streamline your setup experience accordingly.
          </p>
        </section>
        <section className="mb-4 flex flex-row gap-6 ">
          <div className="group cursor-pointer rounded p-4 w-[18ch] flex flex-col border-[1px] border-gray-200 hover:border-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mb-4 group-hover:text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="font-bold mb-2">For myself</h3>
            <p className="text-gray-400 text-sm">
              Write better, Think more clearly, Stay Organized
            </p>
          </div>
          <div className="group cursor-pointer rounded p-4 w-[18ch] flex flex-col border-[1px] border-gray-200 hover:border-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mb-4 group-hover:text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <h3 className="font-bold mb-2">With my team</h3>
            <p className="text-gray-400 text-sm">
              Wikis, docs, tasks & projects, all in one place.
            </p>
          </div>
        </section>

        <button
          className="w-full text-sm shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded  "
          type="button"
          onClick={() => navigate("/fourth")}
        >
          Create Workspace
        </button>
      </section>
    </LayoutWrapper>
  );
};

export default Third;
