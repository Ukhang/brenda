import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ExpartBox = ({data}) => {
    return (
        <div className="md:grid lg:grid-cols-4 md:grid-cols-3 2xl:gap-x-20 xl:gap-x-10 md:gap-x-5 gap-y-5 relative flex md:items-stretch items-center md:space-x-0 space-x-3 mt-7 lg:overflow-x-hidden overflow-x-scroll scroll md:whitespace-normal whitespace-nowrap scroll-smooth">
            {data.map((curVal) => (
                <Link href={curVal.link} key={curVal.id}>
                    <motion.div 
                        className="xl:px-5 px-4 py-2 relative bg-[#DAF3ED] rounded-lg cursor-pointer flex flex-col justify-between" 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.9}}
                    >
                        <h5 className="xl:text-xl text-lg font-semibold text-zinc-800">
                            {curVal.groupName}
                        </h5>

                        <div>
                            <div className="flex space-x-2 xl:mt-5 mt-3">
                                <div className="flex items-center">
                                    <FaStar className="text-green-700"/>
                                    <span className="ml-1 text-zinc-700 font-semibold">
                                        {curVal.rating}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-zinc-700 font-semibold">
                                        {curVal.ratingText}
                                    </span>
                                </div>
                            </div>
                            <div className="flex py-3">
                                {curVal.imgSection.map((curSubVal) => (
                                    <picture 
                                        className={`ease-in duration-300 mx-[-7px] hover:mx-0`} 
                                        key={curSubVal.id}
                                    >
                                        <Image
                                            src={curSubVal.img}
                                            width={45}
                                            height={45}
                                            alt="freelancer"
                                            className="rounded-full shadow-md"
                                        />
                                    </picture>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    )
}

export default ExpartBox;