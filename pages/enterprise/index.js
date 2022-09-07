import HeadTag from "../../components/HeadTag";
import Navbar from "../../components/Navbar/Navbar";
import Image from "next/image";
import TrustedCom from "../../components/TrustedCom";
import { FaMicrosoft, FaUber, FaBrain, FaAtlassian } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineLaptop } from "react-icons/ai";
import { HiPuzzle, HiArrowRight } from "react-icons/hi";
import { TbPhoneCall } from "react-icons/tb";
import { IoMdCheckmark } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { BiCodeBlock } from "react-icons/bi";
import { BsLaptop, BsWordpress } from "react-icons/bs";
import { SiAdobe, SiUdacity } from "react-icons/si";
import { ImGoogle } from "react-icons/im";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";


const Enterprise = () => {
    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Brenda Enterprise: Hybrid workforce solutions"/>

            {/* ================== Header =================== */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                {/* ============= Head Container =============== */}
                <div className="mt-5 md:px-3 sm:px-7 px-3 bg-gradient-to-tr from-cyan-100 to-teal-100 w-full">
                    <div className="container mx-auto mt-5 md:px-4 sm:px-7 px-3">
                        <section className="grid md:grid-cols-2 grid-cols-1 xl:gap-x-20 lg:gap-x-16 md:gap-x-10">
                            <div className="lg:py-36 md:py-24 sm:py-20 py-14">
                                <motion.h5 className="text-zinc-800 font-semibold text-2xl"
                                    initial={{y:30, opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{duration:1}}
                                > 
                                    Enterprise Suite 
                                </motion.h5>
                                <motion.h2 className="text-zinc-800 font-semibold 2xl:text-6xl lg:text-5xl text-4xl lg:mt-5 mt-3"
                                    initial={{y:30, opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{duration:1.3}}
                                >
                                    Goodbye, talent gaps. Hello, growth.
                                </motion.h2>
                                <motion.p className="font-semibold text-xl text-zinc-600 lg:mt-8 mt-5"
                                    initial={{y:30, opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{duration:1.7}}
                                >
                                    Meet the full-service enterprise solution making talent innovation your next big advantage.
                                </motion.p>

                                <motion.button className="mt-10 py-2 px-5 rounded-full bg-zinc-800 text-white font-semibold"
                                    initial={{x:-30, opacity:0}}
                                    animate={{x:0, opacity:1}}
                                    transition={{duration:0.7}}
                                >
                                    Talk to an experts
                                </motion.button>
                            </div>
                            <div className="md:block hidden justify-self-end lg:py-16 py-10 animate-waving-astronut">
                                <Image
                                    src="/images/astro.png"
                                    width={450}
                                    height={450}
                                    alt="astonate-image"
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* ==================== first section ================== */}
                <TrustedCom/>

                {/* ==================== second section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        Enterprise Suite is how work gets done at scale
                    </h2>
                    <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 lg:gap-y-0 gap-y-4 xl:mt-10 sm:mt-7 mt-5"
                        initial={{y:30, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        {/* ============== first review =============== */}
                        <div className="flex flex-col md:space-y-3">
                            <div className="md:block hidden">
                                <Image
                                    src="/images/ubber-team.png"
                                    width={1160}
                                    height={746}
                                    alt="ubberteam-image"
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="flex flex-col bg-[#115E59] py-5 sm:px-7 px-5 rounded-xl">
                                <div className="flex items-center space-x-3">
                                    <span className="text-white font-semibold sm:text-5xl text-4xl">
                                        <FaUber/>
                                    </span>
                                    <h3 className="sm:text-4xl text-3xl font-semibold text-white">
                                        Ubber
                                    </h3>
                                </div>
                            
                                <span className="text-white font-semibold xl:text-2xl text-xl mt-5">
                                    “Brenda enables us to differentiate 
                                    ourselves from our competitors and 
                                    produce content at a higher caliber.”
                                </span>
                                <span className="text-gray-300 mt-2">
                                    Josh Machiz, Chief Digital Officer
                                </span>

                                <div className="xl:mt-14 mt-7">
                                    <span className="text-white font-semibold">
                                        Results
                                    </span>

                                    <div className="flex flex-col border-t border-white mt-2">
                                        <div className="mt-3">
                                            <h5 className="text-white font-semibold text-xl">
                                                Emmy winning
                                            </h5>
                                            <span className="text-white text-sm">
                                                Facebook watch program
                                            </span>
                                        </div>
                                        <div className="mt-3">
                                            <h5 className="text-white font-semibold text-xl">
                                                Millions
                                            </h5>
                                            <span className="text-white text-sm">
                                                of impressions generated 
                                                per client per IPO
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ============== second review =============== */}
                        <div className="flex flex-col md:space-y-3">
                            <div className="flex flex-col bg-cyan-700 py-5 sm:px-7 px-5 rounded-xl">
                                <div className="flex items-center space-x-3">
                                    <span className="text-white font-semibold sm:text-5xl text-4xl">
                                        <FaMicrosoft/>
                                    </span>
                                    <h3 className="sm:text-4xl text-3xl font-semibold text-white">
                                        Microsoft
                                    </h3>
                                </div>
                            
                                <span className="text-white font-semibold xl:text-2xl text-xl mt-5">
                                    “Brenda Handle blended workforce logistics in one place balance our life making easy and thank you brenda.”
                                </span>
                                <span className="text-gray-300 mt-2">
                                    Josh Machiz, Chief Digital Officer
                                </span>

                                <div className="xl:mt-14 mt-7">
                                    <span className="text-white font-semibold">
                                        Results
                                    </span>

                                    <div className="flex flex-col border-t border-white mt-2">
                                        <div className="mt-3">
                                            <h5 className="text-white font-semibold text-xl">
                                                Millan Edwared
                                            </h5>
                                            <span className="text-white text-sm">
                                                Microsoft watch program
                                            </span>
                                        </div>
                                        <div className="mt-3">
                                            <h5 className="text-white font-semibold text-xl">
                                                Millions
                                            </h5>
                                            <span className="text-white text-sm">
                                                of impressions generated 
                                                per client per IPO
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:block hidden">
                                <Image
                                    src="/images/oracle-team.png"
                                    width={1160}
                                    height={746}
                                    alt="ubberteam-image"
                                    className="rounded-xl"
                                />
                            </div>
                        </div>

                        {/* ============== Thired review =============== */}
                        <div className="lg:flex flex-col md:space-y-3 lg:col-span-1 md:col-span-2">
                            <div className="md:block hidden">
                                <Image
                                    src="/images/microsoft-team.png"
                                    width={1160}
                                    height={746}
                                    alt="ubberteam-image"
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="flex flex-col bg-gray-700 py-5 sm:px-7 px-5 rounded-xl">
                                <div className="flex items-center space-x-3">
                                    <span className="text-white font-semibold sm:text-5xl text-4xl">
                                        <GrOracle/>
                                    </span>
                                    <h3 className="sm:text-4xl text-3xl font-semibold text-white">
                                        Oracle
                                    </h3>
                                </div>
                            
                                <span className="text-white font-semibold xl:text-2xl text-xl mt-5">
                                    “Brenda enables us to differentiate 
                                    ourselves from our competitors and 
                                    produce content at a higher caliber.”
                                </span>
                                <span className="text-gray-300 mt-2">
                                    Jekkey, Chief Digital Officer
                                </span>

                                <div className="xl:mt-14 mt-7">
                                    <span className="text-white font-semibold">
                                        Results
                                    </span>

                                    <div className="flex flex-col border-t border-white mt-2">
                                        <div className="mt-3">
                                            <h5 className="text-white font-semibold text-xl">
                                                Lenlina Zenselvia
                                            </h5>
                                            <span className="text-white text-sm">
                                                Oracle watch program
                                            </span>
                                        </div>
                                        <div className="mt-3">
                                            <h5 className="text-white font-semibold text-xl">
                                                Millions
                                            </h5>
                                            <span className="text-white text-sm">
                                                of impressions generated 
                                                per client per IPO
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ==================== Thired section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        From small projects to complex initiatives, we can help
                    </h2>

                    <motion.div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:gap-x-14 gap-x-10 md:gap-y-10 gap-y-7 xl:mt-10 sm:mt-8 mt-5"
                        initial={{y:30, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        <div className="flex flex-col space-y-2">
                            <span className="text-cyan-700 text-7xl">
                                <FiDatabase/>
                            </span>

                            <div className="space-y-2">
                                <h4 className="text-zinc-800 font-semibold text-xl">
                                    Move projects across the finish line
                                </h4>
                                <p className="text-zinc-500 text-[17px] font-semibold">
                                    Complete tasks and short-term projects with pros who can meet your business needs.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <span className="text-cyan-700 text-7xl">
                                <AiOutlineLaptop/>
                            </span>

                            <div className="space-y-2">
                                <h4 className="text-zinc-800 font-semibold text-xl">
                                    Adapt and expand your workforce
                                </h4>
                                <p className="text-zinc-500 text-[17px] font-semibold">
                                    Complete tasks and short-term projects with pros who can meet your business needs.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <span className="text-cyan-700 text-7xl">
                                <HiPuzzle/>
                            </span>

                            <div className="space-y-2">
                                <h4 className="text-zinc-800 font-semibold text-xl">
                                    Add more talent to your bench
                                </h4>
                                <p className="text-zinc-500 text-[17px] font-semibold">
                                    Incorporate new skills into your team to accomplish core company objectives.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <span className="text-cyan-700 text-7xl">
                                <TbPhoneCall/>
                            </span>

                            <div className="space-y-2">
                                <h4 className="text-zinc-800 font-semibold text-xl">
                                    Delegate it all to our team
                                </h4>
                                <p className="text-zinc-500 text-[17px] font-semibold">
                                    Explore fully managed solutions to help you deliver complex projects.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ==================== four section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        Enterprise solutions to scale a winning talent strategy
                    </h2>

                    <div className="grid gap-y-5 xl:mt-10 sm:mt-8 mt-5">
                        <motion.div className="grid md:grid-cols-2 2xl:gap-x-10 lg:gap-x-7"
                            initial={{y:-30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <Image
                                src="/images/ms.png"
                                width={750}
                                height={550}
                                alt="ms-image"
                                className="lg:rounded-xl md:rounded-l-xl md:rounded-tr-none rounded-t-lg"
                            />

                            <div className="flex items-start flex-col space-y-5 bg-gray-700 py-5 sm:px-7 px-5 lg:rounded-xl md:rounded-r-xl md:rounded-bl-none rounded-b-lg">
                                <div className="space-y-2 pb-5 border-b border-white">
                                    <h4 className="text-white font-semibold 2xl:text-3xl text-2xl">
                                        Talent services and management
                                    </h4>
                                    <p className="text-white 2xl:text-lg font-semibold">
                                        From job postings to project management to collaboration tools, do it all in one place.
                                    </p>
                                </div>

                                <div className="space-y-2 pb-5 border-b border-white">
                                    <h4 className="text-white font-semibold 2xl:text-3xl text-2xl">
                                        Compliance and work protection
                                    </h4>
                                    <p className="text-white 2xl:text-lg font-semibold">
                                        We provide classification services to protect you from legal risks.
                                    </p>
                                </div>

                                <div className="space-y-2 pb-5 border-b border-white">
                                    <h4 className="text-white font-semibold 2xl:text-3xl text-2xl">
                                        Safety and security
                                    </h4>
                                    <p className="text-white 2xl:text-lg font-semibold">
                                        Engage, onboard, and manage your hybrid team worry-free with our compliant talent marketplace. Learn more
                                    </p>
                                </div>

                                <button className="px-5 py-2 bg-white text-zinc-800 transition hover:bg-gray-200 font-semibold rounded-full">
                                    Talk to an expert
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid gap-y-5 mt-7">
                        <motion.div className="grid md:grid-cols-2 2xl:gap-x-10 lg:gap-x-7"
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="flex items-start flex-col space-y-5 bg-cyan-700 py-5 sm:px-7 px-5 lg:rounded-xl md:rounded-l-xl md:rounded-br-none rounded-b-lg md:row-start-1 md:row-end-2 row-start-2 row-end-3">
                                <div className="space-y-2 pb-5 border-b border-white">
                                    <h4 className="text-white font-semibold 2xl:text-3xl text-2xl">
                                        Governance and controls
                                    </h4>
                                    <p className="text-white 2xl:text-lg font-semibold">
                                        Create contracts and onboarding flows and use reporting tools that fit your needs and scale your business.
                                    </p>
                                </div>

                                <div className="space-y-2 pb-5 border-b border-white">
                                    <h4 className="text-white font-semibold 2xl:text-3xl text-2xl">
                                        Payroll and classification
                                    </h4>
                                    <p className="text-white 2xl:text-lg font-semibold">
                                        Classify and pay your distributed team with Upwork Payroll so you can focus on growing your business. Learn more
                                    </p>
                                </div>

                                <div className="space-y-2 pb-5 border-b border-white">
                                    <h4 className="text-white font-semibold 2xl:text-3xl text-2xl">
                                        Work with talent you trust
                                    </h4>
                                    <p className="text-white 2xl:text-lg font-semibold">
                                        Bring in talent you already know and manage their experience through one platform.
                                    </p>
                                </div>

                                <button className="px-5 py-2 bg-white text-zinc-800 transition hover:bg-gray-200 font-semibold rounded-full">
                                    Talk to an expert
                                </button>
                            </div>

                            <Image
                                src="/images/ms.png"
                                width={750}
                                height={550}
                                alt="safe-image"
                                className="lg:rounded-xl md:rounded-r-xl md:rounded-tl-none rounded-t-lg"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* ==================== five section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid lg:grid-cols-2 xl:gap-x-14 lg:gap-x-10 lg:gap-y-0 sm:gap-y-10 gap-y-7">
                        <div>
                            <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                                How it works
                            </h2>
                            <div className="space-y-4 lg:mt-7 mt-5">
                                <motion.div className="flex space-x-2 items-center"
                                    initial={{y:30, opacity:0}}
                                    whileInView={{y:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    <IoMdCheckmark className="text-2xl text-green-600"/>
                                    <p className="text-zinc-600 text-[17px] font-semibold"> 
                                        <span className="font-bold text-zinc-800">Tell us</span> about your project and the skills you're looking for
                                    </p>
                                </motion.div>
                                <motion.div className="flex space-x-2 items-center"
                                    initial={{y:30, opacity:0}}
                                    whileInView={{y:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    <IoMdCheckmark className="text-2xl text-green-600"/>
                                    <p className="text-zinc-600 text-[17px] font-semibold"> 
                                    <span className="font-bold text-zinc-800">Instantly browse</span> qualified talent with proven track records
                                    </p>
                                </motion.div>
                                <motion.div className="flex space-x-2 items-center"
                                    initial={{y:30, opacity:0}}
                                    whileInView={{y:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    <IoMdCheckmark className="text-2xl text-green-600"/>
                                    <p className="text-zinc-600 text-[17px] font-semibold"> 
                                        <span className="font-bold text-zinc-800"> Hire quickly and securely </span> with our customizable tools
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        <div>
                            <Image
                                src="/images/team-enterprise.jpg"
                                width={650}
                                height={450}
                                alt="teamenterprise-image"
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </section>

                {/* ==================== six section ================== */}
                <section className="w-full bg-gradient-to-tr from-zinc-800 to-gray-800 xl:mt-14 lg:mt-10 md:mt-7 mt-5">
                    <motion.div className="container mx-auto py-16 md:px-5 sm:px-7 px-3"
                        initial={{y:30, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        <h2 className="text-gray-200 xl:text-4xl text-3xl font-semibold">
                            We’ll show you how, step by step
                        </h2>
                        <p className="text-gray-200 font-semibold mt-4">
                            Enterprise clients benefit from dedicated support with top talent and a robust platform.
                        </p>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 2xl:gap-x-8 gap-x-7 lg:gap-y-0 gap-y-5 lg:mt-14 mt-10">
                            <div className="px-5 py-5 bg-[#e4ebe4] rounded-xl space-y-2">
                                <MdManageAccounts className="text-6xl text-zinc-800"/>
                                <h5 className="text-zinc-800 font-semibold text-lg">
                                    Account Manager
                                </h5>
                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    Maintains your account and works with your team to maximize the return on your Upwork investment.
                                </p>
                            </div>

                            <div className="px-5 py-5 bg-[#e4ebe4] rounded-xl space-y-2">
                                <FaBrain className="text-6xl text-zinc-800"/>
                                <h5 className="text-zinc-800 font-semibold text-lg">
                                    Solutions Architect
                                </h5>
                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    Develops custom talent solutions for your organization and unique strategic goals.
                                </p>
                            </div>

                            <div className="px-5 py-5 bg-[#e4ebe4] rounded-xl space-y-2">
                                <BiCodeBlock className="text-6xl text-zinc-800"/>
                                <h5 className="text-zinc-800 font-semibold text-lg">
                                    Program Success Managers
                                </h5>
                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    Keeps your team up to date on how to use Upwork and any changes to your account.
                                </p>
                            </div>

                            <div className="px-5 py-5 bg-[#e4ebe4] rounded-xl space-y-2">
                                <BsLaptop className="text-6xl text-zinc-800"/>
                                <h5 className="text-zinc-800 font-semibold text-lg">
                                    Brenda Professional
                                </h5>
                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    Supports your team through the hiring process, from screening talent to starting projects.
                                </p>
                            </div>
                        </div>

                        <button className="px-5 py-2 bg-white text-zinc-800 font-semibold rounded-full mt-7 transition hover:bg-gray-200">
                            Get Started
                        </button>
                    </motion.div>
                </section>

                {/* =========================== seven section ========================== */}
                <section className="container mx-auto mt-3 py-3 md:px-5 sm:px-7 px-3 space-y-3">
                <div className="md:mt-10 mt-5">
                    <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-[#374151] leading-tight">
                        Trusted by leading brands and startups
                    </h2>
                    
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-5 xl:gap-x-14 gap-x-7 mt-7">
                        <motion.div className="flex flex-col bg-cyan-700 py-5 px-7 rounded-xl"
                            initial={{y:-30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="flex items-center space-x-3">
                                <span className="text-white font-semibold sm:text-5xl text-4xl">
                                    <FaMicrosoft/>
                                </span>
                                <h3 className="sm:text-4xl text-3xl font-semibold text-white">
                                    Microsoft
                                </h3>
                            </div>
                        
                            <span className="text-white font-semibold xl:text-2xl text-xl mt-5">
                                “Brenda enables us to differentiate 
                                ourselves from our competitors and 
                                produce content at a higher caliber.”
                            </span>
                            <span className="text-gray-300 mt-2">
                                Josh Machiz, Chief Digital Officer
                            </span>

                            <div className="xl:mt-14 mt-7">
                                <span className="text-white font-semibold">
                                    Results
                                </span>

                                <div className="flex sm:flex-row flex-col border-t border-white xl:space-x-20 sm:space-x-10 mt-2">
                                <div className="mt-3">
                                    <h5 className="text-white font-semibold text-xl">
                                        Emmy winning
                                    </h5>
                                    <span className="text-white text-sm">
                                        Facebook watch program
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <h5 className="text-white font-semibold text-xl">
                                        Millions
                                    </h5>
                                    <span className="text-white text-sm">
                                        of impressions generated 
                                        per client per IPO
                                    </span>
                                </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="grid grid-cols-2"
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="bg-[url('/images/cling.png')] bg-cover bg-right rounded-l-xl">
                            </div>

                            <div className="flex flex-col items-center space-y-5 py-3 px-5 bg-gray-800 rounded-r-xl">
                            <h2 className="text-white font-semibold text-2xl xl:mt-5 mt-3">
                                And many more..
                            </h2>

                            <span className="text-white xl:text-4xl text-3xl">
                                <SiAdobe/>
                            </span>
                            <span className="text-white xl:text-4xl text-3xl">
                                <SiUdacity/>
                            </span>
                            <span className="text-white xl:text-4xl text-3xl">
                                <FaAtlassian/>
                            </span>
                            <span className="text-white xl:text-4xl text-3xl">
                                <ImGoogle/>
                            </span>
                            <span className="text-white xl:text-4xl text-3xl">
                                <BsWordpress/>
                            </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
                </section>

                {/* ================= Eight Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        Resources to move your business forward
                    </h2>

                    <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-7 lg:gap-y-0 md:gap-y-7 gap-y-5 mt-7"
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.7}}
                    >
                        <div className="flex flex-col justify-between bg-[#dcf5f0] transition hover:bg-[#d3eee8] px-4 py-4 rounded-lg min-h-[8rem] cursor-pointer">
                            <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                The Great Work Teardown
                            </h3>

                            <button className="text-blue-700 underline flex items-center transition hover:text-blue-900 mt-7 text-lg">
                                Read More
                                <HiArrowRight className="mt-1 ml-1"/>
                            </button>
                        </div>

                        <div className="flex flex-col justify-between bg-[#dcf5f0] transition hover:bg-[#d3eee8] px-4 py-4 rounded-lg min-h-[8rem] cursor-pointer">
                            <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                Strategic Guide to Build and Scale a Hybrid Workforce
                            </h3>

                            <button className="text-blue-700 underline flex items-center transition hover:text-blue-900 mt-7 text-lg">
                                Read More
                                <HiArrowRight className="mt-1 ml-1"/>
                            </button>
                        </div>

                        <div className="flex flex-col justify-between bg-[#dcf5f0] transition hover:bg-[#d3eee8] px-4 py-4 rounded-lg min-h-[8rem] cursor-pointer">
                            <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                Why Trust Is the Secret Ingredient to Scaling a Successful Talent Solution
                            </h3>

                            <button className="text-blue-700 underline flex items-center transition hover:text-blue-900 mt-7 text-lg">
                                Read More
                                <HiArrowRight className="mt-1 ml-1"/>
                            </button>
                        </div>
                    </motion.div>
               </section>

               {/* ================= Eight Section ================== */}
               <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="md:grid lg:grid-cols-3 grid-cols-2 xl:gap-x-10 lg:gap-x-7 gap-x-5 flex flex-col md:space-y-0 space-y-4 bg-[#5CA3C5] lg:px-3 sm:px-5 px-3 py-3 rounded-lg">
                        <Image
                            src="/images/manager-vison.png"
                            width={220}
                            height={170}
                            layout="responsive"
                            alt="showes-image"
                            className="rounded-lg"
                        />

                        <div className="flex flex-col justify-between lg:space-y-10 space-y-5 md:mt-1 mt-2 lg:col-span-2">
                            <div>
                                <h2 className="lg:text-4xl text-2xl text-gray-100 font-semibold">
                                    Learn how Enterprise Suite can help you grow your business
                                </h2>
                            </div>
                            <div className="lg:flex lg:space-x-7 inline border-t border-gray-100 justify-between py-3 xl:space-y-0 space-y-3">
                              <div>
                                <h2 className="text-gray-100 font-semibold xl:text-lg">
                                    Join the world’s work marketplace and get work done, your way.
                                </h2>
                              </div>

                               <div className="min-w-[25%]">
                                    <button
                                        className="border border-gray-100 text-white px-4 lg:py-2 py-1 rounded-full font-semibold transition hover:text-gray-100 hover:border-gray-300"
                                    >
                                        Talk to an expert
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

export default Enterprise;