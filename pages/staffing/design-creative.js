import Navbar from "../../components/Navbar/Navbar";
import HeadTag from "../../components/HeadTag";
import Image from "next/image";
import { BiErrorCircle } from "react-icons/bi";
import { FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { useState, useRef } from "react";
import TrustedCom from "../../components/TrustedCom";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

const Development = () => {

    // ==================== Hooks Call ========================
    const router = useRouter();
    const slider = useRef();
    const scrollDiv = useRef();

    const [tranOne, useTranOne] = useState(true);
    const [tranTwo, useTranTwo] = useState(false);
    const [tranThree, useTranThree] = useState(false);

    const [showQues, useShowQues] = useState(false);

    // =================== Function =================
    const HandleTranOne = () => {
        useTranOne(true);

        (tranTwo == true) ? useTranTwo(false) : null;
        (tranThree == true) ? useTranThree(false) : null;
    }

    const HandleTranTwo = () => {
        useTranTwo(true);

        (tranOne == true) ? useTranOne(false) : null;
        (tranThree == true) ? useTranThree(false) : null;
    }
    
    const HandleTranThree = () => {
        useTranThree(true);

        (tranOne == true) ? useTranOne(false) : null;
        (tranTwo == true) ? useTranTwo(false) : null;
    }

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
            head: "Sign up and set up your meeting",
            des: "Give us a few details and set up a time to talk with your recruiter"
        },

        {
            id: 2,
            number: 2,
            head: "Meet with your recruiter",
            des: "Your recruiter will show up with a shortlist of “top matches”"
        },

        {
            id: 3,
            number: 3,
            head: "Review and hire your talent",
            des: "Interview the top matches, see who’s a hire, or get another shortlist"
        }
    ];

    // ================ Find the Tachnical ==============================
    const FindTac = [
        { id: 1, name: "UI/UX Designers", link: "#"},
        { id: 2, name: "Graphic Designers", link: "#"},
        { id: 3, name: "Web Designers", link: "#"},
        { id: 4, name: "Video Editors", link: "#"},
        { id: 5, name: "Animators", link: "#"},
        { id: 6, name: "Brand Designers", link: "#"},
        { id: 7, name: "Illustrator", link: "#"},
        { id: 8, name: "Copywriters", link: "#"},
        { id: 9, name: "Photo Editors", link: "#"},
        { id: 10, name: "Art Directors", link: "#"},
        { id: 11, name: "Sound Engineers", link: "#"},
        { id: 12, name: "Browse more", link: "#"},
    ]

    // =================== Elite talent ==========================
    const EliteTalent = [
        {
            id: 1,
            img: {
                src: "/images/cr-et1.png",
                alt: "grils-image"
            },
            name: "Nina K.",
            profText: "UI/UX Designer",
            text: "I've been working as a designer for more than 15 years, with the last 6 years focused on UX...",
            btText: "Previously at:",
            btImg: {
                src: "/images/linkdin-logo.png",
                alt: "linkdinlogo-image"
            }
        },

        {
            id: 2,
            img: {
                src: "/images/cr-et2.png",
                alt: "works-image"
            },
            name: "Dmitry S.",
            profText: "Motion Graphics Designers",
            text: "I have more than 12 years of experience in software development and have built teams at Shopify...",
            btText: "Previously at:",
            btImg: {
                src: "/images/sopify-logo.png",
                alt: "sopifylogo-image"
            }
        },

        {
            id: 3,
            img: {
                src: "/images/cr-et3.png",
                alt: "works-image"
            },
            name: "Josh R.",
            profText: "Video Ediors",
            text: "Im an ex-Apple Engineer with over 9 years of experience as a Software Developer/SDET. I have...",
            btText: "Previously at:",
            btImg: {
                src: "/images/apple-logo.png",
                alt: "appelogo.png"
            }
        },

        {
            id: 4,
            img: {
                src: "/images/cr-et4.png",
                alt: "works-image"
            },
            name: "Ryan G.",
            profText: "Graphics Designers",
            text: "I specialize in complex Salesforce CRM application customizations with high performing data...",
            btText: "Previously at:",
            btImg: {
                src: "/images/walmart-logo.png",
                alt: "walmartlogo-image"
            }
        },

        {
            id: 5,
            img: {
                src: "/images/cr-et5.png",
                alt: "works-image"
            },
            name: "Nick K.",
            profText: "Photographer & Photo Editor",
            text: "Spent the last 6 years doing DevOps and Cloud Automation / Architecture in a secure...",
            btText: "Previously at:",
            btImg: {
                src: "/images/stanford-logo.png",
                alt: "stanfordlogo-image"
            }
        },

        {
            id: 6,
            img: {
                src: "/images/cr-et6.png",
                alt: "works-image"
            },
            name: "Cristian S.",
            profText: "Designer",
            text: "Senior software engineer with 8+ years of experience specialized in building premium user...",
            btText: "Previously at:",
            btImg: {
                src: "/images/cocacola-logo.png",
                alt: "cocacola-image"
            }
        },

        {
            id: 7,
            img: {
                src: "/images/cr-et7.png",
                alt: "works-image"
            },
            name: "Joshua B.",
            profText: "Illustrator",
            text: "Extensive experience as a SQL Server DBA (Versions 2000 - 2019) methodically identifying and...",
            btText: "Previously at:",
            btImg: {
                src: "/images/paypal-logo.png",
                alt: "paypallogo-image"
            }
        },

        {
            id: 8,
            img: {
                src: "/images/cr-et8.png",
                alt: "works-image"
            },
            name: "Hilary D.",
            profText: "Graphic Designer",
            text: "have 20+ years in designing, developing, and delivering quality software and will work...",
            btText: "Previously at:",
            btImg: {
                src: "/images/america-bank.png",
                alt: "americabanklogo-image"
            }
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Creative Staffing Solutions: Get Top Creative Talent with Brenda"/>

            {/* ============== Navbar ============ */}
            <header className="header-bg">
                <Navbar/>

                 {/* ============= Head Container =============== */}
                 <div className="container mx-auto mt-5 md:px-3 sm:px-7 px-3">
                    <section className="grid md:grid-cols-2 grid-cols-1 sm:px-5 px-3 py-3 xl:gap-x-16 md:gap-x-10 bg-[#E6FAF6] rounded-xl">
                        {/* ====================== Left =================== */}
                        <div className="lg:py-2 py-1 lg:pl-2 pl-1 flex flex-col justify-between space-y-7">
                            <div>
                                <motion.h2 className="text-[#0C4A6E] font-semibold 2xl:text-6xl lg:text-5xl text-4xl"
                                    initial={{y:-30, opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    Your quick route to the best creative talent
                                </motion.h2>
                                <motion.p className="xl:text-xl text-lg text-zinc-700 lg:mt-5 mt-2"
                                    initial={{y:"100%", opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{duration:2}}
                                >
                                    Let our recruiters find the right fit for your objectives with Talent Scout™.
                                </motion.p>
                                <div className="sm:flex inline-flex lg:flex-row flex-col lg:items-center items-start xl:mt-14 lg:mt-10 mt-5 lg:space-x-7 space-x-0 lg:space-y-0 space-y-3">
                                    <motion.button
                                        className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full"
                                        onClick={() => router.push("#")}
                                        initial={{x:-30, opacity:0}}
                                        animate={{x:0, opacity:1}}
                                        transition={{duration:1}}
                                    >
                                        Hire a Top Creative
                                    </motion.button>
                                    <button 
                                        className="underline font-semibold bg-transparent text-sky-700 hover:text-sky-800"
                                        onClick={() => router.push("#")}
                                    >
                                        Looking for a work?
                                    </button>
                                </div>
                            </div>

                            <div className="relative bottom-2 flex items-center space-x-2 font-semibold text-zinc-600 lg:text-[1rem] text-sm">
                                <span> <BiErrorCircle/> </span>
                                <span>
                                    No cost or obligation until you find the right fit
                                </span>
                            </div>
                        </div>

                        {/* ====================== Right =================== */}
                        <motion.div className="relative overflow-x-hidden"
                            initial={{x:-30, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className={`md:grid lg:grid-cols-2 2xl:gap-x-7 xl:gap-x-5 lg:gap-x-4 absolute hidden justify-self-end duration-500 ease-in ${(tranOne == true) ? "translate-x-[0%]" : "translate-x-[300%]"}`}>
                                <div className="bg-white px-4 py-3 md:flex flex-col justify-between max-w-sm lg:min-h-[25rem] min-h-[24rem] rounded-lg relative">
                                    <div>
                                        <div className="flex space-x-4 items-center">
                                            <Image
                                                src="/images/samsang-cre.png"
                                                width={100}
                                                height={100}
                                                alt="samsangcre-image"
                                                className="rounded-full"
                                            />

                                            <div>
                                                <h2 className="xl:text-2xl text-xl font-semibold text-zinc-800">
                                                    Ferna P.
                                                </h2>
                                                <span className="text-zinc-500 font-semibold">
                                                    UX/UI Designer
                                                </span>
                                            </div>
                                        </div>

                                        <div className="my-3 space-y-2">
                                            <div className="flex items-center space-x-1 text-zinc-800 font-semibold">
                                                <FaStar className="text-sm text-green-600 mr-1"/>
                                                5/5 <span className="text-zinc-500"> (26 jobs) </span>
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="skill-box m-1"> Sketch </div>
                                                <div className="skill-box m-1"> Wireframing </div>
                                                <div className="skill-box m-1"> Mobile UI </div>
                                                <div className="skill-box m-1"> Figma </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h6 className="text-zinc-500 font-semibold">
                                            Previously worked at:
                                        </h6>
                                        <div>
                                            <Image
                                                src="/images/samesang-logo.png"
                                                width={140}
                                                height={30}
                                                alt="googlelogo-image"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white px-4 py-3 lg:flex flex-col justify-between hidden max-w-sm lg:min-h-[25rem] min-h-[24rem] rounded-lg relative">
                                    <div>
                                        <div className="flex space-x-4 items-center">
                                            <Image
                                                src="/images/mastercard-cre.png"
                                                width={100}
                                                height={100}
                                                alt="mastercardcre-image"
                                                className="rounded-full"
                                            />

                                            <div>
                                                <h2 className="xl:text-2xl text-xl font-semibold text-zinc-800">
                                                    Timot D.
                                                </h2>
                                                <span className="text-zinc-500 font-semibold">
                                                    Graphic Designer
                                                </span>
                                            </div>
                                        </div>

                                        <div className="my-3 space-y-2">
                                            <div className="flex items-center space-x-1 text-zinc-800 font-semibold">
                                                <FaStar className="text-sm text-green-600 mr-1"/>
                                                5/5 <span className="text-zinc-500"> (51 jobs) </span>
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="skill-box m-1"> Photoshop </div>
                                                <div className="skill-box m-1"> InDesign </div>
                                                <div className="skill-box m-1"> Logo Design </div>
                                                <div className="skill-box m-1"> Art </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h6 className="text-zinc-500 font-semibold">
                                            Previously worked at:
                                        </h6>
                                        <div>
                                            <Image
                                                src="/images/mastercard-logo.png"
                                                width={50}
                                                height={30}
                                                alt="mastercardlogo-image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`md:grid lg:grid-cols-2 2xl:gap-x-7 xl:gap-x-5 lg:gap-x-4 absolute hidden justify-self-end duration-500 ease-in ${(tranTwo == true) ? "translate-x-[0%]" : "translate-x-[300%]"}`}>
                                <div className="bg-white px-4 py-3 md:flex flex-col justify-between max-w-sm lg:min-h-[25rem] min-h-[24rem] rounded-lg relative">
                                    <div>
                                        <div className="flex space-x-4 items-center">
                                            <Image
                                                src="/images/cocacola-cre.png"
                                                width={100}
                                                height={100}
                                                alt="cocacolacre-image"
                                                className="rounded-full"
                                            />

                                            <div>
                                                <h2 className="xl:text-2xl text-xl font-semibold text-zinc-800">
                                                    Oma K.
                                                </h2>
                                                <span className="text-zinc-500 font-semibold">
                                                    Video Editor
                                                </span>
                                            </div>
                                        </div>

                                        <div className="my-3 space-y-2">
                                            <div className="flex items-center space-x-1 text-zinc-800 font-semibold">
                                                <FaStar className="text-sm text-green-600 mr-1"/>
                                                5/5 <span className="text-zinc-500"> (26 jobs) </span>
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="skill-box m-1"> Video Editing </div>
                                                <div className="skill-box m-1"> Video Graphy </div>
                                                <div className="skill-box m-1"> Motiion Graphics </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h6 className="text-zinc-500 font-semibold">
                                            Previously worked at:
                                        </h6>
                                        <div>
                                            <Image
                                                src="/images/cocacola-cre-logo.png"
                                                width={90}
                                                height={30}
                                                alt="cocacola-image"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white px-4 py-3 lg:flex flex-col justify-between hidden max-w-sm lg:min-h-[25rem] min-h-[24rem] rounded-lg relative">
                                    <div>
                                        <div className="flex space-x-4 items-center">
                                            <Image
                                                src="/images/pixar-cre.png"
                                                width={100}
                                                height={100}
                                                alt="pixercre-image"
                                                className="rounded-full"
                                            />

                                            <div>
                                                <h2 className="xl:text-2xl text-xl font-semibold text-zinc-800">
                                                    Denis K.
                                                </h2>
                                                <span className="text-zinc-500 font-semibold">
                                                    Animator
                                                </span>
                                            </div>
                                        </div>

                                        <div className="my-3 space-y-2">
                                            <div className="flex items-center space-x-1 text-zinc-800 font-semibold">
                                                <FaStar className="text-sm text-green-600 mr-1"/>
                                                5/5 <span className="text-zinc-500"> (51 jobs) </span>
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="skill-box m-1"> Motion Graphics </div>
                                                <div className="skill-box m-1"> Visual Effects </div>
                                                <div className="skill-box m-1"> VFX Design </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h6 className="text-zinc-500 font-semibold">
                                            Previously worked at:
                                        </h6>
                                        <div>
                                            <Image
                                                src="/images/pixar-cre-logo.png"
                                                width={150}
                                                height={30}
                                                alt="pixar-image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`md:grid lg:grid-cols-2 2xl:gap-x-7 xl:gap-x-5 lg:gap-x-4 hidden justify-self-end duration-500 ease-in ${(tranThree == true) ? "translate-x-[0%]" : "translate-x-[300%]"}`}>
                                <div className="bg-white px-4 py-3 md:flex flex-col justify-between max-w-sm lg:min-h-[25rem] min-h-[24rem] rounded-lg relative">
                                    <div>
                                        <div className="flex space-x-4 items-center">
                                            <Image
                                                src="/images/kimbarle-cre.png"
                                                width={100}
                                                height={100}
                                                alt="kimbarle-cre-image"
                                                className="rounded-full"
                                            />

                                            <div>
                                                <h2 className="xl:text-2xl text-xl font-semibold text-zinc-800">
                                                    Kimberly T.
                                                </h2>
                                                <span className="text-zinc-500 font-semibold">
                                                    Illustrator
                                                </span>
                                            </div>
                                        </div>

                                        <div className="my-3 space-y-2">
                                            <div className="flex items-center space-x-1 text-zinc-800 font-semibold">
                                                <FaStar className="text-sm text-green-600 mr-1"/>
                                                5/5 <span className="text-zinc-500"> (15 jobs) </span>
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="skill-box m-1"> Vector Tracing </div>
                                                <div className="skill-box m-1"> Comic </div>
                                                <div className="skill-box m-1"> Illustrator </div>
                                                <div className="skill-box m-1"> Logo Design </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h6 className="text-zinc-500 font-semibold">
                                            Previously worked at:
                                        </h6>
                                        <div>
                                            <Image
                                                src="/images/kimbarle-logo.png"
                                                width={150}
                                                height={30}
                                                alt="kimbarle-logo-image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* =========== dot box ============= */}
                            <div className="md:flex hidden space-x-2 justify-center mt-4 mb-2">
                                <div className={`px-1 py-1 ${(tranOne == true) ? "bg-zinc-800" : "bg-zinc-400"} rounded-full cursor-pointer`} onClick={HandleTranOne}></div>

                                <div className={`px-1 py-1 ${(tranTwo == true) ? "bg-zinc-800" : "bg-zinc-400"} rounded-full cursor-pointer`} onClick={HandleTranTwo}></div>

                                <div className={`px-1 py-1 ${(tranThree == true) ? "bg-zinc-800" : "bg-zinc-400"} rounded-full cursor-pointer`} onClick={HandleTranThree}></div>
                            </div>
                        </motion.div>
                    </section>
                </div>
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* ============= First Section =============== */}
                <TrustedCom/>

                {/* ============= Second Section =============== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-x-0 lg:gap-x-16 md:gap-x-7 items-center md:">
                        <div>
                            <Image
                                src="/images/sortlist-cre.jpg"
                                width="510"
                                height="370"
                                alt="sortlistcre-image"
                                className="rounded-xl"
                            />
                        </div>

                        <div>
                            <motion.h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold md:mt-0 mt-2"
                                initial={{y:50, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                We shortlist the best creative talent. You select.
                            </motion.h2>
                            <motion.p className="text-zinc-600 sm:text-lg text-md lg:mt-5 mt-3"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                Our recruiters look at the talent’s creative ‘hard’ skills and their ‘soft skills’ to help make sure they can hit the ground running. We then put forward a shortlist of names from our pool of proven remote talent, all ready to help you meet your goals on time and within budget. <br/> <br/>
                                With Talent Scout they’ll be ready to jumpstart your creative overhaul in days, without the high cost of a traditional creative staffing agency. And there’s nothing to pay until you choose the right candidate for you.                            
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* ================ Third Section =============== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="lg:px-10 xl:px-7">
                        <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                            Build relationships with remote talent you trust
                        </h2>
                        <p className="lg:mt-5 mt-3 text-zinc-600 sm:text-lg">
                            It all starts with a conversation—we’ll work with you to find out what hard and soft skills you’re looking for, quickly zero in on a shortlist of candidates, and guide your through the hiring process.
                        </p>

                        <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-x-10 md:gap-7 xl:gap-y-0 sm:gap-y-5 gap-y-4 lg:mt-7 mt-3">
                           {TalentWorks.map((curVal) => (
                                <motion.div className="flex space-x-3 items-start" key={curVal.id}
                                    initial={{y:30, opacity:0}}
                                    whileInView={{y:0, opacity:1}}
                                    transition={{duration:1}}
                                >
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
                                </motion.div>
                           ))}
                        </div>

                        <button className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full lg:mt-8 mt-4" onClick={() => router.push("#")}>
                            Hire the Right Creative
                        </button>
                    </div>
                </section>

                {/* =============== Fourth Section ================= */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        Find the perfect Creative fit
                    </h2>

                    <div className="flex flex-wrap lg:mt-5 mt-3">
                        {FindTac.map((curVal) => (
                            <Link href={curVal.link} key={curVal.id}>
                                <a className="flex items-center py-2 px-3 bg-[#dafaf3] rounded-full mx-2 my-2 font-semibold text-zinc-800 cursor-pointer hover:text-blue-600"> 
                                    {curVal.name} 
                                    <FiArrowRight className="ml-2"/>
                                </a>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ============= Five Section ================= */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        In their own words
                    </h2>

                    <div className="grid lg:grid-cols-2 xl:gap-x-10 lg:gap-x-7 lg:gap-y-0 md:gap-y-4 gap-y-3 lg:mt-7 md:mt-5 mt-3">
                        <motion.div className="flex md:flex-row flex-col md:space-x-4 items-start bg-[#dafaf3] md:px-5 px-4 lg:pt-5 lg:pb-7 py-4 rounded-sm"
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{duration:1}}
                        >
                            <Image
                                src="/images/cardbn.png"
                                width={90}
                                height={90}
                                alt="girls-image"
                                className="rounded-full w-full"
                            />
                            <div className="md:w-[70%] lg:mt-0 mt-2">
                                <h4 className="xl:text-2xl sm:text-xl text-lg font-semibold text-zinc-800">
                                    Cara Bedford
                                </h4>
                                <p className="text-zinc-800 2xl:text-xl sm:text-lg font-semibold">
                                    Director Strategic Marketing, CompuVision
                                </p>
                                <p className="text-zinc-600 sm:text-[15px] text-[14px] font-semibold mt-3">
                                    “The freelance talent that I’m able to access creates productivity in a way that I don’t think any of us thought possible.”
                                </p>
                            </div>
                        </motion.div>

                        <motion.div className="flex md:flex-row flex-col md:space-x-4 items-start bg-[#dafaf3] md:px-5 px-4 lg:pt-5 lg:pb-7 py-4 rounded-sm"
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{duration:1}}
                        >
                            <Image
                                src="/images/sameford.png"
                                width={90}
                                height={90}
                                alt="webdev-image"
                                className="rounded-full w-full"
                            />
                            <div className="md:w-[70%] lg:mt-0 mt-2">
                                <h4 className="xl:text-2xl sm:text-xl text-lg font-semibold text-zinc-800">
                                    Sam Crockett
                                </h4>
                                <p className="text-zinc-800 2xl:text-xl sm:text-lg font-semibold">
                                    Independent Web Developer
                                </p>
                                <p className="text-zinc-600 sm:text-[15px] text-[14px] font-semibold mt-3">
                                    “My relationship with Cara & CompuVision has grown over the years. We’ve continued to work together on larger and more technical projects.”
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="px-[3px] py-[3px] bg-zinc-800 max-w-[5.5rem] mx-auto md:mt-5 mt-3"></div>
                </section>

                {/* ================================ Six Section =================================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        Elite talent, shortlisted and ready to hit <br className="hidden sm:block"/> the ground running.
                    </h2>

                    <div className="relative flex items-center">
                        {/* ================ Left Button ================= */}
                        <button className="left-[-1rem] scroll-btn hidden sm:block" onClick={SlideLeft}>
                            <FaChevronLeft/>
                        </button>

                        <div className="flex 2xl:space-x-10 lg:space-x-7 space-x-5 overflow-x-scroll scroll scroll-smooth sm:scrollbar-hide lg:mt-7 mt-4 md:mx-3 sm:mx-2" ref={slider}>
                           {EliteTalent.map((curVal) => (
                             <div className="flex md:flex-row flex-col md:space-x-4 items-start bg-[#ebfffb] md:px-5 px-4 lg:pt-5 lg:pb-7 py-4 rounded-lg 2xl:min-w-[42rem] xl:min-w-[36rem] md:min-w-[28rem] sm:min-w-[20rem] min-w-full border border-zinc-300" key={curVal.id} ref={scrollDiv}>
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

                                    <div className="flex space-x-3 items-center">
                                        <p className="text-zinc-700 2xl:text-xl sm:text-lg font-semibold"> 
                                            {curVal.btText}
                                        </p>
                                        <div>
                                            <Image
                                                src={curVal.btImg.src}
                                                width={50}
                                                height={50}
                                                alt={curVal.btImg.alt}
                                            />
                                        </div>
                                    </div>
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
                                    How is Talent Scout different from a creative staffing agency?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    Creative staffing agencies can take weeks and even months to find the right fit — and often markup costs by 75% (on the low end). With Talent Scout, our specialized recruiters source great talent in just days and much more cost-effectively, so you can spend both your time and your budget wisely.
                                </p>
                            </div>

                            <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    Do I have to pay for this service?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl text-lg text-md">
                                    When our specialized recruiters share your shortlist with you, they’ll include the hourly rate for each professional – that’s all you’ll pay: there aren’t any extra fees outside these rates.
                                </p>
                            </div>

                            <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    What are the benefits of using Talent Scout?  
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    You’ll be able to hire highly-qualified talent quickly — and with very little effort on your part. With Talent Scout, specialized recruiters take the time-consuming sifting and sorting out of hiring creative talent by quickly sourcing the most qualified designers and creatives for your needs, pre-screened and ready to work.
                                </p>
                            </div>

                            <div className="xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    Who is the creative talent available through this service?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    The creative talent available through Talent Scout are among the very best available on our platform, selected and vetted from hundreds of thousands of professionals globally
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

                {/* =========================== Eight Section ==========================  */}
                <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        Need help scouting for other talent?
                    </h2>

                    <div className="flex lg:flex-row flex-col lg:space-x-10 lg:space-y-0 md:space-y-5 sm:space-y-4 space-y-3 lg:mt-7 md:mt-5 mt-3">
                        <motion.div className="bg-[#dafaf3] grid sm:grid-cols-2 sm:gap-y-0 gap-y-3 rounded-lg sm:px-5 px-4 py-5"
                            initial={{y:-30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="flex flex-col items-start justify-between sm:row-start-1 row-start-2">
                                <div>
                                    <h2 className="text-zinc-800 font-semibold lg:text-3xl text-2xl">
                                        Find the Right Marketers
                                    </h2>
                                    <p className="text-zinc-500 font-semibold lg:text-lg mt-1">
                                        Connect with the best digital marketers, analysts, and strategists.
                                    </p>
                                </div>

                                <button className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full mt-5" onClick={() => router.push("#")}>
                                    Learn More
                                </button>
                            </div>
                            <div className="sm:justify-self-end justify-self-center">
                                <Image
                                    src="/images/bla-marketing.png"
                                    width={200}
                                    height={190}
                                    alt="logodesign-image"
                                />
                            </div>
                        </motion.div>

                        <motion.div className="bg-[#dafaf3] grid sm:grid-cols-2 rounded-lg sm:px-5 px-4 py-5"
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="flex flex-col items-start justify-between sm:row-start-1 row-start-2">
                                <div>
                                    <h2 className="text-zinc-800 font-semibold lg:text-3xl text-2xl">
                                        Find the Right Developers
                                    </h2>
                                    <p className="text-zinc-500 font-semibold lg:text-lg mt-1">
                                        Work with the best engineers, developers, and data scientists.
                                    </p>
                                </div>

                                <button className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full mt-5" onClick={() => router.push("#")}>
                                    Learn More
                                </button>
                            </div>
                            <div className="sm:justify-self-end justify-self-center">
                                <Image
                                    src="/images/dev.png"
                                    width={200}
                                    height={190}
                                    alt="logodesign-image"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ============================== Nine Section ============================= */}
                <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="md:grid lg:grid-cols-3 grid-cols-2 xl:gap-x-10 lg:gap-x-7 gap-x-5 flex flex-col md:space-y-0 space-y-4 bg-[#5CA3C5] lg:px-3 sm:px-5 px-3 py-3 rounded-lg">
                        <Image
                            src="/images/creative-talk.jpg"
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
                                    Let's talk about your creative hiring needs.
                                </h2>
                            </div>
                            <div className="lg:flex lg:space-x-7 inline border-t border-gray-100 justify-between py-3 xl:space-y-0 space-y-3">
                              <div>
                                <h2 className="text-gray-100 font-semibold xl:text-lg">
                                    You know the right talent when you meet them, and our specialized recruiters on Talent Scout are here to make sure finding them is easy.
                                </h2>
                              </div>

                               <div className="min-w-[25%]">
                                    <button className="bg-gray-100 text-zinc-800 px-4 lg:py-2 py-1 rounded-full font-semibold transition hover:bg-gray-200" onClick={() => router.push("#")}>
                                        Hire the Best
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

export default Development;