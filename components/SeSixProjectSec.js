import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import { useRef} from "react";
import Link from "next/dist/client/link";

const SeSixProjectSec = (props) => {

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
            <button className={`left-0 absolute text-sm py-4 px-4 rounded-full shadow-xl bg-zinc-200 text-zinc-800 transition z-10 md:hidden duration-200 ease-in hover:bg-zinc-300`} onClick={SlideLeft}>
                <FaChevronLeft/>
            </button>
                <div className="flex 2xl:space-x-10 lg:space-x-7 space-x-5 overflow-x-scroll scroll scroll-smooth scrollbar-hide lg:mt-5 mt-4 md:mx-0 mx-2" ref={slider}>
                        {props.projectList.map((curVal) => (
                           <Link href={curVal.link} key={curVal.id}>
                                <div className="bg-transparent border bg-[#CCFBF1] w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#bfeee4] 2xl:min-w-[400px] xl:min-w-[350px] lg:min-w-[300px] min-w-[220px]" ref={scrollDiv}>
                                    <div>
                                        <Image
                                            src={curVal.image.src}
                                            width={450}
                                            height={250}
                                            layout="responsive"
                                            alt={curVal.image.alt}
                                            className="rounded-t-xl border border-zinc-300"
                                        />
                                        <div className="lg:pl-7 sm:px-4 px-3 lg:py-3 md:py-2 sm:py-3 py-2 space-y-1 flex flex-col">
                                            <h4 className="md:text-lg font-semibold text-zinc-800">
                                                {curVal.textI}
                                            </h4>
                                            <span className="md:font-semibold text-600 text-sm text-zinc-600">
                                                {curVal.textII}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                           </Link>
                        ))}
                </div>

                {/* ================ Right Button ================= */}
                <button className={`right-0 absolute text-sm py-4 px-4 rounded-full shadow-xl bg-zinc-200 text-zinc-800 transition z-10 md:hidden duration-200 ease-in hover:bg-zinc-300 `} onClick={SlideRight}>
                    <FaChevronRight/>
                </button>
            </div>
        </section>
    )
}

export default SeSixProjectSec;