import HeadTag from "../components/HeadTag";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import TrustedCom from "../components/TrustedCom";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const HowToHire = () => {

    {/* ============== Hooks call =============== */}
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="How Does Brenda Work for Client"/>

            {/* ================= Header ================= */}
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
                                Choose your way to get work done
                            </motion.h2>
                            <motion.p className="xl:text-xl text-lg text-zinc-700 lg:mt-5 mt-2"
                                initial={{y:"100%", opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:2}}
                            >
                                Find freelancers and run projects your way at the world’s work marketplace.
                            </motion.p>
                            <div className="sm:flex inline-flex flex-col items-start xl:mt-14 lg:mt-10 mt-5 lg:space-y-7 space-y-4">
                                <motion.button className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full" 
                                    onClick={() => router.push("#")}
                                    initial={{x:-30, opacity:0}}
                                    animate={{x:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    Talk to a recruiter
                                </motion.button>
                                <span className="font-semibold bg-transparent text-zinc-800">
                                    Looking to get hired? 
                                    <Link href="/how-to-hire">
                                        <a className="text-sky-700 hover:text-sky-800 underline ml-1"> 
                                            Sign Up here 
                                        </a>
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <motion.div className="md:block hidden justify-self-end"
                            initial={{x:30, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <Image
                                src="/images/banner-hth.png"
                                width={592}
                                height={460}
                                alt="banner-image"
                                className="rounded-xl"
                            />
                        </motion.div>
                    </section>
                </div>
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* =============== first section ==================*/}
                <section className="container mx-auto lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="space-y-2 md:pb-7 sm:pb-5 pb-4 border-b border-zinc-300">
                        <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                            Let’s get to work
                        </h2>
                        <p className="text-zinc-700 font-semibold md:text-lg">
                            Build relationships and create your own Virtual Talent Bench™ for quick <br className="hidden md:block"/> project turnarounds or big transformations.
                        </p>
                    </div>
                </section>

                {/* ============= Second Section =============== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-x-0 lg:gap-x-16 md:gap-x-7 items-center md:">
                        <div>
                            <Image
                                src="/images/post-hire.jpg"
                                width="550"
                                height="370"
                                alt="sortlistdev-image"
                                className="rounded-xl"
                            />
                        </div>

                        <motion.div
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold md:mt-0 mt-2">
                                Post a job and hire a pro
                            </h2>
                            <p className="text-zinc-600 sm:text-lg text-md lg:mt-5 mt-3">
                                Post your job on the world’s work marketplace and wait for the proposals to flood in from talented people around the world.
                                Our advanced algorithms help you shortlist candidates who are the best fit. And you can check profiles, portfolios, and reviews before you give someone the green light.
                            </p>

                            <button className="bg-zinc-800 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full lg:mt-7 mt-4" onClick={() => router.push("#")}>
                                Find Talent
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* ============= Thired Section =============== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-20 lg:gap-y-0 md:gap-y-5 gap-y-3 items-center">
                        <motion.div className="lg:row-start-1 row-start-2 lg:row-end-2 row-end-3"
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold md:mt-0 mt-2">
                                Browse and buy projects
                            </h2>
                            <p className="text-zinc-600 font-semibold xl:text-2xl text-xl mt-1">
                                Start critical work right away with Project Catalog
                            </p>
                            <p className="text-zinc-600 sm:text-lg text-md lg:mt-5 mt-3">
                                Post your job on the world’s work marketplace and wait for the proposals to flood in from talented people around the world.
                                Our advanced algorithms help you shortlist candidates who are the best fit. And you can check profiles, portfolios, and reviews before you give someone the green light.
                            </p>

                            <button className="bg-zinc-800 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full lg:mt-7 mt-4" onClick={() => router.push("#")}>
                                Find Talent
                            </button>
                        </motion.div>
                        <motion.div className="flex sm:flex-row flex-col 2xl:space-x-10 sm:space-x-7 sm:space-y-0 space-y-5 lg:justify-self-end md:justify-self-center"
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{duration:1}}
                        >
                            {/* =================== first card ================== */}
                            <div className="bg-[#E6FAF6] border relative rounded-lg md:max-w-[300px] w-full">
                                    <div>
                                        <Image
                                            src="/images/cus-website.png"
                                            width={320}
                                            height={220}
                                            layout="responsive"
                                            alt="showes-image"
                                            className="rounded-t-lg"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center px-3 py-2 lg:space-x-7 space-x-3">
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

                                        <div className="px-3 py-3 font-semibold text-zinc-600">
                                            <p>
                                                You will get a perfect logo designed for your business
                                            </p>
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
                                <div/>
                            </div>
                            
                            {/* =================== second card ================== */}
                            <div className="bg-[#E6FAF6] border relative rounded-lg md:max-w-[300px] w-full">
                                <div>
                                    <Image
                                        src="/images/fca.png"
                                        width={320}
                                        height={220}
                                        layout="responsive"
                                        alt="showes-image"
                                        className="rounded-t-lg"
                                    />
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center px-3 py-2 lg:space-x-7 space-x-3">
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

                                    <div className="px-3 xl:py-3 py-2 font-semibold text-zinc-600">
                                        <p>
                                            You will get a fully customizable WordPress website. No code needed.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 absolute bg-gray-100 px-1 py-1 rounded-full top-2 left-2">
                                    <Image
                                        src="/images/er-ma4.png"
                                        width={33}
                                        height={30}
                                        alt="feelancer-image"
                                        className="rounded-full relative"
                                    />
                                    <div className="w-2 h-2 bg-green-500 rounded-full absolute left-5 bottom-2 border border-gray-200"></div>
                                    <h5 className="text-zinc-700 font-semibold pr-5 text-lg">
                                        Josh M.
                                    </h5>
                                </div>
                                <div/>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ============= Four Section =============== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-20 lg:gap-y-0 md:gap-y-5 gap-y-3 items-center">
                        <motion.div className="flex sm:flex-row flex-col 2xl:space-x-10 sm:space-x-7 sm:space-y-0 space-y-5"
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{duration:1}}
                        >
                            {/* =================== first card ================== */}
                            <div className="bg-[#E6FAF6] relative rounded-lg md:max-w-[300px] w-full sm:px-7 px-4 py-7 flex flex-col items-center">
                                <Image
                                    src="/images/mos-des2.jpeg"
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                    alt="man-image"
                                />
                                <h4 className="text-xl text-zinc-800 font-semibold mt-3">
                                    Ron Z.
                                </h4>
                                <span className="text-zinc-600 font-semibold">
                                    Front-end developer
                                </span>
                                <div className="flex items-center space-x-2 mt-3">
                                    <span className="text-green-500 text-lg"> <FaStar/> </span>
                                    <span className="text-zinc-500 text-lg font-semibold"> 4.9/5 (15 jobs) </span>
                                </div>
                            </div>
                            
                            {/* =================== second card ================== */}
                            <div className="bg-[#E6FAF6] relative rounded-lg md:max-w-[300px] w-full sm:px-7 px-4 py-7 flex flex-col items-center">
                                <Image
                                    src="/images/v-ac3.jpeg"
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                    alt="man-image"
                                />
                                <h4 className="text-xl text-zinc-800 font-semibold mt-3">
                                    Fredricka M.
                                </h4>
                                <span className="text-zinc-600 font-semibold">
                                    UX/UI Designer
                                </span>
                                <div className="flex items-center space-x-2 mt-3">
                                    <span className="text-green-500 text-lg"> <FaStar/> </span>
                                    <span className="text-zinc-500 text-lg font-semibold"> 4.9/5 (15 jobs) </span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold md:mt-0 mt-2">
                                Take the fastlane to the right talent
                            </h2>
                            <p className="text-zinc-600 font-semibold xl:text-2xl text-xl mt-1">
                                Let us pinpoint the talent to reach your goals with Talent Scout
                            </p>
                            <p className="text-zinc-600 sm:text-lg text-md lg:mt-5 mt-3">
                                Talk us through your budget and goals and we’ll do the recruitment for you. You’ll get a shortlist of our very best talent, all perfectly suited to the task.
                            </p>

                            <button className="bg-zinc-800 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full lg:mt-7 mt-4" onClick={() => router.push("#")}>
                                Find Out More
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* ============= Five Section =============== */}
                <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="lg:pb-5 pb-4 border-b">
                        <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                            The seal of approval
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 xl:gap-x-16 lg:gap-x-10 md:gap-x-7 md:gap-y-0 gap-y-3 sm:mt-5 mt-3">
                        <p className="font-semibold lg:text-[22px] sm:text-[21px] text-[20px] text-zinc-600">
                            You’ll have plenty of help choosing the right person for the job. And no matter who you’re hiring you can:
                        </p>

                        <div className="space-y-4">
                            <motion.div className="flex space-x-2 items-center"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <IoMdCheckmark className="text-2xl text-green-600"/>
                                <p className="text-zinc-600 text-[17px] font-semibold"> 
                                    Browse similar projects they’ve worked on 
                                </p>
                            </motion.div>
                            <motion.div className="flex space-x-2 items-center"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <IoMdCheckmark className="text-2xl text-green-600"/>
                                <p className="text-zinc-600 text-[17px] font-semibold"> 
                                    Direct-access to proven talent without unnecessary layers 
                                </p>
                            </motion.div>
                            <motion.div className="flex space-x-2 items-center"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <IoMdCheckmark className="text-2xl text-green-600"/>
                                <p className="text-zinc-600 text-[17px] font-semibold"> 
                                    Check their portfolio 
                                </p>
                            </motion.div>
                            <motion.div className="flex space-x-2 items-center"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <IoMdCheckmark className="text-2xl text-green-600"/>
                                <p className="text-zinc-600 text-[17px] font-semibold"> 
                                    Check qualifications 
                                </p>
                            </motion.div>
                            <motion.div className="flex space-x-2 items-center"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <IoMdCheckmark className="text-2xl text-green-600"/>
                                <p className="text-zinc-600 text-[17px] font-semibold"> 
                                    Run a chat or video interview
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ============= Six Section =============== */}
                <TrustedCom/>

                {/* =============  Seven Section =============== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-x-7 xl:gap-x-16 lg:gap-x-14 lg:gap-y-0 gap-y-5 items-center">
                        <div>
                            <Image
                                src="/images/safe.jpeg"
                                width={650}
                                height={650}
                                alt="girlsworkingpc-image"
                                className="rounded-xl lg:w-auto w-full"
                            />
                        </div>

                        <motion.div className="2xl:space-y-7 lg:space-y-5 space-y-4"
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                                You’re safe with us
                            </h2>

                            <div className="flex flex-col xl:space-y-2 space-y-1">
                                <h4 className="text-zinc-800 xl:text-xl text-lg font-semibold">
                                    You get what you pay for. And we can prove it.
                                </h4>
                                <p className="text-zinc-500 xl:text-[17px] font-semibold">
                                    On hourly contracts, we count keystrokes and take random screenshots of your freelancer’s screen so you can see they’re putting in the time.
                                </p>
                            </div>

                            <div className="flex flex-col xl:space-y-2 space-y-1">
                                <h4 className="text-zinc-800 xl:text-xl text-lg font-semibold">
                                    All in one place
                                </h4>
                                <p className="text-zinc-500 xl:text-[17px] font-semibold">
                                    Use it to securely send and receive files, give real-time feedback and make payments. And if you’re out and about a lot, you’ll want to download the app too.
                                </p>
                            </div>

                            <div className="flex flex-col xl:space-y-2 space-y-1">
                                <h4 className="text-zinc-800 xl:text-xl text-lg font-semibold">
                                    Navigate hiring with an expert on your side
                                </h4>
                                <p className="text-zinc-500 xl:text-[17px] font-semibold">
                                    Our specialized recruiters are all about partnership. They know our talent community and can help match your business needs to the right professionals.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* =============  Eight Section =============== */}
                <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
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
                                    What projects can I do on Brenda?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    Anything people generally do on a computer. Popular tasks are web, mobile and software development, design work and copywriting, but you can also find lawyers, accountants and more.
                                </p>
                            </div>

                            <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    How does Brenda make money?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl text-lg text-md">
                                    When our specialized recruiters share your shortlist with you, they’ll include the hourly rate for each professional – that’s all you’ll pay: there aren’t any extra fees outside 
                                </p>
                            </div>

                            <div className="xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    What’s the top rated program? 
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    It’s a badge of honor for talent who consistently do great work.
                                </p>
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

export default HowToHire;