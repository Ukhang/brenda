import HeadTag from "../../components/HeadTag";
import Navbar from "../../components/Navbar/Navbar";
import Image from "next/dist/client/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRef, useState } from "react";
import Link from "next/link";
import Footer from '../../components/Footer';
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Staffing = () => {

    // =============== Hooks ====================
    const router = useRouter();
    const slider = useRef();
    const scrollDiv = useRef();
    const [linkI, useLinkI] = useState(true);
    const [linkII, useLinkII] = useState(false);

    const [showQues, useShowQues] = useState(false);

    // ================== List Function =======================
    const HandleLinkI = () => {
        useLinkI(true);
        (linkII === true) ? useLinkII(false) : null;
    }

    const HandleLinkII = () => {
        useLinkII(true);
        (linkI === true) ? useLinkI(false) : null;
    }

    // =============== Function ==================
    const SlideRight = () => {
        slider.current.scrollLeft = slider.current.scrollLeft + scrollDiv.current.offsetWidth + 20;
    }
    
    const SlideLeft = () => {
        slider.current.scrollLeft = slider.current.scrollLeft - scrollDiv.current.offsetWidth - 20;
    }


    // ================ Talent Scount Section array list ======================
    const TalentWorks = [
        {
            id: 1,
            number: 1,
            head: "Meet with your recruiter",
            des: "Give us a few details about your project and set up a time to talk with your recruiter."
        },

        {
            id: 2,
            number: 2,
            head: "Receive a shortlist",
            des: "After you meet, your recruiter will provide a shortlist of top matches based on your needs."
        },

        {
            id: 3,
            number: 3,
            head: "Interview candidates",
            des: "Talk to your top choices."
        },

        {
            id: 4,
            number: 4,
            head: "Select and hire",
            des: "Choose the best fit for your team."
        }
    ];

    // ====================== Pre Screen (four section) Category ============================
    const PreScreen = [
        {
            id: 1,
            img: {
                src: "/images/pre-devit.png",
                alt: "prodev-image"
            },
            name: "Development & It",
            link: "#"
        },

        {
            id: 2,
            img: {
                src: "/images/pre-design.png",
                alt: "predesign-image"
            },
            name: "Design & Creative",
            link: "#"
        },

        {
            id: 3,
            img: {
                src: "/images/pre-samk.png",
                alt: "presamk-image"
            },
            name: "Sales & Marketing",
            link: "#"
        }
    ];

    // =================== Global talent ==========================
    const GlobalTalent = [
        {
            id: 1,
            img: {
                src: "/images/global-tl1.png",
                alt: "grils-image"
            },
            name: "Maria S.",
            profText: "Senior Front-end developer with over 11 years of experience",
            text: '"Brenda has taken my business to the next level. Through Brenda, I have engaged with many high quality clients that I would not have been exposed to by my own means." '
        },

        {
            id: 2,
            img: {
                src: "/images/global-tl2.png",
                alt: "works-image"
            },
            name: "Stephen K.",
            profText: "Certified Magento, Shopify and BigCommerce Developer",
            text: '"I was able to triple my income because of Brenda. I love the chance I have to learn and grow my business through the platform."'
        },

        {
            id: 3,
            img: {
                src: "/images/global-tl3.png",
                alt: "works-image"
            },
            name: "Josh B.",
            profText: "SQL Server DBA | SQL Developer | Data Engineer",
            text: '"I wake up every day and get to do work I love because of Brenda. Ive worked over 8,000 hours on Brenda and it barely feels like it because I love what I do"'
        },

        {
            id: 4,
            img: {
                src: "/images/global-tl4.png",
                alt: "works-image"
            },
            name: "Ron Z.",
            profText: "Premium WordPress Development",
            text: '"Brenda has proven to be the best way for me to find high-quality clients and exciting work."'
        },

        {
            id: 5,
            img: {
                src: "/images/global-tl5.png",
                alt: "works-image"
            },
            name: "Maria N.",
            profText: "Premium websites for premium clients",
            text: '"My goal in 2021 is to reach $1M in earnings on Brenda. That said, I am very grateful for the opportunity that Brenda has created for professionals. '
        },
    ];

    // =========================== Top Location and Industries List ===============================
    const ListI = {
        left: [
            { id: 1, name: "Greenville", link: "#", },
            { id: 2, name: "Austin", link: "#", },
            { id: 3, name: "Miami", link: "#" },
            { id: 4, name: "Phoenix", link: "#" },
            { id: 5, name: "Agusta", link: "#" },
            { id: 6, name: "Colorado Springs", link: "#" },
            { id: 7, name: "Des Monies", link: "#" },
            { id: 8, name: "Greensboro", link: "#" },
        ],
        
        right: [
            { id: 1, name: "Orlando", link: "#" },
            { id: 2, name: "San Diago", link: "#" },
            { id: 3, name: "Charleston", link: "#" },
            { id: 4, name: "Columbus", link: "#" },
            { id: 5, name: "Fort Worth", link: "#" },
            { id: 6, name: "Kansas City", link: "#" },
            { id: 7, name: "Nashville", link: "#" },
            { id: 8, name: "Greensboro", link: "#" },
        ]
    }

    const ListII = {
        left: [
            { id: 1, name: "Engineering", link: "#", },
            { id: 2, name: "Media", link: "#", },
        ],

        right: [
            { id: 1, name: "Finance", link: "#" },
            { id: 2, name: "Technology", link: "#" },
        ]
    }


    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Talent Scout™: Recruitment Solutions to Help Scale Your Business"/>

            {/* ==================== Header ============== */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                {/* ============= Head Container =============== */}
                <div className="container mx-auto mt-5 md:px-3 sm:px-7 px-3">
                    <section className="grid md:grid-cols-2 grid-cols-1 sm:px-5 px-3 py-3 xl:gap-x-20 lg:gap-x-16 md:gap-x-10 bg-[#E6FAF6] rounded-xl">
                        <div className="lg:mt-2 mt-1 lg:ml-2 ml-1 mb-2">
                            <motion.h2 className="text-[#0C4A6E] font-semibold 2xl:text-6xl lg:text-5xl text-4xl"
                                initial={{y:30, opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                Partner with specialized recruiters to fill key roles on your team
                            </motion.h2>
                            <motion.p className="xl:text-xl text-lg text-zinc-700 lg:mt-5 mt-2"
                                initial={{y:"100%", opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:2}}
                            >
                                For projects lasting longer than a month, tell us what you need and we’ll help you find the right talent 
                            </motion.p>
                            <div className="sm:flex inline-flex lg:flex-row flex-col lg:items-center items-start xl:mt-14 lg:mt-10 mt-5 lg:space-x-7 space-x-0 lg:space-y-0 space-y-3">
                                <motion.button
                                    className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full"
                                    onClick={() => router.push("#")}
                                    initial={{x:-30, opacity:0}}
                                    animate={{x:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    Talk to a recruiter
                                </motion.button>
                                <button 
                                    className="underline font-semibold bg-transparent text-sky-700 hover:text-sky-800"
                                    onClick={() => router.push("#")}
                                >
                                    Looking for a work?
                                </button>
                            </div>
                        </div>
                        <motion.div className="md:block hidden justify-self-end"
                            initial={{x:30, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <Image
                                src="/images/st-banner.png"
                                width={592}
                                height={457}
                                alt="banner-image"
                                className="rounded-xl"
                            />
                        </motion.div>
                    </section>
                </div>
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* ================= First Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="lg:px-10 xl:px-7">
                        <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                            Here’s how Talent Scout works
                        </h2>
                        <p className="lg:mt-5 mt-3 text-zinc-600 sm:text-lg">
                            Your project must be at least one month in duration to be eligible.
                        </p>

                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xl:gap-x-10 md:gap-7 xl:gap-y-0 sm:gap-y-5 gap-y-4 lg:mt-7 mt-3">
                           {TalentWorks.map((curVal) => (
                                <div className="flex space-x-3 items-start" key={curVal.id}>
                                    <div className="bg-gradient-to-tr from-zinc-700 to-gray-500 rounded-full font-semibold text-white text-lg px-[11px] py-[1px]">
                                        {curVal.number}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-zinc-800 font-semibold sm:text-lg"> 
                                            {curVal.head} 
                                        </h4>
                                        <p className="lg:text-[17px] text-zinc-500 font-semibold">
                                            {curVal.des}
                                        </p>
                                    </div>
                                </div>
                           ))}
                        </div>

                        <button className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full lg:mt-8 mt-4" onClick={() => router.push("#")}>
                            Talk to a recruiter
                        </button>
                    </div>
                </section>

                {/* ================= Second Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-x-7 xl:gap-x-16 lg:gap-x-14 lg:gap-y-0 gap-y-5 items-center">
                        <div>
                            <Image
                                src="/images/st-scst.png"
                                width={650}
                                height={510}
                                alt="girlsworkingpc-image"
                                className="rounded-xl lg:w-auto w-full"
                            />
                        </div>

                        <div className="2xl:space-y-7 lg:space-y-5 space-y-4">
                            <motion.h2 className="text-[#0C4A6E] xl:text-4xl text-3xl font-semibold"
                                initial={{y:"100%", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                Talent Scout recruiters help you and your team
                            </motion.h2>

                            <motion.div className="flex flex-col xl:space-y-2 space-y-1"
                                initial={{y:"100%", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <h4 className="text-zinc-800 xl:text-xl text-lg font-semibold">
                                    Navigate hiring with an expert on your side
                                </h4>
                                <p className="text-zinc-500 xl:text-[17px] font-semibold">
                                    Our specialized recruiters are all about partnership. They know our talent community and can help match your business needs to the right professionals.
                                </p>
                            </motion.div>

                            <motion.div className="flex flex-col xl:space-y-2 space-y-1"
                                 initial={{y:"100%", opacity:0}}
                                 whileInView={{y:0, opacity:1}}
                                 transition={{duration:1}}
                            >
                                <h4 className="text-zinc-800 xl:text-xl text-lg font-semibold">
                                    Eliminate guesswork
                                </h4>
                                <p className="text-zinc-500 xl:text-[17px] font-semibold">
                                    To find the right skill mix to fill a role for a month or longer, Talent Scout recruiters get to know each person individually, assessing whether their hard and soft skills will be the right fit for your team.
                                </p>
                            </motion.div>

                            <motion.div className="flex flex-col xl:space-y-2 space-y-1"
                                initial={{y:"100%", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <h4 className="text-zinc-800 xl:text-xl text-lg font-semibold">
                                    Navigate hiring with an expert on your side
                                </h4>
                                <p className="text-zinc-500 xl:text-[17px] font-semibold">
                                    Our specialized recruiters are all about partnership. They know our talent community and can help match your business needs to the right professionals.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ================= Third Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        Leading brands trust Talent Scout
                    </h2>
                    <p className="mt-3 text-zinc-600 sm:text-lg">
                        From startups to Fortune 500: brands trust our recruiters to help find the best people for them
                    </p>

                    <motion.div className="flex md:flex-row flex-col md:space-x-7 md:space-y-0 space-y-2 md:items-center lg:mt-5 sm:mt-4 mt-3"
                        initial={{y:"100%", opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        <div className="flex 2xl:space-x-10 xl:space-x-7 sm:space-x-6 space-x-3">
                            <span>
                                <Image src="/images/paypal.png" height={30} width={90} alt="paypal-img"/>
                            </span>
                            <span>
                                <Image src="/images/adobe.png" height={30} width={90} alt="adobe-img"/>
                            </span>
                            <span>
                                <Image src="/images/oracle.png" height={30} width={90} alt="oracle-img"/>
                            </span>
                            <span>
                                <Image src="/images/google.png" height={30} width={90} alt="google-img"/>
                            </span>
                        </div>
                        <div className="flex 2xl:space-x-10 xl:space-x-7 sm:space-x-6 space-x-4">
                            <span>
                                <Image src="/images/microsoft.png" height={30} width={110} alt="microsoft-img"/>
                            </span>
                            <span>
                                <Image src="/images/airnob.png" height={30} width={90} alt="airbnb-img"/>
                            </span>
                            <span>
                                <Image src="/images/netflix.png" height={30} width={90} alt="netflix-img"/>
                            </span>
                        </div>
                    </motion.div>
                </section>

                {/* ================= Four Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3 space-y-7">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        Pre-screened talent available to start in these fields
                    </h2>

                    <div className="grid md:grid-cols-3 xl:gap-x-20 lg:gap-x-10 md:space-x-5 md:gap-y-0 sm:gap-y-4 gap-y-3">
                        {PreScreen.map((curVal) => (
                            <Link href={curVal.link} key={curVal.id}>
                                <motion.div className="bg-[#dafaf3] flex md:flex-col flex-row items-center sm:px-3 px-2 xl:py-7 lg:py-6 md:py-4 py-1 lg:space-y-3 md:space-y-1 md:space-x-0 sm:space-x-3 space-x-2 rounded-xl cursor-pointer duration-300 ease-in hover:bg-[#c4e4dc]"
                                    initial={{opacity:0}}
                                    whileInView={{opacity:1}}
                                    transition={{duration:1}}
                                >
                                    <div>
                                        <Image
                                            src={curVal.img.src}
                                            width={130}
                                            height={120}
                                            alt={curVal.img.alt}
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-zinc-800 font-semibold 2xl:text-2xl text-xl">
                                            {curVal.name}
                                        </h2>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ================= Five Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        Work with in-demand global talent <br className="hidden sm:block"/> who are at the top of their field
                    </h2>

                    <div className="relative flex items-center">
                        {/* ================ Left Button ================= */}
                        <button className="left-[-1rem] scroll-btn hidden sm:block" onClick={SlideLeft}>
                            <FaChevronLeft/>
                        </button>

                        <div className="flex 2xl:space-x-10 lg:space-x-7 space-x-5 overflow-x-scroll scroll scroll-smooth sm:scrollbar-hide lg:mt-7 mt-4 md:mx-3 sm:mx-2" ref={slider}>
                           {GlobalTalent.map((curVal) => (
                             <div className="flex md:flex-row flex-col md:space-x-4 items-start bg-[#DAF8F2] md:px-5 px-4 lg:pt-5 lg:pb-7 py-4 rounded-lg 2xl:min-w-[42rem] xl:min-w-[36rem] md:min-w-[28rem] sm:min-w-[20rem] min-w-full" key={curVal.id} ref={scrollDiv}>
                                <Image
                                    src={curVal.img.src}
                                    width={90}
                                    height={90}
                                    alt={curVal.img.alt}
                                    className="rounded-full w-full"
                                />
                                <div className="md:w-[70%] lg:mt-0 mt-2">
                                    <h4 className="xl:text-2xl sm:text-xl text-lg font-semibold text-zinc-800">
                                        {curVal.name}
                                    </h4>
                                    <p className="text-zinc-800 2xl:text-xl sm:text-lg font-semibold mt-1">
                                        {curVal.profText}
                                    </p>
                                    <p className="text-zinc-600 sm:text-[15px] text-[14px] font-semibold sm:my-2 my-1">
                                        {curVal.text}
                                    </p>
                                </div>
                            </div>
                           ))}
                        </div>
                            
                        {/* ================ Right Button ================= */}
                        <button className="right-[-1rem] scroll-btn hidden sm:block" onClick={SlideRight}>
                            <FaChevronRight/>
                        </button>
                    </div>
                </section>

                {/* ================= Six Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="flex md:flex-row flex-col md:items-start sm:items-center md:space-y-0 space-y-7 xl:justify-around justify-between">
                        <ul className="flex md:flex-col flex-row md:items-start items-center space-x-5 md:space-x-0 md:space-y-6 space-y-0 sm:w-auto sm:h-auto w-full h-full">
                            <li 
                                className={`font-semibold lg:text-3xl text-2xl ${(linkI === true) ? "text-[#0C4A6E]" : "text-gray-300"}`}
                            >
                            <span className="cursor-pointer" onClick={HandleLinkI}>
                                Top Locations
                            </span>
                            </li>
                            <li
                                className={`font-semibold lg:text-3xl text-2xl ${(linkII === true) ? "text-[#0C4A6E]" : "text-gray-300"}`} 
                            >
                                <span className="cursor-pointer" onClick={HandleLinkII}>
                                    Industries
                                </span>
                            </li>
                        </ul>

                        <div className="flex lg:space-x-24 sm:space-x-10 space-x-8">
                            {linkI && <ul className="flex flex-col space-y-3">
                                {ListI.left.map((curVal) => (
                                    <li
                                        className="font-semibold lg:text-lg text-md text-zinc-500 hover:text-cyan-700 hidde"
                                        key={curVal.id}
                                    >
                                    <Link href={curVal.link}>
                                        {curVal.name}
                                    </Link>
                                </li>
                                ))}
                            </ul>}
                            {linkI && <ul className="flex flex-col space-y-3">
                                {ListI.right.map((curVal) => (
                                    <li
                                        className="font-semibold lg:text-lg text-md text-zinc-500 hover:text-cyan-700"
                                        key={curVal.id}
                                    >
                                    <Link href={curVal.link}>
                                        {curVal.name}
                                    </Link>
                                </li>
                                ))}
                            </ul>}

                            {linkII && <ul className="flex flex-col space-y-3">
                                {ListII.left.map((curVal) => (
                                    <li
                                        className="font-semibold lg:text-lg text-md text-zinc-500 hover:text-cyan-700"
                                        key={curVal.id}
                                    >
                                    <Link href={curVal.link}>
                                        {curVal.name}
                                    </Link>
                                </li>
                                ))}
                            </ul>}
                            {linkII && <ul className="flex flex-col space-y-3">
                                {ListII.right.map((curVal) => (
                                    <li
                                        className="font-semibold lg:text-lg text-md text-zinc-500 hover:text-cyan-700"
                                        key={curVal.id}
                                    >
                                    <Link href={curVal.link}>
                                        {curVal.name}
                                    </Link>
                                </li>
                                ))}
                            </ul>}
                        </div>
                    </div>
                </section>

                {/* ================= Seven Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="lg:grid lg:grid-cols-2 2xl:gap-x-0 xl:gap-x-1 lg:gap-x-3 rounded-xl flex flex-col lg:items-start items-center 2xl:px-10 xl:px-5 md:px-3 sm:px-2 px-3 bg-[#dafaf3]">
                    {/* ================ This is alwayse same not change =================== */}
                    <div>
                        <h2 className="xl:text-4xl text-3xl font-semibold text-zinc-800 mt-7 lg:mb-16 sm:mb-7 mb-5">
                            Frequently asked questions
                        </h2>
                        <Image
                            src={"/images/qus2.png"}
                            width={550}
                            height={500}
                            alt="question-ask-image"
                            className="w-full"
                        />
                    </div>

                    {/* ==================== This is props to chagne ======================= */}
                    <div className="lg:px-7 sm:px-5 px-0 sm:py-5 py-3">
                        <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                            <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                Why use talent scout?
                            </h4>
                            <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                It's the quick way to hire highly-qualified talent – and with very little effort on your part.
                            </p>
                        </div>

                        <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                            <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                Who can I meet this way?
                            </h4>
                            <p className="text-zinc-600 xl:text-xl text-lg text-md">
                                People with years of experience in creative, design, development, and marketing: the very best people on our platform, handpicked from hundreds of thousands globally.
                            </p>
                        </div>

                        <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                            <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                How is Talent Scout different from a staffing agency?
                            </h4>
                            <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                First off, we’re fast. Staffing agencies can take weeks and even months to find the right fit, and often mark up costs by 75% (that’s on the low end).
                            </p>
                        </div>

                        <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                            <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                Do I have to pay for this service?
                            </h4>
                            <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                When our specialized recruiters share your shortlist with you, they’ll include the hourly rate for each professional – that’s all you’ll pay: there aren’t any extra fees outside these rates.
                            </p>
                        </div>

                        <div className="xl:py-7 sm:py-5 py-3 space-y-2">
                            <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                How can Talent Scout support your business?
                            </h4>
                            <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                When you need to move important work forward, working with Talent Scout makes finding the highly skilled talent you need easy, fast, and cost effective. 
                            </p>
                            <p className={`mt-2 text-zinc-600 xl:text-xl sm:text-lg text-md ${(showQues == true) ? "block" : "hidden"}`}>
                                Our specialized recruiters have experience in the legal industry that enables them to do the heavy lifting on your behalf. In as few as two days, they’ll get back to you with a curated list of pre-vetted remote professionals who tick all the right boxes, selected from the global pool of talent on Brenda.
                            </p>
                            <p className={`mt-2 text-zinc-600 xl:text-xl sm:text-lg text-md ${(showQues == true) ? "block" : "hidden"}`}>
                                You don’t pay until you choose a professional who’s a good match for your project, and  you avoid the high fees and markups that are typical for traditional recruiting firms.
                            </p>

                            <button className="underline text-sky-900 font-semibold text-lg flex items-center" onClick={() => {(showQues == false) ? useShowQues(true) : useShowQues(false)}}>
                                View less 
                                <FaChevronRight className={`text-sm ml-1 transition ${(showQues == true) ? "rotate-0" : "rotate-90"}`}/>
                            </button>
                        </div>
                    </div>
                    </div>
                </section>

                {/* ================= Eight Section ================== */}
                <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="md:grid lg:grid-cols-3 grid-cols-2 xl:gap-x-10 lg:gap-x-7 gap-x-5 flex flex-col md:space-y-0 space-y-4 bg-[#5CA3C5] lg:px-3 sm:px-5 px-3 py-3 rounded-lg">
                        <Image
                            src="/images/redy.png"
                            width={220}
                            height={170}
                            layout="responsive"
                            loading="lazy"
                            alt="showes-image"
                            className="rounded-lg"
                        />

                        <div className="flex flex-col justify-between lg:space-y-10 space-y-5 md:mt-1 mt-2 lg:col-span-2">
                            <div>
                                <h2 className="lg:text-4xl text-2xl text-gray-100 font-semibold">
                                    Take the first step toward a smarter talent strategy
                                </h2>
                            </div>
                            <div className="lg:flex lg:space-x-7 inline border-t border-gray-100 justify-between py-3 xl:space-y-0 space-y-3">
                              <div>
                                <h2 className="text-gray-100 font-semibold xl:text-lg">
                                        Access a pre-screened pool of remote talent, shortlisted for you by specialized recruiters who help you select the best talent based on your business needs.
                                    </h2>
                              </div>

                               <div className="min-w-[25%]">
                                    <button
                                        className="bg-gray-100 text-zinc-800 px-3 lg:py-2 py-1 rounded-full font-semibold transition hover:bg-gray-200"
                                        onClick={() => router.push("#")}
                                    >
                                        Talk to a recruiter
                                    </button>
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

export default Staffing;