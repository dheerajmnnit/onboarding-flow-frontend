import { React } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Progress = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const completed =
    "w-8 h-8 bg-indigo-600 text-white rounded-full flex justify-center items-center cursor-pointer";

  const incomplete =
    "w-8 h-8 border-[1px] border-gray-500/25 text-gray-500 rounded-full flex justify-center items-center cursor-pointer";

  const sidesCompleted = `relative 
  before:content-[''] before:absolute before:border-b-[1px] before:border-indigo-600 before:w-[1.125rem] before:bottom-1/2 before:left-full after:absolute after:border-b-[1px] after:border-indigo-600 after:w-[1.5rem] after:bottom-1/2 after:right-full`;

  const sidesIncomplete = `relative 
  before:content-[''] before:absolute before:border-b-[1px] before:border-gray-500/25 before:w-[1.125rem] before:bottom-1/2 before:left-full after:absolute after:border-b-[1px] after:border-gray-500/25 after:w-[1.5rem] after:bottom-1/2 after:right-full`;

  const completedLeftSide = `
  relative 
  after:content-['']  after:absolute after:border-b-[1px] after:border-indigo-600 after:w-[1.5rem] after:bottom-1/2 after:right-full
  `;

  const inccompleteLeftSide = `
  relative 
  after:content-['']  after:absolute after:border-b-[1px] after:border-gray-500/25 after:w-[1.5rem] after:bottom-1/2 after:right-full
  `;

  const completedRightSide = `
  relative 
  before:content-[''] before:absolute before:border-b-[1px] before:border-indigo-600 before:w-[1.125rem] before:bottom-1/2 before:left-full`;

  const incompleteRightSide = `
  relative 
  before:content-[''] before:absolute before:border-b-[1px] before:border-gray-500/25 before:w-[1.125rem] before:bottom-1/2 before:left-full`;

  let colorFlag = 0;

  if (location.pathname === "/") {
    colorFlag = 1;
  } else if (location.pathname === "/second") {
    colorFlag = 2;
  } else if (location.pathname === "/third") {
    colorFlag = 3;
  } else if (location.pathname === "/fourth") {
    colorFlag = 4;
  }

  return (
    <section className="inline-block w-auto">
      <ul
        className="p-2 gap-10 mb-16 flex flex-row 
        
        " //
      >
        <li
          className={
            colorFlag < 1
              ? ` ${incomplete} ${incompleteRightSide}`
              : `  ${completed} ${completedRightSide}`
          }
          onClick={() => navigate("/")}
        >
          <span>1</span>
        </li>
        <li
          className={
            colorFlag < 2
              ? ` ${incomplete} ${sidesIncomplete}`
              : `  ${completed} ${sidesCompleted}`
          }
          onClick={() => navigate("/second")}
        >
          <span>2</span>
        </li>
        <li
          className={
            colorFlag < 3
              ? ` ${incomplete} ${sidesIncomplete}`
              : `  ${completed} ${sidesCompleted}`
          }
          onClick={() => navigate("/third")}
        >
          <span>3</span>
        </li>
        <li
          className={
            colorFlag < 4
              ? ` ${incomplete} ${inccompleteLeftSide}`
              : `  ${completed} ${completedLeftSide}`
          }
          onClick={() => navigate("/fourth")}
        >
          <span>4</span>
        </li>
      </ul>
    </section>
  );
};

export default Progress;

// relative
//           before:content-[''] before:absolute before:border-b-[1px] before:border-indigo-600 before:w-[1.5rem] before:bottom-1/2 before:left-full
//   after:content-[''] after:absolute after:border-b-[1px] after:border-indigo-600 after:w-[1.5rem] after:bottom-1/2 after:right-full
