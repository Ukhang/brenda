import HeadTag from "../components/HeadTag";
import { FcEnteringHeavenAlive } from "react-icons/fc";

const Custom404 = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">

            {/* ============== Head Tag =============== */}
            <HeadTag title="404 - page not found"/>

            <div className="flex flex-col space-y-3 items-center">
                <FcEnteringHeavenAlive className="sm:text-9xl text-7xl"/>

                <div className="flex flex-col items-center space-y-3">
                    <h2 className="text-zinc-800 font-bold sm:text-6xl text-4xl">
                        404
                    </h2>
                    <p className="text-zinc-700 font-semibold sm:text-2xl text-lg">
                        Page Not Found!
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Custom404;