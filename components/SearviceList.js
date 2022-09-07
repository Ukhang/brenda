import Link from "next/dist/client/link";

const ServiceList = (props) => {
    return (
        <section className="container mx-auto 2xl:mt-16 lg:my-10 sm:my-5 my-4 py-3 md:px-5 sm:px-7 px-3">
            <h2 className="xl:text-3xl text-2xl font-semibold text-zinc-800">
                {props.headText}
            </h2>
            
            <ul className="my-8 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-7 gap-y-3 sm:px-0 px-1">
                {props.serviceLink.map((curVal) => (
                    <li className={`text-zinc-500 font-semibold text-[15px] cursor-pointer hover:underline`} key={curVal.id}>
                        <Link href={curVal.link}>
                            {curVal.name}
                        </Link>
                    </li>
                ))}
            </ul>
       </section>
    )
}

export default ServiceList;