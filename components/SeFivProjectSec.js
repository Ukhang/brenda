import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import { useRef} from "react";
import Link from "next/link";

const SeFivProjectSec = (props) => {

    // =============== Hooks ====================
    const slider = useRef();
    const scrollDiv = useRef();

    // =============== Function ==================
    const SlideRight = () => {
        slider.current.scrollLeft = slider.current.scrollLeft + scrollDiv.current.offsetWidth + 20;
    }
    
    const SlideLeft = () => {
        slider.current.scrollLeft = slider.current.scrollLeft - scrollDiv.current.offsetWidth - 20;
    }

    return (
        <section className="container mx-auto 2xl:mt-10 xl:mt-7 sm:mt-5 mt-4 py-3 md:px-5 sm:px-7 px-3">
            <h2 className="text-2xl font-semibold text-zinc-800">
                {props.headText}
            </h2>
            <p className="text-zinc-600 text-lg mt-1"> {props.des} </p>
            
            <div className="relative flex items-center">
            <button className={`left-0 absolute text-sm py-4 px-4 rounded-full shadow-xl bg-zinc-200 text-zinc-800 transition z-10 sm:block hidden duration-200 ease-in hover:bg-zinc-300 mt-3`} onClick={SlideLeft}>
                <FaChevronLeft/>
            </button>
                <div className="overflow-x-scroll scroll scroll-smooth sm:scrollbar-hide lg:mt-5 mt-4 xl:mx-4 md:mx-3 sm:mx-2 mx-0 flex space-x-5" ref={slider}>
                        {props.projectList.map((curVal) => (
                            <Link href={curVal.link} key={curVal.id}>
                                <div className="bg-transparent border bg-[#CCFBF1] rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#bfeee4] lg:min-w-[350px] sm:min-w-[300px] min-w-[200px] grid grid-cols-3" ref={scrollDiv}>
                                    <Image
                                        src={curVal.image.src}
                                        width={300}
                                        height={210}
                                        layout="responsive"
                                        alt={curVal.image.alt}
                                        className="rounded-l-xl border border-zinc-300 col-span-1"
                                    />
                                    <div className="sm:px-4 px-3 lg:pspace-y-1 y-3 md:py-2 sm:py-4 py-2 col-span-2 my-auto">
                                        <h4 className="font-semibold text-zinc-800">
                                            {curVal.des}
                                        </h4>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>

                {/* ================ Right Button ================= */}
                <button className={`right-0 absolute text-sm py-4 px-4 rounded-full shadow-xl bg-zinc-200 text-zinc-800 transition z-10 sm:block hidden duration-200 ease-in hover:bg-zinc-300 mt-3`} onClick={SlideRight}>
                    <FaChevronRight/>
                </button>
            </div>
        </section>
    )
}

export default SeFivProjectSec;