import Link from "next/link"
import { useRef, useState } from "react"

const Skills = () => {

    // ================= hoooks call ====================
    const slider = useRef();
    const [linkI, useLinkI] = useState(true);
    const [linkII, useLinkII] = useState(false);
    const [linkIII, useLinkIII] = useState(false);

    // ================== List Function =======================
    const HandleLinkI = () => {
        useLinkI(true);
        (linkII === true) ? useLinkII(false) : null;
        (linkIII === true) ? useLinkIII(false) : null;
    }

    const HandleLinkII = () => {
        useLinkII(true);
        (linkI === true) ? useLinkI(false) : null;
        (linkIII === true) ? useLinkIII(false) : null;
    }

    const HandleLinkIII = () => {
        useLinkIII(true);
        (linkI === true) ? useLinkI(false) : null;
        (linkII === true) ? useLinkII(false) : null;
    }

    // =========================== scroll Function =======================
    const ScrollCen = () => {
        if (slider.current.scrollLeft == 0) {
            slider.current.scrollLeft += 50
        } else if (slider.current.scrollLeft > 50) {
            slider.current.scrollLeft -= 50
        }
    }

    const ListI = {
        left: [
            { id: 1, name: "Data Entry Spacilists", link: "#", },
            { id: 2, name: "Video Editor", link: "#", },
            { id: 3, name: "Data Analyst", link: "#" },
            { id: 4, name: "Sopify Developer", link: "#" },
            { id: 5, name: "Ruby Developer", link: "#" },
            { id: 6, name: "Android Developer", link: "#" },
            { id: 7, name: "Bookkeeper", link: "#" },
            { id: 8, name: "Content Writer", link: "#" },
            { id: 9, name: "Copy Writer", link: "#" },
            { id: 10, name: "Database Administrator", link: "#" },
            { id: 11, name: "Data Scientist", link: "#" },
            { id: 12, name: "Front-End Developer", link: "/" },
            { id: 13, name: "Game Developer", link: "#" },
            { id: 14, name: "Graphic Designer", link: "#" },
            { id: 15, name: "i0S Developer", link: "#" },
            { id: 16, name: "Java Developer", link: "#" },
        ],

        right: [
            { id: 1, name: "Javascript Develper", link: "#" },
            { id: 2, name: "Logo Designer", link: "#" },
            { id: 3, name: "Mobile App Devoper", link: "#" },
            { id: 4, name: "PHP Developer", link: "#" },
            { id: 5, name: "Resume Writter", link: "#" },
            { id: 6, name: "SEO Expert", link: "#" },
            { id: 7, name: "Social Media Manager", link: "#" },
            { id: 8, name: "Software Developer", link: "#" },
            { id: 9, name: "Software Engineer", link: "#" },
            { id: 10, name: "UI Designer", link: "#" },
            { id: 11, name: "UX Designer", link: "#" },
            { id: 12, name: "Virtual Assistant", link: "#" },
            { id: 13, name: "Technical Writter", link: "#" },
            { id: 14, name: "Web Designer", link: "#" },
            { id: 15, name: "Wordpress Developer", link: "#" },
            { id: 16, name: "Python Developer", link: "#" },
        ]
    }

    const ListII = {
        left: [
            { id: 1, name: "Blogchain", link: "#", },
            { id: 2, name: "Go Development", link: "#", },
            { id: 3, name: "Node.js", link: "#" },
            { id: 4, name: "Vue js", link: "#" },
            { id: 5, name: "Microsoft Power BI", link: "#" },
            { id: 6, name: "Instructional Design", link: "#" },
            { id: 7, name: "React.js", link: "#" },
            { id: 8, name: "VideoGrapher", link: "#" },
            { id: 9, name: "GhostWritter", link: "#" },
            { id: 10, name: "Unity 3D Developers", link: "#" },
            { id: 11, name: "Business Consultants", link: "#" },
            { id: 12, name: "Coders", link: "#" },
            { id: 13, name: "Marketing Consultants", link: "#" },
            { id: 14, name: "Web Developers", link: "#" },
        ],

        right: [
            { id: 1, name: "Illustrators", link: "#" },
            { id: 2, name: "Google AdWords Experts", link: "#" },
            { id: 3, name: "Digital Marketers", link: "#" },
            { id: 4, name: "Project Manager", link: "#" },
            { id: 5, name: "Arduino Programmer", link: "#" },
            { id: 6, name: "Ruby Developers", link: "#" },
            { id: 7, name: "Email Marketing Consultants", link: "#" },
            { id: 8, name: "React Native Developers", link: "#" },
            { id: 9, name: "Swift Developers", link: "#" },
            { id: 10, name: "Google Sketchup Freelancer", link: "#" },
            { id: 11, name: "Back End Develooper", link: "#" },
            { id: 12, name: "Smartsheet Freelancer", link: "#" },
            { id: 13, name: "Zoom Video Confarance", link: "#" },
        ]
    }

    const ListIII = {
        left: [
            { id: 1, name: "Resume Writing Service", link: "#", },
            { id: 2, name: "SEO Service", link: "#", },
            { id: 3, name: "Translation Service", link: "#" },
            { id: 4, name: "Transcription Service", link: "#" },
            { id: 5, name: "Virtual Assistance Service", link: "#" },
            { id: 6, name: "Email Marketing Service", link: "#" },
            { id: 7, name: "Web Design Service", link: "#" },
            { id: 8, name: "Profreading Service", link: "#" },
            { id: 9, name: "Business Consulting Service", link: "#" },
            { id: 10, name: "Logo Design Service", link: "#" },
            { id: 11, name: "Breanding Service", link: "#" },
            { id: 12, name: "Social Media Managment", link: "#" },
            { id: 13, name: "Video Editing", link: "#" },
            { id: 14, name: "Lead Generation Service", link: "#" },
        ],

        right: [
            { id: 1, name: "Survey Service", link: "#" },
            { id: 2, name: "Landspcape Design service", link: "#" },
            { id: 3, name: "Photoshop Service", link: "#" },
            { id: 4, name: "Mobile Development", link: "#" },
            { id: 5, name: "Data Entry Service", link: "#" },
            { id: 6, name: "Buliding Information", link: "#" },
            { id: 7, name: "Podcast Editing Service", link: "#" },
            { id: 8, name: "Wellness Service", link: "#" },
            { id: 9, name: "HR Consulting Service", link: "#" },
            { id: 10, name: "Video Marketing Service", link: "#" },
            { id: 11, name: "Influencer Marketing Service", link: "#" },
            { id: 12, name: "Public Relations Service", link: "#" },
            { id: 13, name: "QA Service", link: "#" },
        ]
    }

    return (
        <div className="flex md:flex-row flex-col my-7 md:items-start items-center md:space-y-0 space-y-7 2xl:justify-around justify-between">
            <ul className="flex md:flex-col flex-row md:items-start items-center space-x-5 md:space-x-0 md:space-y-6 space-y-0 sm:w-auto sm:h-auto w-full h-full sm:overflow-hidden overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide" ref={slider}>
                <li 
                    className={`font-semibold xl:text-4xl lg:text-3xl text-2xl ${(linkI === true) ? "text-[#0C4A6E]" : "text-gray-300"}`}
                    onClick={() => slider.current.scrollLeft -= 100}
                >
                   <span className="cursor-pointer" onClick={HandleLinkI}>
                        Top skills
                   </span>
                </li>
                <li
                    className={`font-semibold xl:text-4xl lg:text-3xl text-2xl ${(linkII === true) ? "text-[#0C4A6E]" : "text-gray-300"}`} 
                    onClick={ScrollCen}
                >
                    <span className="cursor-pointer" onClick={HandleLinkII}>
                        Treading Skills
                    </span>
                </li>
                <li
                    className={`font-semibold xl:text-4xl lg:text-3xl text-2xl ${(linkIII === true) ? "text-[#0C4A6E]" : "text-gray-300"}`} 
                    onClick={() => slider.current.scrollLeft += 100}
                >
                    <span className="cursor-pointer" onClick={HandleLinkIII}>
                        Project Catlog
                    </span>
                </li>
            </ul>

            <div className="flex sm:flex-row flex-col lg:space-x-24 sm:space-x-10 sm:space-y-0 space-y-5">
                {linkI && <ul className="flex flex-col space-y-3">
                    {ListI.left.map((curVal) => (
                        <li
                            className="font-semibold xl:text-2xl lg:text-xl text-md text-zinc-500 hover:text-cyan-700 hidde"
                            key={curVal.id}
                        >
                        <Link href={curVal.link}>
                            {curVal.name}
                        </Link>
                    </li>
                    ))}
                </ul>}
                {linkI && <ul className="flex flex-col space-y-3">
                    {ListI.right.map((curVal) => (
                        <li
                            className="font-semibold xl:text-2xl lg:text-xl text-md text-zinc-500 hover:text-cyan-700"
                            key={curVal.id}
                        >
                        <Link href={curVal.link}>
                            {curVal.name}
                        </Link>
                    </li>
                    ))}
                </ul>}

                {linkII && <ul className="flex flex-col space-y-3">
                    {ListII.left.map((curVal) => (
                        <li
                            className="font-semibold xl:text-2xl lg:text-xl text-md text-zinc-500 hover:text-cyan-700"
                            key={curVal.id}
                        >
                        <Link href={curVal.link}>
                            {curVal.name}
                        </Link>
                    </li>
                    ))}
                </ul>}
               {linkII && <ul className="flex flex-col space-y-3">
                    {ListII.right.map((curVal) => (
                        <li
                            className="font-semibold xl:text-2xl lg:text-xl text-md text-zinc-500 hover:text-cyan-700"
                            key={curVal.id}
                        >
                        <Link href={curVal.link}>
                            {curVal.name}
                        </Link>
                    </li>
                    ))}
                </ul>}

                {linkIII && <ul className="flex flex-col space-y-3">
                    {ListIII.left.map((curVal) => (
                        <li
                            className="font-semibold xl:text-2xl lg:text-xl text-md text-zinc-500 hover:text-cyan-700"
                            key={curVal.id}
                        >
                        <Link href={curVal.link}>
                            {curVal.name}
                        </Link>
                    </li>
                    ))}
                </ul>}
                {linkIII && <ul className="flex flex-col space-y-3">
                    {ListIII.right.map((curVal) => (
                        <li
                            className="font-semibold xl:text-2xl lg:text-xl text-md text-zinc-500 hover:text-cyan-700"
                            key={curVal.id}
                        >
                        <Link href={curVal.link}>
                            {curVal.name}
                        </Link>
                    </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}

export default Skills;