import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from "framer-motion"

const JobSuccessCard = () => {

    // ============= Hooks Call =================
    const [scale, useScale] = useState(true);

    return (
        <Link href="#">
            <motion.div className="absolute right-[-1rem] top-[-1rem] lg:flex hidden flex-col space-y-2 z-[9] bg-[#F3FFFC] shadow-2xl py-2 px-3 rounded-lg ease-in duration-200 hover:scale-[102%] cursor-pointer" onMouseOver={() => useScale(false)} onMouseOut={() => useScale(true)}
                initial={{ opacity: 0, x:-100, scale:0.5}}
                animate={{opacity: 1, x:0, scale: 1}}
                transition={{duration:0.9}}
                >

                <span className="text-zinc-700 font-semibold text-[13px]">
                    Today Job Success
                </span>
                <div className="flex space-x-[-3px]">
                    <span className="translate-x-0">
                        <Image 
                            src="/images/av1.png" 
                            height={35} 
                            width={35} 
                            className="rounded-full"
                            alt="avater-img1"
                        />
                    </span>
                    <span className={`${(scale === false) ? "translate-x-0": "translate-x-[-0.7rem]"} ease-in duration-300`}>
                        <Image 
                            src="/images/av2.png" 
                            height={35} 
                            width={35} 
                            className="rounded-full"
                            alt="avater-img2"
                        />
                    </span>
                    <span className={`${(scale === false) ? "translate-x-0": "translate-x-[-1.4rem]"} ease-in duration-300`}>
                        <Image 
                            src="/images/av3.png" 
                            height={35} 
                            width={35} 
                            className="rounded-full"
                            alt="avater-img3"
                        />
                    </span>
                    <span className={`${(scale === false) ? "translate-x-0" : "translate-x-[-2.1rem]"} ease-in duration-300`}>
                        <Image 
                            src="/images/av4.png"
                            height={35} 
                            width={35} 
                            className="rounded-full"
                            alt="avater-img4"
                        />
                    </span>
                    <span className={`bg-gradient-to-tr font-semibold bg-gradiant-to-r from-[#DAF3ED] via-[#F3F6D4] to-[#CFECFE] rounded-full text-center py-2 w-[35px] h-[35px] text-[10px] cursor-pointer ${(scale === false) ? "translate-x-0" : "translate-x-[-2.8rem]"} ease-in duration-300`}>
                        2k+
                    </span>
                </div>
            </motion.div>
        </Link>
    )
}

export default JobSuccessCard;