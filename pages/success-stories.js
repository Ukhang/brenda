import Navbar from "../components/Navbar/Navbar";
import HeadTag from "../components/HeadTag";
import { HiOutlineChevronDoubleRight, HiArrowRight, HiArrowLeft, } from "react-icons/hi";
import { FaAirbnb, FaUber, FaAtlassian } from "react-icons/fa";
import { SiGodaddy, SiCoursera } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import Image from "next/image";
import { useRef } from "react";
import Footer from '../components/Footer';
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

const SuccessStories = () => {

    // =============== Hooks ====================
    const router = useRouter();
    const slider = useRef();
    const scrollDiv = useRef();

    // =============== Function ==================
    const SlideRight = () => {
        slider.current.scrollLeft = slider.current.scrollLeft + scrollDiv.current.offsetWidth + 20;
    }
    
    const SlideLeft = () => {
        slider.current.scrollLeft = slider.current.scrollLeft - scrollDiv.current.offsetWidth - 20;
    }

    // =============== Featured Success Stories List ====================
    const SuccessSt = [
        {
            id: 1,
            leftImage: {
                src: "/images/success-st1.jpg",
                alt: "girls-image"
            },

            rightLogo: <FaAirbnb/>,
            rightDes: "How the BISSELL Pet Foundation Saved 33,000 Animals",

            rightSmText: "Results",

            rightFirRes: "445,900+",
            rightFirResDes: "pets helped since 2011",

            rightSecRes: "445,900+",
            rightSecResDes: "pets rescued in 2021 through Empty the Shelters",

            btn: {text: "Read Story", link: "#"}
        },

        {
            id: 2,
            leftImage: {
                src: "/images/success-st2.jpg",
                alt: "girls-image"
            },

            rightLogo: <FaUber/>,
            rightDes: "How Amway Produced a Global Video Series in 3 Months, Across 5 Countries, and Saved $100,000",

            rightSmText: "Results",

            rightFirRes: "20,000+",
            rightFirResDes: "Saved per Videos",

            rightSecRes: "3 months",
            rightSecResDes: "to complete a global video series",

            btn: {text: "Read Story", link: "#"}
        },

        {
            id: 3,
            leftImage: {
                src: "/images/success-st3.jpg",
                alt: "girls-image"
            },

            rightLogo: <SiGodaddy/>,
            rightDes: "How the BISSELL Pet Foundation Saved 33,000 Animals",

            rightSmText: "Results",

            rightFirRes: "445,900+",
            rightFirResDes: "pets helped since 2011",

            rightSecRes: "445,900+",
            rightSecResDes: "pets rescued in 2021 through Empty the Shelters",

            btn: {text: "Read Story", link: "#"}
        },

        {
            id: 4,
            leftImage: {
                src: "/images/success-st4.jpg",
                alt: "girls-image"
            },

            rightLogo: <BsMicrosoft/>,
            rightDes: "Championing Innovation at PGA of America",

            rightSmText: "Results",

            rightFirRes: "3x faster",
            rightFirResDes: "Project completion times",

            rightSecRes: "3 days",
            rightSecResDes: "Average time to start projects",

            btn: {text: "Read Story", link: "#"}
        },

        {
            id: 5,
            leftImage: {
                src: "/images/success-st5.jpg",
                alt: "girls-image"
            },

            rightLogo: <SiCoursera/>,
            rightDes: "Flexera Engineers a Way to Deliver Work 2x Faster and Keeps Security at the Forefront",

            rightSmText: "Results",

            rightFirRes: "< 1 week",
            rightFirResDes: "Time to engage",

            rightSecRes: "2x",
            rightSecResDes: "Faster project turnaround",

            btn: {text: "Read Story", link: "#"}
        },

        {
            id: 6,
            leftImage: {
                src: "/images/success-st6.jpg",
                alt: "girls-image"
            },

            rightLogo: <FaAtlassian/>,
            rightDes: "Atlasian Leans on Hybrid Teams to Transform Itself into a Digital Media Leader",

            rightSmText: "Results",

            rightFirRes: "Emmy Winning",
            rightFirResDes: "Facebook Watch Program",

            rightSecRes: "Millions",
            rightSecResDes: "of impressions generated per client per IPO",

            btn: {text: "Read Story", link: "#"}
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* ============== Head Tag =============== */}
            <HeadTag title="Success Stories | Brenda"/>
            
            {/* ================= Header ================= */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                {/* ============= Head Container =============== */}
                <div className="container mx-auto lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3 pb-10 border-b border-zinc-300">
                    <motion.div className="flex items-center space-x-2 flex-wrap"
                        initial={{y:30, opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        <a className="font-semibold text-zinc-800 hover:text-blue-600 cursor-pointer duration-150 ease-in"> 
                            Resources 
                        </a>
                        <HiOutlineChevronDoubleRight className="text-[11px] text-zinc-700 mt-1"/>
                        <a className="font-semibold text-zinc-800 hover:text-blue-600 cursor-pointer duration-150 ease-in"> 
                            Success Stories 
                        </a>
                    </motion.div>

                    <motion.div className="flex flex-col lg:space-y-5 space-y-3 lg:mt-7 md:mt-5 mt-3"
                        initial={{y:30, opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:1.5}}
                    >
                        <h2 className="text-zinc-800 font-semibold lg:text-6xl md:text-5xl text-4xl">
                            Success Stories
                        </h2>
                        <p className="font-semibold lg:text-xl text-lg text-zinc-600">
                            See how Brenda helps businesses like yours grow and succeed.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* ======== First section ============== */}
                <section className="container mx-auto lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="flex md:flex-row flex-col justify-between md:space-x-10 md:space-y-0 sm:space-y-5 space-y-4">
                        <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                            Featured Success Stories
                        </h2>

                        <div className="flex items-center space-x-3">
                            <button className="lg:text-2xl md:text-xl text-lg py-4 px-4 rounded-full bg-gradient-to-b from-[#99F6E4] to-[#A5F3FC] text-zinc-800 transition hover:from-[#88e0cf] hover:to-[#97dce4]" onClick={SlideLeft}>
                                <HiArrowLeft/>
                            </button>
                            <button className="lg:text-2xl md:text-xl text-lg py-4 px-4 rounded-full bg-gradient-to-b from-[#99F6E4] to-[#A5F3FC] text-zinc-800 transition hover:from-[#88e0cf] hover:to-[#97dce4]" onClick={SlideRight}>
                                <HiArrowRight/>
                            </button>
                        </div>
                    </div>

                    <div className="flex mt-10 overflow-x-scroll scroll scroll-smooth scrollbar-hide space-x-5" ref={slider}>
                        {/* ================ Success Stories ===================== */}
                        {SuccessSt.map((curVal) => (
                            <div className="grid lg:grid-cols-2 2xl:gap-x-14 lg:gap-x-7 lg:gap-y-0 md:gap-y-5 sm:gap-y-4 gap-y-3 min-w-full" key={curVal.id} ref={scrollDiv}>
                                <div className="cursor-pointer">
                                    <img
                                        src={curVal.leftImage.src}
                                        alt={curVal.leftImage.alt}
                                        loading="lazy"
                                        className="w-full h-full rounded-xl"
                                    />
                                </div>
                                <div className="bg-teal-400 to-cyan-300 rounded-xl py-4 sm:px-5 px-4 flex flex-col justify-between cursor-pointer">
                                    <div className="space-y-3">
                                        <span className="xl:text-6xl text-5xl text-zinc-700">
                                            {curVal.rightLogo}
                                        </span>
                                        <h2 className="text-zinc-700 xl:text-3xl text-2xl font-semibold"> 
                                            {curVal.rightDes}
                                        </h2>
                                    </div>
                                    <div className="2xl:mt-20 xl:mt-14 lg:mt-5 md:mt-10 sm:mt-7 mt-5">
                                        <div className="py-2 border-b-2 border-zinc-700">
                                            <h2 className="text-zinc-700 text-lg font-semibold"> 
                                                {curVal.rightSmText}
                                            </h2>
                                        </div>

                                        <div className="mt-2">
                                            <h3 className="text-zinc-700 xl:text-2xl text-xl font-semibold"> 
                                                {curVal.rightFirRes}
                                            </h3>
                                            <p className="xl:text-lg text-md font-semibold text-zinc-700"> 
                                                {curVal.rightSecResDes}
                                            </p>
                                        </div>

                                        <div className="xl:mt-3 mt-2">
                                            <h3 className="text-zinc-700 xl:text-2xl text-xl font-semibold"> 
                                                {curVal.rightSecRes}
                                            </h3>
                                            <p className="xl:text-lg text-md font-semibold text-zinc-700"> 
                                                {curVal.rightSecResDes}
                                            </p>
                                        </div>

                                        <button className="2xl:mt-7 sm:mt-5 mt-3 px-4 xl:py-2 py-[5px] rounded-full bg-zinc-800 text-white duration-200 ease-in hover:bg-teal-900" onClick={() => router.push("#")}>
                                            {curVal.btn.text}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ======== Second section ============== */}
                <section className="container mx-auto lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        All Success Sotries
                    </h2>
                    
                    {/* ========== Success Story Section ============== */}
                    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-7 gap-y-7 mt-7">
                        {/* ========== first success component ========== */}
                        <div>
                            <div>
                                <Image
                                    src="/images/success-image.png"
                                    width={724}
                                    height={416}
                                    alt="success-image"
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="flex flex-wrap space-x-2">
                                <Link href="#">
                                <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Development & It 
                                    </a>
                                </Link>
                                <Link href="#">
                                <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Admin & Custom Support 
                                    </a>
                                </Link>
                                <Link href="#">
                                <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Design & Creative 
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Success Stories
                                    </a>
                                </Link>
                            </div>

                            <div className="mt-3">
                                <h2 className="text-zinc-800 font-semibold text-xl cursor-pointer">
                                    How the BISSELL Pet Foundation Saved 33,000 Animals 
                                </h2>
                            </div>
                        </div>

                        {/* ========== second success component ========== */}
                        <div>
                            <div>
                                <Image
                                    src="/images/success-image.png"
                                    width={724}
                                    height={416}
                                    alt="success-image"
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="flex flex-wrap space-x-2">
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Sales & Marketing
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Design & Creative
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Success Stories 
                                    </a>
                                </Link>
                            </div>

                            <div className="mt-3">
                                <h2 className="text-zinc-800 font-semibold text-xl cursor-pointer">
                                    How Amway Produced a Global Video Series in 3 Months, Across 5 Countries, and Saved $100,000
                                </h2>
                            </div>
                        </div>

                         {/* ========== Third success component ========== */}
                         <div>
                            <div>
                                <Image
                                    src="/images/success-image.png"
                                    width={724}
                                    height={416}
                                    alt="success-image"
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="flex flex-wrap space-x-2">
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Sales & Marketing
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Success Stories
                                    </a>
                                </Link>
                            </div>

                            <div className="mt-3">
                                <h2 className="text-zinc-800 font-semibold text-xl cursor-pointer">
                                    Why Remote Work Is the Strength Behind Brenda’s Social Media Team
                                </h2>
                            </div>
                        </div>

                        {/* ========== Fourth success component ========== */}
                        <div>
                            <div>
                                <Image
                                    src="/images/success-image.png"
                                    width={724}
                                    height={416}
                                    alt="success-image"
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="flex flex-wrap space-x-2">
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Development & It
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Success Stories
                                    </a>
                                </Link>
                            </div>

                            <div className="mt-3">
                                <h2 className="text-zinc-800 font-semibold text-xl cursor-pointer">
                                    How Engineering Teams Use Brenda To Scale
                                </h2>
                            </div>
                        </div>

                         {/* ========== Five success component ========== */}
                         <div>
                            <div>
                                <Image
                                    src="/images/success-image.png"
                                    width={724}
                                    height={416}
                                    alt="success-image"
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="flex flex-wrap space-x-2">
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Admin & Custom Support
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Success Stories
                                    </a>
                                </Link>
                            </div>

                            <div className="mt-3">
                                <h2 className="text-zinc-800 font-semibold text-xl cursor-pointer">
                                    How Customer Service Teams use Brenda to Scale
                                </h2>
                            </div>
                        </div>

                         {/* ========== Six success component ========== */}
                         <div>
                            <div>
                                <Image
                                    src="/images/success-image.png"
                                    width={724}
                                    height={416}
                                    alt="success-image"
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="flex flex-wrap space-x-2">
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Sales & Marketing
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Success Stories
                                    </a>
                                </Link>
                            </div>

                            <div className="mt-3">
                                <h2 className="text-zinc-800 font-semibold text-xl cursor-pointer">
                                    How Marketing Teams Use Brenda To Scale
                                </h2>
                            </div>
                        </div>

                         {/* ========== Seven success component ========== */}
                         <div>
                            <div>
                                <Image
                                    src="/images/success-image.png"
                                    width={724}
                                    height={416}
                                    alt="success-image"
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="flex flex-wrap space-x-2">
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Admin & Custom Support
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Success Stories
                                    </a>
                                </Link>
                            </div>

                            <div className="mt-3">
                                <h2 className="text-zinc-800 font-semibold text-xl cursor-pointer">
                                    How Engineering Teams Use Brenda To Scale
                                </h2>
                            </div>
                        </div>

                         {/* ========== Eight success component ========== */}
                         <div>
                            <div>
                                <Image
                                    src="/images/success-image.png"
                                    width={724}
                                    height={416}
                                    alt="success-image"
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="flex flex-wrap space-x-2">
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Admin & Custom Support
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="px-2 py-1 bg-zinc-200 transition hover:bg-zinc-300 rounded-full text-[15px] font-semibold text-zinc-500 cursor-pointer my-1"> 
                                        Success Stories
                                    </a>
                                </Link>
                            </div>

                            <div className="mt-3">
                                <h2 className="text-zinc-800 font-semibold text-xl cursor-pointer">
                                    How Engineering Teams Use Brenda To Scale
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========= Third Section ========== */}
                <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid md:grid-cols-2 md:gap-x-7 sm:px-7 px-5 sm:py-7 py-5 bg-[#c8eee6] rounded-xl">
                        {/* ======== left ======== */}
                        <div className="flex flex-col justify-between">
                            <div className="space-y-2">
                                <h2 className="text-zinc-800 lg:text-4xl text-3xl font-semibold">
                                    Join the world's work marketplace
                                </h2>
                                <p className="text-zinc-500 font-semibold text-lg">
                                    Find great talent. Find great work. Are you ready to move your business or career forward?
                                </p>
                            </div>

                            <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-4 sm:space-y-0 space-y-3 md:mt-10 mt-7">
                                <button className="px-5 py-2 bg-zinc-800 text-white text-lg font-semibold transition hover:bg-zinc-700 rounded-full" onClick={() => router.push("#")}>
                                    Find Talent
                                </button>
                                <button className="px-5 py-2 border border-zinc-800 font-semibold transition hover:text-zinc-600 rounded-full" onClick={() => router.push("#")}>
                                    Find Talent
                                </button>
                            </div>
                        </div>

                        {/* ======== right ======== */}
                        <div className="justify-self-end md:block hidden">
                            <Image
                                src="/images/find.png"
                                width={250}
                                height={170}
                                alt="find-image"
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* ==================== Footer ====================== */}
            <Footer/>
        </div>
    )
}

export default SuccessStories;