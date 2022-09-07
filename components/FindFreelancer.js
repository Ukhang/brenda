import Link from "next/link";

const FindFreelancer = (props) => {
    return (
        <section className="container mx-auto lg:my-16 my-5 py-3 md:px-5 sm:px-7 px-3">
            <h2 className="xl:text-4xl text-3xl font-semibold text-zinc-800 sm:mt-7 mb-5">
                {props.headText}
            </h2>

            <div className="md:mt-3 md:mb-10">
                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-700 sm:mt-9 mt-5">
                    {props.FindFreelancerList.headText}
                </h4>

                <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-10 mt-4 sm:px-0 px-5">
                    {props.FindFreelancerList.listItem.map((curVal) => (
                        <li
                            className="font-semibold text-zinc-500 cursor-pointer hover:text-sky-700 hover:underline py-2"
                            key={curVal.id}
                        >
                            <Link href={curVal.link}>
                                {curVal.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default FindFreelancer;