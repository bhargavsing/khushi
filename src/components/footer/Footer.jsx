import React from "react"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
                <div className="basis-1/2">
                    <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
                        Bhargav Digi Idea
                    </h1>
                </div>
                <div className="basis-1/2 flex gap-4">
                    <div className="basis-1/3">
                        <h4 className="mb-10 text-zinc-500">Socials</h4>
                        {[ <a href="https://www.instagram.com/?hl=en">Instagram,</a>,<a href="https://x.com/?lang-en">Twitter</a> , "LinkedIn"].map(
                            (item, index) => (
                                <a
                                    key={index}
                                    href={`#${item}`}
                                    className="block mt-2 text-zinc-600"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>
                    <div className="basis-1/3">
                        <h4 className="mb-10 text-zinc-500">Sitemaps</h4>
                        {["Home", "Work",<Link to="/nml">Careers</Link> , "Contact"].map(
                            (item, index) => (
                                <a
                                    key={index}
                                    href={`#${item}`}
                                    className="block mt-2 text-zinc-300"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>

                    <div className="basis-1/2 flex flex-col items-end">
                        <p className="text-right">
                            Hey,I'm Bhargav trying to create an impact
                            on animation world
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer