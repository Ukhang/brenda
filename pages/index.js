import React from 'react'
import HeadTag from '../components/HeadTag'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import Category from '../components/Category'
import ClintCat from '../components/ClintCat'
import { FaStar, FaUber, FaAtlassian } from 'react-icons/fa'
import { IoLogoUsd } from 'react-icons/io'
import { ImCheckmark, ImGoogle } from 'react-icons/im'
import { BsFillTrophyFill, BsWordpress } from 'react-icons/bs'
import { SiAdobe, SiUdacity } from 'react-icons/si'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import JobSuccessCard from '../components/JobSuccessCard'
import Link from 'next/link'
import { useRouter } from "next/router"
import { motion } from "framer-motion"

export default function Home() {

  {/* ============== Hooks Call =============== */}
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex flex-col">

      {/* ============== Head Tag =============== */}
      <HeadTag title="Brenda - The World's Work Marketplace"/>

      {/* ================= Header ================= */}
      <header className="header-bg">
        {/* ============== Navbar ============ */}
        <Navbar/>

        {/* ============= Head Container =============== */}
        <div className="container mx-auto py-3 md:px-5 sm:px-7 px-3">
          {/* ============ First part [banner section] ============  */}
          <section className="mt-7 flex items-center justify-between">
            {/* ========= Right ======== */}
            <div className="flex flex-col space-y-5">
              <motion.h1 className="xl:text-7xl lg:text-6xl text-4xl font-bold text-[#0C4A6E]"
                initial={{y:"100%", opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:0.9}}
              >
                How Work <br/> Should Work 
              </motion.h1>
              <motion.h6 className='text-zinc-500 xl:text-3xl lg:text-xl text-lg font-semibold'
                initial={{y:"100%", opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:1.5}}
              >
                Forget the old rules. You can have the best people. <br className='lg:block md:hidden block'/>
                Right now. Right here.
              </motion.h6>
            </div>

            {/* ========= Left ======== */}
            <div className="relative">
              <Link href="/jobs/todays-jobs">
                <div className="absolute lg:flex hidden flex-col items-center z-[9] bg-[#F3FFFC] shadow-2xl py-2 px-3 rounded-xl cursor-pointer left-[-3rem] top-0 transition hover:scale-105">
                    <span className="text-[11px] font-semibold text-zinc-700 mb-1">
                      Today's Job
                    </span>
                    <Image src="/images/bag.png" height={30} width={40} alt="bag-image"/>
                </div>
              </Link>

              <div className="mr-10 mt-5 md:block hidden">
                <Image src="/images/headerimg.png" height={350} width={450} alt="header-img"/>
              </div>
              
              {/* ========== job success card Component ================= */}
              <JobSuccessCard/>
            </div>
          </section>
        </div>
      </header>

      {/* ================= Main ==================== */}
      <main>

        {/* ================= Trusted Company Section ================ */}
        <section className="container mx-auto mt-3 py-3 md:px-5 sm:px-7 px-3 space-y-3">
            <h3 className="text-zinc-500 font-semibold lg:text-2xl text-xl">
                Trusted by
            </h3>
            <motion.div className="flex md:flex-row flex-col md:space-x-7 md:space-y-0 space-y-2 md:items-center"
               initial={{x:20, opacity:0}}
               whileInView={{x:0, opacity:1}}
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

        {/* ======================== Talent Category ========================= */}
        <section className="container mx-auto mt-3 md:mt-7 py-3 md:px-5 sm:px-7 px-3">
            <h2 className="text-[#0C4A6E] lg:text-4xl text-3xl font-bold mb-3"> 
              Browse talent by category 
            </h2>

            <span className="text-zinc-600 font-semibold lg:text-lg text-md">
              Looking for work?
              <Link href="/jobs/all-jobs">
                <a className="ml-2 text-cyan-700 cursor-pointer hover:underline">
                  Browse Job
                </a>
              </Link>
            </span>

            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 2xl:gap-x-20 gap-x-10 xl:gap-y-7 sm:gap-y-4 gap-y-3 lg:mt-10 mt-7 md:px-0 sm:px-7">
              {/* ========== category component ========= */}
              <Category/>
            </div>
        </section>

        {/* ====================== Find Talent Section =================== */}
        <section className="container mx-auto lg:mt-5 mt-3 py-3 md:px-5 sm:px-7 px-0 space-y-3">
            <div className="bg-[url('/images/grilswork.png')] bg-top w-full sm:rounded-xl rounded-none xl:px-14 px-5 py-8">
              <motion.h2 className="text-white font-semibold lg:text-3xl text-xl"
                initial={{y:"100%", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                For Clints
              </motion.h2>

              <motion.h3 className="text-white 2xl:font-bold font-semibold lg:text-6xl text-4xl lg:mt-28 mt-20 leading-tight my-3"
                initial={{y:"100%", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                Find Talent <br/>
                Your Way
              </motion.h3>

              <motion.p className="text-white font-semibold lg:text-xl text-md"
                initial={{y:"100%", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                Work with the largest network of independent <br/>
                professionals and get things done—from quick <br/>
                turnarounds to big transformations. <br/>
              </motion.p>

              <motion.div className="grid md:grid-cols-3 grid-cols-1 2xl:gap-x-10 md:gap-y-0 gap-y-3 xl:gap-x-7 gap-x-5 mt-10"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                {/* ========= for clint ========== */}
                <ClintCat/>
              </motion.div>
            </div>
        </section>

        {/* ========================== Busines section ============================= */}
        <section className="container mx-auto lg:mt-5 mt-1 py-3 md:px-5 sm:px-7">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="md:bg-[#E4FDF7] bg-none col-span-2 lg:rounded-l-xl lg:rounded-tr-none rounded-t-xl sm:px-7 px-5 pt-10 pb-14 relative">
              <motion.h2 className="text-zinc-700 font-semibold 2xl:text-6xl lg:text-5xl text-4xl"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                Why business <br/>
                turn to Brenda
              </motion.h2>

              <motion.div className="flex md:ml-3 ml-0 space-x-5 items-start mt-7"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="flex rounded-full py-1 px-1 bg-zinc-700 text-white xl:text-xl text-md mt-1">
                  <FaStar/>
                </span>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-zinc-700 font-semibold xl:text-3xl text-2xl">
                    Proof of quality 
                  </h3>
                  <span className="text-zinc-500 font-semibold xl:text-md">
                    Check any pro’s work samples, client reviews, <br className="md:block hidden"/>
                    and identity verification. 
                  </span>
                </div>
              </motion.div>

              <motion.div className="flex md:ml-3 ml-0 space-x-5 items-start mt-7"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="flex rounded-full py-1 px-1 bg-zinc-700 text-white xl:text-xl text-md mt-1">
                  <IoLogoUsd/>
                </span>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-zinc-700 font-semibold xl:text-3xl text-2xl">
                    No cost until you hire
                  </h3>
                  <span className="text-zinc-500 font-semibold text-md">
                    Interview potential fits for your job, negotiate <br className="md:block hidden"/>
                    rates, and only pay for work you approve. 
                  </span>
                </div>
              </motion.div>

              <motion.div className="flex md:ml-3 ml-0 space-x-5 items-start mt-7"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="flex rounded-full py-1 px-1 bg-zinc-700 text-white xl:text-xl text-md mt-1">
                  <ImCheckmark/>
                </span>
                <div className="flex flex-col space-y-2">
                  <h3 className="text-zinc-700 font-semibold xl:text-3xl text-2xl">
                    Safe and secure 
                  </h3>
                  <span className="text-zinc-500 font-semibold text-md">
                    Focus on your work knowing we help protect <br className="md:block hidden"/>
                    your data and privacy. We’re here with 24/7 <br className="md:block hidden"/>
                    support if you need it. 
                  </span>
                </div>
              </motion.div>

              <div className="absolute lg:right-[-1rem] right-0 bottom-3 md:block hidden">
                <Image
                  src="/images/man-preg.png"
                  width={250}
                  height={400}
                  alt="man-image"
                />
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#99F6E4] to-[#A5F3FC] lg:rounded-r-xl lg:rounded-bl-none md:rounded-b-xl md:rounded-none sm:rounded-xl rounded-none px-7 pt-10 pb-15 py-10">
              <motion.h2 className="text-zinc-700 font-semibold 2xl:text-5xl xl:text-4xl text-3xl"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                  we’re <br/>
                  the world’s work
                  marketplace
              </motion.h2>

              <motion.div className="flex items-start space-x-7 mt-10"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="2xl:text-4xl xl:text-3xl text-2xl text-zinc-700 mt-1">
                  <FaStar/>
                </span>

                <div className="flex flex-col md:space-y-3 space-y-2">
                  <h3 className="font-semibold 2xl:text-4xl xl:text-3xl text-2xl text-zinc-700">
                    4.9/5
                  </h3>
                  <span className="2xl:text-xl lg:text-md text-zinc-500">
                    Clients rate professionals on Branda 
                  </span>
                </div>
              </motion.div>

              <motion.div className="flex items-start space-x-7 xl:mt-10 md:mt-7 mt-5"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="2xl:text-4xl xl:text-3xl text-2xl text-zinc-700 mt-1">
                  <BsFillTrophyFill/>
                </span>

                <div className="flex flex-col md:space-y-3 space-y-2">
                  <h3 className="font-semibold 2xl:text-4xl xl:text-3xl text-2xl text-zinc-700">
                    Award winner 
                  </h3>
                  <span className="2xl:text-xl lg:text-md text-zinc-500">
                    G2’s 2021 Best Software Awards 
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====================== oppertunity section ==============================  */}
        <section className="container mx-auto md:mt-5 mt-3 py-3 md:px-5 sm:px-7 px-0 space-y-3">
          <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <Image
                src="/images/manworking.png"
                width={1200}
                height={1200}
                alt="manworking-image"
                className="md:rounded-l-xl md:rounded-tr-none sm:rounded-t-xl rounded-none flex flex-grow"
              />

            <div className="bg-gradient-to-b from-[#A5F3FC] to-[#7DD3FC] 2xl:col-span-2 col-span-1 md:rounded-r-xl md:rounded-bl-none sm:rounded-b-xl rounded-none xl:px-10 px-5 lg:py-7 py-5">
              <motion.h5 className="font-semibold lg:text-2xl text-xl text-zinc-700"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                For Talent
              </motion.h5>
              <motion.h3 className="font-semibold lg:text-5xl text-4xl text-zinc-700 lg:mt-7 mt-5 lg:mb-3 mb-1"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                Find great work
              </motion.h3>
              <motion.p className="text-zinc-500 font-semibold"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                Meet clients you’re excited to work with and take <br className="lg:block hidden"/>
                your career or business to new heights.
              </motion.p>

              <motion.div className="grid lg:grid-cols-3 grid-cols-2 2xl:gap-x-14 xl:gap-x-10 gap-x-5 gap-y-5 lg:gap-y-0 lg:mt-14 mt-4 border-t border-zinc-500 lg:py-5 py-3"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
                <span className="2xl:text-xl xl:text-lg text-md text-zinc-700 font-semibold">
                  Find opportunities for every stage of your freelance career
                </span>
                <span className="2xl:text-xl xl:text-lg text-md text-zinc-700 font-semibold">
                  Control when, where, and how you work
                </span>
                <span className="2xl:text-xl xl:text-lg text-md text-zinc-700 font-semibold">
                  Explore different ways to earn
                </span>
              </motion.div>

              <motion.button className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full xl:mt-16 lg:mt-7 mt-3" onClick={() => router.push("#")}
                initial={{x:30, opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:1}}
              >
                Find Oppartunities
              </motion.button>
            </div>
          </div>
        </section>

        {/* =========================== Trusted Section ========================== */}
        <section className="container mx-auto mt-3 py-3 md:px-5 sm:px-7 px-3 space-y-3">
          <div className="md:mt-10 mt-5">
            <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-[#374151] leading-tight">
                Trusted by leading <br className="md:block hidden"/>
                brands and startups
            </h2>
            
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-5 xl:gap-x-14 gap-x-7 mt-7">
              <motion.div className="flex flex-col bg-[#115E59] py-5 px-7 rounded-xl"
                initial={{y:-30, opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
              >
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

        <section className="container mx-auto lg:my-7 my-3 py-3 md:px-5 sm:px-7 px-3 space-y-3">
          <Skills/>
        </section>
      </main>

      {/* ==================== Footer ====================== */}
      <Footer/>
    </div>
  )
}