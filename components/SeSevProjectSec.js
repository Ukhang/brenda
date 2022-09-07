import { FaStar, FaChevronRight } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SeSevProjectSec = (props) => {

    // ==================== Hooks Call ==============================
    const router = useRouter();

    return (
        <section className="container mx-auto 2xl:mt-10 xl:mt-7 sm:mt-5 mt-4 py-3 md:px-5 sm:px-7 px-3">
            <h2 className="text-2xl font-semibold text-zinc-800">
                {props.headText}
            </h2>

            <div className="relative flex flex-col">
                <div className="lg:mt-5 mt-4 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 2xl:gap-x-10 md:gap-x-7 sm:gap-x-4 gap-x-0 2xl:gap-y-10 md:gap-y-7 gap-y-4 sm:w-auto w-full">
                    {props.projectList.map((curVal) => (
                       <Link href={curVal.link} key={curVal.id}>
                            <div className="bg-transparent border border-zinc-300 w-full rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#ebfffb] h-auto">
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

                <button className="px-5 py-2 border bg-transparent border-zinc-700 text-zinc-700 rounded-full flex items-center font-semibold mx-auto mt-10 transition hover:text-zinc-600 hover:border-zinc-600 hover:bg-zinc-100" onClick={() => router.push(props.btn.link)}>
                    {props.btn.text}
                <FaChevronRight className="ml-2"/>
            </button>
            </div>
        </section>
    )
}

export default SeSevProjectSec;