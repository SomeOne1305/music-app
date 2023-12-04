import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full wavy bg-[#013672] dark:bg-second min-h-[200px] flex items-center">
      <div className="container py-2 text-center">
        <span className="text-lg text-white">2023 All rights are reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
