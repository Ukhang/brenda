import { FaSearch, FaCaretRight } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { BiChevronsRight } from "react-icons/bi";
import Link from "next/link";

const ServiceSearch = (props) => {

    // =============== Function ==================
    const SearchForm = (e) => {
        e.preventDefault();
    }

    return (
        <section className="container mx-auto md:mt-3 mt-1 py-3 md:px-5 sm:px-7 px-3">
            {/* =============== Form ============== */}
            <form className="flex flex-grow border-2 lg:max-w-lg rounded-full items-center px-1 py-1 bg-[#f9fffdfd] relative border-[#a9cac6fd] mt-7" onSubmit={SearchForm}>
                <input 
                    type="text" 
                    className="flex-grow focus:outline-none bg-transparent mx-3 text-zinc-700"
                    placeholder="Search projects"
                />
                <span className="px-2 py-1 rounded-full duration-300 ease-in bg-zinc-800 cursor-pointer hover:bg-[#2b4241fd]">
                    <FaSearch className="h-6 text-white"/>
                </span>
            </form>

            <div className="flex flex-col md:space-y-4 space-y-3 md:mt-10 mt-7">
                <div className="flex items-center sm:space-x-2 space-x-1">
                    <FiHome className="text-zinc-800"/>
                    <BiChevronsRight className="text-[11px] text-zinc-500"/>
                    <span className="text-zinc-800"> 
                        {props.textI}
                    </span>
                    <BiChevronsRight className="text-[11px] text-zinc-500"/>
                    <span  className="text-zinc-800"> 
                        {props.textII}
                    </span>
                </div>
                <div>
                    <h2 className="lg:text-4xl text-3xl font-bold text-[#0C4A6E]"> {props.headText} </h2>
                </div>
                <div className="flex lg:flex-row flex-col lg:items-center space-x-1 lg:space-y-0 space-y-3">
                    <p className="text-zinc-500 sm:text-xl text-lg">
                        {props.des}
                    </p>
                    <Link href={props.link}>
                        <a className="flex items-center sm:text-xl text-lg font-semibold text-sky-700 transition cursor-pointer hover:underline"> {props.linkText} <FaCaretRight className="mt-1"/> </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ServiceSearch;