import { FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import { useRef} from "react";
import Link from "next/link";

const SeSecProjectSec = (props) => {

    // =============== Hooks ====================
    const slider = useRef();
    const scrollDiv = useRef();

    // =============== Function ==================
    const SlideRight = () => {
        if (window.screen.width >= 1536) {
            slider.current.scrollLeft = slider.current.scrollLeft + scrollDiv.current.offsetWidth + 30;
        } else {
            slider.current.scrollLeft = slider.current.scrollLeft + scrollDiv.current.offsetWidth + 20;
        }
    }
    
    const SlideLeft = () => {
        if (window.screen.width >= 1536) {
            slider.current.scrollLeft = slider.current.scrollLeft - scrollDiv.current.offsetWidth - 30;
        } else {
            slider.current.scrollLeft = slider.current.scrollLeft - scrollDiv.current.offsetWidth - 20;
        }
    }

    return (
        <section className="container mx-auto 2xl:mt-10 xl:mt-7 sm:mt-5 mt-4 py-3 md:px-5 sm:px-7 px-3">
            <h2 className="text-2xl font-semibold text-zinc-800">
                {props.headText}
            </h2>
            <p className="text-zinc-600 text-lg mt-1"> {props.des} </p>

            <div className="relative flex items-center">
            <button className={`left-0 absolute lg:text-2xl py-4 px-4 rounded-full shadow-xl bg-zinc-200 text-zinc-800 transition z-10 duration-200 ease-in hover:bg-zinc-300`} onClick={SlideLeft}>
                <FaChevronLeft/>
            </button>
            <div className="flex 2xl:space-x-10 lg:space-x-7 space-x-5 overflow-x-scroll scroll scroll-smooth scrollbar-hide lg:mt-5 mt-4 xl:mx-4 md:mx-3 mx-2" ref={slider}>
                {props.projectList.map((curVal) => (
                    <Link href={curVal.link} key={curVal.id}>
                        <div className="bg-transparent border border-zinc-300 w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#ebfffb] 2xl:min-w-[330px] lg:min-w-[300px] min-w-[250px]" ref={scrollDiv}>
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
                    </div>
                    </Link>
                ))}
            </div>

            {/* ================ Right Button ================= */}
            <button className={`right-0 absolute lg:text-2xl py-4 px-4 rounded-full shadow-xl bg-zinc-200 text-zinc-800 transition z-10 duration-200 ease-in hover:bg-zinc-300 `} onClick={SlideRight}>
                <FaChevronRight/>
            </button>
            </div>
    </section>
    )
}

export default SeSecProjectSec;