import HeadTag from "../components/HeadTag";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/dist/client/image";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const About = () => {

    {/* ============== Hooks Call =============== */}
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="About us | Brenda"/>

            {/* ================= Header ================= */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* ================= First Section ================ */}
                <section className="container mx-auto lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="sm:my-12 max-w-2xl mx-auto">
                        <div>
                            <h2 className="text-[#0C4A6E] font-semibold text-5xl">
                                About us
                            </h2>
                            <p className="mt-1.5 text-zinc-800 font-semibold text-2xl">
                                The worl'd work marketplace
                            </p>

                            <div className="flex sm:flex-row flex-col sm:space-x-5 sm:items-center mt-7 sm:space-y-0 space-y-1">
                                <div>
                                    <Image
                                        src="/images/ceo-image.png"
                                        width={100}
                                        height={100}
                                        alt="ceo-image"
                                        className="rounded-full"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-zinc-800 font-semibold text-2xl">
                                        Michel Petarson
                                    </h2>
                                    <p className="text-zinc-700 font-semibold text-lg">
                                        President & CEO
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4 mt-5">
                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    Upwork began over two decades ago by pioneering a better way of working, helping businesses find more flexibility and connecting talent with more opportunities.
                                </p>

                                <h4 className="text-[#0C4A6E] font-semibold text-[21px]">
                                    Our mission to create economic opportunities so people have better lives has taken us so much further. As a result, we’ve become the world’s work marketplace where every day businesses of all sizes and independent talent from around the globe meet here to accomplish incredible things.
                                </h4>

                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    Like for so many, Upwork has had a big impact on my life. I first came to this company on the product team and over the years have understood what makes this platform really work: the relationships.
                                </p>

                                <p className="text-zinc-800 font-semibold text-lg">
                                    We see what you do
                                </p>

                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    I have personally seen the passion and commitment that every user puts into their work here. Whether it’s a quick powerpoint presentation or a multi-year development project - both talent on Upwork and our clients care about doing really good work because they love what they do. 
                                </p>

                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    In fact, we designed it that way. Our work marketplace aligns the goals of our clients with the goals of talent on Upwork so that outcomes are better and everyone grows in the same direction. You’ll find tools to develop your skills, evolve your business, and gain the control and freedom you need for success. 
                                </p>

                                <p className="text-zinc-800 font-semibold text-lg">
                                    Upwork is your workforce
                                </p>

                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    If you’re a client that’s come here to get things done, use this workforce of independent  talent to build faster and transform your business. If you’re independent talent that’s come here to realize your potential, know that you are a valuable and instrumental part of someone’s team.
                                </p>

                                <p className="text-zinc-800 font-semibold text-lg">
                                    We make work more rewarding 
                                </p>

                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    We see your vision, and everything we do is an effort to help you make the connections that will turn that vision into reality, by building your Virtual Talent Bench of trusted people.  
                                </p>

                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    The impact is both economic and personal, in the everyday and in the long run. When you find the right people, you stop working to get by and start working strategically.   
                                </p>

                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    That is when real opportunity emerges.
                                </p>

                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    I can say with confidence that the Upwork team - the team that serves you the talent and you the client - is still driven by our mission to create economic opportunity for our people around the world. 
                                </p>

                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    You’re our people now, and we’re glad that you’re here. 
                                </p>

                                <p className="text-zinc-600 font-semibold text-[17px]">
                                    We can’t wait to see what you do.
                                </p>

                                {/* ============== sinsiyearly ceo =============== */}
                                <div className="flex space-x-2">
                                    <div className="text-zinc-600 font-semibold text-lg">
                                        -
                                    </div>

                                    <div>
                                        <h4 className="text-zinc-600 font-semibold text-lg">
                                            Michel Peterson
                                        </h4>
                                        <p className="text-zinc-600 font-semibold text-lg">
                                            President and CEO
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-7 space-y-8">
                                <h2 className="text-[#0C4A6E] font-semibold text-5xl">
                                    Start your journey
                                </h2>

                                <div className="flex space-x-5">
                                    <button className="py-2 px-5 font-semibold bg-gray-900 text-white rounded-full transition hover:bg-gray-800" onClick={() => router.push("#")}>
                                        Find Talent
                                    </button>
                                    <button className="py-2 px-5 font-semibold bg-gray-900 text-white rounded-full transition hover:bg-gray-800" onClick={() => router.push("#")}>
                                        Find Work
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ==================== Footer ====================== */}
            <Footer/>
        </div>
    )
}

export default About;