import HeadTag from "../../components/HeadTag";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer';
import { FaSearch, FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import Image from "next/image";
import { useRef, useState} from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = () => {

    // =============== Hooks ====================
    const slider = useRef();
    const scrollDiv = useRef();

    const [catListI, useCatListI] = useState(true);
    const [catListII, useCatListII] = useState(false);
    const [catListIII, useCatListIII] = useState(false);
    const [catListIv, useCatListIv] = useState(false);
    const [catListV, useCatListV] = useState(false);
    const [catListVI, useCatListVI] = useState(false);

    // =============== Function ==================
    const SearchForm = (e) => {
        e.preventDefault();
    }

    const SlideRight = () => {
        slider.current.scrollLeft = slider.current.scrollLeft + scrollDiv.current.offsetWidth + 20;
    }
    
    const SlideLeft = () => {
        slider.current.scrollLeft = slider.current.scrollLeft - scrollDiv.current.offsetWidth - 20;
    }

    // ============== Last Category List Fuction ================
    const FirstCatListHandle = () => {
        useCatListI(true);
        (catListII == true) ? useCatListII(false) : null;
        (catListIII == true) ? useCatListIII(false) : null;
        (catListIv == true) ? useCatListIv(false) : null;
        (catListV == true) ? useCatListV(false) : null;
        (catListVI == true) ? useCatListVI(false) : null;
    }
    const SecondCatListHandle = () => {
        useCatListII(true);
        (catListI == true) ? useCatListI(false) : null;
        (catListIII == true) ? useCatListIII(false) : null;
        (catListIv == true) ? useCatListIv(false) : null;
        (catListV == true) ? useCatListV(false) : null;
        (catListVI == true) ? useCatListVI(false) : null;
    }
    const ThirdCatListHandle = () => {
        useCatListIII(true);
        (catListI == true) ? useCatListI(false) : null;
        (catListII == true) ? useCatListII(false) : null;
        (catListIv == true) ? useCatListIv(false) : null;
        (catListV == true) ? useCatListV(false) : null;
        (catListVI == true) ? useCatListVI(false) : null;
    }
    const FourCatListHandle = () => {
        useCatListIv(true);
        (catListI == true) ? useCatListI(false) : null;
        (catListII == true) ? useCatListII(false) : null;
        (catListIII == true) ? useCatListIII(false) : null;
        (catListV == true) ? useCatListV(false) : null;
        (catListVI == true) ? useCatListVI(false) : null;
    }
    const FiveCatListHandle = () => {
        useCatListV(true);
        (catListI == true) ? useCatListI(false) : null;
        (catListII == true) ? useCatListII(false) : null;
        (catListIII == true) ? useCatListIII(false) : null;
        (catListIv == true) ? useCatListIv(false) : null;
        (catListVI == true) ? useCatListVI(false) : null;
    }
    const SixCatListHandle = () => {
        useCatListVI(true);
        (catListI == true) ? useCatListI(false) : null;
        (catListII == true) ? useCatListII(false) : null;
        (catListIII == true) ? useCatListIII(false) : null;
        (catListIv == true) ? useCatListIv(false) : null;
        (catListV == true) ? useCatListV(false) : null;
    }

    // ============ Category List =====================
    const Category = [
        {
            id: 1,
            img: "/images/sc-logo-design.png",
            alt: "logo-design",
            text: "Logo Design",
            link: "#"
        },

        {
            id: 2,
            img: "/images/sc-wordpress.png",
            alt: "wordpress-image",
            text: "Wordpress",
            link: "#"
        },

        {
            id: 3,
            img: "/images/sc-blog.png",
            alt: "blog-image",
            text: "Articles & Blog",
            link: "#"
        },

        {
            id: 4,
            img: "/images/sc-video-editing.png",
            alt: "videoediting-image",
            text: "Video Editing",
            link: "#"
        },

        {
            id: 5,
            img: "/images/sc-illustration.png",
            alt: "illastration-image",
            text: "Illustration",
            link: "#"
        },

        {
            id: 6,
            img: "/images/sc-seo.png",
            alt: "seo-image",
            text: "SEO",
            link: "#"
        },

        {
            id: 7,
            img: "/images/sc-ecomarce.png",
            alt: "ecomarce-image",
            text: "eComarce Development",
            link: "#"
        },

        {
            id: 8,
            img: "/images/sc-data-entry.png",
            alt: "dataentry-image",
            text: "Data Entry",
            link: "#"
        },

        {
            id: 9,
            img: "/images/sc-arch.png",
            alt: "architecture-image",
            text: "Architecture Design",
            link: "#"
        },

        {
            id: 10,
            alt: "voicerecoder-image",
            img: "/images/sc-voice.png",
            text: "Voice Recoder",
            link: "#"
        },
    ];

    // ============ Project List =====================
    const ProjectList = [
        {
            id: 1,
            image: {
                src: "/images/modernhome-logo.png",
                alt: "modernhome-image"
            },
            des: "A modern political campaign LOGO design",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "3 day delivery"
            },

            s_left: {
                img: "/images/logo-designer.png",
                text: "Dimitre D."
            },
            s_right: {
                textI: "5.5",
                textII: "(2078)"
            },
            link: "#"
        },

        {
            id: 2,
            image: {
                src: "/images/creative-logo.png",
                alt: "creativelogo.png"
            },
            des: "Creative logo design for your pet store",
            f_left: {
                textI: "From",
                textII: "$35"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/creativelogo-designer.png",
                text: "Monsu D."
            },
            s_right: {
                textI: "5.5",
                textII: "(177)"
            },
            link: "#"
        },

        {
            id: 3,
            image: {
                src: "/images/illustration.png",
                alt: "illustration-image"
            },
            des: "A winning professional pictch Deck Presentetion",
            f_left: {
                textI: "From",
                textII: "$50"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/illus-designer.png",
                text: "Tanver M."
            },
            s_right: {
                textI: "5.5",
                textII: "(145)"
            },
            link: "#"
        },

        {
            id: 4,
            image: {
                src: "/images/powerpoint.png",
                alt: "powerpoint-image"
            },
            des: "Power point bose and good implementetion",
            f_left: {
                textI: "From",
                textII: "$20"
            },
            f_right: {
                text: "3 day delivery"
            },

            s_left: {
                img: "/images/powerpoint-expert.png",
                text: "Jacob M."
            },
            s_right: {
                textI: "4.8",
                textII: "(335)"
            },
            link: "#"
        },

        {
            id: 5,
            image: {
                src: "/images/3d-home.png",
                alt: "3dhome-image"
            },
            des: "Beautiful 3d floor plane rendering",
            f_left: {
                textI: "From",
                textII: "$135"
            },
            f_right: {
                text: "1 day delivery"
            },

            s_left: {
                img: "/images/3dhome-designer.png",
                text: "Hyun M."
            },
            s_right: {
                textI: "5.5",
                textII: "(45)"
            },
            link: "#"
        },

        {
            id: 6,
            image: {
                src: "/images/3d-int.png",
                alt: "3diterer-image"
            },
            des: "A High quelity 3d intererer render",
            f_left: {
                textI: "From",
                textII: "$15"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/3dint-desinger.png",
                text: "Siam J."
            },
            s_right: {
                textI: "5.5",
                textII: "(15)"
            },
            link: "#"
        },

        {
            id: 7,
            image: {
                src: "/images/ui-ux4.png",
                alt: "uiux-image"
            },
            des: "Landing page UI / UX",
            f_left: {
                textI: "From",
                textII: "$55"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/uiux-desinger.png",
                text: "Jessy M."
            },
            s_right: {
                textI: "5.5",
                textII: "(177)"
            },
            link: "#"
        },

        {
            id: 8,
            image: {
                src: "/images/mobile-design.png",
                alt: "mobiledesign-image"
            },
            des: "Mobile Responsive Malichimp Template",
            f_left: {
                textI: "From",
                textII: "$35"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/mobile-designer.png",
                text: "Jacob M."
            },
            s_right: {
                textI: "5.5",
                textII: "(1135)"
            },
            link: "#"
        },
    ];

    const LastCategory =  [
        {
            listI: [
                {id: 1, name: "Album Cover Design", link: "#"},
                {id: 2, name: "Book Design", link: "#"},
                {id: 3, name: "Brochure Design", link: "#"},
                {id: 4, name: "Cartoons & Comics", link: "#"},
                {id: 5, name: "Flyer Design", link: "#"},
                {id: 6, name: "AR Filters & Lenses", link: "#"},
                {id: 7, name: "Brand Style Guides", link: "#"},
                {id: 8, name: "Building Information Modeling", link: "#"},
                {id: 9, name: "Catalog Design", link: "#"},
                {id: 10, name: "Game Design", link: "#"},
                {id: 11, name: "Architecture & Interior Design", link: "#"},
                {id: 12, name: "Brand Voice & Tone", link: "#"},
                {id: 13, name: "Business Cards & Stationery Design", link: "#"},
                {id: 14, name: "Character Modeling", link: "#"},
                {id: 15, name: "Graphics for Streamers", link: "#"},
                {id: 16, name: "Banner Ads", link: "#"},
                {id: 17, name: "Branding Services", link: "#"},
                {id: 18, name: "Car Wraps", link: "#"},
                {id: 19, name: "Fasion Design", link: "#"},
            ]
        },

        {
            listII: [
                {id: 1, name: "3d Product Animation", link: "#"},
                {id: 2, name: "Animation for Streamers", link: "#"},
                {id: 3, name: "Audiobook Production", link: "#"},
                {id: 4, name: "DJ Drops & Producer Tags", link: "#"},
                {id: 5, name: "Jingle & Intro", link: "#"},
                {id: 6, name: "Animated GIFs", link: "#"},
                {id: 7, name: "App & Website Promo Videos", link: "#"},
                {id: 8, name: "Book Trailers", link: "#"},
                {id: 9, name: "eLarning Video Production", link: "#"},
                {id: 10, name: "Live - Action Explainers", link: "#"},
                {id: 11, name: "Animeted Whiteboard", link: "#"},
                {id: 12, name: "Article to Video", link: "#"},
                {id: 13, name: "Character Animation", link: "#"},
                {id: 14, name: "Game Trailers", link: "#"},
                {id: 15, name: "Logo Animation", link: "#"},
                {id: 16, name: "Animation for Kids", link: "#"},
                {id: 17, name: "Audio Ads Productions", link: "#"},
                {id: 18, name: "Dialogue Editing", link: "#"},
                {id: 19, name: "Intro & Outro Animation", link: "#"},
            ]
        },

        {
            listIII: [
                {id: 1, name: "Blogchain, NFT & Cryptocurrency", link: "#"},
                {id: 2, name: "Database", link: "#"},
                {id: 3, name: "Game Development", link: "#"},
                {id: 4, name: "QA Testing", link: "#"},
                {id: 5, name: "Website Builders & CMS", link: "#"},
                {id: 6, name: "Chatbots", link: "#"},
                {id: 7, name: "Dekstop Apps", link: "#"},
                {id: 8, name: "Mobile Apps", link: "#"},
                {id: 9, name: "Support & It", link: "#"},
                {id: 10, name: "Wordpress", link: "#"},
                {id: 11, name: "Cybersecurity & Data Production", link: "#"},
                {id: 12, name: "Development for Streamers", link: "#"},
                {id: 13, name: "Online Coding Lessons", link: "#"},
                {id: 14, name: "User Testing", link: "#"},
                {id: 15, name: "Data Analysis & Reports", link: "#"},
                {id: 16, name: "eComarce Development", link: "#"},
                {id: 17, name: "Other Development & It", link: "#"},
                {id: 18, name: "Web Programming", link: "#"},
            ]
        },

        {
            listIv: [
                {id: 1, name: "Book & eBook Marketing", link: "#"},
                {id: 2, name: "Domain Research", link: "#"},
                {id: 3, name: "Lead Generation", link: "#"},
                {id: 4, name: "Mobile Marketing & Advertising", link: "#"},
                {id: 5, name: "Public Relations", link: "#"},
                {id: 6, name: "Community Managment", link: "#"},
                {id: 7, name: "eComarce Marketing", link: "#"},
                {id: 8, name: "Local SEO", link: "#"},
                {id: 9, name: "Music Promotions", link: "#"},
                {id: 10, name: "SEM", link: "#"},
                {id: 11, name: "Content Marketing", link: "#"},
                {id: 12, name: "Email Marketing", link: "#"},
                {id: 13, name: "Marketing Reserch", link: "#"},
                {id: 14, name: "Other Marketing", link: "#"},
                {id: 15, name: "SEO", link: "#"},
                {id: 16, name: "Crowdfuning", link: "#"},
                {id: 17, name: "Influencer Marketing", link: "#"},
                {id: 18, name: "Marketing Strategy", link: "#"},
                {id: 19, name: "Podcast Marketing", link: "#"},
            ]
        },

        {
            listV: [
                {id: 1, name: "Articles & Blog Posts", link: "#"},
                {id: 2, name: "Case Studies", link: "#"},
                {id: 3, name: "Grant Writing", link: "#"},
                {id: 4, name: "Podcast Writing", link: "#"},
                {id: 5, name: "Research & Summaries", link: "#"},
                {id: 6, name: "Beta Reading", link: "#"},
                {id: 7, name: "Cover Latters", link: "#"},
                {id: 8, name: "Legal Writing", link: "#"},
                {id: 9, name: "Press Relases", link: "#"},
                {id: 10, name: "Resume Writters", link: "#"},
                {id: 11, name: "Book & eBook Writing", link: "#"},
                {id: 12, name: "Creative Writting", link: "#"},
                {id: 13, name: "Linkdin Profiles", link: "#"},
                {id: 14, name: "Product Descriptions", link: "#"},
                {id: 15, name: "Sales Copy", link: "#"},
                {id: 16, name: "Business Names & Slogans", link: "#"},
                {id: 17, name: "Email Copy", link: "#"},
                {id: 18, name: "Other Writing & Translation", link: "#"},
                {id: 19, name: "Proofreading & Editing", link: "#"},
            ]
        },

        {
            listVI: [
                {id: 1, name: "Arts & Crafts", link: "#"},
                {id: 2, name: "Cooking & Lessons", link: "#"},
                {id: 3, name: "Family & Genealogy", link: "#"},
                {id: 4, name: "Gamming", link: "#"},
                {id: 5, name: "Online Tutoring", link: "#"},
                {id: 6, name: "Business Consulting", link: "#"},
                {id: 7, name: "Craft Lessons", link: "#"},
                {id: 8, name: "File Conversion", link: "#"},
                {id: 9, name: "HR Consulting", link: "#"},
                {id: 10, name: "Other Admin & Customer Support", link: "#"},
                {id: 11, name: "Business Plans", link: "#"},
                {id: 12, name: "Data Entry", link: "#"},
                {id: 13, name: "Financial Consulting", link: "#"},
                {id: 14, name: "Other Consulting & HR", link: "#"},
                {id: 15, name: "Career Counseling", link: "#"},
                {id: 16, name: "eComarce Managment", link: "#"},
                {id: 17, name: "Flyer Distribution", link: "#"},
                {id: 18, name: "Online Lenguage Lessons", link: "#"},
            ]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Project Catalog - Freelance Services for Your Business | Brenda"/>
             
            {/* ================= Header ================= */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                {/* ============= Head Container =============== */}
                <div className="container mx-auto py-3 md:px-5 sm:px-7 px-3">
                    <section className="sm:mt-7 mt-3 flex justify-between 2xl:space-x-56 xl:space-x-36 lg:space-x-20 sm:space-x-5 space-x-0 bg-gradient-to-tr from-[#99F6E4] to-[#A5F3FC] rounded-xl py-3 sm:px-6 px-3 relative">
                        <div className="lg:mb-16 mb-10">
                            <motion.h3 className="text-zinc-700 font-semibold xl:text-3xl text-2xl"
                                initial={{y:"100%", opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:1}}
                            > 
                                Project Catalog 
                            </motion.h3>
                            <motion.h2 className="text-zinc-700 font-semibold xl:text-6xl sm:text-5xl text-4xl mt-3"
                                initial={{y:"100%", opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:1.5}}
                            >
                                Clear scope. <br/> Upfront price. <br/> No surprises. 
                            </motion.h2>
                            <motion.p className="mt-5 text-zinc-600 font-semibold"
                                initial={{y:"100%", opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:2}}
                            >
                                Complete your most pressing work with Project Catalog. Browse and buy predefined projects in just a few clicks. 
                            </motion.p>

                            <form className="flex flex-grow border-2 lg:max-w-lg rounded-full items-center px-1 py-1 bg-[#f9fffdfd] relative border-[#a9cac6fd] mt-7" onSubmit={SearchForm}>
                                <input 
                                    type="text" 
                                    className="flex-grow focus:outline-none bg-transparent mx-3 text-zinc-700 md:placeholder:text-lg"
                                    placeholder={`Try "project"`}
                                />
                                <span className="px-2 py-1 rounded-full duration-300 ease-in bg-zinc-800 cursor-pointer hover:bg-[#2b4241fd]">
                                    <FaSearch className="h-6 text-white"/>
                                </span>
                            </form>

                            <div className="sm:flex hidden items-center space-x-3 mt-3">
                                <span className="text-zinc-800 font-semibold"> Populer: </span>

                               <Link href="#">
                                    <a className="populer-search">
                                        <FaSearch className="mr-2 text-[10px]"/>
                                        Logo Design
                                    </a>
                               </Link>
                                <Link href="#">
                                    <a className="populer-search">
                                        <FaSearch className="mr-2 text-[10px]"/>
                                        Articles & Blog Post
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="populer-search">
                                        <FaSearch className="mr-2 text-[10px]"/>
                                        Wordpress
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center space-x-5">
                            {/* ================== Card ================= */}
                            <motion.div className="relative bg-[#CCFBF1] rounded-xl 2xl:w-[17rem] xl:w-[15rem] shadow-xl duration-300 ease-in hover:scale-105 xl:block hidden"
                                initial={{x:-30, opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <Image
                                    src="/images/video-editing.png"
                                    width={300}
                                    height={210}
                                    alt="videoediting-image"
                                    layout="responsive"
                                    className="w-full rounded-t-xl"
                                />
                                 <div className="absolute bg-white rounded-full flex items-center space-x-0 py-1 px-1 top-3 left-2">
                                    <Image
                                        src="/images/freelancer2.png"
                                        width={35}
                                        height={35}
                                        alt="freelancer-image"
                                        className="rounded-full bg-gray-500"
                                    />
                                    <div className="bg-green-600 absolute left-8 bottom-2 py-[3px] px-[3px] rounded-full border"/>
                                    <h5 className="px-3 font-semibold text-zinc-800"> 
                                        Dimitre D. 
                                    </h5>
                                </div>
                                <div className="px-4 py-3">
                                    <h5 className="font-semibold text-zinc-800">
                                        Video editing & music anyltc
                                    </h5>
                                    <div className="flex items-center space-x-2 mt-5 text-zinc-700">
                                        <span>
                                            <BiTime/>
                                        </span>
                                        <span>
                                            5 day ago
                                        </span>
                                    </div>
                                </div>
                                <div className="border-t border-zinc-300">
                                    <div className="flex items-center px-4 py-2 justify-between">
                                        <div className="py-1 px-3 bg-gray-100 rounded-full text-zinc-600">
                                            Form $175
                                        </div>
                                        <div className="flex items-center text-zinc-800">
                                            <FaStar className="text-green-700 mr-2"/>
                                            4.95 (213)
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="relative bg-[#CCFBF1] rounded-xl 2xl:w-[17rem] xl:w-[15rem] shadow-xl duration-300 ease-in hover:scale-105 xl:block hidden"
                                initial={{y:30, opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <Image
                                    src="/images/website.png"
                                    width={300}
                                    height={210}
                                    alt="videoediting-image"
                                    layout="responsive"
                                    className="w-full rounded-t-xl relative"
                                />
                                 <div className="absolute bg-white rounded-full flex items-center space-x-0 py-1 px-1 top-3 left-2">
                                    <Image
                                        src="/images/freelancer3.png"
                                        width={35}
                                        height={35}
                                        alt="freelancer-image"
                                        className="rounded-full bg-gray-500"
                                    />
                                    <div className="bg-green-600 absolute left-8 bottom-2 py-[3px] px-[3px] rounded-full border"/>
                                    <h5 className="px-3 font-semibold text-zinc-800"> 
                                        Alex J.
                                    </h5>
                                </div>
                                <div className="px-4 py-3">
                                    <h5 className="font-semibold text-zinc-800">
                                        web Development
                                    </h5>
                                    <div className="flex items-center space-x-2 mt-5 text-zinc-700">
                                        <span>
                                            <BiTime/>
                                        </span>
                                        <span>
                                            5 day ago
                                        </span>
                                    </div>
                                </div>
                                <div className="border-t border-zinc-300">
                                    <div className="flex items-center px-4 py-2 justify-between">
                                        <div className="py-1 px-3 bg-gray-100 rounded-full text-zinc-600">
                                            Form $250
                                        </div>
                                        <div className="flex items-center text-zinc-800">
                                            <FaStar className="text-green-700 mr-2"/>
                                            4.97 (217)
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="xl:absolute relative bg-[#CCFBF1] rounded-xl 2xl:w-[17rem] xl:w-[15rem] w-[17rem] shadow-xl xl:right-36 xl:top-10 duration-300 ease-in hover:scale-105 lg:block hidden"
                                initial={{y:-30, opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                    <Image
                                        src="/images/3d-dog.png"
                                        width={300}
                                        height={210}
                                        alt="videoediting-image"
                                        layout="responsive"
                                        className="w-full rounded-t-xl relative"
                                    />
                                    <div className="absolute bg-white rounded-full flex items-center space-x-0 py-1 px-1 top-3 left-2">
                                        <Image
                                            src="/images/freelancer3.png"
                                            width={35}
                                            height={35}
                                            alt="freelancer-image"
                                            className="rounded-full bg-gray-500"
                                        />
                                        <div className="bg-green-600 absolute left-8 bottom-2 py-[3px] px-[3px] rounded-full border"/>
                                        <h5 className="px-3 font-semibold text-zinc-800"> 
                                            Scenzied J.
                                        </h5>
                                    </div>
                                    <div className="px-4 py-3">
                                        <h5 className="font-semibold text-zinc-800">
                                            3d Animator
                                        </h5>
                                        <div className="flex items-center space-x-2 mt-5 text-zinc-700">
                                            <span>
                                                <BiTime/>
                                            </span>
                                            <span>
                                                5 day ago
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-zinc-300">
                                        <div className="flex items-center px-4 py-2 justify-between">
                                            <div className="py-1 px-3 bg-gray-100 rounded-full text-zinc-600">
                                                Form $50
                                            </div>
                                            <div className="flex items-center text-zinc-800">
                                                <FaStar className="text-green-700 mr-2"/>
                                                4.90 (115)
                                            </div>
                                        </div>
                                    </div>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </header>

            {/* ================= Main =================== */}
            <main>
                {/* ================== First Section ================ */}
                <section className="container mx-auto mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="xl:text-4xl text-3xl font-semibold text-zinc-800 lg:mt-5">
                        Shop By Category
                    </h2>
                    
                    <div className="relative flex items-center">
                        {/* ================ Left Button ================= */}
                        <button className="left-0 scroll-btn z-[5]" onClick={SlideLeft}>
                            <FaChevronLeft/>
                        </button>

                        <div className="flex space-x-7 mt-7 overflow-x-scroll scroll scroll-smooth scrollbar-hide mx-3" ref={slider}>
                            {Category.map((curVal) => (
                                <Link href={curVal.link} key={curVal.id}>
                                    <div className="bg-[#CCFBF1] rounded-xl lg:min-w-[300px] min-w-[250px] h-auto cursor-pointer duration-200 ease-in hover:bg-[#bfeee4]" ref={scrollDiv}>
                                        <Image
                                            src={curVal.img}
                                            width={300}
                                            height={220}
                                            alt={curVal.alt}
                                            className="rounded-t-xl w-full"
                                        />
                                        <div className="px-4 py-3">
                                            <h2 className="text-zinc-800 font-semibold text-lg">
                                                {curVal.text}
                                            </h2>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* ================ Right Button ================= */}
                        <button className="right-0 scroll-btn z-[5]" onClick={SlideRight}>
                            <FaChevronRight/>
                        </button>
                    </div>
                </section>

                {/* ================== Secton Section ==================  */}
                <section className="container mx-auto lg:mt-10 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="flex lg:flex-row flex-col justify-between items-center lg:space-x-5 lg:space-y-0 space-y-3">
                        <div>
                            <h2 className="xl:text-4xl text-3xl font-semibold text-zinc-800 xl:my-5 md:my-3 my-1"> How it works </h2>
                            <motion.div className="md:py-5 py-3 border-b border-zinc-300 flex flex-col space-y-1"
                                initial={{y:"100%", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <h3 className="text-zinc-800 xl:text-3xl text-2xl font-semibold"> 1. Browse </h3>
                                <span className="text-zinc-600"> Find the type of work you need, clearly defined and ready to start.</span>
                            </motion.div>
                            <motion.div className="md:py-5 py-3 border-b border-zinc-300 flex flex-col space-y-1"
                                initial={{y:"100%", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <h3 className="text-zinc-800 xl:text-3xl text-2xl font-semibold"> 2. Buy </h3>
                                <span className="text-zinc-600"> Work begins as soon as you purchase and provide requirements. </span>
                            </motion.div>
                            <motion.div className="md:py-5 py-3 border-b border-zinc-300 flex flex-col space-y-1"
                                initial={{y:"100%", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <h3 className="text-zinc-800 xl:text-3xl text-2xl font-semibold"> 3. Approve </h3>
                                <span className="text-zinc-600"> Receive and review your project. The professional will be paid once you’ve approved it. </span>
                            </motion.div>
                        </div>

                        <div>
                            <Image
                                src="/images/works-team.png"
                                width={550}
                                height={400}
                                alt="teamworks-image"
                            />
                        </div>
                    </div>
                </section>

                {/* ================== Third Section ================ */}
                <section className="container mx-auto mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="lg:mt-5 flex lg:flex-row flex-col justify-between">
                        <h2 className="xl:text-4xl sm:text-3xl text-2xl font-semibold text-zinc-800">
                            Scale your business with social media solutions 
                        </h2>
                        <Link href="#">
                            <a className="text-lg font-semibold text-blue-500 cursor-pointer transition hover:underline mt-5">
                                Show all
                                <HiArrowSmRight className="inline ml-1"/>
                            </a>
                        </Link>
                    </div>
                    <motion.div className="flex md:flex-row flex-col 2xl:space-x-14 xl:space-x-10 lg:space-x-7 md:space-x-6 space-x-0 md:space-y-0 space-y-4 lg:mt-8 mt-5"
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:1}}
                    >
                        {/* =================== First Link ================= */}
                       <Link href="#">
                            <div className="bg-[#CCFBF1] lg:w-[300px] md:w-[290px] w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#bfeee4]">
                                <Image
                                    src="/images/scale-socialmedia.png"
                                    width={300}
                                    height={220}
                                    layout="responsive"
                                    alt="socialmedia-image"
                                    className="rounded-t-xl"
                                />
                                <div className="px-4 lg:py-4 md:py-2 py-4">
                                    <h4 className="lg:text-xl text-lg font-semibold text-zinc-800">
                                        Social Media Design
                                    </h4>
                                </div>
                            </div>
                       </Link>

                        {/* =================== Second Link ================= */}
                        <Link href="#">
                            <div className="bg-[#CCFBF1] lg:w-[300px] md:w-[290px] w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#bfeee4]">
                                <Image
                                    src="/images/scale-ads.png"
                                    width={300}
                                    height={220}
                                    layout="responsive"
                                    alt="socialmedia-image"
                                    className="rounded-t-xl"
                                />
                                <div className="px-4 lg:py-4 md:py-2 py-4">
                                    <h4 className="lg:text-xl text-lg font-semibold text-zinc-800">
                                        Social Media Ad Setup & Managment
                                    </h4>
                                </div>
                            </div>
                        </Link>

                        {/* ================ Third Link ================= */}
                        <Link href="#">
                            <div className="bg-[#CCFBF1] lg:w-[300px] md:w-[290px] w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#bfeee4]">
                                <Image
                                    src="/images/scale-videoediting.png"
                                    width={300}
                                    height={220}
                                    layout="responsive"
                                    alt="socialmedia-image"
                                    className="rounded-t-xl"
                                />
                                <div className="px-4 lg:py-4 md:py-2 py-4">
                                    <h4 className="lg:text-xl text-lg font-semibold text-zinc-800">
                                        Video Editing
                                    </h4>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </section>

                {/* ================== Fourth Section ================ */}
                <section className="container mx-auto mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="lg:mt-5 flex lg:flex-row flex-col justify-between">
                        <h2 className="xl:text-4xl sm:text-3xl text-2xl font-semibold text-zinc-800">
                            Website solutions that bring in more customers 
                        </h2>
                        <Link href="#">
                            <a className="text-lg font-semibold text-blue-500 cursor-pointer transition hover:underline mt-5">
                                Show all
                                <HiArrowSmRight className="inline ml-1"/>
                            </a>
                        </Link>
                    </div>
                    <motion.div className="flex md:flex-row flex-col 2xl:space-x-14 xl:space-x-10 lg:space-x-7 md:space-x-6 space-x-0 md:space-y-0 space-y-4 lg:mt-8 mt-5"
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:1}}
                    >
                        <Link href="#">
                            <div className="bg-[#CCFBF1] lg:w-[300px] md:w-[290px] w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#bfeee4]">
                                <Image
                                    src="/images/cus-website.png"
                                    width={300}
                                    height={220}
                                    layout="responsive"
                                    alt="socialmedia-image"
                                    className="rounded-t-xl"
                                />
                                <div className="px-4 lg:py-4 md:py-2 py-4">
                                    <h4 className="lg:text-xl text-lg font-semibold text-zinc-800">
                                        Web & Mobile Design
                                    </h4>
                                </div>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className="bg-[#CCFBF1] lg:w-[300px] md:w-[290px] w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#bfeee4]">
                                <Image
                                    src="/images/cus-cms.png"
                                    width={300}
                                    height={220}
                                    layout="responsive"
                                    alt="socialmedia-image"
                                    className="rounded-t-xl"
                                />
                                <div className="px-4 lg:py-4 md:py-2 py-4">
                                    <h4 className="lg:text-xl text-lg font-semibold text-zinc-800">
                                        Website Builders & CMS
                                    </h4>
                                </div>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className="bg-[#CCFBF1] lg:w-[300px] md:w-[290px] w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#bfeee4]">
                                <Image
                                    src="/images/cus-ecomarce.png"
                                    width={300}
                                    height={220}
                                    layout="responsive"
                                    alt="socialmedia-image"
                                    className="rounded-t-xl"
                                />
                                <div className="px-4 lg:py-4 md:py-2 py-4">
                                    <h4 className="lg:text-xl text-lg font-semibold text-zinc-800">
                                        eComarce Development
                                    </h4>
                                </div>
                            </div>
                        </Link>

                       <Link href="#">
                            <div className="bg-[#CCFBF1] lg:w-[300px] md:w-[290px] w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#bfeee4] xl:block md:hidden block">
                                <Image
                                    src="/images/cus-webcontent.png"
                                    width={300}
                                    height={220}
                                    layout="responsive"
                                    alt="socialmedia-image"
                                    className="rounded-t-xl"
                                />
                                <div className="px-4 lg:py-4 md:py-2 py-4">
                                    <h4 className="lg:text-xl text-lg font-semibold text-zinc-800">
                                        Website Content
                                    </h4>
                                </div>
                            </div>
                       </Link>
                    </motion.div>
                </section>

                {/* ================= Five Section ==================== */}
                <section className="container mx-auto mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="lg:mt-5 flex lg:flex-row flex-col justify-between">
                        <h2 className="xl:text-4xl sm:text-3xl text-2xl font-semibold text-zinc-800"> 
                            Get inspired with projects like these 
                        </h2>
                        <Link href="#">
                            <a className="text-lg font-semibold text-blue-500 cursor-pointer transition hover:underline mt-5">
                                Show all
                                <HiArrowSmRight className="inline ml-1"/>
                            </a>
                        </Link>
                    </div>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-x-14 xl:gap-x-10 lg:gap-x-8 md:gap-x-10 gap-x-0 xl:gap-y-10 md:gap-y-8 sm:gap-y-5 gap-y-4 lg:mt-8 mt-5">
                        {ProjectList.map((curVal) => (
                           <Link href={curVal.link} key={curVal.id}>
                                <motion.div className="bg-transparent border border-zinc-300 w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#ebfffb]"
                                    initial={{y:30, opacity:0}}
                                    whileInView={{y:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    <div>
                                        <Image
                                            src={curVal.image.src}
                                            width={300}
                                            height={210}
                                            layout="responsive"
                                            alt={curVal.image.alt}
                                            className="rounded-t-xl border border-zinc-300"
                                        />
                                        <div className="sm:px-4 px-3 lg:py-3 md:py-2 sm:py-4 py-2 2xl:space-y-3 space-y-2 border-b border-zinc-300 flex flex-col justify-between">
                                            <h4 className="font-semibold text-zinc-800">
                                                {curVal.des}
                                            </h4>
                                            <div className="flex justify-between">
                                                <div>
                                                    <p className="text-zinc-800"> 
                                                        {curVal.f_left.textI} <b className="text-zinc-800"> {curVal.f_left.textII} </b>
                                                    </p>
                                                </div>
                                                <div className="flex items-center space-x-1 text-zinc-600">
                                                    <MdOutlineWatchLater/>
                                                    <span>
                                                        {curVal.f_right.text}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between px-4 py-3 text-zinc-800 relative">
                                        <div className="flex items-center space-x-2">
                                            <Image
                                                src={curVal.s_left.img}
                                                width={35}
                                                height={35}
                                                className="rounded-full"
                                                alt="freelancer-image"
                                            />
                                            <span>
                                                {curVal.s_left.text}
                                            </span>
                                        </div>

                                        <div className="flex items-center space-x-1">
                                            <FaStar className="text-green-600"/>
                                            <p className="text-[15px]"> {curVal.s_right.textI} <span className="text-zinc-600"> {curVal.s_right.textII} </span> </p>
                                        </div>

                                        {/* =================== chat icon ================ */}
                                        <div className="absolute py-1 px-1 rounded-full bg-green-600 border border-white left-10 bottom-3"></div>
                                    </div>
                                </motion.div>
                           </Link>
                        ))}
                    </div>
                </section>

                {/* ============== Six Section ===================== */}
                <section className="container mx-auto my-10 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="xl:text-4xl text-3xl font-semibold text-zinc-800 lg:mt-5">
                        Browse all Category
                    </h2>

                    <ul className="flex space-x-2 mt-8 lg:overflow-x-hidden overflow-x-scroll scroll scroll-smooth lg:whitespace-normal whitespace-nowrap md:scrollbar-hide">
                        <li className={`lg:py-2 py-1 lg:px-4 px-3 rounded-full cursor-pointer duration-200 ease-in ${(catListI == true) ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-zinc-300 text-zinc-500 hover:bg-zinc-400"}`}  onClick={FirstCatListHandle}>
                            Design
                        </li>
                        <li className={`lg:py-2 py-1 lg:px-4 px-3 rounded-full cursor-pointer duration-200 ease-in ${(catListII == true) ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-zinc-300 text-zinc-500 hover:bg-zinc-400"}`} onClick={SecondCatListHandle}>
                            Video & Audio
                        </li>
                        <li className={`lg:py-2 py-1 lg:px-4 px-3 rounded-full cursor-pointer duration-200 ease-in ${(catListIII == true) ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-zinc-300 text-zinc-500 hover:bg-zinc-400"}`} onClick={ThirdCatListHandle}>
                            Development & It
                        </li>
                        <li className={`lg:py-2 py-1 lg:px-4 px-3 rounded-full cursor-pointer duration-200 ease-in ${(catListIv == true) ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-zinc-300 text-zinc-500 hover:bg-zinc-400"}`} onClick={FourCatListHandle}>
                            Marketing
                        </li>
                        <li className={`lg:py-2 py-1 lg:px-4 px-3 rounded-full cursor-pointer duration-200 ease-in ${(catListV == true) ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-zinc-300 text-zinc-500 hover:bg-zinc-400"}`} onClick={FiveCatListHandle}>
                            Writting & Translation
                        </li>
                        <li className={`lg:py-2 py-1 lg:px-4 px-3 rounded-full cursor-pointer duration-200 ease-in ${(catListVI == true) ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-zinc-300 text-zinc-500 hover:bg-zinc-400"}`} onClick={SixCatListHandle}>
                            More
                        </li>
                    </ul>

                    {/* ===================== Dropdown List ================ */}
                    <ul className="my-8 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-7 gap-y-3 sm:px-0 px-1">
                        {LastCategory[0].listI.map((curVal) => (
                            <li className={`text-zinc-500 cursor-pointer hover:underline ${(catListI == true) ? "block" : "hidden"}`} key={curVal.id}>
                                <Link href={curVal.link}>
                                    {curVal.name}
                                </Link>
                            </li>
                        ))}

                        {LastCategory[1].listII.map((curVal) => (
                            <li className={`text-zinc-500 cursor-pointer hover:underline ${(catListII == false) ? "hidden" : "block"}`} key={curVal.id}>
                                <Link href={curVal.link}>
                                    {curVal.name}
                                </Link>
                            </li>
                        ))}

                        {LastCategory[2].listIII.map((curVal) => (
                            <li className={`text-zinc-500 cursor-pointer hover:underline ${(catListIII == false) ? "hidden" : "block"}`} key={curVal.id}>
                                <Link href={curVal.link}>
                                    {curVal.name}
                                </Link>
                            </li>
                        ))}

                        {LastCategory[3].listIv.map((curVal) => (
                            <li className={`text-zinc-500 cursor-pointer hover:underline ${(catListIv == false) ? "hidden" : "block"}`} key={curVal.id}>
                                <Link href={curVal.link}>
                                    {curVal.name}
                                </Link>
                            </li>
                        ))}

                        {LastCategory[4].listV.map((curVal) => (
                            <li className={`text-zinc-500 cursor-pointer hover:underline ${(catListV == false) ? "hidden" : "block"}`} key={curVal.id}>
                                <Link href={curVal.link}>
                                    {curVal.name}
                                </Link>
                            </li>
                        ))}

                        {LastCategory[5].listVI.map((curVal) => (
                            <li className={`text-zinc-500 cursor-pointer hover:underline ${(catListVI == false) ? "hidden" : "block"}`} key={curVal.id}>
                                <Link href={curVal.link}>
                                    {curVal.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            
            {/* ==================== Footer ====================== */}
            <Footer/>
        </div>
    )
}

export default Services;