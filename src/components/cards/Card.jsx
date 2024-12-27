import React from "react"
import { IoIosArrowRoundForward } from "react-icons/io"
import { motion } from "framer-motion"

const Card = ({ width, start, para, hover, header, title }) => {
    const openLinkedIn = () => {
        window.open('https://www.linkedin.com/in/bhargav-singh-danu-549866222', '_blank');
      };
    return (
        <motion.div
            whileHover={{ padding: "25px" }}
            className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between ${
                hover ? "hover:bg-gradient-to-l from-blue-500 via-purple-500 to-pink-500-500" : ""
            }`}
        >
            <div className="w-full">
                <div className="w-full flex justify-between items-center">
                    <h3>{header}</h3>
                    <IoIosArrowRoundForward />
                </div>
                <h1 className="text-3xl font-medium mt-5">{title}</h1>
            </div>
            <div className="down w-full">
                {start && (
                    <>
                        <h1 className="text-6xl font-semibold tracking-tight leading-none">
                          <a href="https://vscode.dev/">Start a Project</a>  
                        </h1>
                        <button 
                          onClick={openLinkedIn}
                           className=" hover:bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 active:scale-95 transition duration-300 rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
                            Contact Me On Linkedin
                        </button>
                    </>
                )}
                {para && (
                    <p className="text-sm text-zinc-400 font-regular">
                        Explore what drives our team.
                    </p>
                )}
            </div>
        </motion.div>
    )
}

export default Card