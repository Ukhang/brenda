import HeadTag from "../components/HeadTag";
import Navbar from "../components/Navbar/Navbar";
import BannerContainer from "../components/BannerContainer";
import { FiArrowRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";
import Image from "next/image";
import Footer from "../components/Footer";
import TrustedCom from "../components/TrustedCom";
import Link from "next/link";
import { useRouter  } from "next/router";
import { motion } from "framer-motion";

const TalentMarketplace = () => {

    {/* ============== Hooks call =============== */}
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col">
            {/* ============== Head Tag =============== */}
            <HeadTag title="Talent Marketplace - Post a Job - Talent Marketplace | Brenda"/>

            {/* ================= Header ================= */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>
                
                {/* ============ Head Container ============ */}
                <BannerContainer 
                    heading={"Post a job today, hire tomorrow"}
                    des={"content with talent that gets you, and hire them to take your business to the next level"}
                    btnI = {{text: "Find Talent", link: "#"}}
                    btnII = {{text: "Find work", link: "#"}}
                    img={"/images/team1.png"}
                />
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* ===================== College Rate Section ===================== */}
                <section className="container mx-auto lg:mt-10 mt-5 py-3 md:px-5 sm:px-7 px-3 space-y-3">
                    <div className="flex lg:flex-row flex-col justify-between 2xl:space-x-36 lg:space-x-20 2xl:px-10 xl:px-5 md:px-3 px-2">
                        <div>
                            <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                                The Best Colleagues you've never met
                            </h2>
                            <p className="lg:mt-5 mt-3 text-zinc-600 xl:text-xl sm:text-lg text-md">
                                Logo designers. App developers. Customer support gurus. Marketing agencies. Make the right connection and it’ll last a lifetime.
                            </p>
                            <div className="flex flex-col space-y-3 xl:mt-10 mt-7">
                                <div className="flex sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-3">
                                    <Link href="#">
                                        <a
                                            className="flex items-center font-semibold bg-teal-100 rounded-full px-3 py-1 text-zinc-900 cursor-pointer transition hover:underline"
                                        >
                                            Development & It
                                            <FiArrowRight className="ml-3"/>
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a
                                            className="flex items-center font-semibold bg-teal-100 rounded-full px-3 py-1 text-zinc-900 cursor-pointer transition hover:underline"
                                        >
                                            Design & Creative
                                            <FiArrowRight className="ml-3"/>
                                        </a>
                                    </Link>
                                </div>

                                <div className="flex sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-3">
                                    <Link href="#">
                                        <a
                                            className="flex items-center font-semibold bg-teal-100 rounded-full px-3 py-1 text-zinc-900 cursor-pointer transition hover:underline"
                                        >
                                            Finance & Accounting
                                            <FiArrowRight className="ml-3"/>
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a
                                            className="flex items-center font-semibold bg-teal-100 rounded-full px-3 py-1 text-zinc-900 cursor-pointer transition hover:underline"
                                        >
                                            Sales & Marketing
                                            <FiArrowRight className="ml-3"/>
                                        </a>
                                    </Link>
                                </div>

                                <div className="flex sm:flex-row flex-col sm:space-x-3 sm:space-y-0 space-y-3">
                                    <Link href="#">
                                        <a
                                            className="flex items-center font-semibold bg-teal-100 rounded-full px-3 py-1 text-zinc-900 cursor-pointer transition hover:underline"
                                        >
                                            Writing & Translation
                                            <FiArrowRight className="ml-3"/>
                                        </a>
                                    </Link>
                                    <Link href="#">
                                        <a
                                            className="flex items-center font-semibold bg-teal-100 rounded-full px-3 py-1 text-zinc-900 cursor-pointer transition hover:underline"
                                        >
                                            Admin and Custom Support
                                            <FiArrowRight className="ml-3"/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex sm:flex-row flex-col lg:space-x-7 md:space-x-24 sm:space-x-20 lg:mt-16 mt-14">
                            <div className="border-t border-zinc-500 py-3">
                                <div className="flex items-center space-x-2">
                                    <span className="text-green-700 xl:text-4xl text-3xl">
                                        <FaStar/>
                                    </span>
                                    <h5 className="xl:text-4xl text-3xl font-semibold text-zinc-800">
                                        4.9/5
                                    </h5>
                                </div>
                                <p className="xl:text-lg text-md font-semibold text-zinc-700">
                                    Average rating of talent from 2M+ reviews
                                </p>
                            </div>

                            <div className="border-t border-zinc-500 py-3">
                                <h5 className="xl:text-4xl text-3xl font-semibold text-zinc-800">
                                    8K+
                                </h5>
                                <p className="xl:text-lg text-md font-semibold text-zinc-700">
                                    Average rating of talent from 2M+ reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===================== Post job Section ================== */}
                <section className="container mx-auto lg:mt-16 mt-5 py-3 md:px-5 sm:px-7 px-3 space-y-3">
                    <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-x-0 lg:gap-x-16 gap-x-5 items-center md:">
                        <div>
                            <Image
                                src="/images/ceo-girls.png"
                                width="510"
                                height="370"
                                alt="ceo-image"
                                className="rounded-xl"
                            />
                        </div>

                        <motion.div
                            initial={{y:"100", opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <h2 className="text-[#0C4A6E] xl:text-4xl text-3xl font-semibold md:mt-0 mt-2">
                                Post today, hire tomorrow
                            </h2>
                            <p className="text-zinc-600 sm:text-lg text-md lg:mt-5 mt-3">
                                We've got you covered from idea to delivery. Post your job  and you'll start
                                getting proposals. Once you've found your expert, you can talk timings,
                                availability, and prices before going ahead.
                            </p>
                            <div>
                                <div className="flex items-center lg:space-x-5 space-x-2 lg:mt-5 mt-3">
                                    <span className="bg-green-400 text-white px-3 py-3 rounded-full lg:text-2xl">
                                        <IoLogoUsd/>
                                    </span>
                                    <div>
                                        <h3 className="text-zinc-800 font-semibold md:text-lg text-md">
                                            Brenda Payment Protection
                                        </h3>
                                        <p className="text-zinc-700 lg:text-lg text-md">
                                            Gives you security and peace of mind
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="xl:mt-7 lg:mt-5 mt-2 bg-zinc-700 py-2 px-7 text-white transition hover:bg-zinc-600 font-semibold rounded-full" onClick={() => router.push("#")}>
                                Post a Job
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* ================= Trusted Company Section ================ */}
                <TrustedCom/>

                {/* ========================== Good Company Section ===================== */}
                <section className="container mx-auto lg:mt-5 mt-3 py-3 md:px-5 sm:px-7 px-3 space-y-3">
                    <div className="2xl:px-10 xl:px-5 md:px-3 sm:px-2 px-0">
                        <h2 className="xl:text-4xl text-3xl font-semibold md:mt-0 text-zinc-800">
                            You're in good company
                        </h2>
                        <p className="text-zinc-600 sm:text-lg text-md sm:mt-3 mt-1">
                            Millions of companies, big and small, use Upwork to get great work done. Join them today.
                        </p>

                        <motion.div className="grid md:grid-cols-3 lg:gap-x-7 md:gap-y-0 gap-y-3 gap-x-5 sm:mt-7 mt-5"
                            initial={{y:"100", opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            {/* ================== First Card ==================== */}
                            <Link href="#">
                                <div className="bg-teal-100 lg:px-5 md:px-3 sm:px-5 px-3 py-3 rounded-xl cursor-pointer flex flex-col justify-between transition duration-300 hover:bg-[#b0ebdbfa] space-y-3">
                                    <h5 className="text-zinc-700 2xl:text-2xl sm:text-xl text-[17px] font-semibold">
                                        How Flexible Talent Helps a Fast - Placed Company Improve Productivity
                                    </h5>
                                    <a
                                        className="flex items-center py-3 lg:text-xl text-md underline text-cyan-700"
                                    >
                                        Read Articale
                                        <FiArrowRight className="ml-3"/>
                                    </a>
                                </div>
                            </Link>

                            {/* ================== Second Card ==================== */}
                            <Link href="#">
                                <div className="bg-teal-100 lg:px-5 md:px-3 sm:px-5 px-3 py-3 rounded-xl cursor-pointer flex flex-col justify-between  transition duration-300 hover:bg-[#b0ebdbfa] space-y-3">
                                    <h5 className="text-zinc-700 2xl:text-2xl sm:text-xl text-[17px] font-semibold">
                                        Flexera Engineers a Way to Deliver Work 2x Faster and Keeps Security at the Forefront
                                    </h5>
                                    <a
                                        className="flex items-center py-3 lg:text-xl text-md underline text-cyan-700"
                                    >
                                        Read Articale
                                        <FiArrowRight className="ml-3"/>
                                    </a>
                                </div>
                            </Link>

                            {/* ================== Third Card ==================== */}
                            <Link href="#">
                                <div className="bg-teal-100 lg:px-5 md:px-3 sm:px-5 px-3 py-3 rounded-xl cursor-pointer flex flex-col justify-between  transition duration-300 hover:bg-[#b0ebdbfa] space-y-3">
                                    <h5 className="text-zinc-700 2xl:text-2xl sm:text-xl text-[17px] font-semibold">
                                        Singularity University Shows What Working Faster (and Doing it Right) Looks Like
                                    </h5>
                                    <a
                                        className="flex items-center py-3 lg:text-xl text-md underline text-cyan-700"
                                    >
                                        Read Articale
                                        <FiArrowRight className="ml-3"/>
                                    </a>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* ======================== Get section ============================= */}
                <section className="container mx-auto lg:mt-10 md:mt-5 mt-3 py-3 md:px-5 sm:px-7 px-3">
                    <div className="space-x-2 2xl:px-10 xl:px-5 md:px-3 sm:px-2 px-0">
                        <h2 className="lg:text-4xl text-3xl font-semibold text-zinc-800">
                            What you’ll get
                        </h2>

                        <motion.div className="flex items-center lg:space-x-36 md:space-x-24 sm:space-x-5 sm:mt-7 mt-3 lg:px-20 sm:px-5 px-1 border-b border-zinc-300 py-5"
                            initial={{y:"100", opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="md:block hidden">
                                <Image
                                    src="/images/document.png"
                                    width={130}
                                    height={120}
                                    alt="searchdocument-image"
                                />
                            </div>
                            <div className="sm:space-y-5 space-y-3 sm:space-x-5 space-x-3">
                                <h2 className="xl:text-3xl text-2xl font-semibold text-zinc-800">
                                    Discover quality talent fast
                                </h2>
                                <ul className="flex flex-col space-y-2">
                                    <li className="list-disc text-zinc-800 font-semibold xl:text-lg">
                                        Post a job and receive proposals from talent
                                    </li>
                                    <li className="list-disc text-zinc-800 font-semibold xl:text-lg">
                                        See verified work history and reviews 
                                    </li>
                                    <li className="list-disc text-zinc-800 font-semibold xl:text-lg">
                                        Send 30 invitations to talent per job post
                                    </li>
                                    <li className="list-disc text-zinc-800 font-semibold xl:text-lg">
                                        Use advanced search filters
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div className="flex items-center lg:space-x-36 md:space-x-24 sm:space-x-5 sm:mt-5 mt-1 lg:px-20 sm:px-5 px-1 border-b border-zinc-300 py-5"
                            initial={{y:"100", opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="md:block hidden">
                                <Image
                                    src="/images/message.png"
                                    width={120}
                                    height={120}
                                    alt="message-image"
                                />
                            </div>
                            <div className="sm:space-y-5 space-y-3 sm:space-x-5 space-x-3">
                                <h2 className="xl:text-3xl text-2xl font-semibold text-zinc-700">
                                    Collaboration tools for project tracking
                                </h2>
                                <ul className="flex flex-col space-y-2">
                                    <li className="list-disc text-zinc-700 font-semibold xl:text-lg">
                                        Chat, video call, and share files with talent
                                    </li>
                                    <li className="list-disc text-zinc-700 font-semibold xl:text-lg">
                                        Get advanced reporting and tracking 
                                    </li>
                                    <li className="list-disc text-zinc-700 font-semibold xl:text-lg">
                                        Set coworker teams and member permission settings 
                                    </li>
                                    <li className="list-disc text-zinc-700 font-semibold xl:text-lg">
                                        Customize your invoice with activity codes
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div className="flex items-center lg:space-x-36 md:space-x-24 sm:space-x-5 sm:mt-5 mt-1 lg:px-20 sm:px-5 px-1 border-b border-zinc-300 py-5"
                            initial={{y:"100", opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="md:block hidden">
                                <Image
                                    src="/images/accounting.png"
                                    width={120}
                                    height={120}
                                    alt="accounting-grils"
                                />
                            </div>
                            <div className="sm:space-y-5 space-y-3 sm:space-x-5 space-x-3">
                                <h2 className="xl:text-3xl text-2xl font-semibold text-zinc-700">
                                    Discover quality talent fast
                                </h2>
                                <ul className="flex flex-col space-y-2">
                                    <li className="list-disc text-zinc-700 font-semibold xl:text-lg">
                                        24/7 premium customer support
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div className="flex items-center lg:space-x-36 md:space-x-24 sm:space-x-5 sm:mt-5 mt-1 lg:px-20 sm:px-5 px-1 border-b border-zinc-300 py-5"
                            initial={{y:"100", opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="md:block hidden">
                                <Image
                                    src="/images/cradit-card.png"
                                    width={120}
                                    height={120}
                                    alt="cradit-card"
                                />
                            </div>
                            <div className="sm:space-y-5 space-y-3 sm:space-x-5 space-x-3">
                                <h2 className="xl:text-3xl text-2xl font-semibold text-zinc-700">
                                    Discover quality talent fast
                                </h2>
                                <ul className="flex flex-col space-y-2">
                                    <li className="list-disc text-zinc-700 font-semibold xl:text-lg">
                                        Get an extra level of security with Brenda Payment Protection   
                                    </li>
                                    <li className="list-disc text-zinc-700 font-semibold xl:text-lg">
                                        Pay as you go billing for milestone and hourly contracts 
                                    </li>
                                    <li className="list-disc text-zinc-700 font-semibold xl:text-lg">
                                        Send 30 invitations to talent per job post
                                    </li>
                                    <li className="list-disc text-zinc-700 font-semibold xl:text-lg">
                                        3-5% marketplace fee depending on payment method
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ======================== Browse Project section ===================  */}
                <section className="container mx-auto lg:my-10 md:my-5 my-3 py-3 md:px-5 sm:px-7 px-3">
                    <div className="2xl:px-10 xl:px-5 md:px-3 sm:px-2 px-0">
                        <div className="flex md:flex-row flex-col lg:space-x-10 sm:space-x-5 space-x-1 bg-[#5CA3C5] px-3 py-3 rounded-lg">
                            <div className="bg-gray-100 relative rounded-lg">
                                <div className="2xl:w-[320px] xl:w-[320px] lg:w-[250px] md:w-[220px] w-full">
                                    <Image
                                        src="/images/showes.png"
                                        width={320}
                                        height={180}
                                        layout="responsive"
                                        alt="showes-image"
                                        className="rounded-t-lg"
                                    />
                                </div>
                                <div className="flex items-center px-3 py-2 lg:space-x-7 space-x-3">
                                    <div className="bg-gray-200 px-3 py-1 rounded-full">
                                        <span className="font-semibold text-zinc-600">
                                            From $175
                                        </span>
                                    </div>
                                    <div>
                                        <div className="flex items-center font-semibold text-zinc-800">
                                            <FaStar className="mr-2 text-green-600"/>
                                            4.9
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 absolute bg-gray-100 px-1 py-1 rounded-full top-2 left-2">
                                    <Image
                                        src="/images/freelancer1.png"
                                        width={33}
                                        height={30}
                                        alt="feelancer-image"
                                        className="rounded-full relative"
                                    />
                                    <div className="w-2 h-2 bg-green-500 rounded-full absolute left-5 bottom-2 border border-gray-200"></div>
                                    <h5 className="text-zinc-700 font-semibold pr-5 text-lg">
                                        Michel B.
                                    </h5>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between space-y-10 md:mt-1 mt-2">
                                <div>
                                    <h2 className="lg:text-4xl text-3xl text-gray-100 font-semibold">
                                        Take the first step toward a smarter talent strategy
                                    </h2>
                                </div>
                                <div className="sm:flex inline border-t border-gray-100 justify-between py-3 sm:space-y-0 space-y-3">
                                    <h2 className="text-gray-100 font-semibold xl:text-lg">
                                        Browse and buy projects from talent.
                                    </h2>

                                    <button
                                        className="bg-gray-100 text-zinc-800 px-3 lg:py-2 py-1 rounded-full font-semibold transition hover:bg-gray-200"
                                        onClick={() => router.push("#")}
                                    >
                                        Browes project
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

export default TalentMarketplace;