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

{/* ============== Hr and Training page =================== */}
const HrTraning = () => {

    // ================ Card Data =================
    const CardData = [
        {
            id: 1,
            groupName: "Human Resource Managers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/hr1.jpg"},
                {id: 2, img: "/images/hr-2.jpg"},
                {id: 3, img: "/images/hr-3.jpg"},
            ],
            link: "#"
        },        

        {
            id: 2,
            groupName: "HR Contracts",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/bk1.jpeg"},
                {id: 2, img: "/images/bk3.jpeg"},
                {id: 3, img: "/images/cadeng3.png"},

            ],
            link: "#"
        },

        {
            id: 3,
            groupName: "Recruiters",
            rating: "4.9/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/em1.jpeg"},
                {id: 2, img: "/images/em2.jpeg"},
                {id: 3, img: "/images/em3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 4,
            groupName: "Compensation Specialists",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/tc3.jpeg"},
                {id: 2, img: "/images/tc2.jpeg"},
                {id: 3, img: "/images/mg2.jpeg"},
            ],
            link: "#"
        },

        {
            id: 5,
            groupName: "HRIS Spacialists",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/cadeng1.png"},
                {id: 2, img: "/images/bk2.jpeg"},
                {id: 3, img: "/images/em2.jpeg"},
            ],
            link: "#"
        },   

        {
            id: 6,
            groupName: "eLarning Spacialists",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/bk2.jpeg"},
                {id: 2, img: "/images/areng2.jpg"},
                {id: 3, img: "/images/fc3.jpeg"},
            ],
            link: "#"
        },   

        {
            id: 7,
            groupName: "Instrational Designers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/cveng1.jpg"},
                {id: 2, img: "/images/cheng2.jpg"},
                {id: 3, img: "/images/cveng2.jpg"},
            ],
            link: "#"
        },

        {
            id: 8,
            groupName: "Tranning & Development Spacialist",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/tc3.jpeg"},
                {id: 2, img: "/images/tc2.jpeg"},
                {id: 3, img: "/images/mg2.jpeg"},
            ],
            link: "#"
        },      
    ];

    // ======================= List =============================
    const WorkList = [
        {
            id: 1,
            name: "Recruiting",
        },

        {
            id: 2,
            name: "Employee Learing & Development",
        },

        {
            id: 3,
            name: "Performance Managment",
        },

        {
            id: 4,
            name: "Organization Development",
        },

        {
            id: 5,
            name: "HR Information System",
        },

        {
            id: 6,
            name: "Compension & Benifits",
        }
    ]

    // ===================== Find Freelancer List ==========================
    const FreelancerList = {

        headText: "HR & Training Roles",

        listItem: [
            {id: 1, text: "Articulate Spacialists", link: "#"},
            {id: 2, text: "Curriculam Developers", link: "#"},
            {id: 3, text: "HR Policies Spacialists", link: "#"},
            {id: 4, text: "QHSE Spacialists", link: "#"},
            {id: 5, text: "Teachble Spacialists", link: "#"},
            {id: 6, text: "Articulate Storyline Specialists", link: "#"},
            {id: 7, text: "Distance Educations Specialists", link: "#"},
            {id: 8, text: "Interviewr", link: "#"},
            {id: 9, text: "Linkdin Recruiters", link: "#"},
            {id: 10, text: "Salary Surveys Spacialists", link: "#"},
            {id: 11, text: "Technical Recruiters", link: "#"},
            {id: 12, text: "Boolean Search Spacialists", link: "#"},
            {id: 13, text: "Employee Engagment", link: "#"},
            {id: 14, text: "ISO 9000 Spacialists", link: "#"},
            {id: 15, text: "Onboarding Spacialists", link: "#"},
            {id: 16, text: "SAP Success Fators", link: "#"},
            {id: 17, text: "Competencies Assessment", link: "#"},
            {id: 18, text: "Executive Coaches", link: "#"},
            {id: 19, text: "Job Description Writters", link: "#"},
            {id: 20, text: "Online Freelancer", link: "#"},
            {id: 21, text: "SCORM Spacialists", link: "#"},
        ]
    }

  return (
    <div className="min-h-screen flex flex-col">
        {/* ============== Head Tag =============== */}
        <HeadTag title="Top HR & Training Experts for Hire in July 2022 | Brenda"/>

        {/* ================= Header ================= */}
        <header className="header-bg">
            {/* ============== Navbar ============ */}
            <Navbar/>
                
            {/* ============ Head Container ============ */}
            <BannerContainer 
                heading={"Help your team thrive with HR and training experts"}
                des={"Hundreds of independent professionals who’ll give your people the experience they deserve, and keep your organization running smoothly."}
                btnI = {{text: "Find Talent", link: "#"}}
                btnII = {{text: "Find work", link: "#"}}
                img={"/images/hr.png"}
            />
        </header>

        {/* ================= Main ==================== */}
        <main>
        
            {/* ================= Trusted Company Section ================ */}
           <TrustedCom/>

            {/* ================= Developer section ================ */}
           <TrustedExp
                headText="Specialized HR and training experts you can count on"
                rating="4.90/5"
                ratingText="Average rating for work with HR professionals."
                contracts="1,900+ contracts"
                contractsText="Involving HR & training work in the last year."
                skills="105 skills"
                skillsText="Represented by talent on Brenda"
                cardData={CardData}
            />

            {/* ============== Prossesing work Section ================== */}
            <PreWork
                headText="Get the job done fast with HR and training projects"
                headDes="Find a recruitment expert to put together job ads, headhunt or screen candidates, and land you the right person."
                list={WorkList}
                imageI="/images/rec.jpg"
                imageII="/images/emp.jpg"
                imageIII="/images/pm.jpg"
                imageIv="/images/od.jpg"
                imageV="/images/hi.jpg"
                imageVi="/images/cmf.jpg"
                btn={{text: "Browse Project"}}
            />

            {/* ========================== Flexible Section =========================== */}
            <Flexible
                firstHead="HR pros that help your organization thrive"
                firstSubHead="A human resources expert helped a small business get their process up and running"
                first_F_LeftRating="5/5"
                first_F_RightText="Budget:"
                first_F_RightValue="$1,700"
                firstDes="Lindsey was a pleasure to work with! He was super helpful and very thorough in her work. Her guidance allowed us to be more confident in our new processes and tools."
                first_S_LeftText="Skills:"
                first_S_F_RightValue="HR Admistration"
                first_S_S_RightValue="Recruting"
                first_S_T_RightValue="Hs"
                firstImage="/images/res.png"
                
                secondImage="/images/team-pl.png"
                secondHead="Lone UCLA Professor Builds Online Learning Platform In Just 3 Months"
                secondDes="UCLA needed a team of program consultants and web developers to build a bespoke e-learning platform. So they came to us. Independent professionals on Upwork helped put together the plan, then execute it, with some seriously niche roles playing a big part.”"
                secondRightText="1 week to source & contract talent"
                secondLeftBtn={{text: "Read Case Study", link: "#"}}
            />

            {/* ========================== Freequenly Ask Question Section ========================== */}
            <QuestionAsk
                firstHeadText="What is HR and training?"
                firstDesText="Writing is the process of creating written content for a variety of purposes. It can be used to communicate information, tell a story, or persuade an audience. Translation is the process of converting written content from one language to another, allowing businesses to communicate with their customers in their native language. ."

                secondHeadText="What is the first step to hiring HR talent and determining the project cost?"
                secondDesText="One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with sales and marketing, but what specific things are you trying to do? Upwork matches you with proven remote talent who can help you with all your sales and marketing needs, including"

                thirdHeadText="What are the various ways I can connect with HR talent through Brenda?"
                thirdDesText=" If you need help finding talent for your marketing project, Upwork gives you the flexibility you need to succeed.Talent Marketplace: Find and source independent professionals for your sales or marketing project directly from Upwork’s talent marketplace.
                Project Catalog: Project Catalog is a new way to quickly get started and expand your capabilities through Upwork. From market research and strategy to SEO and SEM services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed."

                fourHeadText="Why should I use Upwork to find talent for HR services?"
                fourDesText="When it comes to sales and marketing, you may need a multidisciplinary team of talent to handle the various components of your project. Examples of professionals you might need for a sales and marketing projects include"

                lastLeftText="Still have questions?"
                lastRightBtn={{text: "Visit our help center", link: "#"}}
            />

            {/* ================== Find Freelancer Section ====================== */}
            <FindFreelancer
                headText="Find freelancers with the sales & marketing skills you need"
                FindFreelancerList={FreelancerList}
            />
        </main>
        
        {/* ==================== Footer ====================== */}
        <Footer/>
    </div>
  )
}

export default HrTraning;