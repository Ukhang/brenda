import { HiArrowSmRight } from "react-icons/hi";
import Link from "next/link";

const SeEigProjectSec = (props) => {
    return (
        <section className="container mx-auto 2xl:mt-10 xl:mt-7 sm:mt-5 mt-4 py-3 md:px-5 sm:px-7 px-3">
            <h2 className="xl:text-3xl text-2xl font-semibold text-zinc-800">
                {props.headText}
            </h2>

            <div className="relative flex items-center">
                <div className="flex lg:flex-row flex-col 2xl:space-x-9 lg:space-x-7 w-full lg:mt-5 lg:space-y-0 space-y-4 mt-4">
                        {props.projectList.map((curVal) => (
                            <Link href={curVal.link} key={curVal.id}>
                                <div className="bg-transparent border bg-[#CCFBF1] rounded-xl cursor-pointer duration-200 ease-in hover:bg-[#bfeee4] lg:max-w-[330px] w-full">
                                    <div className="sm:px-4 px-3 py-4 flex flex-col gap-y-3">
                                        <h5 className="text-zinc-500"> {curVal.name} </h5>
                                        <h4 className="text-zinc-800 font-semibold">
                                            {curVal.des}
                                        </h4>
                                        <a className="text-600 text-zinc-600 hover:underline">
                                            {curVal.linkText}
                                            <HiArrowSmRight className="inline ml-1"/>
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default SeEigProjectSec;