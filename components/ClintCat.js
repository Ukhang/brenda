import { FaKeyboard } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { BsFillBagFill } from 'react-icons/bs';
import { AiFillTrophy } from 'react-icons/ai';
import Link from 'next/link';

const ClintCat = () => {

    const Data = [
        {
            id: 1,
            name: `Post a job and hire a Pro`,
            leftIcon: <FaKeyboard/>,
            linkText: "Talent Marketplace",
            rightIcon: <FiArrowRight/>,
            link: "#",
        },
        
        {
            id: 2,
            name: `Browse and buy Project`,
            leftIcon: <BsFillBagFill/>,
            linkText: "Project Catlog",
            rightIcon: <FiArrowRight/>,
            link: "#",
        },

        {
            id: 3,
            name: `Let us help you find the right talent`,
            leftIcon: <AiFillTrophy/>,
            linkText: "Talent Scout",
            rightIcon: <FiArrowRight/>,
            link: "#",
        },
    ]

    return (
        <>
            {Data.map((curVal) => (
                <Link href={curVal.link} key={curVal.id}>
                    <div 
                        className="flex flex-col justify-between xl:space-y-7 space-y-5 bg-gradient-to-tr from-[#CCFBF1] to-[#CFFAFE] xl:px-7 px-5 py-5 rounded-md cursor-pointer transition duration-300 hover:from-cyan-200 hover:to-[#e1f7fa] hover:scale-105 hover:shadow-lg hover:shadow-cyan-200/50" 
                    >
                        <h5 className="text-zinc-700 font-semibold 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl">
                            {curVal.name}
                        </h5>
        
                        <div className="flex items-center lg:space-x-2 md:space-x-0 space-x-1 xl:pb-5 pb-2">
                            <span className="lg:text-xl text-md text-zinc-700">
                                {curVal.leftIcon}
                            </span>
                            <span className="font-semibold lg:text-xl text-md text-zinc-700">
                                {curVal.linkText}
                            </span>
                            <span className="lg:ml-5 lg:text-xl text-md text-zinc-700">
                                {curVal.rightIcon}
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default ClintCat;