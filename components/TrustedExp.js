import { FaStar } from "react-icons/fa";
import ExpartBox from "./ExpartsBox";

const TrustedExp = (props) => {
    return (
        <section className="container mx-auto lg:mt-16 md:mt-10 mt-5 py-3 md:px-5 sm:px-7 px-3 space-y-3">
            <div className="2xl:px-10 xl:px-5 md:px-3 sm:px-2 px-0">
                <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                    {props.headText}
                </h2>

                <div className="flex md:flex-row flex-col xl:space-x-20 md:space-x-10">
                    <div className="lg:mt-7 mt-5">
                        <div className="flex space-x-2 items-center">
                            <FaStar className="text-green-700 xl:text-3xl text-3xl"/>
                            <h5 className="xl:text-3xl lg:text-3xl text-2xl font-semibold text-zinc-800">
                                {props.rating}
                            </h5>
                        </div>
                        <p className="xl:text-lg text-md font-semibold text-zinc-500 my-2">
                            {props.ratingText}
                        </p>
                    </div>

                    <div className="lg:mt-7 md:mt-5 mt-1">
                        <div>
                            <h5 className="xl:text-3xl lg:text-3xl text-2xl font-semibold text-zinc-800">
                                {props.contracts}
                            </h5>
                        </div>
                        <p className="xl:text-lg text-md font-semibold text-zinc-500 my-2">
                            {props.contractsText}
                        </p>
                    </div>

                    <div className="lg:mt-7 md:mt-5 mt-1">
                        <div>
                            <h5 className="xl:text-3xl lg:text-3xl text-2xl font-semibold text-zinc-800">
                                {props.skills}
                            </h5>
                        </div>
                        <p className="xl:text-lg text-md font-semibold text-zinc-500 my-2">
                            {props.skillsText}
                        </p>
                    </div>
                </div>

                {/* ================ Exparts Box ============== */}
                <ExpartBox data={props.cardData}/>
            </div>
        </section>
    )
}

export default TrustedExp;