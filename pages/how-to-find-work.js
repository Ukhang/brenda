import HeadTag from "../components/HeadTag";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/dist/client/image";
import { FaStar } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import TrustedCom from "../components/TrustedCom";
import Link from "next/link";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const HowToFindWork = () => {

    {/* ============== Hooks call =============== */}
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="How Does Upwork Work for Freelancers | Brenda"/>

            {/* ================== Header =================== */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                {/* ============= Head Container =============== */}
                <div className="container mx-auto mt-5 md:px-3 sm:px-7 px-3">
                    <section className="grid md:grid-cols-2 grid-cols-1 sm:px-5 px-3 py-3 xl:gap-x-20 lg:gap-x-16 md:gap-x-10 bg-[#E6FAF6] rounded-xl">
                        <div className="lg:mt-2 mt-1 lg:ml-2 ml-1 mb-2 flex flex-col justify-between">
                            <div>
                                <motion.h2 className="text-[#0C4A6E] font-semibold 2xl:text-6xl lg:text-5xl text-4xl"
                                    initial={{y:30, opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    Work the way you want
                                </motion.h2>
                                <motion.p className="xl:text-xl text-lg text-zinc-700 lg:mt-5 mt-2"
                                    initial={{y:"100%", opacity:0}}
                                    animate={{y:0, opacity:1}}
                                    transition={{duration:2}}
                                >
                                    Find the right work for you, with great clients, at the world’s work marketplace.
                                </motion.p>
                                <div className="sm:flex inline-flex flex-col items-start xl:mt-14 lg:mt-10 mt-5 lg:space-y-7 space-y-4">
                                    <motion.button className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full" 
                                        onClick={() => router.push("#")}
                                        initial={{x:-30, opacity:0}}
                                        animate={{x:0, opacity:1}}
                                        transition={{duration:1}}
                                    >
                                        Create Your Profile
                                    </motion.button>
                                </div>
                            </div>

                            <div className="border-t border-zinc-300 flex md:flex-row flex-col justify-between mt-7 md:space-y-0 space-y-2">
                                <h4 className="text-zinc-500 font-semibold 2xl:text-2xl text-xl">
                                    Professionals rate clients
                                </h4>
                                <div className="space-y-1">
                                    <div className="flex items-center space-x-1 2xl:text-2xl text-xl font-semibold text-zinc-500">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <div className="2xl:text-3xl text-2xl">
                                            4.9/5
                                        </div>
                                    </div>
                                    <h4 className="text-zinc-500 font-semibold 2xl:text-lg">
                                        based on 2.4M+ reviews
                                    </h4>
                                </div>
                            </div>

                        </div>
                        <motion.div className="md:block hidden justify-self-end"
                            initial={{x:30, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <Image
                                src="/images/find-work.png"
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
                {/* ==================== first section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        How to get started
                    </h2>

                    <div className="border-t border-gray-200 mt-7">
                        <div className="mt-4 lg:space-y-7 space-y-5">
                            <motion.div className="bg-[#E6FAF6] py-4 px-4 rounded-xl flex md:flex-row flex-col md:space-x-7"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <div className="bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-xl flex justify-center px-7 py-4 md:min-w-[13rem]">
                                    <Image
                                        src="/images/post-job.png"
                                        width={150}
                                        height={130}
                                        alt="post-image"
                                    />
                                </div>

                                <div className="mt-2">
                                    <h5 className="xl:text-3xl text-2xl font-semibold text-zinc-800">
                                        Create your profile (it’s free)
                                    </h5>
                                    <p className="text-zinc-500 text-[17px] font-semibold mt-1">
                                        An eye-catching title and client-focused overview help us match you to the work you want. Include your work history, your skills, and your photo. Add more, like an introduction video, to create a profile that really stands out.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="bg-[#E6FAF6] py-4 px-4 rounded-xl flex md:flex-row flex-col md:space-x-7"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <div className="bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-xl flex justify-center px-7 py-4 md:min-w-[13rem]">
                                    <Image
                                        src="/images/talent-come.png"
                                        width={150}
                                        height={130}
                                        alt="talent-image"
                                    />
                                </div>

                                <div className="mt-2">
                                    <h5 className="xl:text-3xl text-2xl font-semibold text-zinc-800">
                                        Talent comes to you
                                    </h5>
                                    <p className="text-zinc-500 text-[17px] font-semibold mt-1">
                                        Work and earn in different ways. Bid for jobs. Pitch your projects. Discuss your in-demand skills with our recruiters so they can find opportunities aligned with your passions and career goals. Do all three. Create a predictable pipeline and build your network.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="bg-[#E6FAF6] py-4 px-4 rounded-xl flex md:flex-row flex-col md:space-x-7"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <div className="bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-xl flex justify-center px-4 py-4 md:min-w-[13rem]">
                                    <Image
                                        src="/images/payment-smp.png"
                                        width={150}
                                        height={130}
                                        alt="payment-image"
                                    />
                                </div>

                                <div className="mt-2">
                                    <h5 className="xl:text-3xl text-2xl font-semibold text-zinc-800">
                                        Get paid securely
                                    </h5>
                                    <p className="text-zinc-500 text-[17px] font-semibold mt-1">
                                        Choose how you get paid. Our fixed-price protection releases client payments at project milestones. Hourly protection bills clients every week. However you work, our service fees are the same. Spend less time chasing, more earning.                                
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <button className="px-5 py-2 rounded-full bg-zinc-800 text-white font-semibold mt-5 hover:bg-zinc-700" onClick={() => router.push("#")}>
                        Create Your Profile
                    </button>
                </section>

                {/* ==================== second section ================== */}
                <TrustedCom/>

                {/* ==================== Thired section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="pb-4 border-b border-zinc-200">
                        <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                            Explore ways to earn
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-x-20 lg:gap-x-16 md:gap-x-7 items-center md:mt-14">
                        <motion.div className="md:row-start-1 row-start-2 lg:row-end-2 row-end-3"
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:0.7}}
                        >
                            <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold md:mt-0 mt-2">
                                Find your next opportunity
                            </h2>
                            <p className="text-zinc-600 sm:text-lg text-md lg:mt-5 mt-3">
                                Search on Talent Marketplace™ for the hourly or fixed-price work you’re looking for. Submit a proposal, set your rate, and show how great you’ll be. Give a little extra by sharing your unique approach and offering a rapport-building interview.
                            </p>

                            <button className="bg-zinc-800 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full lg:mt-7 mt-4" onClick={() => router.push("#")}>
                                Find Talent
                            </button>
                        </motion.div>

                        <motion.div className="md:justify-self-end justify-self-center md:items-center md:mt-0 mt-5"
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{duration:0.7}}
                        >
                            <Image
                                src="/images/next-op.png"
                                width={480}
                                height={230}
                                alt="sortlistdev-image"
                                className="rounded-xl"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* ==================== Fourth section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-20 lg:gap-y-0 md:gap-y-5 gap-y-3 items-center">
                        <motion.div className="flex sm:flex-row flex-col 2xl:space-x-10 sm:space-x-7 sm:space-y-0 space-y-5"
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            transition={{duration:0.7}}
                        >
                            {/* =================== first card ================== */}
                            <div className="bg-[#E6FAF6] border relative rounded-lg md:max-w-[300px] w-full">
                                <div>
                                    <Image
                                        src="/images/hi.jpg"
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
                                            wordpress website
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 absolute bg-gray-100 px-1 py-1 rounded-full top-2 left-2">
                                    <Image
                                        src="/images/v-ac2.jpeg"
                                        width={33}
                                        height={30}
                                        alt="feelancer-image"
                                        className="rounded-full relative"
                                    />
                                    <div className="w-2 h-2 bg-green-500 rounded-full absolute left-5 bottom-2 border border-gray-200"></div>
                                    <h5 className="text-zinc-700 font-semibold pr-5 text-lg">
                                        Jorge L.
                                    </h5>
                                </div>
                                <div/>
                            </div>
                            
                            {/* =================== second card ================== */}
                            <div className="bg-[#E6FAF6] border relative rounded-lg md:max-w-[300px] w-full">
                                <div>
                                    <Image
                                        src="/images/tp-artblog-project1.png"
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
                                            Blog Post
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 absolute bg-gray-100 px-1 py-1 rounded-full top-2 left-2">
                                    <Image
                                        src="/images/v-e3.jpeg"
                                        width={33}
                                        height={30}
                                        alt="feelancer-image"
                                        className="rounded-full relative"
                                    />
                                    <div className="w-2 h-2 bg-green-500 rounded-full absolute left-5 bottom-2 border border-gray-200"></div>
                                    <h5 className="text-zinc-700 font-semibold pr-5 text-lg">
                                        Amenda H.
                                    </h5>
                                </div>
                                <div/>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:0.7}}
                        >
                            <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold md:mt-0 mt-2">
                                Sell what you do best
                            </h2>
                            <p className="text-zinc-600 sm:text-lg text-md lg:mt-5 mt-3">
                                Create easy-to-buy projects with Project Catalog™. Match your projects to what clients need. Be clear upfront by defining your scope, timing, price, and terms. Once we’ve approved your project, clients can start to buy.
                            </p>

                            <button className="bg-zinc-800 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full lg:mt-7 mt-4" onClick={() => router.push("#")}>
                                See Other Projects
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* ==================== Fourth section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-x-20 lg:gap-x-16 md:gap-x-7 items-center">
                        <motion.div className="md:row-start-1 row-start-2 lg:row-end-2 row-end-3"
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:0.7}}
                        >
                            <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold md:mt-0 mt-2">
                                Let the work find you
                            </h2>
                            <p className="text-zinc-600 sm:text-lg text-md lg:mt-5 mt-3">
                                Does your work stand out? Are your skills in demand? If you’re in development, design, or marketing, you can apply to our fast lane. Our recruiters will assess your hard-earned experience and match you to exclusive opportunities with trusted clients.
                            </p>

                            <button className="bg-zinc-800 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full lg:mt-7 mt-4" onClick={() => router.push("#")}>
                                Apply to Join
                            </button>
                        </motion.div>

                        <div className="md:justify-self-end justify-self-center md:items-center md:mt-0 mt-5">
                            <Image
                                src="/images/lets-work.jpg"
                                width={480}
                                height={330}
                                alt="sortlistdev-image"
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </section>

                {/* ===================== Five section ======================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-x-7 xl:gap-x-16 lg:gap-x-14 lg:gap-y-0 gap-y-5 items-center">
                        <div>
                            <Image
                                src="/images/payment-working.png"
                                width={650}
                                height={650}
                                alt="girlsworkingpc-image"
                                className="rounded-xl lg:w-auto w-full"
                            />
                        </div>

                        <div className="2xl:space-y-7 lg:space-y-5 space-y-4">
                            <motion.div className="flex flex-col xl:space-y-2 space-y-1"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:0.7}}
                            >
                                <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                                    How payments work
                                </h2>
                                <p className="text-zinc-500 xl:text-[17px] font-semibold">
                                    Whether you’re paid hourly or on a fixed-price contract, all the work you complete comes with payment protection.
                                </p>
                            </motion.div>

                            <motion.div className="flex flex-col xl:space-y-2 space-y-1"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:0.7}}
                            >
                                <h4 className="text-zinc-800 xl:text-xl text-lg font-semibold">
                                    All in one place
                                </h4>
                                <p className="text-zinc-500 xl:text-[17px] font-semibold">
                                    Invoice clients and track your earnings on Upwork for a simple and streamlined process.
                                </p>
                            </motion.div>

                            <motion.div className="flex flex-col xl:space-y-2 space-y-1"
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:0.7}}
                            >
                                <h4 className="text-zinc-800 xl:text-xl text-lg font-semibold">
                                    Choose how you get paid
                                </h4>
                                <p className="text-zinc-500 xl:text-[17px] font-semibold">
                                    Use what works best for you—including direct deposit, PayPal, Payoneer, wire transfer, and more
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{y:30, opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:0.7}}
                            >
                                <h4 className="text-zinc-800 xl:text-xl text-lg font-semibold">
                                    No fees until you complete your work
                                </h4>
                                <p className="text-zinc-500 xl:text-[17px] font-semibold mt-1">
                                    Our service fees are taken as a percentage of your earnings. We charge you based on lifetime earnings with each client:
                                </p>

                                <ul className="flex flex-col sm:space-y-3 space-y-2 mt-2 pl-5">
                                    <li className="text-zinc-500 xl:text-[17px] font-semibold list-disc">
                                        20% for the first $500 you bill your client
                                    </li>
                                    <li className="text-zinc-500 xl:text-[17px] font-semibold list-disc">
                                        10% for total billings between $500.01 and $10,000
                                    </li>
                                    <li className="text-zinc-500 xl:text-[17px] font-semibold list-disc">
                                        5% for total billings over $10,000
                                    </li>
                                </ul>

                               <div className="mt-3">
                                    <Link href="#">
                                        <a className="font-semibold underline text-blue-700"> 
                                            Learn more about service fees. 
                                        </a>
                                    </Link>
                               </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* =============  Six Section =============== */}
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
                                    Is Upwork free to join as a freelancer?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    Yes, it’s free to join Upwork, complete your profile, search for work and create your own projects. Our service fee is based on your earnings with each client and the sliding scale rewards long-term relationships.
                                </p>
                            </div>

                            <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    Can I grow my career on Upwork?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl text-lg text-md">
                                    Yes, some of our most successful professionals have brought their strong background and employment track record to Upwork. We know you may be new to freelancing but highly experienced in your field. Our complete guide shares our step-by-step tips for building your freelance career.
                                </p>
                            </div>

                            <div className="xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    What can I gain from freelancing with Upwork?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    Many more people like you are choosing to leave their day jobs and grow as independent professionals. Why? Because of the freedom and flexibility that comes with being your own boss. And for the chance to work with great clients and well-known brands. Many choose Upwork because we help them do it well. How to Succeed as a Freelancer gives you a taste of the support we offer to boost your success.
                                </p>
                            </div>

                            <div className="xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    Is Upwork good for building a business? 
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    Yes, and creating an agency can be a great way to grow. Using our agency structure, freelancers can collaborate as a single organization, delivering more to their clients. Moving from solo freelancer to agency owner is a big transition, but it might be the right one for you.
                                </p>
                            </div>

                            <div className="xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    What projects can I find on Upwork?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    Clients are looking for help across almost every industry, job, and skill set. Find the work you’re looking for, from specific projects to ongoing, long-term work, on fixed-price and hourly contracts. 
                                </p>
                            </div>

                            <div className="xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    What are Connects? 
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    Connects are Upwork’s virtual currency. Freelancers and agencies use them to show their genuine interest as they submit proposals. Different jobs require different amounts of Connects, some none at all. Freelancer accounts receive free Connects every month. You can buy bundles of them. And freelancers and agencies earn Connects by winning client interviews, getting great reviews, and demonstrating their skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =============  Seven Section =============== */}
                <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
                    <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-7 lg:gap-y-0 md:gap-y-7 gap-y-5"
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.7}}
                    >
                        <Link href="#">
                            <div className="flex flex-col justify-between bg-[#dcf5f0] transition hover:bg-[#d3eee8] px-4 py-4 rounded-lg min-h-[8rem] cursor-pointer">
                                <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                    Getting started
                                </h3>

                                <button className="text-blue-700 underline flex items-center transition hover:text-blue-900 mt-5">
                                    Learn More
                                    <HiArrowRight className="mt-1 ml-1"/>
                                </button>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className="flex flex-col justify-between bg-[#dcf5f0] transition hover:bg-[#d3eee8] px-4 py-4 rounded-lg min-h-[8rem] cursor-pointer">
                                <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                    Growing your Career
                                </h3>

                                <button className="text-blue-700 underline flex items-center transition hover:text-blue-900 mt-5">
                                    Learn More
                                    <HiArrowRight className="mt-1 ml-1"/>
                                </button>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className="flex flex-col justify-between bg-[#dcf5f0] transition hover:bg-[#d3eee8] px-4 py-4 rounded-lg min-h-[8rem] cursor-pointer">
                                <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                    Finding Support
                                </h3>

                                <button className="text-blue-700 underline flex items-center transition hover:text-blue-900 mt-5">
                                    Visit Help Center
                                    <HiArrowRight className="mt-1 ml-1"/>
                                </button>
                            </div>
                        </Link>
                    </motion.div>
                </section>
            </main>

            {/* ==================== Footer ====================== */}
            <Footer/>
        </div>
    )
}

export default HowToFindWork;