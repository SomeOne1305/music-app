import React, { FC } from "react";
import {Sun} from "./icons";
type Props = {};

const Navigation: FC = (props: Props) => {
  return (
    <nav className="bg-light z-10 dark:bg-inDark w-full fixed top-0 left-0 shadow-l dark:shadow-h">
      <div className="container py-1 flex justify-between items-center">
        <a href="#" className="px-2 py-1 flex items-center">
          <span className="font-[Nasalization] text-xl xs:text-2xl dark:text-[white]">
            Sound
          </span>
          <span className="font-[Androica] tracking-wide text-lg xs:text-xl p-1 rounded-md bg-first text-white">
            Byte
          </span>
        </a>
        <button
          className="w-12 h-12 cursor-pointer bg-gradient-to-t from-prim to-secondary hover:bg-gradient-to-b py-1 px-2 rounded-md"
        >
          <i className="fa-regular fa-sun-bright text-white text-xl"></i>
          {/* <FontAwesomeIcon icon={faSun} /> */}
          <Sun color="black" size={24}/>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
