import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion"

const BannerContainer = ({heading, des, btnI, btnII, img}) => {

    // ====================== Hooks call ==========================
    const router = useRouter();

    return (
        <div className="container mx-auto mt-5 md:px-3 sm:px-7 px-3">
            <section className="grid md:grid-cols-2 grid-cols-1 sm:px-5 px-3 py-3 xl:gap-x-20 lg:gap-x-16 md:gap-x-10 bg-gradient-to-tr from-[#99F6E4] to-[#A5F3FC] rounded-xl">
                <div className="lg:mt-2 mt-1 lg:ml-2 ml-1">
                    <motion.h2 className="text-zinc-700 font-semibold 2xl:text-6xl lg:text-5xl text-4xl"
                        initial={{y:"100%", opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        {heading}
                    </motion.h2>
                    <motion.p className="xl:text-xl text-lg text-zinc-700 lg:mt-5 mt-2"
                        initial={{y:"100%", opacity:0}}
                        animate={{y:0, opacity:1}}
                        transition={{duration:2}}
                    >
                        {des}
                    </motion.p>
                    <div className="sm:flex inline-flex sm:flex-row flex-col sm:items-center lg:mt-14 sm:mt-9 mt-5 sm:space-x-7 space-x-0 sm:space-y-0 space-y-3">
                        <motion.button
                            className="bg-zinc-700 py-2 px-5 text-white transition hover:bg-zinc-600 font-semibold rounded-full"
                            onClick={() => router.push("#")}
                            initial={{x:-30, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            {btnI.text}
                        </motion.button>
                        <motion.button
                            className="border border-zinc-700 py-2 px-5 text-zinc-700 transition hover:text-zinc-500 hover:border-zinc-500 font-semibold rounded-full bg-transparent"
                            onClick={() => router.push("#")}
                            initial={{x:30, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            {btnII.text}
                        </motion.button>
                    </div>
                </div>
                <motion.div className="md:block hidden justify-self-end"
                    initial={{x:30, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1}}
                >
                    <Image
                        src={img}
                        width={592}
                        height={457}
                        alt="banner-image"
                        className="rounded-xl"
                    />
                </motion.div>
            </section>
        </div>
    )
}

export default BannerContainer;