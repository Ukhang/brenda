import Link from "next/link";
import { useState } from "react";
import { 
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
    FaInstagram,
    FaApple,
    FaAndroid,
    FaChevronDown
} from "react-icons/fa";

const Footer = () => {

    // ================ hooks call ======================
    const [showI, useShowI] = useState(false);
    const [showII, useShowII] = useState(false);
    const [showIII, useShowIII] = useState(false);
    const [showIv, useShowIv] = useState(false);


    // ==================== List Data Store =============================
    const listI = [
        {id: 1, name: "How to Hire", link: "/how-to-hire"},
        {id: 2, name: "Talent Marketplace", link: "/talent-marketplace"},
        {id: 3, name: "Project Catlog", link: "/services"},
        {id: 4, name: "Talent Scout", link: "/staffing"},
        {id: 5, name: "Hire and Agency", link: "#"},
        {id: 6, name: "Enterprise", link: "/enterprise"},
        {id: 7, name: "Hire Worldwide", link: "#"},
    ];

    const listII = [
        {id: 1, name: "How to find work", link: "/how-to-find-work"},
        {id: 2, name: "Direct Contracs", link: "#"},
        {id: 3, name: "Find Freelace Job Worldwide", link: "#"},
    ];

    const listIII = [
        {id: 1, name: "Help & Support", link: "#"},
        {id: 2, name: "Success Stories", link: "/success-stories"},
        {id: 3, name: "Brenda Review", link: "#"},
        {id: 4, name: "Resources", link: "#"},
        {id: 5, name: "Blog", link: "#"},
        {id: 7, name: "Community", link: "#"},
        {id: 8, name: "Affiliate Program", link: "#"},
    ];

    const listIV = [
        {id: 1, name: "About Us", link: "/about"},
        {id: 2, name: "Leadership", link: "#"},
        {id: 3, name: "Investor Relations", link: "#"},
        {id: 4, name: "Careers", link: "#"},        
        {id: 5, name: "Contact us", link: "/contact"},
    ]

    return (
        <footer className="bg-gradient-to-tr from-[#BAE6FD] to-[#CFFAFE] mt-auto">
            <div className="container mx-auto py-3 md:px-5 sm:px-7 px-3">
                <div className="flex md:flex-row flex-col justify-between md:space-x-5 md:px-0 sm:px-10 px-3">
                    {/* ======================== column 1 ====================== */}
                    <div className="py-5 lg:px-3 border-b md:border-none border-zinc-400">
                        <div 
                            className="font-semibold text-zinc-800 flex md:block items-center justify-between"
                            onClick={() => (showI === false) ? useShowI(true) : useShowI(false)}
                        >
                            For Clints

                            <FaChevronDown className={`md:hidden block transition ${(showI === true) ? "rotate-180" : "rotate-0"}`}/>
                        </div>

                       <ul className={`md:flex ${(showI === true) ? "flex" : "hidden"} flex-col space-y-3 mt-3`}>
                            {listI.map((curVal) => (
                                <li
                                    className="text-zinc-700 font-semibold cursor-pointer text-[15px] hover:underline" 
                                    key={curVal.id}
                                >
                                    <Link href={curVal.link}>
                                        {curVal.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ================== column 2 ================ */}
                    <div className="py-5 lg:px-3 border-b md:border-none border-zinc-400">
                        <div 
                            className="font-semibold text-zinc-800 flex md:block items-center justify-between"
                            onClick={() => (showII === false) ? useShowII(true) : useShowII(false)}
                        >
                            For talent

                            <FaChevronDown className={`md:hidden block transition ${(showII === true) ? "rotate-180" : "rotate-0"}`}/>
                        </div>

                        <ul className={`md:flex ${(showII === true) ? "flex" : "hidden"} flex-col space-y-3 mt-3`}>
                            {listII.map((curVal) => (
                                <li 
                                    className="text-zinc-700 font-semibold cursor-pointer text-[15px] hover:underline"
                                    key={curVal.id}
                                >
                                    <Link href={curVal.link}>
                                        {curVal.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ================== column 3 ================ */}
                    <div className="py-5 lg:px-3 border-b md:border-none border-zinc-400">
                        <div 
                            className="font-semibold text-zinc-800 flex md:block items-center justify-between"
                            onClick={() => (showIII === false) ? useShowIII(true) : useShowIII(false)}
                        >
                            For Clints

                            <FaChevronDown className={`md:hidden block transition ${(showIII === true) ? "rotate-180" : "rotate-0"}`}/>
                        </div>

                       <ul className={`md:flex ${(showIII === true) ? "flex" : "hidden"} flex-col space-y-3 mt-3`}>
                            {listIII.map((curVal) => (
                                <li
                                    className="text-zinc-700 font-semibold cursor-pointer text-[15px] hover:underline"
                                    key={curVal.id}
                                >
                                    <Link href={curVal.link}>
                                        {curVal.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ================== column 4 ================ */}
                    <div className="py-5 lg:px-3 border-b md:border-none border-zinc-400">
                        <div 
                            className="font-semibold text-zinc-800 flex md:block items-center justify-between"
                            onClick={() => (showIv === false) ? useShowIv(true) : useShowIv(false)}
                        >
                            For Clints

                            <FaChevronDown className={`md:hidden block transition ${(showIv === true) ? "rotate-180" : "rotate-0"}`}/>
                        </div>

                        <ul className={`md:flex ${(showIv === true) ? "flex" : "hidden"} flex-col space-y-3 mt-3`}>
                            {listIV.map((curVal) => (
                                <li
                                    className="text-zinc-700 font-semibold cursor-pointer text-[15px] hover:underline"
                                    key={curVal.id}
                                >
                                    <Link href={curVal.link}>
                                        {curVal.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col md:space-y-0 space-y-5 justify-between lg:px-3 md:px-0 sm:px-10 px-3 py-3 mt-5 border-b border-zinc-800">
                    <div className="flex sm:flex-row flex-col md:space-x-7 sm:space-x-5 sm:items-center sm:space-y-0 space-y-3">
                        <span className="text-zinc-800 font-semibold">
                            Follow Us
                        </span>
                        <div className="flex items-center space-x-3">
                            <span className="rounded-md px-1 py-1 border border-zinc-800 transition hover:bg-zinc-800 cursor-pointer text-zinc-800 sm:text-xl text-md hover:text-zinc-100">
                                <FaFacebookF/>
                            </span>
                            <span className="rounded-md px-1 py-1 border border-zinc-800 transition hover:bg-zinc-800 cursor-pointer text-zinc-800 sm:text-xl text-md hover:text-zinc-100">
                                <FaLinkedinIn/>
                            </span>
                            <span className="rounded-md px-1 py-1 border border-zinc-800 transition hover:bg-zinc-800 cursor-pointer text-zinc-800 sm:text-xl text-md hover:text-zinc-100">
                                <FaTwitter/>
                            </span>
                            <span className="rounded-md px-1 py-1 border border-zinc-800 transition hover:bg-zinc-800 cursor-pointer text-zinc-800 sm:text-xl text-md hover:text-zinc-100">
                                <FaYoutube/>
                            </span>
                            <span className="rounded-md px-1 py-1 border border-zinc-800 transition hover:bg-zinc-800 cursor-pointer text-zinc-800 sm:text-xl text-md hover:text-zinc-100">
                                <FaInstagram/>
                            </span>
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col md:space-x-7 sm:space-x-5 sm:items-center sm:space-y-0 space-y-3">
                        <span className="text-zinc-800 font-semibold">
                            Mobile App
                        </span>
                        <div className="flex items-center space-x-3">
                            <span className="rounded-md px-1 py-1 border border-zinc-800 transition hover:bg-zinc-800 cursor-pointer text-zinc-800 text-xl hover:text-zinc-100">
                                <FaApple/>
                            </span>
                            <span className="rounded-md px-1 py-1 border border-zinc-800 transition hover:bg-zinc-800 cursor-pointer text-zinc-800 text-xl hover:text-zinc-100">
                                <FaAndroid/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col justify-between md:space-y-0 space-y-3 lg:px-3 md:px-0 sm:px-10 px-3 mt-3 mb-10">
                    <div className="md:border-r border-zinc-800 pr-3">
                        <p className="text-[15px] text-zinc-800 font-semibold">
                            © 2021 - 2022 Brenda Globe Inc
                        </p>
                    </div>
                    <ul className="flex md:flex-row flex-col md:items-center xl:space-x-20 md:space-x-7 md:space-y-0 space-y-3">
                        <li className="text-[15px] text-zinc-800 font-semibold hover:underline">
                            <Link href="/">
                                Terms of Service
                            </Link>
                        </li>
                        <li className="text-[15px] text-zinc-800 font-semibold hover:underline">
                            <Link href="/">
                                Privecy Policy
                            </Link>
                        </li>
                        <li className="text-[15px] text-zinc-800 font-semibold hover:underline">
                            <Link href="/">
                                Cokkie Settings
                            </Link>
                        </li>
                        <li className="text-[15px] text-zinc-800 font-semibold hover:underline">
                            <Link href="/">
                                Accessibility
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;