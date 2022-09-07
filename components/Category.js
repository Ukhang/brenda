import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Category = () => {    
    
    const Data = [
        {
            id: 1,
            name: "Development & It",
            star: "4.85/5",
            skills: "1,853 skills",
            link: "/cat/dev-it",
        },

        {
            id: 2,
            name: "Design & Creative",
            star: "4.91/5",
            skills: "968 skills",
            link: "/cat/design-creative",
        },

        {
            id: 3,
            name: "Sales & Marketing",
            star: "4.77/5",
            skills: "392 skills",
            link: "/cat/sales-marketing",
        },

        {
            id: 4,
            name: "Writing & Translation",
            star: "4.92/5",
            skills: "505 skills",
            link: "/cat/writing-translation",
        },

        {
            id: 5,
            name: "Admin & Custom support",
            star: "4.77/5",
            skills: "508 skills",
            link: "/cat/admin-customer-support",
        },

        {
            id: 6,
            name: "Finance & Accounting",
            star: "4.79/5",
            skills: "214 skills",
            link: "/cat/finance-accounting",
        },

        {
            id: 7,
            name: "Engineering & Architecture",
            star: "4.85/5",
            skills: "650 skills",
            link: "/cat/engineering-architecture",
        },

        {
            id: 8,
            name: "Legal",
            star: "4.85/5",
            skills: "133 skills",
            link: "/cat/legal",
        },
    ];

    return (
        <>
            {Data.map((curVal) => (
                <Link href={curVal.link} key={curVal.id}>
                    <motion.div
                        className="bg-gradient-to-tr from-[#CCFBF1] to-[#CFFAFE] xl:px-7 px-5 xl:py-7 py-3 xl:space-y-7 space-y-4 rounded-xl cursor-pointer transition hover:from-cyan-200 hover:to-[#CCFBF1] hover:scale-105" 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{duration:0.9}}
                    >
                        <h5 className="xl:text-center text-start text-xl text-zinc-700 font-semibold"> 
                            {curVal.name}
                        </h5>
                        <div className="flex justify-between 2xl:pb-7 xl:pb-5 pb-1">
                            <div className="flex items-center space-x-2">
                                <FaStar className="text-green-600"/>
                                <span className="text-zinc-700 font-semibold">
                                    {curVal.star}
                                </span>
                            </div>
            
                            <span className="text-zinc-700 font-semibold">
                                {curVal.skills}
                            </span>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </>
    )
}

export default Category;