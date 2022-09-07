import Image from "next/image";
import Link from "next/link";
import { SubLinks1, SubLinks2, SubLinks3 } from "./LinkData";
import SearchLink from "./SearchLink";
import SecondLink, { MoreLink } from "./SecondLink";
import { 
    FaCaretDown, 
    FaSearch, 
    FaChevronDown, 
    FaBars, 
    FaLongArrowAltRight,
    FaAngleDown, 
    FaAngleRight 
} from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { GoChevronRight } from "react-icons/go";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {

    // ============= Router hooks ===================
    const router = useRouter();

    // =========== Search List state =================
    const [searchState, useSearchState] = useState("hidden");
    // ========== More Dropdown state ====================
    const [moreDp, useMoreDp] = useState("hidden");
    // ================ Search Input value ====================
    const [inputText, setInputText] = useState("");
    // ====================== [SubLinks1] Show and Hide state ========================
    const [subLinksI, useSublinksI] = useState(false);
    // ====================== [SubLinks2] Show and Hide state ========================
    const [subLinksII, useSublinksII] = useState(false);
    // ====================== [SubLinks3] Show and Hide state ========================
    const [subLinksIII, useSubLinksIII] = useState(false);
    // ====================== SubLinks1 - Content 1 Right Bar state ============================
    const [subContntI, useSubContentI] = useState(true);
    // ====================== SubLinks1 - Content 2 Right Bar state ============================
    const [subContntII, useSubContentII] = useState(false);
    // ====================== SubLinks1 - Content 3 Right Bar state ============================
    const [subContntIII, useSubContentIII] = useState(false);    

    // ====================== Mobile State ====================================
    // =========== Mobile list show hide state ================
    const [mobilelist, setMobileList] = useState(false);
    // =========== Mobile subList show hide state =============
    const [mobileSubListI, setMobileSubListI] = useState(false);
    const [mobileSubListII, setMobileSubListII] = useState(false);
    const [mobileSubListIII, setMobileSubListIII] = useState(false);
    // ========== Id change state  ==============
    const [se, setSe] = useState(null);

    // =========== onclick to search list show, onclick to search list hide ==============
    const ShowSearchState = () => {
        (searchState == "hidden") ? useSearchState("block") : useSearchState("hidden");
    }
    
    // ============= Search Form =====================
    const search = (e) => {
        e.preventDefault();
    }

    // ========================= List onclick handle (Dropdown list show [SubLinks1]) ===========================
    const FirstLinkHandle = () => {
        if (subLinksI === false) {
            useSublinksI(true);
            (subLinksII === true) ? useSublinksII(false) : null;
            (subLinksIII === true) ? useSubLinksIII(false) : null;
        } else {
            useSublinksI(false);
        }
    }

    // ========================= List onclick handle (Dropdown list show [SubLinks2]) ===========================
    const SecondLinkHandle = () => {
        if (subLinksII === false) {
            useSublinksII(true);
            (subLinksI === true) ? useSublinksI(false) : null;
            (subLinksIII === true) ? useSubLinksIII(false) : null;
        } else {
            useSublinksII(false);
        }
    }

    // ========================= List onclick handle (Dropdown list show [SubLinks3]) ===========================
    const ThirdLinkHandle = () => {
        if (subLinksIII === false) {
            useSubLinksIII(true);
            (subLinksI === true) ? useSublinksI(false) : null;
            (subLinksII === true) ? useSublinksII(false) : null;
        } else {
            useSubLinksIII(false);
        }
    }

    // ====================== Handle a Sublinks Click ===========================
    const SubLinksBtn = (id) => {
        if (id == 1) {
            useSubContentI(true);
            (subContntII === true) ? useSubContentII(false) : null;
            (subContntIII === true) ? useSubContentIII(false) : null;
        }

        if (id == 2) {
            useSubContentII(true);
            (subContntI === true) ? useSubContentI(false) : null;
            (subContntIII === true) ? useSubContentIII(false) : null;
        }

        if (id == 3) {
            useSubContentIII(true);
            (subContntI === true) ? useSubContentI(false) : null;
            (subContntII === true) ? useSubContentII(false) : null;
        }
    }

    // ====================== Mobile Handle a SubLinks Click ===========================
   // ========================= List onclick handle (Dropdown list show [SubLinks1]) ===========================
    const FirstLinkHandleMb = () => {
        if (mobileSubListI === false) {
            setMobileSubListI(true);
            (mobileSubListII === true) ? setMobileSubListII(false) : null;
            (mobileSubListIII === true) ? setMobileSubListIII(false) : null;
        } else {
            setMobileSubListI(false);
        }
    }

    // ========================= List onclick handle (Dropdown list show [SubLinks2]) ===========================
    const SecondLinkHandleMb = () => {
        if (mobileSubListII === false) {
            setMobileSubListII(true);
            (mobileSubListI === true) ? setMobileSubListI(false) : null;
            (mobileSubListIII === true) ? setMobileSubListIII(false) : null;
        } else {
            setMobileSubListII(false);
        }
    }

    // ========================= List onclick handle (Dropdown list show [SubLinks3]) ===========================
    const ThirdLinkHandleMb = () => {
        if (mobileSubListIII === false) {
            setMobileSubListIII(true);
            (mobileSubListI === true) ? setMobileSubListI(false) : null;
            (mobileSubListII === true) ? setMobileSubListII(false) : null;
        } else {
            setMobileSubListIII(false);
        }
    }

    // ======================== Mobile Sub show Hide condition [onClick={handleMobileSUb}] ====================    
    const handleMobileSub = (id) => {
       if (id == 1) {
            if (se == null || se == 2 || se == 3) {
                setSe(1);
            } else {
                setSe(null);
            }
       }

       if (id == 2) {
            if (se == null || se == 1 || se == 3) {
                setSe(2);
            } else {
                setSe(null);
            }
       }

       if (id == 3) {
            if (se == null || se == 1 || se == 2) {
                setSe(3);
            } else {
                setSe(null);
            }
       }
    }

    return (
        <nav>
            {/* ============================ First Nav Bar ================================ */}
            <div className="container mx-auto py-3 px-3 lg:flex items-center justify-between border-b hidden">
                {/* ==================== Left =========================== */}
                <div className="flex items-center">
                    <div>
                        <Image
                            src="/images/logo.png"                        
                            width={60}
                            height={50}
                            alt="logo"
                            className="cursor-pointer"
                            onClick={() => router.push('/')}
                        />
                    </div>
                    <ul className="flex 2xl:space-x-12 xl:space-x-9 space-x-6 2xl:ml-14 xl:ml-11 ml-6">
                        <li>
                            <a className={`cursor-pointer flex items-center text-[1.03rem] font-semibold hover:text-cyan-700 ${subLinksI === true ? "text-cyan-700" : "text-zinc-700"}`} onClick={FirstLinkHandle}> 
                                Find Talent
                                <FaCaretDown className={`mt-1 xl:ml-1 ml-[1px] transition ${(subLinksI === true) ? "rotate-180" : "rotate-0"}`}/>
                            </a>

                            {/* ============================ Drop Down List ============================== */}
                            {subLinksI && <div className="absolute bg- w-full left-0 right-0 top-20 bg-[#F3FFFC] shadow-md z-20">
                                <div className="container flex xl:space-x-10 space-x-8 mx-auto py-5 px-3">
                                    <ul className="flex flex-col xl:space-y-2 space-y-1">
                                        {SubLinks1.map((curVal) => (
                                            <li 
                                                className={`flex items-center justify-between space-x-7 cursor-pointer rounded-sm hover:bg-gradient-to-tr hover:from-[#eeecec] hover:to-[#c3f0f5] px-4 py-4 ${(subContntI === true && curVal.id === 1) ? "bg-gradient-to-tr from-[#eeecec] to-[#c3f0f5]" : null} ${(subContntII === true && curVal.id === 2) ? "bg-gradient-to-tr from-[#eeecec] to-[#c3f0f5]" : null} ${(subContntIII === true && curVal.id === 3) ? "bg-gradient-to-tr from-[#eeecec] to-[#c3f0f5]" : null}`}
                                                onClick={(id) => SubLinksBtn(curVal.id)}
                                                key={curVal.id}
                                            >
                                                <div>
                                                    <strong className="font-semibold text-zinc-700"> 
                                                        {curVal.head} 
                                                    </strong>
                                                    <span className="block font-semibold text-sm text-zinc-500">
                                                        {curVal.headers}
                                                    </span>
                                                </div>
                                                <span className="text-lg font-semibold text-cyan-700">
                                                    <GoChevronRight/>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* =================== Sublink content 1 ============== */}
                                   {subContntI &&  <div className="border-l border-gray-300 flex xl:flex-row flex-col 2xl:space-x-64 xl:space-x-44">
                                        <div className="xl:ml-14 ml-10">
                                            <strong>
                                                <span className="text-lg font-semibold text-zinc-700">
                                                    {SubLinks1[0].subhead.name}
                                                </span>
                                            </strong>
                                            <span className="block text-sm font-semibold text-zinc-500 my-3">
                                                {SubLinks1[0].subhead.des}
                                            </span>
                                            <Link href={SubLinks1[0].subhead.subheadlink.link}>
                                                <span className="text-sm font-semibold cursor-pointer text-cyan-700 hover:underline">
                                                    {SubLinks1[0].subhead.subheadlink.name}
                                                    <FaLongArrowAltRight className="inline ml-2 text-lg"/> 
                                                </span>
                                            </Link>
                                        </div>
                                        
                                        <div className="xl:ml-0 ml-8 xl:mt-0 mt-7">
                                            <ul className="grid grid-cols-2 gap-x-10 xl:gap-x-0 xl:grid-cols-1">
                                               {SubLinks1[0].sublink.map((curVal) => (
                                                    <li key={curVal.id} className="px-3 py-2 hover:bg-[#e1f7fa] hover:text-cyan-800 rounded-sm text-zinc-700">
                                                        <Link href={curVal.link}>
                                                            {curVal.linktext}
                                                        </Link>
                                                    </li> 
                                               ))}
                                            </ul>
                                        </div>
                                    </div>}

                                    {/* =================== Sublink content 2 ============== */}
                                    {subContntII && <div className="border-l border-gray-300 flex xl:flex-row flex-col 2xl:space-x-20 xl:space-x-20">
                                        <div className="xl:ml-14 ml-10">
                                            <strong>
                                                <span className="text-lg font-semibold text-zinc-700">
                                                    {SubLinks1[1].subhead.name}
                                                </span>
                                            </strong>
                                            <span className="block text-sm font-semibold text-zinc-500 my-3">
                                                {SubLinks1[1].subhead.des}
                                            </span>
                                            <Link href={SubLinks1[1].subhead.subheadlink.link}>
                                                <span className="text-sm font-semibold cursor-pointer text-cyan-700 hover:underline">
                                                    {SubLinks1[1].subhead.subheadlink.name}
                                                    <FaLongArrowAltRight className="inline ml-2 text-lg"/> 
                                                </span>
                                            </Link>
                                        </div>
                                        
                                        <div className="xl:ml-0 ml-8 xl:mt-0 mt-7">
                                           <ul className="grid 2xl:grid-cols-3 grid-cols-2 gap-x-10">
                                                {SubLinks1[1].sublink.map((curVal) => (
                                                    <li key={curVal.id} className="bg-transparent xl:my-4 my-2 border border-gray-200 rounded-md cursor-pointer transition transition-duration hover:bg-[#e1f7fa]">
                                                        <Link href={curVal.link}>
                                                            <div className="flex xl:flex-col flex-row xl:items-stretch items-center xl:w-40 w-50 h-full">
                                                                <Image src={curVal.img} height={90} width={140} alt="card-image" className="xl:rounded-t-md rounded-l-md xl:rounded-b-none"  />
                                                                <span className="text-center py-2 xl:px-1 px-3 text-zinc-700">{curVal.linktext}</span>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                ))}
                                           </ul>
                                        </div>
                                    </div>}

                                    {/* =================== Sublink content 3 ============== */}
                                    {subContntIII &&  <div className="border-l border-gray-300 flex xl:flex-row flex-col 2xl:space-x-44 xl:space-x-24">
                                        <div className="xl:ml-14 ml-10">
                                            <strong>
                                                <span className="text-lg font-semibold text-zinc-700">
                                                    {SubLinks1[2].subhead.name}
                                                </span>
                                            </strong>
                                            <span className="block text-sm font-semibold text-zinc-500 my-3">
                                                {SubLinks1[2].subhead.des}
                                            </span>
                                            <Link href={SubLinks1[2].subhead.subheadlink.link}>
                                                <span className="text-sm font-semibold cursor-pointer text-cyan-700 hover:underline">
                                                    {SubLinks1[2].subhead.subheadlink.name}
                                                    <FaLongArrowAltRight className="inline ml-2 text-lg"/> 
                                                </span>
                                            </Link>
                                        </div>
                                        
                                        <div className="xl:ml-0 ml-8 xl:mt-0 mt-7">
                                            <ul className="grid grid-cols-1 gap-x-10 xl:gap-x-0">
                                               {SubLinks1[2].sublink.map((curVal) => (
                                                    <li key={curVal.id} className="px-3 py-2 hover:bg-[#e1f7fa] hover:text-cyan-800 rounded-sm text-zinc-700">
                                                        <Link href={curVal.link}>
                                                            {curVal.linktext}
                                                        </Link>
                                                    </li> 
                                               ))}
                                            </ul>
                                        </div>
                                    </div>}
                                    
                                </div>
                            </div>}
                        </li>

                        <li>
                            <a className={`cursor-pointer flex items-center text-[1.03rem] font-semibold hover:text-cyan-700 ${subLinksII === true ? "text-cyan-700" : "text-zinc-700"}`} onClick={SecondLinkHandle}> 
                                Find Jobs 
                                <FaCaretDown className={`mt-1 xl:ml-1 ml-[1px] transition ${(subLinksII === true) ? "rotate-180" : "rotate-0"}`}/>
                            </a>

                            {/* ============================ Drop Down List ============================== */}
                            {subLinksII && <div className="absolute bg- w-full left-0 right-0 top-20 bg-[#F3FFFC] shadow-md z-20">
                                <ul className="container flex xl:space-x-28 space-x-20 mx-auto py-5 px-3">
                                    {SubLinks2.map((curVal) => (
                                        <li className="px-2 py-4 cursor-pointer rounded-sm hover:bg-gradient-to-tr from-[#eeecec] to-[#c3f0f5]" key={curVal.id}>
                                            <Link href={curVal.link}>
                                                <div className="flex flex-col space-y-2 2xl:ml-11 ml-7 max-w-[17rem]">
                                                    <strong className="font-semibold text-zinc-700">
                                                        {curVal.name}
                                                    </strong>
                                                    <span className="font-semibold text-zinc-500 text-sm">
                                                        {curVal.des}
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                        </li>

                        <li>
                            <a className={`cursor-pointer flex items-center text-[1.03rem] font-semibold hover:text-cyan-700 ${subLinksIII === true ? "text-cyan-700" : "text-zinc-700"}`} onClick={ThirdLinkHandle}> 
                                Why Branda
                                <FaCaretDown className={`mt-1 xl:ml-1 ml-[1px] transition ${(subLinksIII === true) ? "rotate-180" : "rotate-0"}`}/>
                            </a>

                              {/* ============================ Drop Down List ============================== */}
                              {subLinksIII && <div className="absolute bg- w-full left-0 right-0 top-20 bg-[#F3FFFC] shadow-md z-20">
                                <div className="container mx-auto py-5 px-3">
                                    <ul className="inline-grid grid-cols-2 gap-x-20 mb-5">
                                        {SubLinks3.map((curVal) => (
                                            <li className="pr-5 py-7 cursor-pointer rounded-sm hover:bg-gradient-to-tr from-[#eeecec] to-[#c3f0f5]" key={curVal.id}>
                                                <Link href={curVal.link}>
                                                    <div className="flex flex-col space-y-2 2xl:ml-11 ml-7">
                                                        <strong className="font-semibold text-zinc-700">
                                                            {curVal.name}
                                                        </strong>
                                                        <span className="font-semibold text-zinc-500 text-sm">
                                                            {curVal.des}
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>}
                        </li>

                        <li className="text-zinc-700 text-[1.03rem] font-semibold hover:text-cyan-700">
                            <Link href="/enterprise"> 
                                Enterprise 
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* ==================== Right =========================== */}
                <div className="flex items-center">
                    <form 
                        className="flex flex-grow border border-gray-300 rounded-full max-w-3xl items-center xl:px-6 px-4 py-2 hover:bg-[#F3FFFC] relative" 
                        onSubmit={search}
                    >
                        <FaChevronDown 
                            className={`${(searchState === "block") ? "rotate-180" : "rotate-0"} transition h-3 text-zinc-700 cursor-pointer hover:text-zinc-500`}
                            onClick={ShowSearchState}
                        />
                        <input 
                            type="text" 
                            className="flex-grow xl:w-full w-40 focus:outline-none bg-transparent mx-2 text-zinc-700"
                            placeholder="search"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onClick={() => useSearchState("block")}
                        />

                        {(inputText === "") ? <FaSearch className="xl:h-5 h-3 text-zinc-700 cursor-pointer hover:text-zinc-500"/> : null}

                        {(inputText === "") ? null : <HiX 
                            className="xl:h-5 h-4 text-zinc-700 cursor-pointer hover:text-zinc-500"
                            onClick={() => setInputText("")}
                        />}

                        
                        <ul className={`absolute ${searchState} top-10 border left-3 w-[91.5%] shadow-lg border-gray-300 bg-[#F3FFFC] rounded-b-lg py-1 z-20`}>
                            {SearchLink.map((curVal) => (
                                <li className="py-2 xl:px-3 px-2 cursor-pointer hover:bg-[#eaf6f8]" key={curVal.id}>
                                    <Link href="/">
                                        <div className="flex items-center space-x-2">
                                            <span className="xl:text-2xl text-xl text-gray-800">
                                                {curVal.icon}
                                            </span>
                                            <div>
                                                <span className="block text-md text-gray-800">
                                                    {curVal.title} 
                                                </span>
                                                <span className="block xl:text-sm text-[13px] text-zinc-500"> 
                                                    {curVal.dec} 
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </form>

                    <button className="xl:mx-7 mx-3 text-zinc-700 text-[1.03rem] font-semibold hover:text-cyan-700" onClick={() => router.push("/account-security/login")}> 
                        LogIn 
                    </button>

                    <button className="font-semibold bg-gradient-to-tr from-sky-200 to-cyan-200 py-2 px-3 rounded-xl text-gray-800 hover:from-cyan-300 hover:to-sky-200" onClick={() => router.push("/account-security/signup")}> 
                        SignUp 
                    </button>
                </div>
            </div>

            {/* ==================== Second Nav Bar ===================== */}
            <div className="container mx-auto py-3 px-3 hidden lg:block">
                <ul className="flex items-center 2xl:space-x-20 xl:space-x-12 space-x-9">
                    {SecondLink.map((curVal) => (
                        <li className="text-zinc-600 font-semibold hover:text-cyan-700" key={curVal.id}>
                            <Link href={curVal.link}>
                                {curVal.name}
                            </Link>
                        </li>
                    ))}

                    {/* ================ Dropdown More ================= */}
                    {MoreLink.map((curVal) => (
                        <li key={curVal.id} className="relative">
                            <button 
                                className={`font-semibold flex items-center hover:text-cyan-700 ${(moreDp === "hidden") ? "text-zinc-600" : "text-cyan-700"}`}
                                onClick={() => (moreDp === "hidden") ? useMoreDp("") : useMoreDp("hidden")}
                            >
                                {curVal.name}
                                <span className={`ml-1 transition ${(moreDp === "") ? "rotate-180" : "rotate-0"}`}> 
                                    {curVal.icon} 
                                </span>
                            </button>

                            {/* =========== More Dropdown List =============== */}
                            <ul className={`${moreDp} absolute font-semibold text-md bg-[#F3FFFC] shadow-lg border rounded-sm text-zinc-700 min-w-[17rem] right-[-1rem] top-7 z-10`}>
                                {curVal.subLink.map((curSubVal) => (
                                    <li key={curSubVal.id} className="px-5 py-3 hover:bg-[#e1f7fa] cursor-pointer hover:text-cyan-700">
                                        <Link href={curSubVal.link}>
                                            {curSubVal.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ==================== Mobile Nav Bar Start ====================== */}
            <div className="lg:hidden">
                <div className="border-b border-gray-200 block">
                    <div className="flex justify-between sm:px-5 px-3 py-2">

                        {/* ========= Right ========= */}
                        <div className="flex items-center">
                            <span 
                                className="text-zinc-600 hover:text-zinc-500 text-2xl text-semibold mr-3 cursor-pointer" 
                                onClick={() => (mobilelist === false) ? setMobileList(true) : setMobileList(false)}
                            >
                                {mobilelist || <FaBars/>}
                                {mobilelist && <HiX/>}
                            </span>

                            <Image
                                src="/images/logo.png"                        
                                width={55}
                                height={45}
                                alt="logo"
                                className="cursor-pointer mr-2"
                                onClick={() => router.push('/')}
                            />
                        </div>

                        {/* ========= Left ========= */}
                        <button className="font-semibold py-1 px-3 rounded-xl text-gray-800 hover:text-cyan-800" onClick={() => router.push("/account-security/signup")}> 
                            SignUp 
                        </button>
                    </div>
                </div>

                
                {/* ============================= Dropdown Nav ============================ */}
                <div className={`w-full absolute flex flex-col space-y-7 shadow-md z-20 lg:hidden sm:px-5 px-2 pt-2 pb-10 bg-[#F3FFFC] transition duration-100 linear  ${(mobilelist === true) ? "translate-x-[0%]" : "translate-x-[-100%]"}`}>
                    {/* ========== Form ========= */}
                    <form 
                        className="flex flex-grow  border border-gray-300 rounded-full w-full items-center xl:px-6 px-4 py-2 hover:bg-[#F3FFFC] relative" 
                        onSubmit={search}
                    >
                        <FaChevronDown 
                            className={`${(searchState === "block") ? "rotate-180" : "rotate-0"} transition h-3 text-zinc-700 cursor-pointer hover:text-zinc-500`}
                            onClick={ShowSearchState}
                        />
                        <input 
                            type="text" 
                            className="flex-grow xl:w-full w-40 focus:outline-none bg-transparent mx-2 text-zinc-700"
                            placeholder="search"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            onClick={() => useSearchState("block")}
                        />

                        {(inputText === "") ? <FaSearch className="xl:h-5 h-3 text-zinc-700 cursor-pointer hover:text-zinc-500"/> : null}

                        {(inputText === "") ? null : <HiX 
                            className="xl:h-5 h-4 text-zinc-700 cursor-pointer hover:text-zinc-500"
                            onClick={() => setInputText("")}
                        />}

                        
                        <ul className={`absolute ${searchState} top-10 border sm:left-4 left-3 md:w-[97%] w-[94%] shadow-lg border-gray-300 bg-[#F3FFFC] rounded-b-lg py-1 z-20`}>
                            {SearchLink.map((curVal) => (
                                <li className="py-2 xl:px-3 px-2 cursor-pointer hover:bg-[#eaf6f8]" key={curVal.id}>
                                    <Link href="/">
                                        <div className="flex items-center space-x-2">
                                            <span className="xl:text-2xl text-xl text-gray-800">
                                                {curVal.icon}
                                            </span>
                                            <div>
                                                <span className="block text-md text-gray-800">
                                                    {curVal.title} 
                                                </span>
                                                <span className="block xl:text-sm text-[13px] text-zinc-500"> 
                                                    {curVal.dec} 
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </form>

                    <ul className="flex flex-col space-y-7 sm:mx-0 mx-1 z-10">
                        <li> 
                            <a 
                                className={`flex items-center justify-between font-semibold text-[1.03rem] hover:text-cyan-700 cursor-pointer ${(mobileSubListI === true ? "text-cyan-700" : "text-zinc-700")}`}
                                onClick={FirstLinkHandleMb}
                            >
                                Find Talent
                                <FaAngleDown className={`transition ${(mobileSubListI === true) ? "rotate-180" : "rotate-0"}`}/>
                            </a>

                            {/* ==================== Dropdown List =====================  */}
                            {mobileSubListI && <div>
                                <ul className="flex flex-col space-y-5 ml-2 my-5">
                                    {SubLinks1.map((curVal) => (
                                        <li key={curVal.id}>
                                            <a 
                                                className={`flex justify-between cursor-pointer`}
                                                onClick={() => handleMobileSub(curVal.id)}
                                            >
                                                <span className={`flex flex-col space-y-1`}>
                                                    <span className="text-zinc-700 font-semibold">
                                                        {curVal.head} 
                                                    </span>
                                                    <span className="text-zinc-500 text-sm font-semibold"> 
                                                        {curVal.headers}
                                                    </span>
                                                </span>

                                                <FaAngleRight className={`text-zinc-700 text-semibold transition ${se == curVal.id ? "rotate-90" : "rotate-0"}`}/>
                                            </a>
                                            
                                            <div className={`my-3 mx-1 flex-col ${(curVal.id == `${se}`) ? "flex" : "hidden"}`}>
                                                <span className="font-semibold text-zinc-600 mb-1 ">
                                                    {curVal.subhead.name} 
                                                </span>
                                                
                                                <span className="text-sm font-md text-zinc-500">
                                                    {curVal.subhead.des}
                                                    <Link href={curVal.subhead.subheadlink.link}>
                                                        <span className="font-semibold ml-1 cursor-pointer text-cyan-700 hover:underline">
                                                            {curVal.subhead.subheadlink.name}
                                                        </span>
                                                    </Link>
                                                </span>

                                                <ul className="flex flex-col space-y-4 mt-5">
                                                    {curVal.sublink.map((curSubVal) => {
                                                        if (curVal.id === 1) {
                                                            return (
                                                                <li className="text-zinc-700 text-md py-1" key={curSubVal.id}>
                                                                    <Link href={curSubVal.link}>
                                                                        {curSubVal.linktext}
                                                                    </Link>
                                                                </li> 
                                                            )
                                                        }

                                                        if (curVal.id === 2) {
                                                            return (
                                                            <li key={curSubVal.id}>
                                                                <Link href={curSubVal.link}>
                                                                    <div className="flex space-x-4 items-center border rounded-md cursor-pointer hover:shadow-sm hover:bg-[#e1f7fa]">
                                                                        <Image 
                                                                            src={curSubVal.img} 
                                                                            height={65}
                                                                            width={100}
                                                                            alt="catagory-img"
                                                                        />

                                                                        <span className="text-zinc-700">
                                                                            {curSubVal.linktext}
                                                                        </span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            )
                                                        }

                                                        if (curVal.id === 3) {
                                                            return (
                                                                <li className="text-zinc-700 text-md py-1" key={curSubVal.id}>
                                                                    <Link href={curSubVal.link}>
                                                                        {curSubVal.linktext}
                                                                    </Link>
                                                                </li>
                                                            )
                                                        }
                                                    })}
                                                </ul>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                        </li>
                        
                        <li> 
                            <a 
                                className={`flex items-center justify-between font-semibold text-[1.03rem] hover:text-cyan-700 cursor-pointer ${(mobileSubListII === true ? "text-cyan-700" : "text-zinc-700")}`}
                                onClick={SecondLinkHandleMb}
                            >
                                Find Jobs 
                                <FaAngleDown className={`transition ${(mobileSubListII === true) ? "rotate-180" : "rotate-0"}`}/>
                            </a>

                            {/* ================== Dropdown List ==================== */}
                            {mobileSubListII && <ul className="flex flex-col space-y-6 ml-2 my-5">
                                {SubLinks2.map((curVal) => (
                                    <li key={curVal.id}>
                                        <Link href={curVal.link}>
                                            <span className="flex flex-col cursor-pointer">
                                                <span className="text-zinc-700 font-semibold">
                                                    {curVal.name}
                                                </span>
                                                <span className="text-zinc-500 text-sm">
                                                    {curVal.des}
                                                </span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>}
                        </li>

                        <li> 
                            <a 
                                className={`flex items-center justify-between font-semibold text-[1.03rem] hover:text-cyan-700 cursor-pointer ${(mobileSubListIII === true ? "text-cyan-700" : "text-zinc-700")}`}
                                onClick={ThirdLinkHandleMb}                   
                            >
                                Why Branda
                                <FaAngleDown className={`transition ${(mobileSubListIII === true) ? "rotate-180" : "rotate-0"}`}/>
                            </a> 

                            {/* =================== Dropdown List =================== */}
                           {mobileSubListIII && <div className="space-y-3 ml-2">
                                <ul className="flex flex-col space-y-4 mt-5">
                                    {SubLinks3.map((curVal) => (
                                        <li key={curVal.id} className="cursor-pointer">
                                            <Link href={curVal.link}>
                                                <span className="flex flex-col space-y-1">
                                                    <span className="text-zinc-600">
                                                        {curVal.name}
                                                    </span>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                        </li>

                        <li>
                            <Link href={"/enterprise"}>
                                <a className="text-zinc-700 text-[1.03rem] font-semibold hover:text-cyan-700"> 
                                    Enterprise 
                                </a>
                            </Link>
                        </li>
                    </ul>

                    <button className="text-zinc-700 text-[1.03rem] font-semibold hover:text-cyan-700 inline-flex sm:mx-0 mx-1" onClick={() => router.push("/account-security/login")}>
                        Login
                    </button>
                </div>
            </div>
            {/* ==================== Mobile Nav Bar end ====================== */}
        </nav>
    )
}

export default Navbar;