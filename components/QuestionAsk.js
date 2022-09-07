import Image from "next/image";
import { useRouter } from "next/router";

const QuestionAsk = (props) => {

    // ======================== Hooks call =============================
    const router = useRouter();

    return (
        <section className="container mx-auto lg:mt-20 mt-5 py-3 md:px-5 sm:px-7 px-3">
            <div className="flex flex-col rounded-xl items-center 2xl:px-10 xl:px-5 md:px-3 sm:px-2 px-3 bg-[#DAF3ED]">
                {/* ================ This is alwayse same not change =================== */}
                <div>
                    <h2 className="xl:text-4xl text-3xl font-semibold text-zinc-800 mt-7 mb-5">
                        Frequently asked questions
                    </h2>
                    <Image
                        src={"/images/ask.png"}
                        width={550}
                        height={550}
                        alt="question-ask-image"
                    />
                </div>

                {/* ==================== This is props to chagne ======================= */}
                <div className="lg:px-7 sm:px-5 px-0 py-5">
                    <div>
                        <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800 sm:mt-7 mt-5">
                            {props.firstHeadText}
                        </h4>
                        <p className="mt-2 text-zinc-600 xl:text-xl sm:text-lg text-md">
                            {props.firstDesText}
                        </p>
                    </div>

                    <div>
                        <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800 sm:mt-7 mt-5">
                            {props.secondHeadText}
                        </h4>
                        <p className="mt-2 text-zinc-600 xl:text-xl sm:text-lg text-md">
                            {props.secondDesText}
                        </p>
                    </div>

                    <div>
                        <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800 sm:mt-7 mt-5">
                            {props.thirdHeadText}
                        </h4>
                        <p className="mt-2 text-zinc-600 xl:text-xl sm:text-lg text-md">
                            {props.thirdDesText}
                        </p>
                    </div>

                    <div>
                        <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800 sm:mt-7 mt-5">
                            {props.fourHeadText}
                        </h4>
                        <p className="mt-2 text-zinc-600 xl:text-xl sm:text-lg text-md">
                            {props.fourDesText}
                        </p>
                    </div>

                    <div className="flex sm:flex-row flex-col sm:items-center items-start sm:space-x-3 sm:space-y-0 space-y-2 mt-7">
                        <span className="text-zinc-800 font-semibold text-lg">
                            {props.lastLeftText}
                        </span>
                        <button className="underline text-sky-900 font-semibold text-lg" onClick={() => router.push(props.lastRightBtn.link)}>
                            {props.lastRightBtn.text}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuestionAsk;