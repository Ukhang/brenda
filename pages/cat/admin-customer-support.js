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

{/* ============== Admin and Customer support page =================== */}
const AdminCustomSupport = () => {

    // ================ Card Data =================
    const CardData = [
        {
            id: 1,
            groupName: "Virtual Assistants",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/js-dev1.png"},
                {id: 3, img: "/images/js-dev3.png"},
                {id: 2, img: "/images/tc2.jpeg"},
            ],
            link: "#"
        },        

        {
            id: 2,
            groupName: "Data Entry Spacialist",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/fn1.jpeg"},
                {id: 2, img: "/images/fn2.jpeg"},
                {id: 3, img: "/images/fn3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 3,
            groupName: "Project Managers",
            rating: "4.9/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/ic1.gif"},
                {id: 2, img: "/images/mg2.jpeg"},
                {id: 3, img: "/images/ic3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 4,
            groupName: "Amazon St. Administ..",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/mg1.jpeg"},
                {id: 2, img: "/images/ic2.jpeg"},
                {id: 3, img: "/images/mg3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 5,
            groupName: "Customer Service Repredsentives",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/fm1.jpeg"},
                {id: 2, img: "/images/mg2.jpeg"},
                {id: 3, img: "/images/fm3.jpeg"},
            ],
            link: "#"
        },   
        
        {
            id: 6,
            groupName: "Tech Support Specialists",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/mg1.jpeg"},
                {id: 2, img: "/images/bk2.jpeg"},
                {id: 3, img: "/images/mg3.jpeg"},
            ],
            link: "#"
        },   

        {
            id: 7,
            groupName: "Zendesk Specialists",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/tc1.jpeg"},
                {id: 2, img: "/images/fm3.jpeg"},
                {id: 3, img: "/images/js-dev2.png"},
            ],
            link: "#"
        },

        {
            id: 8,
            groupName: "Community Manager",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/bk1.jpeg"},
                {id: 2, img: "/images/bk2.jpeg"},
                {id: 3, img: "/images/bk3.jpeg"},
            ],
            link: "#"
        },      
    ];

    // ======================= List =============================
    const WorkList = [
        {
            id: 1,
            name: "Project Managment",
        },

        {
            id: 2,
            name: "Custommer Support",
        },

        {
            id: 3,
            name: "Virtual Assistents",
        },

        {
            id: 4,
            name: "eComarce Managment",
        },

        {
            id: 5,
            name: "Data Entry",
        },

        {
            id: 6,
            name: "Transcription",
        }
    ]

    // ===================== Find Freelancer List ==========================
    const FreelancerList = {

        headText: "Admin & Customer Support Roles",

        listItem: [
            {id: 1, text: "Administrative Assistants", link: "#"},
            {id: 2, text: "Custommer Support", link: "#"},
            {id: 3, text: "Email Handaling", link: "#"},
            {id: 4, text: "Google Sheets Experts", link: "#"},
            {id: 5, text: "Internate Reserchers", link: "#"},
            {id: 6, text: "Microsoft Work Experts", link: "#"},
            {id: 7, text: "Profreaders", link: "#"},
            {id: 8, text: "Transcriptions", link: "#"},
            {id: 9, text: "Appointment Setters", link: "#"},
            {id: 10, text: "Data Entry Spaciallist", link: "#"},
            {id: 11, text: "Microsoft Excel Experts", link: "#"},
            {id: 12, text: "Google Slides Experts", link: "#"},
            {id: 13, text: "Intuit QuickBooks Spaciallists", link: "#"},
            {id: 14, text: "Personal Assistants", link: "#"},
            {id: 15, text: "Recruiters", link: "#"},
            {id: 16, text: "Typists", link: "#"},
            {id: 17, text: "Bookkeepers", link: "#"},
            {id: 18, text: "Data Miners", link: "#"},
            {id: 19, text: "Executive Assistants", link: "#"},
            {id: 20, text: "Graphics Designers", link: "#"},
            {id: 21, text: "Microsoft Office Experts", link: "#"},
            {id: 22, text: "PowerPoint Experts", link: "#"},
            {id: 23, text: "Reseerches Assistants", link: "#"},
            {id: 24, text: "Virtual Assistants", link: "#"},
            {id: 25, text: "Custommer Support", link: "#"},
            {id: 26, text: "Editors", link: "#"},
            {id: 27, text: "Google Docs Experts", link: "#"},
            {id: 28, text: "HTML Developers", link: "#"},
            {id: 29, text: "Microsoft Outlook Specialists", link: "#"},
        ]
    }

  return (
    <div className="min-h-screen flex flex-col">
        {/* ============== Head Tag =============== */}
        <HeadTag title="Top Admin & Customer support Talent Experts for Hire in July 2022 | Brenda"/>

        {/* ================= Header ================= */}
        <header className="header-bg">
            {/* ============== Navbar ============ */}
            <Navbar/>
                
            {/* ============ Head Container ============ */}
            <BannerContainer 
                heading={"Find key admin support for your business"}
                des={"Unlock new levels of team support with the administrative talent you need to stay ahead of the game."}
                btnI = {{text: "Find Talent", link: "#"}}
                btnII = {{text: "Find work", link: "#"}}
                img={"/images/admin.png"}
            />
        </header>

        {/* ================= Main ==================== */}
        <main>
        
            {/* ================= Trusted Company Section ================ */}
           <TrustedCom/>

            {/* ================= Developer section ================ */}
           <TrustedExp
                headText="Specialized admin and customer support professionals you can count on"
                rating="4.87/5"
                ratingText="Average rating for work with admin and customer support talent."
                contracts="60K+ contracts"
                contractsText="Involving admin and customer support work in the past year."
                skills="332 skills"
                skillsText="Represented by talent on Brenda"
                cardData={CardData}
            />

            {/* ============== Prossesing work Section ================== */}
            <PreWork
                headText="Admin and customer support projects for your most pressing work"
                headDes="Get your projects done on time and within your budget with expert management of the necessary tasks, people, and resources."
                list={WorkList}
                imageI="/images/admin-custom.png"
                imageII="/images/customer-support.png"
                imageIII="/images/va.png"
                imageIv="/images/ecomarce.png"
                imageV="/images/data-entry.png"
                imageVi="/images/tns.jpg"
                btn={{text: "Browse Project"}}
            />

            {/* ========================== Flexible Section =========================== */}
            <Flexible
                firstHead="Project managers who make it look easy"
                firstSubHead="A project management pro aced a massive rebranding project"
                first_F_LeftRating="5/5"
                first_F_RightText="Budget:"
                first_F_RightValue="$36,000"
                firstDes='"Elham was exceptional in every way. Her project management is a 10 out of 10. Her communication is the same. She managed a highly complex project and made it look easy and it was not. She always had a positive attitude and kept her cool even during highly stressful periods in the project. Her team loved her. The project was on-time, on-budget and very profitable!"'
                first_S_LeftText="Skills:"
                first_S_F_RightValue="Data Entry"
                first_S_S_RightValue="Scheduling"
                first_S_T_RightValue="Managment"
                firstImage="/images/project-manager.png"
                
                secondImage="/images/manager-vison.png"
                secondHead="How independent talent helped Tophatter increase its CSAT score by 30%"
                secondDes="Tophatter, an online auction site for shoppers worldwide, was preparing to expand and needed dozens more multilingual customer support specialists. They struggled finding enough qualified talent and finding talent within budget. By leveraging independent professionals on Brenda, they were able to quickly find the customer support specialists they needed, and within budget.”"
                secondRightText="312% increase in support capacity"
                secondLeftBtn={{text: "Read Case Study", link: "#"}}
            />

            {/* ========================== Freequenly Ask Question Section ========================== */}
            <QuestionAsk
                firstHeadText="What is admin and customer support?"
                firstDesText="Administration is the process of managing and overseeing the day-to-day operations of a business. Customer support is the process of assisting customers in order to help them resolve issues or problems with a product or service."

                secondHeadText="What is the first step to hiring admin and customer support talent and determining the project cost?"
                secondDesText="One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with admin and customer support, but what specific things are you trying to do? Brenda matches you with proven remote talent who can help you with all your admin and customer support needs, including"

                thirdHeadText="What are the various ways I can connect with admin and customer support talent through Brenda?"
                thirdDesText="When it comes to admin and customer support, you may need a multidisciplinary team to handle the various components of your project. Examples of professionals you might need for admin and customer support projects include"

                fourHeadText="Why should I use Brenda to find talent for finance and accounting services?"
                fourDesText="When it comes to finance and accounting, you may need a multidisciplinary team of talent to handle the various components of your project. Examples of professionals you might need for finance and accounting projects include"

                lastLeftText="Still have questions?"
                lastRightBtn={{text: "Visit our help center", link: "#"}}
            />

            {/* ================== Find Freelancer Section ====================== */}
            <FindFreelancer
                headText="Find freelancers with the finance and accounting skills you need"
                FindFreelancerList={FreelancerList}
            />
        </main>
        
        {/* ==================== Footer ====================== */}
        <Footer/>
    </div>
  )
}

export default AdminCustomSupport;