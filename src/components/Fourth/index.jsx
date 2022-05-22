import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutWrapper from "../../layout/LayoutWrapper";
import Logo from "../Logo";
import Progress from "../Progress";

const Fourth = () => {
  const navigate = useNavigate();
  return (
    <LayoutWrapper>
      <Logo />
      <Progress />
      <section className="">
        <section className="flex flex-col justify-center items-center mb-6 text-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mb-8 text-indigo-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="mb-2 font-bold text-2xl">Congratulations, Eren!</h1>
          <p className="text-gray-600 text-sm">
            You have completed onboarding, you can start using the Eden!
          </p>
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

export default Fourth;
