import HeadTag from "../../components/HeadTag";
import Navbar from "../../components/Navbar/Navbar";
import BannerContainer from "../../components/BannerContainer";
import TrustedCom from "../../components/TrustedCom";
import TrustedExp from "../../components/TrustedExp";
import PreWork from "../../components/PreWork";
import Flexible from "../../components/Flexible";
import QuestionAsk from "../../components/QuestionAsk";
import FindFreelancer from "../../components/FindFreelancer";
import Footer from "../../components/Footer";

{/* ============== Development & It page =================== */}
const DevIt = () => {

    // ================ Card Data =================
    const CardData = [
        {
            id: 1,
            groupName: "SQL Developers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/sql-dev1.png"},
                {id: 2, img: "/images/sql-dev2.png"},
                {id: 3, img: "/images/sql-dev3.png"},
            ],
            link: "#"
        },        

        {
            id: 2,
            groupName: "QA Engineers",
            rating: "4.9/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/qa-in1.png"},
                {id: 2, img: "/images/qa-in2.png"},
                {id: 3, img: "/images/qa-in3.png"},
            ],
            link: "#"
        },

        {
            id: 3,
            groupName: "javascript Developer",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/js-dev1.png"},
                {id: 2, img: "/images/js-dev2.png"},
                {id: 3, img: "/images/js-dev3.png"},
            ],
            link: "#"
        },

        {
            id: 4,
            groupName: "iOs Developer",
            rating: "4.7/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/ios-dev1.png"},
                {id: 2, img: "/images/ios-dev2.png"},
                {id: 3, img: "/images/ios-dev3.png"},
            ],
            link: "#"
        },

        {
            id: 5,
            groupName: "JAVA Developers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/java-dev1.png"},
                {id: 2, img: "/images/java-dev2.png"},
                {id: 3, img: "/images/java-dev3.png"},
            ],
            link: "#"
        },   

        {
            id: 6,
            groupName: "PHP Developers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/php-dev1.png"},
                {id: 2, img: "/images/php-dev2.png"},
                {id: 3, img: "/images/php-dev3.png"},
            ],
            link: "#"
        },   

        {
            id: 7,
            groupName: "Infrastructure Enginer",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/it-in1.png"},
                {id: 2, img: "/images/it-in2.png"},
                {id: 3, img: "/images/it-in3.png"},
            ],
            link: "#"
        },

        {
            id: 8,
            groupName: "Data Scientist",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/dt-sc1.png"},
                {id: 2, img: "/images/dt-sc2.png"},
                {id: 3, img: "/images/dt-sc3.png"},
            ],
            link: "#"
        },      
    ];

    // ======================= List =============================
    const WorkList = [
        {
            id: 1,
            name: "Mobile App Development",
        },

        {
            id: 2,
            name: "Shopify Development",
        },

        {
            id: 3,
            name: "Wordpress Development",
        },

        {
            id: 4,
            name: "Data Vizualization",
        },

        {
            id: 5,
            name: "Machine Learning",
        },

        {
            id: 6,
            name: "Cybersecurity & Data Protection",
        }
    ]

    // ===================== Find Freelancer List ==========================
    const FreelancerList = {

        headText: "Development & IT Roles",

        listItem: [
            {id: 1, text: "Anguler js Developer", link: "#"},
            {id: 2, text: "Css Developer", link: "#"},
            {id: 3, text: "DevOps Developer", link: "#"},
            {id: 4, text: "Game Developer", link: "#"},
            {id: 5, text: "Magneto Developer", link: "#"},
            {id: 6, text: "React Native Developer", link: "#"},
            {id: 7, text: "Scala Developer", link: "#"},
            {id: 8, text: "AWs Developer", link: "#"},
            {id: 9, text: "Data Analysts", link: "#"},
            {id: 10, text: "eComarce Developers", link: "#"},
            {id: 11, text: "Goland Developer", link: "#"},
            {id: 12, text: "Mobile App Developer", link: "#"},
            {id: 13, text: "Ruby Developer", link: "#"},
            {id: 14, text: "Shopify Developer", link: "#"},
            {id: 15, text: "Vue js Developer", link: "#"},
            {id: 16, text: "C# Developer", link: "#"},
            {id: 17, text: "Data Visulization Consultants", link: "#"},
            {id: 18, text: "Front End Developers", link: "#"},
            {id: 19, text: "HTML5 Developers", link: "#"},
            {id: 20, text: "MySQL Developers", link: "#"},
            {id: 21, text: "Ruby on Rails Developers", link: "#"},
            {id: 22, text: "Software Developers", link: "/"},
            {id: 23, text: "Web Developers", link: "#"},
            {id: 24, text: "C++ Devcelopers", link: "#"},
            {id: 25, text: "Developers", link: "#"},
            {id: 26, text: "FullStack Developers", link: "#"},
            {id: 27, text: "Machine Learning Engineers", link: "#"},
            {id: 28, text: "Python Developers", link: "#"},
            {id: 29, text: "Rust Developers", link: "#"},
            {id: 30, text: "Software QA Tester", link: "#"},
            {id: 31, text: "Wordpress Developers", link: "#"},
        ]
    }

  return (
    <div className="min-h-screen flex flex-col">
        {/* ============== Head Tag =============== */}
        <HeadTag title="Top Development & IT Experts for Hire in July 2022 | Brenda"/>

        {/* ================= Header ================= */}
        <header className="header-bg">
            {/* ============== Navbar ============ */}
            <Navbar/>
                
            {/* ============ Head Container ============ */}
            <BannerContainer 
                heading={"Dev and IT experts to scale your org"}
                des={"Hire independent professionals to shorten development cycles, bury backlogs, and drive product growth."}
                btnI = {{text: "Find Talent", link: "/"}}
                btnII = {{text: "Find work", link: "/"}}
                img={"/images/developer1.png"}
            />
        </header>

        {/* ================= Main ==================== */}
        <main>
        
            {/* ================= Trusted Company Section ================ */}
           <TrustedCom/>

            {/* ================= Developer section ================ */}
           <TrustedExp
                headText="Trusted remote development and IT experts"
                rating="4.9/5"
                ratingText="Average rating for work with tech talent."
                contracts="211K+ contracts"
                contractsText="Involving development and IT work in the past year."
                skills="1,665 skills"
                skillsText="Represented by talent on Brenda."
                cardData={CardData}
            />

            {/* ============== Prossesing work Section ================== */}
            <PreWork
                headText="Development and IT projects for your most pressing work"
                headDes="  A Custom application, app, web, data analytics, Cybersecurity provide a way right direction  for providing our team expert freelancer"
                list={WorkList}
                imageI="/images/app1.png"
                imageII="/images/sp1.png"
                imageIII="/images/wd1.png"
                imageIv="/images/data-anly1.png"
                imageV="/images/ml1.png"
                imageVi="/images/cb1.png"
                btn={{text: "Browse Project", link: "#"}}
            />

            {/* ========================== Flexible Section =========================== */}
            <Flexible
                firstHead="Dev expertise at your fingertips"
                firstSubHead="An iOS/Android developer saved his client money, time, and stress"
                first_F_LeftRating="5/5"
                first_F_RightText="Budget:"
                first_F_RightValue="$14,520"
                firstDes='"Igor has great knowledge in mobile application development [and] always suggests a better and cost-effective solution. Superfast turnaround. Thank you Igor!"'
                first_S_LeftText="Skills:"
                first_S_F_RightValue="Sketch"
                first_S_S_RightValue="Swift"
                first_S_T_RightValue="iOS Development"
                firstImage="/images/iosapp1.png"
                
                secondImage="/images/free.webp"
                secondHead="Flexera discovers the freedom of the work marketplace"
                secondDes="By engaging independent talent, Flexera found the expertise needed to help accelerate its growth. It strengthened its IT system and turned projects around twice as fast. CEO Jim Ryan said this enabled the company to quickly find talent for the breadth of skills needed to keep up with market changes: “They knew exactly what needed to be done, jumped in, and got it done.”"
                secondRightText="50% Faster project turnaround time"
                secondLeftBtn={{text: "Read Case Study", link: "#"}}
            />

            {/* ========================== Freequenly Ask Question Section ========================== */}
            <QuestionAsk
                firstHeadText="What is development and IT?"
                firstDesText="Development refers to the creation and management of business technology, including computer applications, financial systems, and logistical solutions that help an organization run its operational processes. Information technology (IT) is the use of computers and computer networks to store, retrieve, transmit, and maintain data and information."

                secondHeadText="What is the first step to hiring development and IT talent and determining the project cost?"
                secondDesText="Development refers to the creation and management of business technology, including computer applications, financial systems, and logistical solutions that help an organization run its operational processes. Information technology (IT) is the use of computers and computer networks to store, retrieve, transmit, and maintain data and information."

                thirdHeadText="What are the various ways I can connect with development and IT talent through Brenda?"
                thirdDesText="Brenda gives you the flexibility you need to find the right talent for your development and IT projects. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore reiciendis a doloribus! Iusto alias quod itaque officiis, maxime, explicabo inventore voluptas quis odit aut impedit, eius earum eligendi nisi sed sunt aperiam repellat! Unde!"

                fourHeadText="Why should I use Brenda to find talent for development and IT services?"
                fourDesText="Brenda gives you the flexibility you need to find the right talent for your development and IT projects."

                lastLeftText="Still have questions?"
                lastRightBtn={{text: "Visit our help center", link: "#"}}
            />

            {/* ================== Find Freelancer Section ====================== */}
            <FindFreelancer
                headText="Find freelancers with the dev and IT skills you need"
                FindFreelancerList={FreelancerList}
            />
        </main>
        
        {/* ==================== Footer ====================== */}
        <Footer/>
    </div>
  )
}

export default DevIt;