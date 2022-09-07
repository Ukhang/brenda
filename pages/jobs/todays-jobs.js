import HeadTag from "../../components/HeadTag";
import Navbar from "../../components/Navbar/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsFilterSquare } from "react-icons/bs";
import { HiX } from "react-icons/hi";
import { useState } from "react";
import Footer from "../../components/Footer";
import Link from "next/link";

const AllJobs = () => {

    // ================== Hooks Call ==========================
    const [category, useCategory] = useState(true);

    const [jobType, useJobType] = useState(true);

    const [clientHistory, useClientHistory] = useState(true);

    const [projectLength, useProjectLength] = useState(true);

    const [hoursPerWeek, useHourPerWeek] = useState(true);

    const [showFilter, setShowFilter] = useState(false);

    // ================== Handle click function ==========================
    const CatSearchForm = (e) => {
        e.preventDefault();
    }

    const JobSearchHandle = (e) => {
        e.preventDefault();
    }

    const FilterHandleBtn = () => {
        (showFilter == false) ? setShowFilter(true) : setShowFilter(false);
    }

    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Freelance Today's Jobs - Brenda"/>

            {/* ================== Header =================== */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* ==================== first section ================== */}
                <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="flex">
                        {/* ======================== Filter Part ======================== */}
                        <aside className={`xl:w-[25%] lg:w-[30%] 2xl:pr-10 sm:pr-8 pr-7 lg:pl-0 sm:pl-8 pl-7 lg:py-0 py-5 lg:relative absolute lg:bg-transparent bg-[#F3FFFC] lg:z-0 z-[5] lg:shadow-none shadow-2xl lg:border-none border sm:left-auto left-0 lg:rounded-none sm:rounded-l-xl rounded-r-lg transition ${(showFilter == true) ? "translate-x-0" : "lg:translate-x-0 translate-x-[-150%]"}`}>
                            <div className="lg:block flex justify-between items-center">
                                <h4 className="text-zinc-800 font-semibold text-xl">
                                    Filter By
                                </h4>

                                <button className="lg:hidden block text-zinc-700 transition hover:text-zinc-500" onClick={() => setShowFilter(false)}>
                                    <HiX className="h-6 w-6"/>
                                </button>
                            </div>

                            <div className="py-4 border-b-2 border-zinc-200 mt-3">
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => (category == true) ? useCategory(false) : useCategory(true)}>
                                    <span className="text-zinc-800 font-semibold text-[17px]"> 
                                        Category 
                                    </span>
                                    <span className={`text-zinc-800 font-semibold text-2xl hover:text-zinc-600 transition ${(category == true) ? "rotate-180" : "rotate-0"}`}>
                                        <IoIosArrowDown/>
                                    </span>
                                </div>

                                {category && <div>
                                    <form className="flex flex-grow border-2 lg:max-w-sm rounded-full items-center xl:px-4 px-3 py-1 bg-[#f9fffdfd] relative my-6 2xl:mx-5 border-gray-300 focus:outline outline-offset-2 outline-2 outline-blue-600" onSubmit={CatSearchForm}>
                                        <span className="rounded-full duration-300 ease-in text-zinc-800 cursor-pointer hover:text-[#2b4241fd] text-sm">
                                            <FaSearch/>
                                        </span>
                                        <input 
                                            type="text" 
                                            className="flex-grow w-[100%] focus:outline-none bg-transparent ml-3 text-zinc-700 placeholder:text-[15px]"
                                            placeholder="Select Category"
                                        />
                                    </form>
                                </div>}
                            </div>

                            <div className="py-4 border-b-2 border-zinc-200 mt-1">
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => (jobType == true) ? useJobType(false) : useJobType(true)}>
                                    <span className="text-zinc-800 font-semibold text-[17px]"> 
                                        Job type
                                    </span>
                                    <span className={`text-zinc-800 font-semibold text-2xl hover:text-zinc-600 transition ${(jobType == true) ? "rotate-180" : "rotate-0"}`}>
                                        <IoIosArrowDown/>
                                    </span>
                                </div>

                               {jobType && <div>
                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="hourly" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="hourly" className="text-zinc-800 cursor-pointer">
                                            Hourly <span className="text-sm text-zinc-600"> (13) </span>
                                        </label>
                                    </div>

                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="fixed" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="fixed" className="text-zinc-800 cursor-pointer">
                                            Fixed <span className="text-sm text-zinc-600"> (10) </span>
                                        </label>
                                    </div>
                                </div>}
                            </div>

                            <div className="py-4 border-b-2 border-zinc-200 mt-1">
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => (clientHistory == true) ? useClientHistory(false) : useClientHistory(true)}>
                                    <span className="text-zinc-800 font-semibold text-[17px]"> 
                                        Client history
                                    </span>
                                    <span className={`text-zinc-800 font-semibold text-2xl hover:text-zinc-600 transition ${(clientHistory == true) ? "rotate-180" : "rotate-0"}`}>
                                        <IoIosArrowDown/>
                                    </span>
                                </div>

                                {clientHistory && <div>
                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="no-hires" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="no-hires" className="text-zinc-800 cursor-pointer">
                                            No hires <span className="text-sm text-zinc-600"> (6) </span>
                                        </label>
                                    </div>

                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="onetonine-hires" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="onetonine-hires" className="text-zinc-800 cursor-pointer">
                                            1 to 9 hires <span className="text-sm text-zinc-600"> (8) </span>
                                        </label>
                                    </div>

                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="tenplus-hires" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="tenplus-hires" className="text-zinc-800 cursor-pointer">
                                            10+ hires <span className="text-sm text-zinc-600"> (9) </span>
                                        </label>
                                    </div>
                                </div>}
                            </div>

                            <div className="py-4 border-b-2 border-zinc-200 mt-1">
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => (projectLength == true) ? useProjectLength(false) : useProjectLength(true)}>
                                    <span className="text-zinc-800 font-semibold text-[17px]"> 
                                        Project length
                                    </span>
                                    <span className={`text-zinc-800 font-semibold text-2xl hover:text-zinc-600 transition ${(projectLength == true) ? "rotate-180" : "rotate-0"}`}>
                                        <IoIosArrowDown/>
                                    </span>
                                </div>

                                {projectLength && <div>
                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="lessthenone-month" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="lessthenone-month" className="text-zinc-800 cursor-pointer">
                                            Less then 1 month <span className="text-sm text-zinc-600"> (19) </span>
                                        </label>
                                    </div>

                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="onetothree-month" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="onetothree-month" className="text-zinc-800 cursor-pointer">
                                            1 to 3 months <span className="text-sm text-zinc-600"> (14) </span>
                                        </label>
                                    </div>

                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="threetosix-month" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="threetosix-month" className="text-zinc-800 cursor-pointer">
                                            3 to 6 month <span className="text-sm text-zinc-600"> (12) </span>  
                                        </label>
                                    </div>

                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="morethensix-month" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="morethensix-month" className="text-zinc-800 cursor-pointer">
                                            More then 6 months <span className="text-sm text-zinc-600"> (11) </span>
                                        </label>
                                    </div>
                                </div>}
                            </div>

                            <div className="py-4 mt-1">
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => (hoursPerWeek == true) ? useHourPerWeek(false) : useHourPerWeek(true)}>
                                    <span className="text-zinc-800 font-semibold text-[17px]"> 
                                        Hours per week
                                    </span>
                                    <span className={`text-zinc-800 font-semibold text-2xl hover:text-zinc-600 transition ${(hoursPerWeek == true) ? "rotate-180" : "rotate-0"}`}>
                                        <IoIosArrowDown/>
                                    </span>
                                </div>

                               {hoursPerWeek && <div>
                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="lessthentherty-hrsweek" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="lessthentherty-hrsweek" className="text-zinc-800 cursor-pointer">
                                            Less then 30 hrs/week <span className="text-sm text-zinc-600"> (23) </span>
                                        </label>
                                    </div>

                                    <div className="flex space-x-3 my-4 items-center">
                                        <input id="morethentherty-hrsweek" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-transparent rounded border-gray-300 focus:ring-blue-500 focus:ring-2 cursor-pointer"/>
                                        <label htmlFor="morethentherty-hrsweek" className="text-zinc-800 cursor-pointer">
                                            More than 30 hrs/week <span className="text-sm text-zinc-600"> (11) </span>
                                        </label>
                                    </div>
                                </div>}
                            </div>
                        </aside>

                        {/* =========================== Job content ============================= */}
                        <div className="2xl:w-[75%] lg:w-[70%] w-full sm:border border-gray-300 rounded-xl">
                            <div className="sm:py-7 pb-7 sm:px-7 px-1.5 border-b border-gray-300">
                                <div className="lg:hidden flex justify-end">
                                    <button className="text-zinc-600 transition hover:text-zinc-500" onClick={FilterHandleBtn}>
                                        <BsFilterSquare className="h-8 w-8"/>
                                    </button>
                                </div>

                                <div className="lg:mt-0 mt-5">
                                    <form className="flex flex-grow border-2 lg:max-w-full items-center bg-[#f9fffdfd] relative transition hover:border-[#b8d8d4fd] rounded-xl border-gray-300" onSubmit={JobSearchHandle}>
                                        <input 
                                            type="text" 
                                            className="flex-grow focus:outline-none bg-transparent mx-3 text-zinc-700"
                                            placeholder="Search for jobs"
                                        />
                                        <span className="px-3 py-2 rounded-r-xl duration-300 ease-in bg-zinc-800 cursor-pointer hover:bg-[#2b4241fd]">
                                            <FaSearch className="h-5 text-white"/>
                                        </span>
                                    </form>

                                    <div className="mt-2">
                                        <Link href="#">
                                            <a className="font-semibold text-zinc-800 hover:underline hover:text-[#525554fd] cursor-pointer">
                                                Today's jobs
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex sm:flex-row flex-col justify-between sm:items-center sm:space-y-0 space-y-5 mt-5">
                                    <div className="text-zinc-700">
                                        <span className="text-zinc-800 font-semibold"> 125 </span> jobs found
                                    </div>
                                    
                                    <div className="flex items-center space-x-3">
                                        <label htmlFor="sort" className="text-zinc-800 font-semibold"> 
                                            Sort: 
                                        </label>
                                        <select id="sort" className="bg-transparent border-2 border-gray-300 text-zinc-800 text-sm rounded-lg focus:ring-blue-500 focus:border-[#b8d8d4fd] block w-full px-3 py-2 cursor-pointer font-semibold">
                                            <option value="relevance">Relevance</option>
                                            <option value="newest">Newest</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            {/* ================ Jobs Post (1) =================== */}  
                            <div className="py-7 sm:px-7 px-1.5  border-b border-gray-300 space-y-5">
                                <div className="flex flex-col space-y-3">
                                    <Link href="#">
                                        <a className="font-semibold text-zinc-800 hover:underline hover:text-blue-900 cursor-pointer">
                                            My Photo editing not understand how to fix a face mash
                                        </a>
                                    </Link>

                                    <small className="text-zinc-500 space-x-1 text-sm">
                                        <strong>Fixed Price</strong>
                                        <span>-</span>
                                        <span>Intermediate</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span>$30</span>
                                        <span>-</span>
                                        <span>Posted</span>
                                        <span>1 hour ago</span>
                                    </small>

                                    <p className="text-[15px] text-zinc-800">
                                        Interior design photos for PSG for use on mockups and branding
                                    </p>

                                    <div className="flex space-x-2 space-y-1 items-start flex-wrap">
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Photo Editing
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Photoshop
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ================ Jobs Post (2) =================== */}
                            <div className="py-7 sm:px-7 px-1.5 border-b border-gray-300 space-y-5">
                                <div className="flex flex-col space-y-3">
                                   <Link href="#">
                                        <a className="font-semibold text-zinc-800 hover:underline hover:text-blue-900 cursor-pointer">
                                            Find a talent experiance web developer
                                        </a>
                                   </Link>

                                    <small className="text-zinc-500 space-x-1 text-sm">
                                        <strong>Hourly: $150.00-$350.00</strong>
                                        <span>-</span>
                                        <span>Intermediate</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span>1 to 3 months, Less than 30 hrs/week</span>
                                        <span>-</span>
                                        <span>Posted</span>
                                        <span>1 hour ago</span>
                                    </small>

                                    <p className="text-[15px] text-zinc-800">
                                        Looking for an experienced individual who has a strong understanding of Lead Generation/ Data Entry. The purpose of this job is to source and build a contact list of small businesses that are located in the Ontario area. They must be using Shopify to host their websites. The responsibilities for this job are as follows: -Discover small businesses located in Ontario Canada that use Shopify to host their website- Use various research tools, Google and LinkedIn to discover the direct emails of marketing departments.
                                    </p>

                                    <div className="flex space-x-2 space-y-1 items-start flex-wrap">
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Node js
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            DSA Alogrithms
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Tailwind css
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ================ Jobs Post (3) =================== */}
                            <div className="py-7 sm:px-7 px-1.5 border-b border-gray-300 space-y-5">
                                <div className="flex flex-col space-y-3">
                                    <Link href="#">
                                        <a className="font-semibold text-zinc-800 hover:underline hover:text-blue-900 cursor-pointer">
                                            Need a Alogrithm high lavel skill solve my code time complexity problem
                                        </a>
                                    </Link>

                                    <small className="text-zinc-500 space-x-1 text-sm">
                                        <strong>Hourly: $30.00-$8.00</strong>
                                        <span>-</span>
                                        <span>Intermediate</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span>1 to 3 months, Less than 30 hrs/week</span>
                                        <span>-</span>
                                        <span>Posted</span>
                                        <span>1 hour ago</span>
                                    </small>

                                    <p className="text-[15px] text-zinc-800">
                                        We have an existing 3D world in Unity and we need to rework over it. Some elements must be resized, additional environments must be thinked/created and placed, following low-poly requirements, etc. You must have very solid experience with both Unity and level design. ---- When applying, submit your past work portfolio.
                                    </p>

                                    <div className="flex space-x-2 space-y-1 items-start flex-wrap">
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Java
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            DSA
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Rest API
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ================ Jobs Post (4) =================== */}
                            <div className="py-7 sm:px-7 px-1.5 border-b border-gray-300 space-y-5">
                                <div className="flex flex-col space-y-3">
                                    <Link href="#">
                                        <a className="font-semibold text-zinc-800 hover:underline hover:text-blue-900 cursor-pointer">
                                            Android application making to connect web 2 pheses of component making project
                                        </a>
                                    </Link>

                                    <small className="text-zinc-500 space-x-1 text-sm">
                                        <strong>Hourly: $250.00-$550.00</strong>
                                        <span>-</span>
                                        <span>Intermediate</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span>1 to 3 months, Less than 30 hrs/week</span>
                                        <span>-</span>
                                        <span>Posted</span>
                                        <span>1 hour ago</span>
                                    </small>

                                    <p className="text-[15px] text-zinc-800">
                                        We have an existing 3D world in Unity and we need to rework over it. Some elements must be resized, additional environments must be thinked/created and placed, following low-poly requirements, etc. You must have very solid experience with both Unity and level design. ---- When applying, submit your past work portfolio.
                                    </p>

                                    <div className="flex space-x-2 space-y-1 items-start flex-wrap">
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Lead Generation
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Data Entry
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Resercher
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ================ Jobs Post (5) =================== */}
                            <div className="py-7 sm:px-7 px-1.5 border-b border-gray-300 space-y-5">
                                <div className="flex flex-col space-y-3">
                                    <Link href="#">
                                        <a className="font-semibold text-zinc-800 hover:underline hover:text-blue-900 cursor-pointer">
                                            Creative Entry-Level Copy Proofreading
                                        </a>
                                    </Link>

                                    <small className="text-zinc-500 space-x-1 text-sm">
                                        <strong>Hourly: $30.00-$8.00</strong>
                                        <span>-</span>
                                        <span>Intermediate</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span>1 to 3 months, Less than 30 hrs/week</span>
                                        <span>-</span>
                                        <span>Posted</span>
                                        <span>1 hour ago</span>
                                    </small>

                                    <p className="text-[15px] text-zinc-800">
                                        Thoroughly review all leads to ensure they meet our requirements. -Dedication to meet project deadlines in a timely manner - Data entry tasks using excel/Google sheets and potentially HubSpot. - The ability to communicate with our team on a daily basis using Upwork and Email"
                                    </p>

                                    <div className="flex space-x-2 space-y-1 items-start flex-wrap">
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Lead Generation
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Data Entry
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Resercher
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ================ Jobs Post (6) =================== */}
                            <div className="py-7 sm:px-7 px-1.5 border-b border-gray-300 space-y-5">
                                <div className="flex flex-col space-y-3">
                                    <Link href="#">
                                        <a className="font-semibold text-zinc-800 hover:underline hover:text-blue-900 cursor-pointer">
                                            Embedded Electronics System Design, Programming, PCB Design
                                        </a>
                                    </Link>

                                    <small className="text-zinc-500 space-x-1 text-sm">
                                        <strong>Hourly: $30.00-$8.00</strong>
                                        <span>-</span>
                                        <span>Intermediate</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span>1 to 3 months, Less than 30 hrs/week</span>
                                        <span>-</span>
                                        <span>Posted</span>
                                        <span>1 hour ago</span>
                                    </small>

                                    <p className="text-[15px] text-zinc-800">
                                       The purpose of this job is to source and build a contact list of small businesses that are located in the Ontario area. They must be using Shopify to host their websites. The responsibilities for this job are as follows: -Discover small businesses located in Ontario Canada that use Shopify to host their website- Use various research tools, Google and LinkedIn to discover the direct emails of marketing departments/business owners -Ability to locate any other relevant business information. -Thoroughly review all leads to ensure they meet our requirements. -Dedication to meet project deadlines in a timely manner - Data entry tasks using excel/Google sheets and potentially HubSpot. - The ability to communicate with our team on a daily basis using Upwork and Email"
                                    </p>

                                    <div className="flex space-x-2 space-y-1 items-start flex-wrap">
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Lead Generation
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Data Entry
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Resercher
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ================ Jobs Post (7) =================== */}
                            <div className="py-7 sm:px-7 px-1.5 border-b border-gray-300 space-y-5">
                                <div className="flex flex-col space-y-3">
                                    <Link href="#">
                                        <a className="font-semibold text-zinc-800 hover:underline hover:text-blue-900 cursor-pointer">
                                            Do not apply 220828171661709017352 (JAP) - submitted by Upwork QA EHM
                                        </a>
                                    </Link>

                                    <small className="text-zinc-500 space-x-1 text-sm">
                                        <strong>Hourly: $30.00-$8.00</strong>
                                        <span>-</span>
                                        <span>Intermediate</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span>1 to 3 months, Less than 30 hrs/week</span>
                                        <span>-</span>
                                        <span>Posted</span>
                                        <span>1 hour ago</span>
                                    </small>

                                    <p className="text-[15px] text-zinc-800">
                                        Discover small businesses located in Ontario Canada that use Shopify to host their website- Use various research tools, Google and LinkedIn to discover the direct emails of marketing departments/business owners -Ability to locate any other relevant business information. -Thoroughly review all leads to ensure they meet our requirements. -Dedication to meet project deadlines in a timely manner - Data entry tasks using excel/Google sheets and potentially HubSpot. - The ability to communicate with our team on a daily basis using Upwork and Email"
                                    </p>

                                    <div className="flex space-x-2 space-y-1 items-start flex-wrap">
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Lead Generation
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Data Entry
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Resercher
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ================ Jobs Post (8) =================== */}
                            <div className="py-7 sm:px-7 px-1.5 border-b border-gray-300 space-y-5">
                                <div className="flex flex-col space-y-3">
                                    <Link href="#">
                                        <a className="font-semibold text-zinc-800 hover:underline hover:text-blue-900 cursor-pointer">
                                            Find leads of small businesses using Shopify located in the Ontario area
                                        </a>
                                    </Link>

                                    <small className="text-zinc-500 space-x-1 text-sm">
                                        <strong>Hourly: $30.00-$8.00</strong>
                                        <span>-</span>
                                        <span>Intermediate</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span>1 to 3 months, Less than 30 hrs/week</span>
                                        <span>-</span>
                                        <span>Posted</span>
                                        <span>1 hour ago</span>
                                    </small>

                                    <p className="text-[15px] text-zinc-800">
                                        Google and LinkedIn to discover the direct emails of marketing departments/business owners -Ability to locate any other relevant business information. -Thoroughly review all leads to ensure they meet our requirements. -Dedication to meet project deadlines in a timely manner - Data entry tasks using excel/Google sheets and potentially HubSpot. - The ability to communicate with our team on a daily basis using Upwork and Email"
                                    </p>

                                    <div className="flex space-x-2 space-y-1 items-start flex-wrap">
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Lead Generation
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Data Entry
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Resercher
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ================ Jobs Post (9) =================== */}
                            <div className="py-7 sm:px-7 px-1.5 border-b border-gray-300 space-y-5">
                                <div className="flex flex-col space-y-3">
                                    <Link href="#">
                                        <a className="font-semibold text-zinc-800 hover:underline hover:text-blue-900 cursor-pointer">
                                            Find leads of small businesses using Shopify located in the Ontario area
                                        </a>
                                    </Link>

                                    <small className="text-zinc-500 space-x-1 text-sm">
                                        <strong>Hourly: $30.00-$8.00</strong>
                                        <span>-</span>
                                        <span>Intermediate</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span>1 to 3 months, Less than 30 hrs/week</span>
                                        <span>-</span>
                                        <span>Posted</span>
                                        <span>1 hour ago</span>
                                    </small>

                                    <p className="text-[15px] text-zinc-800">
                                        Looking for an experienced individual who has a strong understanding of Lead Generation/ Data Entry. The purpose of this job is to source and build a contact list of small businesses that are located in the Ontario area. They must be using Shopify to host their websites. The responsibilities for this job are as follows: -Discover small businesses located in Ontario Canada that use Shopify to host their website- Use various research tools,"
                                    </p>

                                    <div className="flex space-x-2 space-y-1 items-start flex-wrap">
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Lead Generation
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Data Entry
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Resercher
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ================ Jobs Post (10) =================== */}
                            <div className="py-7 sm:px-7 px-1.5 space-y-5">
                                <div className="flex flex-col space-y-3">
                                    <Link href="#">
                                        <a className="font-semibold text-zinc-800 hover:underline hover:text-blue-900 cursor-pointer">
                                            Project manager in a growing digital marketing agency
                                        </a>
                                    </Link>

                                    <small className="text-zinc-500 space-x-1 text-sm">
                                        <strong>Fixed Price</strong>
                                        <span>-</span>
                                        <span>Intermediate</span>
                                        <span>-</span>
                                        <span>Est. Budget:</span>
                                        <span>$40</span>
                                        <span>-</span>
                                        <span>Posted</span>
                                        <span>1 hour ago</span>
                                    </small>

                                    <p className="text-[15px] text-zinc-800">
                                        Looking for an experienced individual who has a strong understanding of Lead Generation/ Data Entry. The purpose of this job is to source and build a contact list of small businesses that are located in the Ontario area. They must be using Shopify to host their websites. The responsibilities for this job are as follows: -Discover small businesses located in Ontario Canada that use Shopify to host their website- Use various research tools, Google and LinkedIn to discover the direct emails of marketing departments/business owners -Ability to locate any other relevant business information. -Thoroughly review all leads to ensure they meet our requirements. -Dedication to meet project deadlines in a timely manner - Data entry tasks using excel/Google sheets and potentially HubSpot. - The ability to communicate with our team on a daily basis using Upwork and Email"
                                    </p>

                                    <div className="flex space-x-2 space-y-1 items-start flex-wrap">
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            Project Management
                                        </a>
                                        <a className="py-1 px-2.5 rounded-full text-zinc-500 bg-[#ebf0effd] text-sm font-semibold cursor-pointer transition hover:bg-[#e3e7e6fd]">
                                            SEO
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ================ pagination =================== */}
                            <div className="py-7 sm:px-7 px-1.5 space-y-3">
                                <div className="flex md:flex-row flex-col justify-between md:items-center md:space-x-5 md:space-y-0 space-y-7">
                                    {/* =========== Left =========== */}
                                    <div className="flex md:flex-row flex-col md:items-center md:space-x-3 md:space-y-0 space-y-3">
                                        <label htmlFor="jobpages" className="text-zinc-800 font-semibold text-[13px]"> 
                                            Jobs Per Page:  
                                        </label>
                                        <select id="jobpages" className="bg-transparent border-2 border-gray-300 text-zinc-800 text-sm rounded-lg focus:ring-blue-500 focus:border-[#b8d8d4fd] block w-full px-3 py-2 cursor-pointer font-semibold">
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                        </select>
                                    </div>

                                     {/* =========== Right =========== */}
                                    <div className="flex justify-between items-center space-x-3">
                                        <div className="text-zinc-800 font-semibold flex items-center space-x-1 cursor-pointer hover:underline">
                                            <FaChevronLeft/>
                                            <a className="hover:underline"> Previous </a>
                                        </div>

                                        <ul className="sm:flex items-center space-x-1 hidden">
                                            <li>
                                                <a className="py-1 px-2 rounded-lg bg-zinc-800 text-white cursor-pointer shadow-lg">
                                                    1 
                                                </a>
                                            </li>
                                            <li>
                                                <a className="py-1 px-2 rounded-lg hover:bg-zinc-200 text-zinc-800 cursor-pointer"> 
                                                    2 
                                                </a>
                                            </li>
                                            <li>
                                                <a className="py-1 px-2 rounded-lg hover:bg-zinc-200 text-zinc-800 cursor-pointer "> 
                                                    3 
                                                </a>
                                            </li>

                                            <li>
                                                <a className="py-1 px-2 rounded-lg hover:bg-zinc-200 text-zinc-800 cursor-pointer "> 
                                                    10+ 
                                                </a>
                                            </li>
                                        </ul>

                                        <div className="text-zinc-800 font-semibold flex items-center space-x-1 cursor-pointer hover:underline">
                                            <a> Next </a>
                                            <FaChevronRight/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ==================== Footer ====================== */}
            <Footer/>
        </div>
    )
}

export default AllJobs;