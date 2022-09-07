import HeadTag from "../../components/HeadTag";
import Navbar from "../../components/Navbar/Navbar";
import { FaSearch, FaStar, FaRocket, FaBullhorn, FaChevronDown, FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import TrustedCom from "../../components/TrustedCom";
import Footer from "../../components/Footer";

const Hire = () => {

    // ======================= Hooks Call ================================
    const [choseSolo, useChoseSolo] = useState(true);
    const [choseTeam, useChoseTeam] = useState(false);

    const [showListI, useShowListI] = useState(false);
    const [showListII, useShowListII] = useState(false);
    const [showListIII, useShowListIII] = useState(false);
    const [showListIv, useShowListIv] = useState(false);
    const [showListV, useShowListV] = useState(false);
    const [showListVI, useShowListVI] = useState(false);
    const [showListVII, useShowListVII] = useState(false);
    const [showListVIII, useShowListVIII] = useState(false);
    const [showListIx, useShowListIx] = useState(false);

    // ================== Handle click function ==========================
    const SoloBtn = () => {
        useChoseSolo(true);
        (choseTeam === true) ? useChoseTeam(false) : null;
    }

    const TeamBtn = () => {
        useChoseTeam(true);
        (choseSolo === true) ? useChoseSolo(false) : null;
    }

    const SearchForm = (e) => {
        e.preventDefault();
    }

    // ========================== Dropdown List =======================
    const FirstList = {
        solo: [
            {id: 1, name: "Javascript Developers", link: "/"},
            {id: 2, name: "CSS Developers", link: "/"},
            {id: 3, name: "Landing Page Spacialist", link: "/"},
            {id: 4, name: "Web Application Developers", link: "/"},
            {id: 5, name: "Node js Developers & Program", link: "/"},
            {id: 6, name: "Web Designers", link: "/"},
            {id: 7, name: "PHP Developers", link: "/"},
            {id: 8, name: "Shopify Developers", link: "/"},
            {id: 9, name: "API Intrigration Freelancer", link: "/"},
            {id: 10, name: "MySQL Developers", link: "/"},
            {id: 11, name: "Wordpress Developers", link: "/"},
            {id: 12, name: "Python Developers", link: "/"},
            {id: 13, name: "React.js Developers", link: "/"},
            {id: 14, name: "Android App Developers", link: "/"},
            {id: 15, name: "HTML Developers", link: "/"},
            {id: 16, name: "Android Developers", link: "/"},
            {id: 17, name: "HTML5 Developers", link: "/"},
            {id: 18, name: "Mobile App Developers", link: "/"},
            {id: 19, name: "Data Miners", link: "/"},
        ],
        team: [
            {id: 1, name: "Artificial Inteligence Company..", link: "/"},
            {id: 2, name: "Cloud Solution Companies", link: "/"},
            {id: 3, name: "Blogchain Agency", link: "/"},
            {id: 4, name: "Web Design Agency", link: "/"},
            {id: 5, name: "Android App Development Agencey", link: "/"},
            {id: 6, name: "Big Data Companies", link: "/"},
            {id: 7, name: "Cyber Sequrity Companies", link: "/"},
            {id: 8, name: "CRM Agencies", link: "/"},
            {id: 9, name: "Web Development Agencies", link: "/"},
            {id: 10, name: "App Development Companies", link: "/"},
            {id: 11, name: "Machine Learning Companies", link: "/"},
            {id: 12, name: "IT Service Companies", link: "/"},
            {id: 13, name: "Ecomarce Development Age", link: "/"},
            {id: 14, name: "Wix Development Agencies", link: "/"},
            {id: 15, name: "Chatbot Companies", link: "/"},
            {id: 16, name: "Data Analytics Companies", link: "/"},
            {id: 17, name: "Saleforce Development Companies", link: "/"},
            {id: 18, name: "User Experinace Agencies", link: "/"},
            {id: 19, name: "Wordpress Development Agencies", link: "/"},
        ],
    }

    const SecondList = {
        solo: [
            { id: 1, name: "Graphic Designers", link: "/"},
            { id: 2, name: "Logo Designers", link: "/"},
            { id: 3, name: "Video Post Editing Spacialist", link: "/"},
            { id: 4, name: "Sound Editors", link: "/"},
            { id: 5, name: "Adobe InDesign Experts", link: "/"},
            { id: 6, name: "Adobe Photoshop Experts", link: "/"},
            { id: 7, name: "Illustration", link: "/"},
            { id: 8, name: "Photo Editors", link: "/"},
            { id: 9, name: "Adobe Premiere Pro Spacialist", link: "/"},
            { id: 10, name: "Infographic Design", link: "/"},
            { id: 11, name: "Adobe Illustrator Experts", link: "/"},
            { id: 12, name: "Video Producer", link: "/"},
            { id: 13, name: "Brand Identity", link: "/"},
            { id: 14, name: "Motion Graphic Designers", link: "/"},
            { id: 15, name: "2D Animators", link: "/"},
            { id: 16, name: "Video Editors", link: "/"},
            { id: 17, name: "Adobe After Effects Spaciallist", link: "/"},
            { id: 18, name: "Animators", link: "/"},
            { id: 19, name: "Print Designers", link: "/"},
            { id: 20, name: "Voice-Over Artists", link: "/"},
        ],
        team: [
            { id: 1, name: "Packaging Design Agencies", link: "/"},
            { id: 2, name: "Print Design Agencies", link: "/"},
            { id: 3, name: "Video Production Agencies", link: "/"},
            { id: 4, name: "Branding Agencies", link: "/"},
            { id: 5, name: "Design Agencies", link: "/"},
            { id: 6, name: "Explore Video Production Agency", link: "/"},
            { id: 7, name: "Digital Design Agency", link: "/"},
            { id: 8, name: "Graphic Desgin Agencies", link: "/"},
            { id: 9, name: "Corporate Tranning Agencies", link: "/"},
        ],
    }

    const ThirdList = {
        solo: [
            { id: 1, name: "Social Media Marketers", link: "/"},
            { id: 2, name: "SEO Experts", link: "/"},
            { id: 3, name: "Social Media Managers ", link: "/"},
            { id: 4, name: "Instagram Ad Campaign Freelanc", link: "/"},
            { id: 5, name: "Internet Marketers", link: "/"},
            { id: 6, name: " Marketing Strategists", link: "/"},
            { id: 7, name: " Lead Generation Experts ", link: "/"},
            { id: 8, name: " Email Marketers ", link: "/"},
            { id: 9, name: "Facebook Ads Specialists", link: "/"},
            { id: 10, name: "In Cold Callers ", link: "/"},
            { id: 11, name: "Facebook Freelancers ", link: "/"},
            { id: 12, name: " Facebook Marketers ", link: "/"},
            { id: 13, name: "Facebook Ad Campaign Freelance", link: "/"},
            { id: 14, name: "SEO Keyword Researchers ", link: "/"},
            { id: 15, name: "Telemarketers ", link: "/"},
            { id: 16, name: "Instagram Marketers ", link: "/"},
            { id: 17, name: "Instagram Freelancers ", link: "/"},
            { id: 18, name: "Google Analytics Experts ", link: "/"},
            { id: 19, name: "Campaign Managers ", link: "/"},
            { id: 20, name: "Influencer Marketers ", link: "/"},
        ],
        team: [
            { id: 1, name: "Creative Agencies ", link: "/"},
            { id: 2, name: "Direct Marketing Agencies ", link: "/"},
            { id: 3, name: "HubSpot Agencies ", link: "/"},
            { id: 4, name: "Media Buying Agencies ", link: "/"},
            { id: 5, name: "SEO Agencies ", link: "/"},
            { id: 6, name: " Advertising Agencies ", link: "/"},
            { id: 7, name: " Email Marketing Agencies ", link: "/"},
            { id: 8, name: "Inbound Marketing Agencies ", link: "/"},
            { id: 9, name: "PPC Agencies ", link: "/"},
            { id: 10, name: " TikTok Agencies ", link: "/"},
            { id: 11, name: "Content Marketing Agencies  ", link: "/"},
            { id: 12, name: " Facebook Marketing Agencies  ", link: "/"},
            { id: 13, name: "Influencer Marketing Agencies  ", link: "/"},
            { id: 14, name: " PR Agencies ", link: "/"},
            { id: 15, name: "Digital Marketing Agencies ", link: "/"},
            { id: 16, name: "Corporate Communications Ag ", link: "/"},
            { id: 17, name: "Google Advertising Agencies  ", link: "/"},
            { id: 18, name: "Digital Marketing Agencies ", link: "/"},
            { id: 19, name: "Instagram Marketing Agencies  ", link: "/"},
            { id: 20, name: "SEM Agencies  ", link: "/"},
            { id: 21, name: " Social Media Agencies  ", link: "/"},
        ],
    }

    const FourthList = {
        solo: [
            { id: 1, name: "Content Writers ", link: "/"},
            { id: 2, name: "Article Writers ", link: "/"},
            { id: 3, name: "Social Media Content Freelancers ", link: "/"},
            { id: 4, name: "English Grammar Specialists ", link: "/"},
            { id: 5, name: "Fashion Writers ", link: "/"},
            { id: 6, name: " English Specialists", link: "/"},
            { id: 7, name: " LeaCreative Writers  ", link: "/"},
            { id: 8, name: "  Translators  ", link: "/"},
            { id: 9, name: "Editors ", link: "/"},
            { id: 10, name: " German Specialists  ", link: "/"},
            { id: 11, name: "Copywriters ", link: "/"},
            { id: 12, name: "  Blog Writers ", link: "/"},
            { id: 13, name: " Proofreaders ", link: "/"},
            { id: 14, name: " Ghostwriters  ", link: "/"},
            { id: 15, name: " Fact Checkers ", link: "/"},
            { id: 16, name: " Writers ", link: "/"},
            { id: 17, name: "SEO Writers ", link: "/"},
            { id: 18, name: "Grammar Freelancers  ", link: "/"},
            { id: 19, name: "Business Writing Specialists ", link: "/"},
            { id: 20, name: "Technical Writers ", link: "/"},
        ],
        team: [
            { id: 1, name: "Copywriting Agencies  ", link: "/"},
            { id: 2, name: "Ghostwriting Agencies  ", link: "/"},
            { id: 3, name: " Translation Agencies  ", link: "/"},
            { id: 4, name: "Content Writing Agencies  ", link: "/"},
            { id: 5, name: "Editing & Proofreading Agencies  ", link: "/"},
            { id: 6, name: " Advertising Agencies ", link: "/"},
            { id: 7, name: " Email Marketing Agencies ", link: "/"},
            { id: 8, name: "Inbound Marketing Agencies ", link: "/"},
            { id: 9, name: "PPC Agencies ", link: "/"},
            { id: 10, name: " TikTok Agencies ", link: "/"},
            { id: 11, name: "Content Marketing Agencies  ", link: "/"},
            { id: 12, name: " Facebook Marketing Agencies  ", link: "/"},
            { id: 13, name: "Influencer Marketing Agencies  ", link: "/"},
            { id: 14, name: " PR Agencies ", link: "/"},
            { id: 15, name: "Digital Marketing Agencies ", link: "/"},
            { id: 16, name: "Corporate Communications Ag ", link: "/"},
            { id: 17, name: "Google Advertising Agencies  ", link: "/"},
            { id: 18, name: "Digital Marketing Agencies ", link: "/"},
            { id: 19, name: "Instagram Marketing Agencies  ", link: "/"},
            { id: 20, name: "SEM Agencies  ", link: "/"},
            { id: 21, name: " Social Media Agencies  ", link: "/"},
        ],
    }

    const FiveList = {
        solo: [
            { id: 1, name: "Accountants", link: "/"},
            { id: 2, name: "Fincial Analysts", link: "/"},
            { id: 3, name: "Financial Accountants  ", link: "/"},
            { id: 4, name: "Communication skills Freelancers", link: "/"},
            { id: 5, name: "Xero Specialists ", link: "/"},
            { id: 6, name: "  Bookkeepers  ", link: "/"},
            { id: 7, name: "Bank Reconciliation Specialists    ", link: "/"},
            { id: 8, name: "   Certified Public Accountants ", link: "/"},
            { id: 9, name: " Business Intelligence Developers ", link: "/"},
            { id: 10, name: " Fundraising Consultants    ", link: "/"},
            { id: 11, name: "Business Analysts  ", link: "/"},
            { id: 12, name: "    Stock Management Specialists    ", link: "/"},
            { id: 13, name: "  Account Reconciliation Specialists", link: "/"},
            { id: 14, name: " Startup Consultants   ", link: "/"},
            { id: 15, name: "  Business Planners   ", link: "/"},
            { id: 16, name: "  QuickBooks Consultants  ", link: "/"},
            { id: 17, name: "Tax Law Lawyers & Legal Professi", link: "/"},
            { id: 18, name: "Financial Modelers    ", link: "/"},
            { id: 19, name: " Accounts Receivable Managers  ", link: "/"},
        ],
        team: [
            { id: 1, name: "Consulting Agencies", link: "/"},
            { id: 2, name: "Bookkeeping Companies ", link: "/"},
            { id: 3, name: "  Accounting Companies    ", link: "/"},
            { id: 4, name: "Business Consulting Companies    ", link: "/"},
            { id: 5, name: " Payroll Processing Companies   ", link: "/"}
        ],
    }

    const SixthList = {
        solo: [
            { id: 1, name: "Legal Consultants  ", link: "/"},
            { id: 2, name: "Contract Drafters ", link: "/"},
            { id: 3, name: "Partnership Agreements Freelan  ", link: "/"},
            { id: 4, name: "Business Law Freelancers   ", link: "/"},
            { id: 5, name: "Regulatory Compliance Freelanc..  ", link: "/"},
            { id: 6, name: "  Contract Law Lawyers & Legal Pr ", link: "/"},
            { id: 7, name: "Intellectual Property Law Lawyer   ", link: "/"},
            { id: 8, name: "   Patent Law Lawyers & Legal Professionals", link: "/"},
            { id: 9, name: " Immigration Law Lawyers & Legal ", link: "/"},
            { id: 10, name: " Civil Law Lawyers & Legal Profe...   ", link: "/"},
            { id: 11, name: "Legal Researchers   ", link: "/"},
            { id: 12, name: "  Paralegals Professionals   ", link: "/"},
            { id: 13, name: " Trademark Consultants  ", link: "/"},
            { id: 14, name: " Compliance Specialists   ", link: "/"},
            { id: 15, name: "  Family Law Lawyers & Legal Pr..  ", link: "/"},
            { id: 16, name: "  Corporate Law Lawyers & Lega.. ", link: "/"},
            { id: 17, name: "Legal Assistants ", link: "/"},
            { id: 18, name: "Non-Disclosure Agreements Sp..   ", link: "/"},
            { id: 19, name: " Real Estate Law Lawyers & Legal Pr.. ", link: "/"},
            { id: 20, name: "Litigation Specialists... ", link: "/"},
        ],
        team: [
            { id: 1, name: "Law Agencies  ", link: "/"},
            { id: 2, name: "Board Of Law   ", link: "/"},
            { id: 3, name: " Admire   ", link: "/"},
            { id: 4, name: " Law Centers Agencies   ", link: "/"},
            { id: 5, name: " Law Receptionist Agencies   ", link: "/"},
            { id: 6, name: "  Law Companies  ", link: "/"},
            { id: 7, name: " Law Service Provider Comp ", link: "/"},
        ],
    }

    const SeventhList = {
        solo: [
            { id: 1, name: "Technology Freelancers", link: "/"},
            { id: 2, name: "LinkedIn Recruiters  ", link: "/"},
            { id: 3, name: "Technical Recruiters  ", link: "/"},
            { id: 4, name: "Course Freelancers    ", link: "/"},
            { id: 5, name: "Training & Development Professi... ", link: "/"},
            { id: 6, name: " Recruiters & Recruitment Consu... ", link: "/"},
            { id: 7, name: " Talent Management Freelancers..   ", link: "/"},
            { id: 8, name: "  Instructional Designers..", link: "/"},
            { id: 9, name: " Learning Management System... ", link: "/"},
            { id: 10, name: " Onboarding Specialists...   ", link: "/"},
            { id: 11, name: "Candidate sourcing Freelancers    ", link: "/"},
            { id: 12, name: " Human Resource Managers   ", link: "/"},
            { id: 13, name: " Boolean Search Specialists   ", link: "/"},
            { id: 14, name: " Curriculum Developers    ", link: "/"},
            { id: 15, name: "  Articulate Storyline Specialists   ", link: "/"},
            { id: 16, name: "  Interviewers  ", link: "/"},
            { id: 17, name: "e-Learning Specialists  ", link: "/"},
            { id: 18, name: "Online Freelancers    ", link: "/"},
            { id: 19, name: "  Curriculum design Freelancers  ", link: "/"},
            { id: 20, name: "Human Resource Information Sy... ", link: "/"},
        ],
        team: [
            { id: 1, name: "HR Consulting Companies", link: "/"},
            { id: 2, name: "Recruiting Companies ", link: "/"},
        ],
    }

    const EightList = {
        solo: [
            { id: 1, name: "Technology Freelancers", link: "/"},
            { id: 2, name: "LinkedIn Recruiters  ", link: "/"},
            { id: 3, name: "Technical Recruiters  ", link: "/"},
            { id: 4, name: "Course Freelancers    ", link: "/"},
            { id: 5, name: "Training & Development Professi... ", link: "/"},
            { id: 6, name: " Recruiters & Recruitment Consu... ", link: "/"},
            { id: 7, name: " Talent Management Freelancers..   ", link: "/"},
            { id: 8, name: "  Instructional Designers..", link: "/"},
            { id: 9, name: " Learning Management System... ", link: "/"},
            { id: 10, name: " Onboarding Specialists...   ", link: "/"},
            { id: 11, name: "Candidate sourcing Freelancers    ", link: "/"},
            { id: 12, name: " Human Resource Managers   ", link: "/"},
            { id: 13, name: " Boolean Search Specialists   ", link: "/"},
            { id: 14, name: " Curriculum Developers    ", link: "/"},
            { id: 15, name: "  Articulate Storyline Specialists   ", link: "/"},
            { id: 16, name: "  Interviewers  ", link: "/"},
            { id: 17, name: "e-Learning Specialists  ", link: "/"},
            { id: 18, name: "Online Freelancers    ", link: "/"},
            { id: 19, name: "  Curriculum design Freelancers  ", link: "/"},
            { id: 20, name: "Human Resource Information Sy... ", link: "/"},
        ],
        team: [
            { id: 1, name: "HR Consulting Companies", link: "/"},
            { id: 2, name: "Recruiting Companies ", link: "/"},
        ],
    }

    const NightList = {
        solo: [
            { id: 1, name: "Internet Researchers", link: "/"},
            { id: 2, name: "Customer Service Representative...  ", link: "/"},
            { id: 3, name: "Microsoft Word Experts ", link: "/"},
            { id: 4, name: "Microsoft Word Experts ", link: "/"},
            { id: 5, name: "Training & Development Professi... ", link: "/"},
            { id: 6, name: " Call Center Agents... ", link: "/"},
            { id: 7, name: " Virtual Assistants ..   ", link: "/"},
            { id: 8, name: "  Appointment Setters ", link: "/"},
            { id: 9, name: " Customer Support Representat... ", link: "/"},
            { id: 10, name: "  File Management Freelancers ..  ", link: "/"},
            { id: 11, name: "Data Entry Specialists ", link: "/"},
            { id: 12, name: " Email Handlers    ", link: "/"},
            { id: 13, name: " Google Docs Experts   ", link: "/"},
            { id: 14, name: " Email Support Freelancers ", link: "/"},
            { id: 15, name: " Interpersonal skills Freelancers ", link: "/"},
            { id: 16, name: " Administrative Assistants ", link: "/"},
            { id: 17, name: " Data Scrapers   ", link: "/"},
            { id: 18, name: " Chat Support Specialists  ", link: "/"},
            { id: 19, name: "  Microsoft Office Specialists  ", link: "/"},
        ],
        team:[
            { id: 1, name: "Event Managment Agencies", link: "/"},
            { id: 2, name: "Survay Companies", link: "/"},
            { id: 3, name: "Virtual Assistance Agencies", link: "/"},
            { id: 4, name: "Call Center Agencies", link: "/"},
            { id: 5, name: "Virtual Reseptionist Agencies", link: "/"},
            { id: 6, name: " BPO Companies", link: "/"},
            { id: 7, name: " Managed Service Provider co..", link: "/"},
        ]
    }

    return (
        <div className="min-h-screen flex flex-col">
            
            {/* ============== Head Tag =============== */}
            <HeadTag title="Hire Freelancers and Professionals | Brenda"/>

            {/* ================= Header ================= */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                {/* ============ Head Container ============ */}
                <div className="container mx-auto xl:mt-14 md:mt-10 mt-5 md:px-3 sm:px-7 px-3">
                    <section className="grid lg:grid-cols-2 xl:mt-10 2xl:px-36 xl:px-28 lg:px-0">
                        {/* ================= Left ================ */}
                        <div>
                            <h2 className="text-zinc-800 font-semibold lg:text-6xl md:text-5xl text-4xl">
                                Hire pros with the skills you need
                            </h2>
                            <p className="xl:mt-5 mt-3 text-zinc-800 text-lg">
                                A quick search can put you in touch with independent pros and teams who can get your job done.
                            </p>

                            <form className="flex flex-grow border-2 lg:max-w-lg rounded-full items-center px-1 py-1 bg-[#f9fffdfd] relative border-[#a9cac6fd] mt-7" onSubmit={SearchForm}>
                                <input 
                                    type="text" 
                                    className="flex-grow focus:outline-none bg-transparent mx-3 text-zinc-700 md:placeholder:text-lg"
                                    placeholder={`Try "web Development"`}
                                />
                                <span className="px-3 py-2 rounded-full duration-300 ease-in bg-zinc-800 cursor-pointer hover:bg-[#2b4241fd]">
                                    <FaSearch className="h-6 text-white"/>
                                </span>
                            </form>
                            <p className="mt-3 text-zinc-500">
                                Looking for work? <span className="font-semibold text-cyan-800 cursor-pointer transition hover:underline">
                                    Apply as an independent pro 
                                </span>
                            </p>
                        </div>

                        {/* ================= Right ================ */}
                        <div className="justify-self-end relative lg:block hidden">
                           <div className="flex mt-7">
                                <div className="flex flex-col border px-3 py-3 rounded-xl items-center space-y-2 bg-transparent">
                                    {/* ======== rounded =========== */}
                                    <div className="rounded-full border px-14 py-14 bg-[#f0f5f2]"></div>
                                    {/* ========== bar ============== */}
                                    <div className="rounded-lg w-32 px-2 py-2 bg-[#f0f5f2]"></div>
                                    <div className="rounded-lg w-40 px-2 py-3  bg-[#f0f5f2]"></div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-green-300"> <FaStar/> </span>
                                        <div className="rounded-lg w-28 px-2 py-3 bg-[#f0f5f2]"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col border px-3 py-3 rounded-xl items-center space-y-2 bg-transparent">
                                    {/* ======== rounded =========== */}
                                    <div className="rounded-full border px-14 py-14 bg-[#f0f5f2]"></div>
                                    {/* ========== bar ============== */}
                                    <div className="rounded-lg w-32 px-2 py-2 bg-[#f0f5f2]"></div>
                                    <div className="rounded-lg w-40 px-2 py-3  bg-[#f0f5f2]"></div>
                                    <div className="flex items-center space-x-3">
                                        <span className="text-green-300"> <FaStar/> </span>
                                        <div className="rounded-lg w-28 px-2 py-3 bg-[#f0f5f2]"></div>
                                    </div>
                                </div>
                           </div>

                            <div className="absolute border border-gray-300 px-7 py-5 flex flex-col items-center rounded-xl left-[5rem] top-0 bg-[#F3FFFC] shadow-sm hover:shadow-xl duration-300 ease-in">
                                {/* ========= rounded ============= */}
                                <Image
                                    src="/images/avater.png"
                                    width={130}
                                    height={130}
                                    className="rounded-full"
                                    alt="man-image"
                                />
                                <h4 className="text-xl text-zinc-800 font-semibold mt-3">
                                    Fredricka M.
                                </h4>
                                <span className="text-lg text-zinc-500">
                                    UX/UI Designer
                                </span>
                                <div className="flex items-center space-x-2 mt-3">
                                    <span className="text-green-500 text-lg"> <FaStar/> </span>
                                    <span className="text-zinc-500 text-lg"> 4.9/5 (15 jobs) </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* ======== First section ============== */}
                <section className="container mx-auto xl:mt-20 sm:mt-16 mt-10 md:px-3 sm:px-7 px-3">
                    <div className="xl:mt-10 2xl:px-36 xl:px-28 lg:px-0">
                        <h2 className="text-zinc-800 lg:text-4xl text-3xl font-semibold">
                            Safe and secure hiring, for any size of work 
                        </h2>

                        <div className="flex md:flex-row flex-col md:space-x-10 md:items-center">
                            <div className="lg:mt-7 mt-5">
                                <div className="flex space-x-2 items-center">
                                    <FaStar className="text-green-700 text-xl"/>
                                    <h5 className="text-xl font-semibold text-zinc-800">
                                        Over 1M review                                        
                                    </h5>
                                </div>
                                <p className="text-[17px] text-zinc-500 my-2">
                                    Develop relationships with highly rated professionals
                                </p>
                            </div>

                            <div className="lg:mt-7 md:mt-5 mt-1">
                                <div className="flex space-x-2 items-center">
                                    <FaRocket className="text-green-700 text-xl"/>
                                    <h5 className="text-xl font-semibold text-zinc-800">
                                        Protected payments
                                    </h5>
                                </div>
                                <p className="text-[17px] text-zinc-500 my-2">
                                    Hassle-free billing so you can focus on work that matter
                                </p>
                            </div>

                            <div className="lg:mt-7 md:mt-5 mt-1">
                                <div className="flex space-x-2 items-center">
                                    <FaBullhorn className="text-green-700 text-xl"/>
                                    <h5 className="text-xl font-semibold text-zinc-800">
                                        Hire who you need 
                                    </h5>
                                </div>
                                <p className="text-[17px] text-zinc-500 my-2">
                                    Find pros who can start right away and handle any job
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========== Second Section =========== */}
                <section className="container mx-auto xl:mt-20 md:mt-16 sm:mt-14 mt-10 md:px-3 sm:px-7 px-3">
                    <div className="xl:mt-10 2xl:px-36 xl:px-28 lg:px-0">
                        <h2 className="text-zinc-800 lg:text-4xl text-3xl font-semibold">
                            Choose a category to see popular skills for hire 
                        </h2>

                        <div className="lg:mt-7 mt-5">
                            <div className="flex sm:flex-row flex-col sm:space-x-5 sm:space-y-0 space-y-4 sm:items-center items-start">
                                <button 
                                    className={`py-2 px-7 rounded-full ${(choseSolo == true) ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-gray-200 text-zinc-800 hover:bg-gray-300"} font-semibold duration-300 ease-in`}
                                    onClick={SoloBtn}
                                >
                                    Solo Professionals
                                </button>
                                <button 
                                    className={`py-2 px-7  ${(choseTeam == true) ? "bg-zinc-800 text-white hover:bg-zinc-700" : "bg-gray-200 text-zinc-800 hover:bg-gray-300"} duration-300 ease-in hover:bg-gray-300 rounded-full font-semibold`}
                                    onClick={TeamBtn}
                                >
                                    Teams
                                </button>
                            </div>
                            <h6 className="sm:text-xl text-lg text-zinc-800 mt-5"> 
                                Hiring a professional is great for growing your team or working on a project. 
                            </h6>

                            {/* ======================== List Start ======================== */}
                            <ul className="lg:mt-10 mt-5">
                                {/* ==================== First List Iteam =============== */}
                                <li 
                                    className="sm:px-5 px-1 lg:py-6 py-5 border-t text-zinc-800 font-semibold cursor-pointer relative text-xl"
                                    onClick={() => (showListI == false) ? useShowListI(true) : useShowListI(false)}
                                >
                                    <span className={`mr-5 px-2 py-2 rounded-xl border sm:text-lg text-sm border-zinc-800 inline-flex items-center`}>
                                        <FaChevronDown className={`inline transition  ${(showListI == true) ? "rotate-180" : "rotate-0"}`}/>
                                    </span>

                                    Development & It

                                    {/* ================= Dropdown List ============== */}
                                    {showListI && <div>
                                        {choseSolo && <div className="relative w-full py-5">
                                            <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                                Popular Skills:
                                            </h5>

                                            <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                                {FirstList.solo.map((curSubVal) => (
                                                    <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                        {curSubVal.name}
                                                    </li>
                                                ))}
                                            </ul>

                                            <h6 className="mt-7 text-lg text-zinc-800">
                                                Learn how pros can drive growth at your org
                                            </h6>
                                            <button className="py-2 px-5 border rounded-full mt-5 text-sm hover:bg-[#e2f3ef] bg-transparent duration-150 ease-in border-zinc-800">
                                                Explore Development & It
                                            </button>
                                        </div>}

                                        {choseTeam &&  <div className="relative w-full py-5">
                                            <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                                Popular Skills:
                                            </h5>

                                            <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                                {FirstList.team.map((curSubVal) => (
                                                    <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                        {curSubVal.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>}
                                    </div>}
                                </li>

                                {/* ==================== Second List Iteam =============== */}
                                <li 
                                    className="sm:px-5 px-1 py-5 border-t text-zinc-800 font-semibold cursor-pointer  relative text-xl"
                                    onClick={() => (showListII == false) ? useShowListII(true) : useShowListII(false)}
                                >
                                     <span className={`mr-5 px-2 py-2 rounded-xl border sm:text-lg text-sm border-zinc-800 inline-flex items-center`}>
                                        <FaChevronDown className={`inline transition  ${(showListII == true) ? "rotate-180" : "rotate-0"}`}/>
                                    </span>

                                    Design & Creative

                                    {/* ================= Dropdown List ============== */}
                                   {showListII && <div>
                                        {choseSolo && <div className="relative w-full py-5">
                                            <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                                Popular Skills:
                                            </h5>

                                            <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                                {SecondList.solo.map((curSubVal) => (
                                                    <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                        {curSubVal.name}
                                                    </li>
                                                ))}
                                            </ul>

                                            <h6 className="mt-7 text-lg text-zinc-800">
                                                Learn how pros can kick-start your creative process 
                                            </h6>
                                            <button className="py-2 px-5 border rounded-full mt-5 text-sm hover:bg-[#e2f3ef] bg-transparent duration-150 ease-in border-zinc-800">
                                                Explore Design & Creative
                                            </button>
                                        </div>}

                                        {choseTeam &&  <div className="relative w-full py-5">
                                            <h5 className="my-2 text-lg font-semibold">
                                                Popular Skills:
                                            </h5>

                                            <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                                {SecondList.team.map((curSubVal) => (
                                                    <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                        {curSubVal.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>}
                                   </div>}
                                </li>

                                 {/* ==================== Third List Iteam =============== */}
                                 <li 
                                    className="sm:px-5 px-1 lg:py-6 py-5 border-t text-zinc-800 font-semibold cursor-pointer relative text-xl"
                                    onClick={() => (showListIII == false) ? useShowListIII(true) : useShowListIII(false)}
                                >
                                    <span className={`mr-5 px-2 py-2 rounded-xl border sm:text-lg text-sm border-zinc-800 inline-flex items-center`}>
                                        <FaChevronDown className={`inline transition  ${(showListIII == true) ? "rotate-180" : "rotate-0"}`}/>
                                    </span>

                                    Sales & Marketing

                                    {/* ================= Dropdown List ============== */}
                                  {showListIII && <div>
                                      {choseSolo && <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {ThirdList.solo.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>

                                        <h6 className="mt-7 text-lg text-zinc-800">
                                            Learn how pros can build buzz around your business 
                                        </h6>
                                        <button className="py-2 px-5 border rounded-full mt-5 text-sm hover:bg-[#e2f3ef] bg-transparent duration-150 ease-in border-zinc-800">
                                            Explore Sales & Marketing
                                        </button>
                                    </div>}

                                    {choseTeam &&  <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {ThirdList.team.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}
                                  </div>}
                                </li>

                                 {/* ==================== Four List Iteam =============== */}
                                <li 
                                    className="sm:px-5 px-1 lg:py-6 py-5 border-t text-zinc-800 font-semibold cursor-pointer relative text-xl"
                                    onClick={() => (showListIv == false) ? useShowListIv(true) : useShowListIv(false)}
                                >
                                     <span className={`mr-5 px-2 py-2 rounded-xl border sm:text-lg text-sm border-zinc-800 inline-flex items-center`}>
                                        <FaChevronDown className={`inline transition  ${(showListIv == true) ? "rotate-180" : "rotate-0"}`}/>
                                    </span>

                                    Writing & Translation

                                    {/* ================= Dropdown List ============== */}
                                    {showListIv && <div>
                                        {choseSolo && <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                            <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                                {FourthList.solo.map((curSubVal) => (
                                                    <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                        {curSubVal.name}
                                                    </li>
                                                ))}
                                            </ul>

                                            <h6 className="mt-7 text-lg text-zinc-800">
                                                Learn how pros can take your business global 
                                            </h6>
                                            <button className="py-2 px-5 border rounded-full mt-5 text-sm hover:bg-[#e2f3ef] bg-transparent duration-150 ease-in border-zinc-800">
                                                "Explore Wrtting & Translation
                                            </button>
                                        </div>}

                                        {choseTeam &&  <div className="relative w-full py-5">
                                            <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                                Popular Skills:
                                            </h5>

                                            <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                                {FourthList.team.map((curSubVal) => (
                                                    <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                        {curSubVal.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>}
                                    </div>}
                                </li>

                                {/* ==================== Five List Iteam =============== */}
                                <li 
                                    className="sm:px-5 px-1 lg:py-6 py-5 border-t text-zinc-800 font-semibold cursor-pointer relative text-xl"
                                    onClick={() => (showListV == false) ? useShowListV(true) : useShowListV(false)}
                                >
                                     <span className={`mr-5 px-2 py-2 rounded-xl border sm:text-lg text-sm border-zinc-800 inline-flex items-center`}>
                                        <FaChevronDown className={`inline transition  ${(showListV == true) ? "rotate-180" : "rotate-0"}`}/>
                                    </span>

                                    Finance & Accounting

                                    {/* ================= Dropdown List ============== */}
                                   {showListV && <div>
                                    {choseSolo && <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {FiveList.solo.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>

                                        <h6 className="mt-7 text-lg text-zinc-800">
                                            Learn how pros can staff your business up in record time
                                        </h6>
                                        <button className="py-2 px-5 border rounded-full mt-5 text-sm hover:bg-[#e2f3ef] bg-transparent duration-150 ease-in border-zinc-800">
                                            Explore Finance & Accouting Support
                                        </button>
                                    </div>}

                                    {choseTeam &&  <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {FiveList.team.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}
                                    </div>}
                                </li>

                                {/* ==================== Six List Iteam =============== */}
                                <li 
                                    className="sm:px-5 px-1 lg:py-6 py-5 border-t text-zinc-800 font-semibold cursor-pointer relative text-xl"
                                    onClick={() => (showListVI == false) ? useShowListVI(true) : useShowListVI(false)}
                                >
                                     <span className={`mr-5 px-2 py-2 rounded-xl border sm:text-lg text-sm border-zinc-800 inline-flex items-center`}>
                                        <FaChevronDown className={`inline transition  ${(showListVI == true) ? "rotate-180" : "rotate-0"}`}/>
                                    </span>

                                    Legals

                                    {/* ================= Dropdown List ============== */}
                                  {showListVI && <div>
                                    {choseSolo && <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {SixthList.solo.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>

                                        <h6 className="mt-7 text-lg text-zinc-800">
                                            Learn how pros can guide your business forward
                                        </h6>
                                        <button className="py-2 px-5 border rounded-full mt-5 text-sm hover:bg-[#e2f3ef] bg-transparent duration-150 ease-in border-zinc-800">
                                            Explore Legal
                                        </button>
                                    </div>}

                                    {choseTeam &&  <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {SixthList.team.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}
                                  </div>}
                                </li>

                                {/* ==================== Seven List Iteam =============== */}
                                <li 
                                    className="sm:px-5 px-1 lg:py-6 py-5 border-t text-zinc-800 font-semibold cursor-pointer relative text-xl"
                                    onClick={() => (showListVII == false) ? useShowListVII(true) : useShowListVII(false)}
                                >
                                     <span className={`mr-5 px-2 py-2 rounded-xl border sm:text-lg text-sm border-zinc-800 inline-flex items-center`}>
                                        <FaChevronDown className={`inline transition  ${(showListVII == true) ? "rotate-180" : "rotate-0"}`}/>
                                    </span>

                                    HR & Training

                                    {/* ================= Dropdown List ============== */}
                                   {showListVII && <div>
                                    {choseSolo && <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {SeventhList.solo.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>

                                        <h6 className="mt-7 text-lg">
                                            Learn how pros can help your business and skillset scale
                                        </h6>
                                        <button className="py-2 px-5 border rounded-full mt-5 text-sm hover:bg-[#e2f3ef] bg-transparent duration-150 ease-in border-zinc-800">
                                            Explore HR & Tranning
                                        </button>
                                    </div>}

                                    {choseTeam &&  <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {SeventhList.team.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}
                                    </div>}
                                </li>

                                {/* ==================== Eight List Iteam =============== */}
                                <li 
                                    className="sm:px-5 px-1 lg:py-6 py-5 border-t text-zinc-800 font-semibold cursor-pointer relative text-xl"
                                    onClick={() => (showListVIII == false) ? useShowListVIII(true) : useShowListVIII(false)}
                                >
                                   <span className={`mr-5 px-2 py-2 rounded-xl border sm:text-lg text-sm border-zinc-800 inline-flex items-center`}>
                                        <FaChevronDown className={`inline transition  ${(showListVIII == true) ? "rotate-180" : "rotate-0"}`}/>
                                    </span>

                                    Engineering & Architecture

                                    {/* ================= Dropdown List ============== */}
                                    {showListVIII && <div>
                                        {choseSolo && <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {EightList.solo.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>

                                        <h6 className="mt-7 text-lg text-zinc-800">
                                            Learn how pros can help your business and skillset scale
                                        </h6>
                                        <button className="py-2 px-5 border rounded-full mt-5 text-sm hover:bg-[#e2f3ef] bg-transparent duration-150 ease-in border-zinc-800">
                                            Explore HR & Tranning
                                        </button>
                                    </div>}

                                    {choseTeam &&  <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {EightList.team.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-700 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}
                                    </div>}
                                </li>

                                {/* ==================== Nine List Iteam =============== */}
                                <li 
                                    className="sm:px-5 px-1 lg:py-6 py-5 border-t text-zinc-800 font-semibold cursor-pointer relative text-xl"
                                    onClick={() => (showListIx == false) ? useShowListIx(true) : useShowListIx(false)}
                                >
                                    <span className={`mr-5 px-2 py-2 rounded-xl border sm:text-lg text-sm border-zinc-800 inline-flex items-center`}>
                                        <FaChevronDown className={`inline transition  ${(showListIx == true) ? "rotate-180" : "rotate-0"}`}/>
                                    </span>

                                    Admin & Customer Support

                                    {/* ================= Dropdown List ============== */}
                                    {showListIx && <div>
                                        {choseSolo && <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {NightList.solo.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 text-zinc-800 hover:text-cyan-800 hover:underline" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>

                                        <h6 className="mt-7 text-lg text-zinc-800">
                                            Learn how pros can staff your business up in record time
                                        </h6>
                                        <button className="py-2 px-5 border rounded-full mt-5 text-sm hover:bg-[#e2f3ef] bg-transparent duration-150 ease-in border-zinc-800">
                                            Explore Admin & Customer Support
                                        </button>
                                    </div>}

                                    {choseTeam &&  <div className="relative w-full py-5">
                                        <h5 className="my-2 text-lg font-semibold text-zinc-800">
                                            Popular Skills:
                                        </h5>

                                        <ul className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-1 gap-y-2">
                                            {NightList.team.map((curSubVal) => (
                                                <li className="text-[1rem] font-medium py-1 hover:underline text-zinc-800 hover:text-cyan-800" key={curSubVal.id}>
                                                    {curSubVal.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>}
                                    </div>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* =========== Third Section ============== */}
               <section className="xl:mt-10 2xl:px-36 xl:px-28 lg:px-0">
                 <TrustedCom/>
               </section>

               {/* ========== Fourth Section ========== */}
               <section className="container mx-auto xl:my-20 sm:my-16 my-7 md:px-3 sm:px-7 px-3">
                    <div className="xl:mt-10 2xl:px-36 xl:px-28 lg:px-0">
                        <div className="sm:px-7 px-4 py-5 bg-gradient-to-tr from-cyan-100 to-[#c8ebe3] rounded-lg">
                          <div className="grid md:grid-cols-3 grid-cols-1 gap-x-3 md:gap-y-0 gap-y-3">
                            <div className="col-span-2 flex flex-col justify-between space-y-5 md:row-start-1 md:row-end-2">
                                <h3 className="text-zinc-700 font-semibold 2xl:text-3xl text-2xl">
                                    Let our recruiters find you vetted pros for larger projects
                                </h3>
                                <div className="lg:flex lg:space-x-5 lg:gap-x-0 grid sm:grid-cols-2 grid-cols-1 gap-x-1 lg:gap-y-0 gap-y-3">
                                    <button className="px-4 py-1 bg-white text-zinc-800 rounded-full flex items-center duration-150 ease-in hover:bg-gray-100 justify-self-start">
                                        Development & It

                                        <FaLongArrowAltRight className="ml-2"/>
                                    </button>

                                    <button className="px-4 py-1 bg-white text-zinc-800 rounded-full flex items-center duration-150 ease-in hover:bg-gray-100 justify-self-start">
                                        Design & Creative

                                        <FaLongArrowAltRight className="ml-2"/>
                                    </button>

                                    <button className="px-4 py-1 bg-white text-zinc-800 rounded-full flex items-center duration-150 ease-in hover:bg-gray-100 justify-self-start">
                                        Sales & Marketing

                                        <FaLongArrowAltRight className="ml-2"/>
                                    </button>
                                </div>
                            </div>

                            <div className="md:justify-self-end justify-self-center md:row-start-0 md:row-end-0 row-start-1 row-end-1">
                                <Image
                                    src="/images/girls-re.png"
                                    width={200}
                                    height={130}
                                    alt="girls-image"
                                />
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

export default Hire;