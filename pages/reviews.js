import HeadTag from "../components/HeadTag";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

const Reviews = () => {

    // =============== Hooks Call =================
    const router = useRouter();
    const [firstRevCon, useFirstRevCon] = useState(true);
    const [secondRevCon, usesecondRevCon] = useState(false);
    const [thirdRevCon, useThirdRevCon] = useState(false);
    const [fourRevCon, useFourRevCon] = useState(false);
    const [fiveRevCon, useFiveRevCon] = useState(false);
    const [sixRevCon, useSixRevCon] = useState(false);
    const [sevenRevCon, useSevenRevCon] = useState(false);
    const [eightRevCon, useEightRevCon] = useState(false);
    const [nineRevCon, useNineRevCon] = useState(false);

    const [hiriTal, useHireTal] = useState(true);
    const [fiWork, useFiwork] = useState(false);

    // =============== Function =================
    const RevListHandleOne = () => {
        useFirstRevCon(true);

        (secondRevCon == true) ? usesecondRevCon(false) : null;
        (thirdRevCon == true) ? useThirdRevCon(false) : null;
        (fourRevCon == true) ? useFourRevCon(false) : null;
        (fiveRevCon == true) ? useFiveRevCon(false) : null;
        (sixRevCon == true) ? useSixRevCon(false) : null;
        (sevenRevCon == true) ? useSevenRevCon(false) : null;
        (eightRevCon == true) ? useEightRevCon(false) : null;
        (nineRevCon == true) ? useNineRevCon(false) : null;
    }

    const RevListHandleTwo = () => {
        usesecondRevCon(true);

        (firstRevCon == true) ? useFirstRevCon(false) : null;
        (thirdRevCon == true) ? useThirdRevCon(false) : null;
        (fourRevCon == true) ? useFourRevCon(false) : null;
        (fiveRevCon == true) ? useFiveRevCon(false) : null;
        (sixRevCon == true) ? useSixRevCon(false) : null;
        (sevenRevCon == true) ? useSevenRevCon(false) : null;
        (eightRevCon == true) ? useEightRevCon(false) : null;
        (nineRevCon == true) ? useNineRevCon(false) : null;
    }

    const RevListHandleThree = () => {
        useThirdRevCon(true);

        (firstRevCon == true) ? useFirstRevCon(false) : null;
        (secondRevCon == true) ? usesecondRevCon(false) : null;
        (fourRevCon == true) ? useFourRevCon(false) : null;
        (fiveRevCon == true) ? useFiveRevCon(false) : null;
        (sixRevCon == true) ? useSixRevCon(false) : null;
        (sevenRevCon == true) ? useSevenRevCon(false) : null;
        (eightRevCon == true) ? useEightRevCon(false) : null;
        (nineRevCon == true) ? useNineRevCon(false) : null;
    }

    const RevListHandleFour = () => {
        useFourRevCon(true);

        (firstRevCon == true) ? useFirstRevCon(false) : null;
        (secondRevCon == true) ? usesecondRevCon(false) : null;
        (thirdRevCon == true) ? useThirdRevCon(false) : null;
        (fiveRevCon == true) ? useFiveRevCon(false) : null;
        (sixRevCon == true) ? useSixRevCon(false) : null;
        (sevenRevCon == true) ? useSevenRevCon(false) : null;
        (eightRevCon == true) ? useEightRevCon(false) : null;
        (nineRevCon == true) ? useNineRevCon(false) : null;
    }

    const RevListHandleFive = () => {
        useFiveRevCon(true);

        (firstRevCon == true) ? useFirstRevCon(false) : null;
        (secondRevCon == true) ? usesecondRevCon(false) : null;
        (thirdRevCon == true) ? useThirdRevCon(false) : null;
        (fourRevCon == true) ? useFourRevCon(false) : null;
        (sixRevCon == true) ? useSixRevCon(false) : null;
        (sevenRevCon == true) ? useSevenRevCon(false) : null;
        (eightRevCon == true) ? useEightRevCon(false) : null;
        (nineRevCon == true) ? useNineRevCon(false) : null;
    }

    const RevListHandleSix = () => {
        useSixRevCon(true);

        (firstRevCon == true) ? useFirstRevCon(false) : null;
        (secondRevCon == true) ? usesecondRevCon(false) : null;
        (thirdRevCon == true) ? useThirdRevCon(false) : null;
        (fourRevCon == true) ? useFourRevCon(false) : null;
        (fiveRevCon == true) ? useFiveRevCon(false) : null;
        (sevenRevCon == true) ? useSevenRevCon(false) : null;
        (eightRevCon == true) ? useEightRevCon(false) : null;
        (nineRevCon == true) ? useNineRevCon(false) : null;
    }

    const RevListHandleSeven = () => {
        useSevenRevCon(true);

        (firstRevCon == true) ? useFirstRevCon(false) : null;
        (secondRevCon == true) ? usesecondRevCon(false) : null;
        (thirdRevCon == true) ? useThirdRevCon(false) : null;
        (fourRevCon == true) ? useFourRevCon(false) : null;
        (fiveRevCon == true) ? useFiveRevCon(false) : null;
        (sixRevCon == true) ? useSixRevCon(false) : null;
        (eightRevCon == true) ? useEightRevCon(false) : null;
        (nineRevCon == true) ? useNineRevCon(false) : null;
    }

    const RevListHandleEight = () => {
        useEightRevCon(true);

        (firstRevCon == true) ? useFirstRevCon(false) : null;
        (secondRevCon == true) ? usesecondRevCon(false) : null;
        (thirdRevCon == true) ? useThirdRevCon(false) : null;
        (fourRevCon == true) ? useFourRevCon(false) : null;
        (fiveRevCon == true) ? useFiveRevCon(false) : null;
        (sixRevCon == true) ? useSixRevCon(false) : null;
        (sevenRevCon == true) ? useSevenRevCon(false) : null;
        (nineRevCon == true) ? useNineRevCon(false) : null;
    }

    const RevListHandleNine = () => {
        useNineRevCon(true);

        (firstRevCon == true) ? useFirstRevCon(false) : null;
        (secondRevCon == true) ? usesecondRevCon(false) : null;
        (thirdRevCon == true) ? useThirdRevCon(false) : null;
        (fourRevCon == true) ? useFourRevCon(false) : null;
        (fiveRevCon == true) ? useFiveRevCon(false) : null;
        (sixRevCon == true) ? useSixRevCon(false) : null;
        (sevenRevCon == true) ? useSevenRevCon(false) : null;
        (eightRevCon == true) ? useEightRevCon(false) : null;
    }

    // ================== All Review ================
    const AllReview = [
        {
            id: 1,
            headText: "Stephen and Amiya worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Stephen is a seasoned trademark attorney who is very clear in his approach. Swift, knowledgeable, to the point, sticks to the schedules and reliable when it comes to Trademark Office Action responses. Highly Recommended !",
            nameFirst: "Amiya D.",
            coutryFirst: "India",

            subHeadSesond: "Talent",
            desSecond: "Amiya was a great client. Clear deliverable and fast at responding. I look forward to working together in the future and I was happy to solve his problems.",
            nameSecond: "Stephen P.",
            countrySecond: "United States",
            
            category: "Legal"
        },

        {
            id: 2,
            headText: "Ashar and Luke worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Ashar listened to my ideas, and incorporated them well into the design, he worked hard to deliver a quality product",
            nameFirst: "Luke W.",
            coutryFirst: "South Africa",

            subHeadSesond: "Talent",
            desSecond: "It was really amazing to work with him, He is a highly understanding human being. Looking forward to future projects.",
            nameSecond: "Ashar S.",
            countrySecond: "India",
            
            category: "Engineering & Architecture"
        },

        {
            id: 3,
            headText: "Volodumur and Mohamed worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Great communication, great skills, project finished way ahead of schedule. I would be glad to work again with Volodumur.",
            nameFirst: "Mohamed D.",
            coutryFirst: "United Arab Emirates",

            subHeadSesond: "Talent",
            desSecond: "Mohamed good customer. It was easy and fast to work with him. Thanks!!!",
            nameSecond: "Volodumur B.",
            countrySecond: "Ukraine",
            
            category: "Engineering & Architecture"
        },

        {
            id: 4,
            headText: "Bilikisu and Nwosu worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Freelancer delivery is satisfactory, Job welldone !",
            nameFirst: "Nwosu G.",
            coutryFirst: "Nigeria",

            subHeadSesond: "Talent",
            desSecond: "It was a really wonderful experience working with him. Resources were made easily available and the job was done in a timely manner.",
            nameSecond: "Bilikisu B.",
            countrySecond: "Canada",
            
            category: "Admin & Customer Support"
        },

        {
            id: 5,
            headText: "Aleksandra found Daniel with Enterprise Suite",

            subHeadFirst: "client",
            desFirst: "Great experience. Would definitely work with Daniel again in the future!",
            nameFirst: "Aleksandra W.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I highly recommend this client! I have worked on different projects for them and it has always been a great experience. Hope to work again soon!",
            nameSecond: "Daniel R.",
            countrySecond: "Colombia",
            
            category: "Admin & Customer Support"
        },

        {
            id: 6,
            headText: "Himanshu bought Kevin's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Kevin, was very pleasant to work with. In addition he did excellent work. I recommend him highly",
            nameFirst: "Himanshu B.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I was very pleased to work with Himanshu on this project. The work went well, and he was available for questions and clarifications as needed. I look forward to working on further projects with him.",
            nameSecond: "Kevin G.",
            countrySecond: "United States",
            
            category: "Finance & Accounting"
        },

        {
            id: 7,
            headText: "Auj and Aafia worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Auj was super helpful, friendly, and answered all of my questions. I will definitely work with her again.",
            nameFirst: "Aafia K.",
            coutryFirst: "Pakistan",

            subHeadSesond: "Talent",
            desSecond: "Awesome client. Aafia was very cooperative and easy to work with.",
            nameSecond: "Auj A.",
            countrySecond: "Turkey",
            
            category: "Finance & Accounting"
        },
    ];

    // ================== Development & It Review ================
    const DevItReview = [
        {
            id: 1,
            headText: "Bojan and Brendan worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Excellent work by Bojan. He definitely knows his way around ClickFunnels and how to create eye-catching designs that should convert well.",
            nameFirst: "Brendan B.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "Brandan is a great customer, with accurate and precise directions, I was glad to work with you!",
            nameSecond: "Bojan D.",
            countrySecond: "Slovenia",
            
            category: "Development & It"
        },

        {
            id: 2,
            headText: "Maha and Jie Ying worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Maha is smart, efficient, and skilled. She provided feedback for my website and helped me to make improvements to it. She is also fast in responding to my comments. Will be happy to work with her again!",
            nameFirst: "Jie Ying Y.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "One of the best clients I worked with, I hope to work with her again.",
            nameSecond: "Maha S.",
            countrySecond: "Tunisia",
            
            category: "Development & It"
        },

        {
            id: 3,
            headText: "Ataime and Shawn worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Outstanding performance! Ataime made sure everything worked and even did revisions. highly recommended !",
            nameFirst: "Shawn T.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "Working with Shawn was very great. He set out clear expectations of the project which made the scraping project run smoothly. I would really love to work with Shawn again on other projects.",
            nameSecond: "Ataime O.",
            countrySecond: "Nigeria",
            
            category: "Development & IT"
        },

        {
            id: 4,
            headText: "Chirag and Fernando worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "I really like this seller, he was always responsive for what i wanted. I recommend him for any project you wish to take him. Super professional. Thanks!",
            nameFirst: "Fernando A.",
            coutryFirst: "Israel",

            subHeadSesond: "Talent",
            desSecond: "I enjoyed working on this project. Client was so friendly and communicated with me so humbly. I liked working with him and hope to have the opportunity to work with him again. Thanks :)",
            nameSecond: "Bilikisu B.",
            countrySecond: "Canada",
            
            category: "Development & It"
        },

        {
            id: 5,
            headText: "Aleksandra found Daniel with Enterprise Suite",

            subHeadFirst: "client",
            desFirst: "Great experience. Would definitely work with Daniel again in the future!",
            nameFirst: "Aleksandra W.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I highly recommend this client! I have worked on different projects for them and it has always been a great experience. Hope to work again soon!",
            nameSecond: "Daniel R.",
            countrySecond: "Colombia",
            
            category: "Development & It"
        },

        {
            id: 6,
            headText: "Himanshu bought Kevin's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Kevin, was very pleasant to work with. In addition he did excellent work. I recommend him highly",
            nameFirst: "Himanshu B.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I was very pleased to work with Himanshu on this project. The work went well, and he was available for questions and clarifications as needed. I look forward to working on further projects with him.",
            nameSecond: "Kevin G.",
            countrySecond: "United States",
            
            category: "Development & It"
        }
    ];

    // ================== Design & Creative Review ================
    const DesCreReview = [
        {
            id: 1,
            headText: "Sasi bought Freddie's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Freddie was awesome and quick to complete the job. He delivered what I need without explaining much. A great job is done and we will work again soon.",
            nameFirst: "Sasi D.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "Working with Sasi was a breeze. He sent a clear image to be replicated. Made a clear instruction for revision. I made the adjustments then we're done! Looking forward to working with you again!",
            nameSecond: "Freddie Ray C.",
            countrySecond: "philippines",
            
            category: "Design & Creative"
        },

        {
            id: 2,
            headText: "David bought Iana's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "You have understood my requirements fully well. Delivered quality work without having to rework. You got it right on the very first presentation. Great job.",
            nameFirst: "David Q.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "Interesting task, excellent cooperation, effective communication, prompt payment. Thank you a lot, David!",
            nameSecond: "Iana C.",
            countrySecond: "Moldova",
            
            category: "Design & Creative"
        },

        {
            id: 3,
            headText: "Basma and Lada worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "It was an absolute pleasure working with Basma on this VO project of mine!",
            nameFirst: "Lada K.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "It was a pleasure to work with Lada for this project! I received very clear guidelines, scripts and feedback. I would definitely work with her again. Thank you, Lada!",
            nameSecond: "Basma J.",
            countrySecond: "Sweden",
            
            category: "Design & Creative"
        },

        {
            id: 4,
            headText: "Chirag and Fernando worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "I really like this seller, he was always responsive for what i wanted. I recommend him for any project you wish to take him. Super professional. Thanks!",
            nameFirst: "Fernando A.",
            coutryFirst: "Israel",

            subHeadSesond: "Talent",
            desSecond: "I enjoyed working on this project. Client was so friendly and communicated with me so humbly. I liked working with him and hope to have the opportunity to work with him again. Thanks :)",
            nameSecond: "Bilikisu B.",
            countrySecond: "Canada",
            
            category: "Desgin & Creative"
        },

        {
            id: 5,
            headText: "Aleksandra found Daniel with Enterprise Suite",

            subHeadFirst: "client",
            desFirst: "Great experience. Would definitely work with Daniel again in the future!",
            nameFirst: "Aleksandra W.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I highly recommend this client! I have worked on different projects for them and it has always been a great experience. Hope to work again soon!",
            nameSecond: "Daniel R.",
            countrySecond: "Colombia",
            
            category: "Design & Creative"
        },

        {
            id: 6,
            headText: "Himanshu bought Kevin's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Kevin, was very pleasant to work with. In addition he did excellent work. I recommend him highly",
            nameFirst: "Himanshu B.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I was very pleased to work with Himanshu on this project. The work went well, and he was available for questions and clarifications as needed. I look forward to working on further projects with him.",
            nameSecond: "Kevin G.",
            countrySecond: "United States",
            
            category: "Design & Creative"
        }
    ];

    // ================== Sales & marketing Review ================
    const SalMkReview = [
        {
            id: 1,
            headText: "Stephen and Amiya worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Stephen is a seasoned trademark attorney who is very clear in his approach. Swift, knowledgeable, to the point, sticks to the schedules and reliable when it comes to Trademark Office Action responses. Highly Recommended !",
            nameFirst: "Amiya D.",
            coutryFirst: "India",

            subHeadSesond: "Talent",
            desSecond: "Amiya was a great client. Clear deliverable and fast at responding. I look forward to working together in the future and I was happy to solve his problems.",
            nameSecond: "Stephen P.",
            countrySecond: "United States",
            
            category: "Sales & Marketing"
        },

        {
            id: 2,
            headText: "Ashar and Luke worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Ashar listened to my ideas, and incorporated them well into the design, he worked hard to deliver a quality product",
            nameFirst: "Luke W.",
            coutryFirst: "South Africa",

            subHeadSesond: "Talent",
            desSecond: "It was really amazing to work with him, He is a highly understanding human being. Looking forward to future projects.",
            nameSecond: "Ashar S.",
            countrySecond: "India",
            
            category: "Sales & Marketing"
        },

        {
            id: 3,
            headText: "Volodumur and Mohamed worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Great communication, great skills, project finished way ahead of schedule. I would be glad to work again with Volodumur.",
            nameFirst: "Mohamed D.",
            coutryFirst: "United Arab Emirates",

            subHeadSesond: "Talent",
            desSecond: "Mohamed good customer. It was easy and fast to work with him. Thanks!!!",
            nameSecond: "Volodumur B.",
            countrySecond: "Ukraine",
            
            category: "Sales & Marketing"
        },

        {
            id: 4,
            headText: "Bilikisu and Nwosu worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Freelancer delivery is satisfactory, Job welldone !",
            nameFirst: "Nwosu G.",
            coutryFirst: "Nigeria",

            subHeadSesond: "Talent",
            desSecond: "It was a really wonderful experience working with him. Resources were made easily available and the job was done in a timely manner.",
            nameSecond: "Bilikisu B.",
            countrySecond: "Canada",
            
            category: "Sales & Marketing"
        },

        {
            id: 5,
            headText: "Aleksandra found Daniel with Enterprise Suite",

            subHeadFirst: "client",
            desFirst: "Great experience. Would definitely work with Daniel again in the future!",
            nameFirst: "Aleksandra W.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I highly recommend this client! I have worked on different projects for them and it has always been a great experience. Hope to work again soon!",
            nameSecond: "Daniel R.",
            countrySecond: "Colombia",
            
            category: "Sales & Marketing"
        },

        {
            id: 6,
            headText: "Himanshu bought Kevin's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Kevin, was very pleasant to work with. In addition he did excellent work. I recommend him highly",
            nameFirst: "Himanshu B.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I was very pleased to work with Himanshu on this project. The work went well, and he was available for questions and clarifications as needed. I look forward to working on further projects with him.",
            nameSecond: "Kevin G.",
            countrySecond: "United States",
            
            category: "Sales & Marketing"
        },

        {
            id: 7,
            headText: "Auj and Aafia worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Auj was super helpful, friendly, and answered all of my questions. I will definitely work with her again.",
            nameFirst: "Aafia K.",
            coutryFirst: "Pakistan",

            subHeadSesond: "Talent",
            desSecond: "Awesome client. Aafia was very cooperative and easy to work with.",
            nameSecond: "Auj A.",
            countrySecond: "Turkey",
            
            category: "Sales & Marketing"
        },
    ];

    // ================== Writing & Translation Review ================
    const WriTrReview = [
        {
            id: 1,
            headText: "Bojan and Brendan worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Excellent work by Bojan. He definitely knows his way around ClickFunnels and how to create eye-catching designs that should convert well.",
            nameFirst: "Brendan B.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "Brandan is a great customer, with accurate and precise directions, I was glad to work with you!",
            nameSecond: "Bojan D.",
            countrySecond: "Slovenia",
            
            category: "Writing & Translation"
        },

        {
            id: 2,
            headText: "Maha and Jie Ying worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Maha is smart, efficient, and skilled. She provided feedback for my website and helped me to make improvements to it. She is also fast in responding to my comments. Will be happy to work with her again!",
            nameFirst: "Jie Ying Y.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "One of the best clients I worked with, I hope to work with her again.",
            nameSecond: "Maha S.",
            countrySecond: "Tunisia",
            
            category: "Writing & Translation"
        },

        {
            id: 3,
            headText: "Ataime and Shawn worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Outstanding performance! Ataime made sure everything worked and even did revisions. highly recommended !",
            nameFirst: "Shawn T.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "Working with Shawn was very great. He set out clear expectations of the project which made the scraping project run smoothly. I would really love to work with Shawn again on other projects.",
            nameSecond: "Ataime O.",
            countrySecond: "Nigeria",
            
            category: "Writing & Translation"
        },

        {
            id: 4,
            headText: "Chirag and Fernando worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "I really like this seller, he was always responsive for what i wanted. I recommend him for any project you wish to take him. Super professional. Thanks!",
            nameFirst: "Fernando A.",
            coutryFirst: "Israel",

            subHeadSesond: "Talent",
            desSecond: "I enjoyed working on this project. Client was so friendly and communicated with me so humbly. I liked working with him and hope to have the opportunity to work with him again. Thanks :)",
            nameSecond: "Bilikisu B.",
            countrySecond: "Canada",
            
            category: "Development & It"
        },

        {
            id: 5,
            headText: "Aleksandra found Daniel with Enterprise Suite",

            subHeadFirst: "client",
            desFirst: "Great experience. Would definitely work with Daniel again in the future!",
            nameFirst: "Aleksandra W.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I highly recommend this client! I have worked on different projects for them and it has always been a great experience. Hope to work again soon!",
            nameSecond: "Daniel R.",
            countrySecond: "Colombia",
            
            category: "Writing & Translation"
        },

        {
            id: 6,
            headText: "Himanshu bought Kevin's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Kevin, was very pleasant to work with. In addition he did excellent work. I recommend him highly",
            nameFirst: "Himanshu B.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I was very pleased to work with Himanshu on this project. The work went well, and he was available for questions and clarifications as needed. I look forward to working on further projects with him.",
            nameSecond: "Kevin G.",
            countrySecond: "United States",
            
            category: "Writing & Translation"
        }
    ];

    // ================== Admin & Custom Review ================
    const AdCuReview = [
        {
            id: 1,
            headText: "Sasi bought Freddie's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Freddie was awesome and quick to complete the job. He delivered what I need without explaining much. A great job is done and we will work again soon.",
            nameFirst: "Sasi D.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "Working with Sasi was a breeze. He sent a clear image to be replicated. Made a clear instruction for revision. I made the adjustments then we're done! Looking forward to working with you again!",
            nameSecond: "Freddie Ray C.",
            countrySecond: "philippines",
            
            category: "Admin & Custom Support"
        },

        {
            id: 2,
            headText: "David bought Iana's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "You have understood my requirements fully well. Delivered quality work without having to rework. You got it right on the very first presentation. Great job.",
            nameFirst: "David Q.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "Interesting task, excellent cooperation, effective communication, prompt payment. Thank you a lot, David!",
            nameSecond: "Iana C.",
            countrySecond: "Moldova",
            
            category: "Admin & Custom Support"
        },

        {
            id: 3,
            headText: "Basma and Lada worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "It was an absolute pleasure working with Basma on this VO project of mine!",
            nameFirst: "Lada K.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "It was a pleasure to work with Lada for this project! I received very clear guidelines, scripts and feedback. I would definitely work with her again. Thank you, Lada!",
            nameSecond: "Basma J.",
            countrySecond: "Sweden",
            
            category: "Admin & Custom Support"
        },

        {
            id: 4,
            headText: "Chirag and Fernando worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "I really like this seller, he was always responsive for what i wanted. I recommend him for any project you wish to take him. Super professional. Thanks!",
            nameFirst: "Fernando A.",
            coutryFirst: "Israel",

            subHeadSesond: "Talent",
            desSecond: "I enjoyed working on this project. Client was so friendly and communicated with me so humbly. I liked working with him and hope to have the opportunity to work with him again. Thanks :)",
            nameSecond: "Bilikisu B.",
            countrySecond: "Canada",
            
            category: "Admin & Custom Support"
        },

        {
            id: 5,
            headText: "Aleksandra found Daniel with Enterprise Suite",

            subHeadFirst: "client",
            desFirst: "Great experience. Would definitely work with Daniel again in the future!",
            nameFirst: "Aleksandra W.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I highly recommend this client! I have worked on different projects for them and it has always been a great experience. Hope to work again soon!",
            nameSecond: "Daniel R.",
            countrySecond: "Colombia",
            
            category: "Admin & Custom Support"
        },

        {
            id: 6,
            headText: "Himanshu bought Kevin's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Kevin, was very pleasant to work with. In addition he did excellent work. I recommend him highly",
            nameFirst: "Himanshu B.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I was very pleased to work with Himanshu on this project. The work went well, and he was available for questions and clarifications as needed. I look forward to working on further projects with him.",
            nameSecond: "Kevin G.",
            countrySecond: "United States",
            
            category: "Admin & Custom Support"
        }
    ];

    // ================== Finance & Accounting Review ================
    const FinAcReview = [
        {
            id: 1,
            headText: "Bojan and Brendan worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Excellent work by Bojan. He definitely knows his way around ClickFunnels and how to create eye-catching designs that should convert well.",
            nameFirst: "Brendan B.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "Brandan is a great customer, with accurate and precise directions, I was glad to work with you!",
            nameSecond: "Bojan D.",
            countrySecond: "Slovenia",
            
            category: "Finance & Accounting"
        },

        {
            id: 2,
            headText: "Maha and Jie Ying worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Maha is smart, efficient, and skilled. She provided feedback for my website and helped me to make improvements to it. She is also fast in responding to my comments. Will be happy to work with her again!",
            nameFirst: "Jie Ying Y.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "One of the best clients I worked with, I hope to work with her again.",
            nameSecond: "Maha S.",
            countrySecond: "Tunisia",
            
            category: "Finance & Accounting"
        },

        {
            id: 3,
            headText: "Ataime and Shawn worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Outstanding performance! Ataime made sure everything worked and even did revisions. highly recommended !",
            nameFirst: "Shawn T.",
            coutryFirst: "Singapore",

            subHeadSesond: "Talent",
            desSecond: "Working with Shawn was very great. He set out clear expectations of the project which made the scraping project run smoothly. I would really love to work with Shawn again on other projects.",
            nameSecond: "Ataime O.",
            countrySecond: "Nigeria",
            
            category: "Finance & Accounting"
        },

        {
            id: 4,
            headText: "Chirag and Fernando worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "I really like this seller, he was always responsive for what i wanted. I recommend him for any project you wish to take him. Super professional. Thanks!",
            nameFirst: "Fernando A.",
            coutryFirst: "Israel",

            subHeadSesond: "Talent",
            desSecond: "I enjoyed working on this project. Client was so friendly and communicated with me so humbly. I liked working with him and hope to have the opportunity to work with him again. Thanks :)",
            nameSecond: "Bilikisu B.",
            countrySecond: "Canada",
            
            category: "Finance & Accounting"
        },

        {
            id: 5,
            headText: "Aleksandra found Daniel with Enterprise Suite",

            subHeadFirst: "client",
            desFirst: "Great experience. Would definitely work with Daniel again in the future!",
            nameFirst: "Aleksandra W.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I highly recommend this client! I have worked on different projects for them and it has always been a great experience. Hope to work again soon!",
            nameSecond: "Daniel R.",
            countrySecond: "Colombia",
            
            category: "Finance & Accounting"
        },

        {
            id: 6,
            headText: "Himanshu bought Kevin's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Kevin, was very pleasant to work with. In addition he did excellent work. I recommend him highly",
            nameFirst: "Himanshu B.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I was very pleased to work with Himanshu on this project. The work went well, and he was available for questions and clarifications as needed. I look forward to working on further projects with him.",
            nameSecond: "Kevin G.",
            countrySecond: "United States",
            
            category: "Finance & Accounting"
        }
    ];

    // ================== Engineer & Architecture Review ================
    const EngArchReview = [
        {
            id: 1,
            headText: "Stephen and Amiya worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Stephen is a seasoned trademark attorney who is very clear in his approach. Swift, knowledgeable, to the point, sticks to the schedules and reliable when it comes to Trademark Office Action responses. Highly Recommended !",
            nameFirst: "Amiya D.",
            coutryFirst: "India",

            subHeadSesond: "Talent",
            desSecond: "Amiya was a great client. Clear deliverable and fast at responding. I look forward to working together in the future and I was happy to solve his problems.",
            nameSecond: "Stephen P.",
            countrySecond: "United States",
            
            category: "Engineering & Architecture"
        },

        {
            id: 2,
            headText: "Ashar and Luke worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Ashar listened to my ideas, and incorporated them well into the design, he worked hard to deliver a quality product",
            nameFirst: "Luke W.",
            coutryFirst: "South Africa",

            subHeadSesond: "Talent",
            desSecond: "It was really amazing to work with him, He is a highly understanding human being. Looking forward to future projects.",
            nameSecond: "Ashar S.",
            countrySecond: "India",
            
            category: "Engineering & Architecture"
        },

        {
            id: 3,
            headText: "Volodumur and Mohamed worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Great communication, great skills, project finished way ahead of schedule. I would be glad to work again with Volodumur.",
            nameFirst: "Mohamed D.",
            coutryFirst: "United Arab Emirates",

            subHeadSesond: "Talent",
            desSecond: "Mohamed good customer. It was easy and fast to work with him. Thanks!!!",
            nameSecond: "Volodumur B.",
            countrySecond: "Ukraine",
            
            category: "Engineering & Architecture"
        },

        {
            id: 4,
            headText: "Bilikisu and Nwosu worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Freelancer delivery is satisfactory, Job welldone !",
            nameFirst: "Nwosu G.",
            coutryFirst: "Nigeria",

            subHeadSesond: "Talent",
            desSecond: "It was a really wonderful experience working with him. Resources were made easily available and the job was done in a timely manner.",
            nameSecond: "Bilikisu B.",
            countrySecond: "Canada",
            
            category: "Engineering & Architecture"
        },

        {
            id: 5,
            headText: "Aleksandra found Daniel with Enterprise Suite",

            subHeadFirst: "client",
            desFirst: "Great experience. Would definitely work with Daniel again in the future!",
            nameFirst: "Aleksandra W.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I highly recommend this client! I have worked on different projects for them and it has always been a great experience. Hope to work again soon!",
            nameSecond: "Daniel R.",
            countrySecond: "Colombia",
            
            category: "Engineering & Architecture"
        },

        {
            id: 6,
            headText: "Himanshu bought Kevin's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Kevin, was very pleasant to work with. In addition he did excellent work. I recommend him highly",
            nameFirst: "Himanshu B.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I was very pleased to work with Himanshu on this project. The work went well, and he was available for questions and clarifications as needed. I look forward to working on further projects with him.",
            nameSecond: "Kevin G.",
            countrySecond: "United States",
            
            category: "Engineering & Architecture"
        },

        {
            id: 7,
            headText: "Auj and Aafia worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Auj was super helpful, friendly, and answered all of my questions. I will definitely work with her again.",
            nameFirst: "Aafia K.",
            coutryFirst: "Pakistan",

            subHeadSesond: "Talent",
            desSecond: "Awesome client. Aafia was very cooperative and easy to work with.",
            nameSecond: "Auj A.",
            countrySecond: "Turkey",
            
            category: "Engineering & Architecture"
        },
    ];

    // ================== Legal Review ================
    const LegalReview = [
        {
            id: 1,
            headText: "Stephen and Amiya worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Stephen is a seasoned trademark attorney who is very clear in his approach. Swift, knowledgeable, to the point, sticks to the schedules and reliable when it comes to Trademark Office Action responses. Highly Recommended !",
            nameFirst: "Amiya D.",
            coutryFirst: "India",

            subHeadSesond: "Talent",
            desSecond: "Amiya was a great client. Clear deliverable and fast at responding. I look forward to working together in the future and I was happy to solve his problems.",
            nameSecond: "Stephen P.",
            countrySecond: "United States",
            
            category: "Legal"
        },

        {
            id: 2,
            headText: "Ashar and Luke worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Ashar listened to my ideas, and incorporated them well into the design, he worked hard to deliver a quality product",
            nameFirst: "Luke W.",
            coutryFirst: "Legal",

            subHeadSesond: "Talent",
            desSecond: "It was really amazing to work with him, He is a highly understanding human being. Looking forward to future projects.",
            nameSecond: "Ashar S.",
            countrySecond: "India",
            
            category: "Engineering & Architecture"
        },

        {
            id: 3,
            headText: "Volodumur and Mohamed worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Great communication, great skills, project finished way ahead of schedule. I would be glad to work again with Volodumur.",
            nameFirst: "Mohamed D.",
            coutryFirst: "United Arab Emirates",

            subHeadSesond: "Talent",
            desSecond: "Mohamed good customer. It was easy and fast to work with him. Thanks!!!",
            nameSecond: "Volodumur B.",
            countrySecond: "Ukraine",
            
            category: "Legal"
        },

        {
            id: 4,
            headText: "Bilikisu and Nwosu worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Freelancer delivery is satisfactory, Job welldone !",
            nameFirst: "Nwosu G.",
            coutryFirst: "Nigeria",

            subHeadSesond: "Talent",
            desSecond: "It was a really wonderful experience working with him. Resources were made easily available and the job was done in a timely manner.",
            nameSecond: "Bilikisu B.",
            countrySecond: "Canada",
            
            category: "Legal"
        },

        {
            id: 5,
            headText: "Aleksandra found Daniel with Enterprise Suite",

            subHeadFirst: "client",
            desFirst: "Great experience. Would definitely work with Daniel again in the future!",
            nameFirst: "Aleksandra W.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I highly recommend this client! I have worked on different projects for them and it has always been a great experience. Hope to work again soon!",
            nameSecond: "Daniel R.",
            countrySecond: "Colombia",
            
            category: "Legal"
        },

        {
            id: 6,
            headText: "Himanshu bought Kevin's project on Project Catalog",

            subHeadFirst: "client",
            desFirst: "Kevin, was very pleasant to work with. In addition he did excellent work. I recommend him highly",
            nameFirst: "Himanshu B.",
            coutryFirst: "United States",

            subHeadSesond: "Talent",
            desSecond: "I was very pleased to work with Himanshu on this project. The work went well, and he was available for questions and clarifications as needed. I look forward to working on further projects with him.",
            nameSecond: "Kevin G.",
            countrySecond: "United States",
            
            category: "Legal"
        },

        {
            id: 7,
            headText: "Auj and Aafia worked together through Talent Marketplace",

            subHeadFirst: "client",
            desFirst: "Auj was super helpful, friendly, and answered all of my questions. I will definitely work with her again.",
            nameFirst: "Aafia K.",
            coutryFirst: "Pakistan",

            subHeadSesond: "Talent",
            desSecond: "Awesome client. Aafia was very cooperative and easy to work with.",
            nameSecond: "Auj A.",
            countrySecond: "Turkey",
            
            category: "Legal"
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Review on Brenda"/>

            {/* ============= Header ================ */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                 {/* ============= Head Container =============== */}
                 <div className="container mx-auto mt-5 md:px-3 sm:px-7 px-3">
                    <section className="grid md:grid-cols-2 grid-cols-1 sm:px-5 px-3 py-3 lg:gap-x-14 md:gap-x-10 bg-[#E6FAF6] rounded-xl">
                        <div className="lg:mt-2 mt-1 lg:ml-2 ml-1 mb-2">
                            <motion.h2 className="text-[#0C4A6E] font-semibold 2xl:text-6xl lg:text-5xl text-4xl"
                                initial={{y:30, opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:1}}
                            >
                                Reviews on Brenda
                            </motion.h2>
                            <motion.p className="xl:text-xl text-lg text-zinc-700 lg:mt-5 mt-2"
                                initial={{y:"100%", opacity:0}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:2}}
                            >
                                See how clients and talent celebrate their wins and stay accountable for their work together, or join today to make your own connections.
                            </motion.p>
                            <div className="xl:mt-14 lg:mt-10 mt-5">
                                <motion.button
                                    className="bg-zinc-700 py-2 px-6 text-white transition hover:bg-zinc-600 font-semibold rounded-full"
                                    onClick={() => router.push("#")}
                                    initial={{x:-30, opacity:0}}
                                    animate={{x:0, opacity:1}}
                                    transition={{duration:1}}
                                >
                                    Join Brenda
                                </motion.button>
                            </div>
                        </div>
                        <motion.div className="md:block hidden justify-self-end"
                            initial={{x:30, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <Image
                                src="/images/reviews.png"
                                width={790}
                                height={450}
                                alt="banner-image"
                                className="rounded-xl"
                            />
                        </motion.div>
                    </section>
                </div>
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* ================= First Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        Here’s how Talent Scout works
                    </h2>
                    <div className="grid md:grid-cols-2 md:gap-x-10 md:gap-y-0 sm:gap-y-3 gap-y-2 sm:px-5 px-4 sm:py-4 py-3 bg-[#E6FAF6] xl:mt-6 mt-5 rounded-xl">
                        {/* ====== left ===== */}
                        <div className="lg:space-y-1">
                            <div className="flex flex-wrap items-center space-x-1">
                                <h4 className="text-zinc-800 font-semibold xl:text-2xl text-xl">
                                    Clints rate talent 
                                </h4>
                                <div className="flex item-center space-x-1">
                                    <span className="text-green-500 xl:text-2xl text-xl"> <FaStar/> </span>
                                    <span className="text-green-500 xl:text-2xl text-xl"> <FaStar/> </span>
                                    <span className="text-green-500 xl:text-2xl text-xl"> <FaStar/> </span>
                                    <span className="text-green-500 xl:text-2xl text-xl"> <FaStar/> </span>
                                </div>
                                <h4 className="text-zinc-800 font-semibold xl:text-2xl text-xl">
                                    4.9/5
                                </h4>
                            </div>
                            <div className="flex flex-wrap items-center space-x-1">
                                <h5 className="text-zinc-500 font-semibold text-[17px]">
                                    Based on
                                </h5>
                                <span className="text-zinc-800 font-semibold text-[17px]">
                                    2.9 milion
                                </span>
                                <h5 className="text-zinc-500 font-semibold text-[17px]">
                                    review
                                </h5>
                            </div>
                        </div>

                        {/* ====== right ====== */}
                        <div className="lg:space-y-1">
                            <div className="flex flex-wrap items-center space-x-1">
                                <h4 className="text-zinc-800 font-semibold xl:text-2xl text-xl">
                                    Talent rates client
                                </h4>
                                <div className="flex item-center space-x-1">
                                    <span className="text-green-500 xl:text-2xl text-xl"> <FaStar/> </span>
                                    <span className="text-green-500 xl:text-2xl text-xl"> <FaStar/> </span>
                                    <span className="text-green-500 xl:text-2xl text-xl"> <FaStar/> </span>
                                    <span className="text-green-500 xl:text-2xl text-xl"> <FaStar/> </span>
                                </div>
                                <h4 className="text-zinc-800 font-semibold xl:text-2xl text-xl">
                                    4.9/5
                                </h4>
                            </div>
                            <div className="flex flex-wrap items-center space-x-1">
                                <h5 className="text-zinc-500 font-semibold text-[17px]">
                                    Based on
                                </h5>
                                <span className="text-zinc-800 font-semibold text-[17px]">
                                    2.9 milion
                                </span>
                                <h5 className="text-zinc-500 font-semibold text-[17px]">
                                    review
                                </h5>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= First Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="flex md:flex-row flex-col justify-between lg:space-x-20 md:space-x-16 px-2">
                        <aside className="lg:w-[30%] md:w-[35%]">
                        <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold"> What they're Saying </h2>
                            <ul className="flex md:flex-col md:space-y-3 md:space-x-0 space-x-7 mt-7 md:h-screen md:sticky lg:top-2 md:top-5 md:overflow-x-hidden overflow-x-scroll md:whitespace-normal whitespace-nowrap md:px-0 px-2">
                                <li className={`${(firstRevCon == true) ? "text-zinc-800" : "text-zinc-500"} font-semibold text-lg cursor-pointer`} onClick={RevListHandleOne}> 
                                    All Specilizations 
                                </li>
                                <li className={`${(secondRevCon == true) ? "text-zinc-800" : "text-zinc-400"} font-semibold lg:text-lg cursor-pointer`}  onClick={RevListHandleTwo}>
                                    Development & IT
                                </li>
                                <li className={`${(thirdRevCon == true) ? "text-zinc-800" : "text-zinc-400"} font-semibold lg:text-lg cursor-pointer`}  onClick={RevListHandleThree}>
                                    Design & Creative
                                </li>
                                <li className={`${(fourRevCon == true) ? "text-zinc-800" : "text-zinc-400"} font-semibold lg:text-lg cursor-pointer`}  onClick={RevListHandleFour}>
                                    Sales & Marketing
                                </li>
                                <li className={`${(fiveRevCon == true) ? "text-zinc-800" : "text-zinc-400"} font-semibold lg:text-lg cursor-pointer`}  onClick={RevListHandleFive}>
                                    Writing & Translation
                                </li>
                                <li className={`${(sixRevCon == true) ? "text-zinc-800" : "text-zinc-400"} font-semibold lg:text-lg cursor-pointer`}  onClick={RevListHandleSix}>
                                    Admin & Custom Support
                                </li>
                                <li className={`${(sevenRevCon == true) ? "text-zinc-800" : "text-zinc-400"} text-zinc-500 font-semibold lg:text-lg cursor-pointer`}  onClick={RevListHandleSeven}>
                                    Finance & Accounting 
                                </li>
                                <li className={`${(eightRevCon == true) ? "text-zinc-800" : "text-zinc-400"} font-semibold lg:text-lg cursor-pointer`}  onClick={RevListHandleEight}>
                                    Engineering & Architecture
                                </li>
                                <li className={`${(nineRevCon == true) ? "text-zinc-800" : "text-zinc-400"} font-semibold lg:text-lg cursor-pointer`}  onClick={RevListHandleNine}>
                                    Legal 
                                </li>
                            </ul>
                        </aside>
                        
                        <div className="xl:w-[60%] lg:w-[63%] md:w-[65%] w-full sm:space-y-5 space-y-4 md:mt-0 mt-7">
                            {/* ================ All Specilizations ====================== */}
                            {AllReview.map((curVal) => (
                                <div className={`border border-zinc-400 xl:px-5 px-4 xl:py-5 py-4 rounded-xl ${(firstRevCon == true ? "block" : "hidden")}`} key={curVal.id}>
                                    <h2 className="text-zinc-800 font-semibold xl:text-3xl text-2xl">
                                        {curVal.headText}
                                    </h2>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadFirst}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desFirst}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameFirst}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.coutryFirst}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadSesond}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desSecond}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameSecond}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.countrySecond}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="xl:mt-7 mt-6">
                                        <span className="px-5 py-2 bg-[#E6FAF6] rounded-full font-semibold text-sm text-zinc-600">
                                            {curVal.category}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* ================ Development & It Review ====================== */}
                            {DevItReview.map((curVal) => (
                                <div className={`border border-zinc-400 xl:px-5 px-4 xl:py-5 py-4 rounded-xl ${(secondRevCon == true) ? "block" : "hidden"}`} key={curVal.id}>
                                    <h2 className="text-zinc-800 font-semibold xl:text-3xl text-2xl">
                                        {curVal.headText}
                                    </h2>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadFirst}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desFirst}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameFirst}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.coutryFirst}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadSesond}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desSecond}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameSecond}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.countrySecond}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="xl:mt-7 mt-6">
                                        <span className="px-5 py-2 bg-[#E6FAF6] rounded-full font-semibold text-sm text-zinc-600">
                                            {curVal.category}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* ================ Design & Creative Review ====================== */}
                            {DesCreReview.map((curVal) => (
                                <div className={`border border-zinc-400 xl:px-5 px-4 xl:py-5 py-4 rounded-xl ${(thirdRevCon == true) ? "block" : "hidden"}`} key={curVal.id}>
                                    <h2 className="text-zinc-800 font-semibold xl:text-3xl text-2xl">
                                        {curVal.headText}
                                    </h2>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadFirst}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desFirst}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameFirst}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.coutryFirst}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadSesond}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desSecond}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameSecond}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.countrySecond}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="xl:mt-7 mt-6">
                                        <span className="px-5 py-2 bg-[#E6FAF6] rounded-full font-semibold text-sm text-zinc-600">
                                            {curVal.category}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* ================ Sales & Marketing Review ====================== */}
                            {SalMkReview.map((curVal) => (
                                <div className={`border border-zinc-400 xl:px-5 px-4 xl:py-5 py-4 rounded-xl ${(fourRevCon == true) ? "block" : "hidden"}`} key={curVal.id}>
                                    <h2 className="text-zinc-800 font-semibold xl:text-3xl text-2xl">
                                        {curVal.headText}
                                    </h2>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadFirst}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desFirst}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameFirst}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.coutryFirst}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadSesond}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desSecond}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameSecond}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.countrySecond}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="xl:mt-7 mt-6">
                                        <span className="px-5 py-2 bg-[#E6FAF6] rounded-full font-semibold text-sm text-zinc-600">
                                            {curVal.category}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* ================ Writing & Translation Review ====================== */}
                            {WriTrReview.map((curVal) => (
                                <div className={`border border-zinc-400 xl:px-5 px-4 xl:py-5 py-4 rounded-xl ${(fiveRevCon == true) ? "block" : "hidden"}`} key={curVal.id}>
                                    <h2 className="text-zinc-800 font-semibold xl:text-3xl text-2xl">
                                        {curVal.headText}
                                    </h2>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadFirst}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desFirst}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameFirst}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.coutryFirst}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadSesond}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desSecond}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameSecond}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.countrySecond}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="xl:mt-7 mt-6">
                                        <span className="px-5 py-2 bg-[#E6FAF6] rounded-full font-semibold text-sm text-zinc-600">
                                            {curVal.category}
                                        </span>
                                    </div>
                                </div>
                            ))}

                             {/* ================ Admin & Custom Support Review ====================== */}
                            {AdCuReview.map((curVal) => (
                                <div className={`border border-zinc-400 xl:px-5 px-4 xl:py-5 py-4 rounded-xl ${(sixRevCon == true) ? "block" : "hidden"}`} key={curVal.id}>
                                    <h2 className="text-zinc-800 font-semibold xl:text-3xl text-2xl">
                                        {curVal.headText}
                                    </h2>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadFirst}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desFirst}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameFirst}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.coutryFirst}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadSesond}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desSecond}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameSecond}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.countrySecond}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="xl:mt-7 mt-6">
                                        <span className="px-5 py-2 bg-[#E6FAF6] rounded-full font-semibold text-sm text-zinc-600">
                                            {curVal.category}
                                        </span>
                                    </div>
                                </div>
                            ))}

                             {/* ================ Finance & Accounting Review ====================== */}
                             {FinAcReview.map((curVal) => (
                                <div className={`border border-zinc-400 xl:px-5 px-4 xl:py-5 py-4 rounded-xl ${(sevenRevCon == true) ? "block" : "hidden"}`} key={curVal.id}>
                                    <h2 className="text-zinc-800 font-semibold xl:text-3xl text-2xl">
                                        {curVal.headText}
                                    </h2>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadFirst}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desFirst}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameFirst}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.coutryFirst}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadSesond}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desSecond}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameSecond}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.countrySecond}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="xl:mt-7 mt-6">
                                        <span className="px-5 py-2 bg-[#E6FAF6] rounded-full font-semibold text-sm text-zinc-600">
                                            {curVal.category}
                                        </span>
                                    </div>
                                </div>
                            ))}

                             {/* ================ Engineer & Architecture Review ====================== */}
                             {EngArchReview.map((curVal) => (
                                <div className={`border border-zinc-400 xl:px-5 px-4 xl:py-5 py-4 rounded-xl ${(eightRevCon == true) ? "block" : "hidden"}`} key={curVal.id}>
                                    <h2 className="text-zinc-800 font-semibold xl:text-3xl text-2xl">
                                        {curVal.headText}
                                    </h2>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadFirst}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desFirst}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameFirst}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.coutryFirst}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadSesond}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desSecond}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameSecond}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.countrySecond}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="xl:mt-7 mt-6">
                                        <span className="px-5 py-2 bg-[#E6FAF6] rounded-full font-semibold text-sm text-zinc-600">
                                            {curVal.category}
                                        </span>
                                    </div>
                                </div>
                            ))}

                             {/* ================ Legal Review ====================== */}
                             {LegalReview.map((curVal) => (
                                <div className={`border border-zinc-400 xl:px-5 px-4 xl:py-5 py-4 rounded-xl ${(nineRevCon == true) ? "block" : "hidden"}`} key={curVal.id}>
                                    <h2 className="text-zinc-800 font-semibold xl:text-3xl text-2xl">
                                        {curVal.headText}
                                    </h2>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadFirst}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desFirst}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameFirst}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.coutryFirst}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col xl:mt-5 mt-4">
                                        <span className="text-[17px] text-zinc-500 font-semibold">
                                            {curVal.subHeadSesond}
                                        </span>
                                        <h4 className="lg:text-lg font-semibold text-zinc-800 mt-1">
                                            {curVal.desSecond}
                                        </h4>

                                        <div className="flex items-center space-x-1 xl:mt-4 mt-3">
                                            <span className="text-zinc-800 font-semibold lg:text-[17px]">
                                                {curVal.nameSecond}
                                            </span>
                                            <span className="text-zinc-600 font-semibold lg:text-[17px]">
                                                {curVal.countrySecond}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="xl:mt-7 mt-6">
                                        <span className="px-5 py-2 bg-[#E6FAF6] rounded-full font-semibold text-sm text-zinc-600">
                                            {curVal.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= Thired Section ================== */}
               <section className="bg-[#E6FAF6]">
                    <motion.div className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 lg:py-20 md:py-10 py-7 md:px-16 sm:px-7 px-3"
                        initial={{y:50, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                            See how businesses get work done on Brenda
                        </h2>

                        <div className="flex lg:flex-row flex-col justify-center lg:mt-14 mt-10 2xl:space-x-9 xl:space-x-7 lg:space-x-5 lg:space-y-0 space-y-3">
                            <div className="lg:min-w-[50%] xl:min-w-0">
                                <Image
                                    src="/images/see-girls.png"
                                    width={550}
                                    height={350}
                                    alt="girls-image"
                                    className="rounded-xl"
                                />
                            </div>

                            <div className="flex md:flex-row flex-col 2xl:space-x-9 xl:space-x-7 md:space-x-5 md:space-y-0 space-y-3">
                                <Link href="#">
                                    <div className="bg-white py-4 px-4 flex flex-col justify-between rounded-xl items-start md:max-w-sm cursor-pointer">
                                        <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                            Nasdaq Leans on Hybrid Teams to Transform Itself into a Digital Media Leader
                                        </h3>

                                        <a className="text-blue-700 underline text-lg flex items-center transition hover:text-blue-900 mt-5">
                                            Read Articles
                                            <HiArrowRight className="mt-1 ml-1"/>
                                        </a>
                                    </div>
                                </Link>

                                <Link href="#">
                                    <div className="bg-white py-4 px-4 flex flex-col justify-between rounded-xl items-start md:max-w-sm cursor-pointer">
                                        <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                            How GoDaddy Launched a Program 3x Faster with Independent Web Designers
                                        </h3>

                                        <a className="text-blue-700 underline text-lg flex items-center transition hover:text-blue-900 mt-5">
                                            Read Articles
                                            <HiArrowRight className="mt-1 ml-1"/>
                                        </a>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <button className="px-6 py-2 bg-zinc-800 text-white font-semibold rounded-full lg:text-lg mt-7 transition hover:bg-zinc-700" onClick={() => router.push("#")}>
                            Read More Success Stories
                        </button>
                    </motion.div>
               </section>

                {/* ================= Four Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        See what people say about other ways to work
                    </h2>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-7 lg:gap-y-0 md:gap-y-7 gap-y-5 md:mt-10 mt-7">
                        <Link href="#">
                            <div className="flex flex-col justify-between bg-[#dcf5f0] transition hover:bg-[#d3eee8] px-4 py-4 rounded-lg min-h-[8rem] cursor-pointer">
                                <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                    Talent Marketplace
                                </h3>

                                <button className="text-blue-700 underline flex items-center transition hover:text-blue-900 mt-5">
                                    Read Articles
                                    <HiArrowRight className="mt-1 ml-1"/>
                                </button>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className="flex flex-col justify-between bg-[#dcf5f0] transition hover:bg-[#d3eee8] px-4 py-4 rounded-lg min-h-[8rem] cursor-pointer">
                                <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                    Enterprice Suite
                                </h3>

                                <button className="text-blue-700 underline flex items-center transition hover:text-blue-900 mt-5">
                                    Read Articles
                                    <HiArrowRight className="mt-1 ml-1"/>
                                </button>
                            </div>
                        </Link>

                        <Link href="#">
                            <div className="flex flex-col justify-between bg-[#dcf5f0] transition hover:bg-[#d3eee8] px-4 py-4 rounded-lg min-h-[8rem] cursor-pointer">
                                <h3 className="text-zinc-800 lg:text-2xl text-xl font-semibold">
                                    Project Catlog
                                </h3>

                                <button className="text-blue-700 underline flex items-center transition hover:text-blue-900 mt-5">
                                    Read Articles
                                    <HiArrowRight className="mt-1 ml-1"/>
                                </button>
                            </div>
                        </Link>
                    </div>
               </section>

                {/* ================= Five Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <h2 className="text-zinc-800 xl:text-4xl text-3xl font-semibold">
                        How to get started
                    </h2>

                    <div className="flex space-x-5 border-b border-gray-300 mt-7">
                        <button className={`text-lg font-semibold py-2 transition hover:border-green-600 hover:border-b ${(hiriTal == true) ? "border-b border-zinc-800 text-zinc-800" : "text-zinc-500"}`} onClick={() => {useHireTal(true); (fiWork == true) ? useFiwork(false) : null}}>
                            Hiring talent
                        </button>
                        <button className={`text-lg font-semibold text-zinc-600 py-2 transition hover:border-green-600 hover:border-b ${(fiWork == true) ? "border-b border-zinc-800 text-zinc-800" : "text-zinc-500"}`} onClick={() => {useFiwork(true); (hiriTal == true) ? useHireTal(false) : null}}>
                            Finding work
                        </button>
                    </div>

                    {/* ========================= Hiring talent Section ========================= */}
                    {hiriTal && <div>
                        <motion.div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 2xl:gap-x-7 gap-x-5 xl:gap-y-0 gap-y-5 mt-4"
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="bg-[#E6FAF6] py-4 px-4 rounded-xl">
                                <div className="bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-xl flex justify-center px-4 py-4">
                                    <Image
                                        src="/images/post-job.png"
                                        width={150}
                                        height={130}
                                        alt="post-image"
                                    />
                                </div>

                                <div className="mt-2">
                                    <h5 className="text-lg font-semibold text-zinc-800">
                                        Post a job (it’s free)
                                    </h5>
                                    <p className="text-zinc-500 text-[17px] font-semibold mt-1">
                                        Tell us what you need. Provide as many details as possible, but don’t worry about getting it perfect.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#E6FAF6] py-4 px-4 rounded-xl">
                                <div className="bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-xl flex justify-center px-4 py-4">
                                    <Image
                                        src="/images/talent-come.png"
                                        width={150}
                                        height={130}
                                        alt="talent-image"
                                    />
                                </div>

                                <div className="mt-2">
                                    <h5 className="text-lg font-semibold text-zinc-800">
                                        Talent comes to you
                                    </h5>
                                    <p className="text-zinc-500 text-[17px] font-semibold mt-1">
                                        Get qualified proposals within 24 hours, and meet the candidates you’re excited about. Hire as soon as you’re ready.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#E6FAF6] py-4 px-4 rounded-xl">
                                <div className="bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-xl flex justify-center px-4 py-4">
                                    <Image
                                        src="/images/collabration.png"
                                        width={150}
                                        height={130}
                                        alt="collabration-image"
                                    />
                                </div>

                                <div className="mt-2">
                                    <h5 className="text-lg font-semibold text-zinc-800">
                                        Collaborate easily
                                    </h5>
                                    <p className="text-zinc-500 text-[17px] font-semibold mt-1">
                                        Use Brenda to chat or video call, share files, and track project progress right from the app.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#E6FAF6] py-4 px-4 rounded-xl">
                                <div className="bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-xl flex justify-center px-4 py-4">
                                    <Image
                                        src="/images/payment-smp.png"
                                        width={150}
                                        height={130}
                                        alt="payment-image"
                                    />
                                </div>

                                <div className="mt-2">
                                    <h5 className="text-lg font-semibold text-zinc-800">
                                        Payment simplified
                                    </h5>
                                    <p className="text-zinc-500 text-[17px] font-semibold mt-1">
                                        Receive invoices and make payments through Brenda. Only pay for work you authorize.                                
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <button className="px-5 py-2 rounded-full bg-zinc-800 text-white font-semibold mt-5 hover:bg-zinc-700" onClick={() => router.push("#")}>
                            Find Talent
                        </button>
                    </div>}

                    {/* ========================= Find Work Section ========================= */}
                    {fiWork && <div>
                        <motion.div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 2xl:gap-x-7 gap-x-5 xl:gap-y-0 gap-y-5 mt-4"
                            initial={{y:30, opacity:0}}
                            whileInView={{y:0, opacity:1}}
                            transition={{duration:1}}
                        >
                            <div className="bg-[#E6FAF6] py-4 px-4 rounded-xl">
                                <div className="bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-xl flex justify-center px-4 py-4">
                                    <Image
                                        src="/images/post-job.png"
                                        width={150}
                                        height={130}
                                        alt="post-image"
                                    />
                                </div>

                                <div className="mt-2">
                                    <h5 className="text-lg font-semibold text-zinc-800">
                                        Create your profile (it’s free)
                                    </h5>
                                    <p className="text-zinc-500 text-[17px] font-semibold mt-1">
                                        An eye-catching title and client-focused overview help us match you to the work you want. Include your work history, your skills, and your photo.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#E6FAF6] py-4 px-4 rounded-xl">
                                <div className="bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-xl flex justify-center px-4 py-4">
                                    <Image
                                        src="/images/talent-come.png"
                                        width={150}
                                        height={130}
                                        alt="talent-image"
                                    />
                                </div>

                                <div className="mt-2">
                                    <h5 className="text-lg font-semibold text-zinc-800">
                                        Explore ways to earn
                                    </h5>
                                    <p className="text-zinc-500 text-[17px] font-semibold mt-1">
                                        Work and earn in different ways. Bid for jobs. Pitch your projects. Discuss your in-demand skills with our recruiters so they can find opportunities
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#E6FAF6] py-4 px-4 rounded-xl">
                                <div className="bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-xl flex justify-center px-4 py-4">
                                    <Image
                                        src="/images/collabration.png"
                                        width={150}
                                        height={130}
                                        alt="collabration-image"
                                    />
                                </div>

                                <div className="mt-2">
                                    <h5 className="text-lg font-semibold text-zinc-800">
                                        Get paid securely
                                    </h5>
                                    <p className="text-zinc-500 text-[17px] font-semibold mt-1">
                                        Choose how you get paid. Our fixed-price protection releases client payments at project milestones. Hourly protection bills clients every week.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <button className="px-5 py-2 rounded-full bg-zinc-800 text-white font-semibold mt-5 hover:bg-zinc-700" onClick={() => router.push("#")}>
                            Create your Profile
                        </button>
                    </div>}
               </section>

                {/* ================= Six Section ================== */}
                <section className="container mx-auto xl:mt-14 lg:mt-10 md:mt-7 mt-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="lg:grid lg:grid-cols-2 2xl:gap-x-0 xl:gap-x-1 lg:gap-x-3 rounded-xl flex flex-col lg:items-start items-center 2xl:px-10 xl:px-5 md:px-3 sm:px-2 px-3 bg-[#dafaf3]">
                    {/* ================ This is alwayse same not change =================== */}
                        <div>
                            <h2 className="xl:text-4xl text-3xl font-semibold text-zinc-800 mt-7 lg:mb-16 sm:mb-7 mb-5">
                                Frequently asked questions
                            </h2>
                            <Image
                                src={"/images/qus2.png"}
                                width={550}
                                height={500}
                                alt="question-ask-image"
                                className="w-full"
                            />
                        </div>

                        {/* ==================== This is props to chagne ======================= */}
                        <div className="lg:px-7 sm:px-5 px-0 sm:py-5 py-3">
                            <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    How to get reviews on Brenda?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    A 14-day feedback period opens at the end of a contract where both the client and talent can leave each other a review. The client is asked to give a review as part of ending the contract and most clients do. The review won’t be visible until both the client and talent leave a review or the 14-day feedback period ends.
                                </p>
                            </div>

                            <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    How to leave a review on Brenda?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl text-lg text-md">
                                    During the 14-day feedback period at the end of a contract, the client will be asked to leave a review while ending the contract. As the talent, you can also leave a review for the client by looking at your ended contracts within that same 14-day feedback period. The review will be public once both of you leave one for each other or the 14-day period ends.
                                </p>
                            </div>

                            <div className="border-b border-zinc-300 xl:py-7 sm:py-5 py-3 space-y-2">
                                <h4 className="xl:text-3xl sm:text-2xl text-xl font-semibold text-zinc-800">
                                    How to contest a review on Brenda?
                                </h4>
                                <p className="text-zinc-600 xl:text-xl sm:text-lg text-md">
                                    There’s a few ways to change how your review appears on Brenda starting with responding to a review. Within 28 days of the end of the contract, you can post a follow-up comment to a review about you that will show up on your public profile. You can also work directly with your client or talent to enable feedback changes and revise the review. If you feel the review violates Brenda’s terms of service and you would like to dispute a review, Brenda’s customer service team is there to help.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= Eight Section ================== */}
                <section className="container mx-auto xl:my-14 lg:my-10 md:my-7 my-5 py-3 md:px-5 sm:px-7 px-3">
                    <div className="md:grid lg:grid-cols-3 grid-cols-2 xl:gap-x-10 lg:gap-x-7 gap-x-5 flex flex-col md:space-y-0 space-y-4 bg-[#5CA3C5] lg:px-3 sm:px-5 px-3 py-3 rounded-lg">
                        <Image
                            src="/images/rel-rev.jpg"
                            width={220}
                            height={170}
                            layout="responsive"
                            alt="showes-image"
                            className="rounded-lg"
                        />

                        <div className="flex flex-col justify-between lg:space-y-10 space-y-5 md:mt-1 mt-2 lg:col-span-2">
                            <div>
                                <h2 className="lg:text-4xl text-2xl text-gray-100 font-semibold">
                                    Build powerful relationships, one review at a time
                                </h2>
                            </div>
                            <div className="lg:flex lg:space-x-7 inline border-t border-gray-100 justify-between py-3 xl:space-y-0 space-y-3">
                              <div>
                                <h2 className="text-gray-100 font-semibold xl:text-lg">
                                    Join the world’s work marketplace and get work done, your way.
                                </h2>
                              </div>

                               <div className="min-w-[25%]">
                                    <button
                                        className="border border-gray-100 text-white px-4 lg:py-2 py-1 rounded-full font-semibold transition hover:text-gray-100 hover:border-gray-300"
                                        onClick={() => router.push("#")}
                                    >
                                        Join Brenda
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

export default Reviews;