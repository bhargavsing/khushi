import React from "react";
import { IoIosReturnRight } from "react-icons/io";
import { Link } from "react-router-dom"; // Import Link for navigation

const Navbutton = ({ title = "REGISTER" }) => {
  return (
    <Link to="/register" className="w-[130px] px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </Link>
  );
};

export default Navbutton;
