import React from "react";
import { Link } from "react-router-dom";
import Button from "../shared/Navbutton";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <h1>CLASSROOMS (THE CREATOR)</h1>
        <div className="links flex gap-14 ml-20">
          {["Home", "Classroom", "Email", "About Us"].map((elem, index) => (
            <Link
              key={index}
              to={elem === "About Us" ? "/about" : "/"}
              onClick={(e) => {
                if (elem === "Classroom") {
                  e.preventDefault();
                  alert("Navigating to Classroom! SORRY SIR (NOT BUILT)");
                } else if (elem === "Email") {
                  e.preventDefault();
                  window.location.href = "mailto:your-email@example.com";
                }
              }}
              className="font-regular text-sm flex items-center gap-1 cursor-pointer"
            >
              {index === 1 && (
                <span
                  style={{
                    boxShadow: "0 0 0.25em #00FF19",
                  }}
                  className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                ></span>
              )}
              {elem}
            </Link>
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
