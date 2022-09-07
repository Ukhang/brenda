import Image from "next/image";
import { motion } from "framer-motion";

{/* ================= Trusted Company Section ================ */}
const TrustedCom = () => {
    return (
        <section className="container mx-auto lg:mt-10 md:mt-7 mt-3 py-3 md:px-5 sm:px-7 px-3">
            <motion.div className="flex lg:flex-row flex-col md:space-x-7 lg:space-y-2 space-y-3 items-center justify-center border-b md:pb-5 pb-3"
                initial={{y:"100", opacity:0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:1}}
            >
                <h3 className="text-zinc-500 font-semibold md:text-xl text-md lg:mb-0 md:mb-3 mb-2">
                    Trusted by
                </h3>
                <div className="flex 2xl:space-x-10 xl:space-x-7 sm:space-x-6 space-x-3">
                    <span>
                        <Image src="/images/paypal.png" height={30} width={90} alt="paypal-img"/>
                    </span>
                    <span>
                        <Image src="/images/adobe.png" height={30} width={90} alt="adobe-img"/>
                    </span>
                    <span>
                        <Image src="/images/oracle.png" height={30} width={90} alt="oracle-img"/>
                    </span>
                    <span>
                        <Image src="/images/google.png" height={30} width={90} alt="google-img"/>
                    </span>
                </div>
                <div className="flex 2xl:space-x-10 xl:space-x-7 sm:space-x-6 space-x-4">
                    <span>
                        <Image src="/images/microsoft.png" height={30} width={110} alt="microsoft-img"/>
                    </span>
                    <span>
                        <Image src="/images/airnob.png" height={30} width={90} alt="airbnb-img"/>
                    </span>
                    <span>
                        <Image src="/images/netflix.png" height={30} width={90} alt="netflix-img"/>
                    </span>
                </div>
            </motion.div>
        </section>
    )
}

export default TrustedCom;