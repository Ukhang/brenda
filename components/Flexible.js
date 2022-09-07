import { FaStar } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import Image from "next/dist/client/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Flexible = (props) => {

    // ======================== Hooks call =============================
    const router = useRouter();

    return (
        <section className="lg:mt-20 sm:mt-10 mt-5 py-3 lg:px-5 md:px-9 sm:px-7 px-3 bg-[#DAF3ED]">
            <div className="container mx-auto md:py-20 py-10">
                <div>
                    <motion.h2 className="xl:text-4xl text-3xl font-semibold text-zinc-800"
                        initial={{y:"100", opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        {props.firstHead}
                    </motion.h2>

                    <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-x-52 xl:gap-x-40 lg:gap-x-36 items-center lg:mt-0 mt-7">
                       <div className="md:space-y-5 space-y-3 lg:row-start-1 lg:row-end-2 row-start-2 row-end-3 lg:mt-0 mt-5">
                            <motion.p className="2xl:text-3xl md:text-2xl text-xl font-semibold text-zinc-600"
                                initial={{y:"100", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                {props.firstSubHead}
                            </motion.p>
                            <motion.div className="flex md:flex-row flex-col md:items-center md:space-x-28 md:space-y-0 space-y-3"
                                initial={{y:"100", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <div className="flex items-center space-x-2">
                                    <FaStar className="text-green-600"/>
                                    <FaStar className="text-green-600"/>
                                    <FaStar className="text-green-600"/>
                                    <FaStar className="text-green-600"/>
                                    <FaStar className="text-green-600"/>
                                    <span className="text-lg font-semibold text-zinc-800">
                                        {props.first_F_LeftRating}
                                    </span>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <span className="text-zinc-800 font-semibold text-lg">
                                        {props.first_F_RightText}
                                    </span>
                                    <span className="text-zinc-800 font-semibold text-lg">
                                        {props.first_F_RightValue}
                                    </span>
                                </div>
                            </motion.div>

                            <motion.p className="text-zinc-600 font-semibold 2xl:text-lg text-md"
                                initial={{y:"100", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                {props.firstDes}
                            </motion.p>

                            <motion.div className="flex items-center space-x-5 flex-wrap sm:space-y-0 space-y-2"
                                initial={{y:"100", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                <span className="text-zinc-800 font-semibold text-lg">
                                    {props.first_S_LeftText}
                                </span>

                                <span className="py-2 px-3 bg-gradient-to-tr from-sky-100 to-teal-100 rounded-full shadow-md font-semibold text-zinc-800"> 
                                    {props.first_S_F_RightValue}
                                </span>
                                <span className="py-2 px-3 bg-gradient-to-tr from-sky-100 to-teal-100 rounded-full shadow-md font-semibold text-zinc-800"> 
                                    {props.first_S_S_RightValue}
                                </span>
                                <span className="py-2 px-3 bg-gradient-to-tr from-sky-100 to-teal-100 rounded-full shadow-md font-semibold text-zinc-800"> 
                                    {props.first_S_T_RightValue}
                                </span>
                            </motion.div>
                       </div>

                      <div className="lg:row-start-0 row-start-1 lg:row-end-0 row-end-2 w-full lg:mt-5">
                        <Image
                            src={props.firstImage}
                            width={600}
                            height={490}
                            className="rounded-xl"
                            layout="responsive"
                            alt="related-image"
                        />
                      </div>
                    </div>
                </div>

                <div className="md:mt-28 sm:mt-20 mt-14">
                    <motion.h2 className="xl:text-4xl text-3xl font-semibold text-zinc-800 lg:text-end text-start"
                        initial={{y:"100", opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        {props.secondHead}
                    </motion.h2>


                    <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-x-40 lg:gap-x-28 items-center mt-7">
                        <div className="w-full">
                            <Image
                                src={props.secondImage}
                                width={600}
                                height={490}
                                className="rounded-xl"
                                layout="responsive"
                                alt="team-image"
                            />
                        </div>

                        <div className="space-y-5 lg:mt-0 mt-5">
                            <motion.p className="text-zinc-600 font-semibold 2xl:text-lg text-md"
                                initial={{y:"100", opacity:0}}
                                whileInView={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                {props.secondDes}
                            </motion.p>

                            <div className="xl:flex block justify-between xl:space-x-5 xl:items-center">
                                <motion.div className="flex items-center space-x-2"
                                    initial={{y:"100", opacity:0}}
                                    whileInView={{y:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    <span className="text-xl">
                                        <FcApproval/>
                                    </span>

                                    <p className="text-lg font-semibold text-zinc-800">
                                        {props.secondRightText}
                                    </p>
                                </motion.div>

                                <motion.button className="bg-zinc-800 px-4 py-2 transition text-white rounded-full font-semibold hover:bg-zinc-700 xl:mt-0 mt-3" 
                                    onClick={() => router.push(props.secondLeftBtn.link)}
                                    initial={{y:"100", opacity:0}}
                                    whileInView={{y:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    {props.secondLeftBtn.text}
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Flexible;