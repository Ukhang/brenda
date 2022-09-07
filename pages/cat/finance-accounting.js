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

{/* ============== Finance and Accounting page =================== */}
const FinanceAccounting = () => {

    // ================ Card Data =================
    const CardData = [
        {
            id: 1,
            groupName: "Accountants",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/ac1.jpeg"},
                {id: 2, img: "/images/ac2.jpeg"},
                {id: 3, img: "/images/ac3.jpeg"},
            ],
            link: "#"
        },        

        {
            id: 2,
            groupName: "Financial Analysts",
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
            groupName: "Interim CFOs",
            rating: "4.9/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/ic1.gif"},
                {id: 2, img: "/images/ic2.jpeg"},
                {id: 3, img: "/images/ic3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 4,
            groupName: "Mangament Consultants",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/mg1.jpeg"},
                {id: 2, img: "/images/mg2.jpeg"},
                {id: 3, img: "/images/mg3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 5,
            groupName: "Financial Modelers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/fm1.jpeg"},
                {id: 2, img: "/images/fm2.jpeg"},
                {id: 3, img: "/images/fm3.jpeg"},
            ],
            link: "#"
        },   

        {
            id: 6,
            groupName: "Fundraising Consultants",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/fc1.jpeg"},
                {id: 2, img: "/images/fc2.jpeg"},
                {id: 3, img: "/images/fc3.jpeg"},
            ],
            link: "#"
        },   

        {
            id: 7,
            groupName: "Tax Consultants",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/tc1.jpeg"},
                {id: 2, img: "/images/tc2.jpeg"},
                {id: 3, img: "/images/tc3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 8,
            groupName: "Bookkeepers",
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
            name: "Financial Analysis",
        },

        {
            id: 2,
            name: "Accouting & Bookkeeping",
        },

        {
            id: 3,
            name: "Financial Foecasting & Modeling",
        },

        {
            id: 4,
            name: "Tax Consulting",
        },

        {
            id: 5,
            name: "Financial Wealth Mangment",
        },

        {
            id: 6,
            name: "Stock Analysis",
        }
    ]

    // ===================== Find Freelancer List ==========================
    const FreelancerList = {

        headText: "Finance & Accounting Roles",

        listItem: [
            {id: 1, text: "Accounts", link: "#"},
            {id: 2, text: "Business Consultants", link: "#"},
            {id: 3, text: "CPAs", link: "#"},
            {id: 4, text: "Marketing Research", link: "#"},
            {id: 5, text: "Business Analytics", link: "#"},
            {id: 6, text: "Financial Modeler", link: "#"},
            {id: 7, text: "Financial Planer", link: "#"},
            {id: 8, text: "Accounts Payable Managers", link: "#"},
            {id: 9, text: "Civil Law Lawyers & Legal", link: "#"},
            {id: 10, text: "Data Entry Spacialists", link: "#"},
            {id: 11, text: "Financial Reporting Analysis", link: "#"},
            {id: 12, text: "Payroll Progressing Speciallist", link: "#"},
            {id: 13, text: "Business Development", link: "#"},
            {id: 14, text: "Tax Prepares", link: "#"},
            {id: 15, text: "Wave Accounting SPaciallist", link: "#"},
            {id: 16, text: "Bookkepers", link: "#"},
            {id: 17, text: "Consultants", link: "#"},
            {id: 18, text: "Excel Experts", link: "#"},
            {id: 19, text: "Intellectual Property Law", link: "#"},
            {id: 20, text: "Project Managers", link: "#"},
            {id: 21, text: "Financial Accountes", link: "#"},
            {id: 22, text: "Forex Accounts", link: "#"},
            {id: 23, text: "Intuit QuickBooks Spaciallists", link: "#"},
            {id: 24, text: "Contarct Law Legal", link: "#"},
            {id: 25, text: "Financial Anlysts", link: "#"},
            {id: 26, text: "Intuit Turbo Tax Spaciallists", link: "#"},
            {id: 27, text: "Legal Advisor", link: "#"},
            {id: 28, text: "Financial Forecasting", link: "#"},
            {id: 29, text: "Spreadsheet Experts", link: "#"},
        ]
    }

  return (
    <div className="min-h-screen flex flex-col">
        {/* ============== Head Tag =============== */}
        <HeadTag title="Top Finance & Accouting Talent Experts for Hire in July 2022 | Brenda"/>

        {/* ================= Header ================= */}
        <header className="header-bg">
            {/* ============== Navbar ============ */}
            <Navbar/>
                
            {/* ============ Head Container ============ */}
            <BannerContainer 
                heading={"Adapt fast with freelance finance and accounting experts"}
                des={"Thousands of pros are ready to help with invoicing, tax returns, bookkeeping, and more."}
                btnI = {{text: "Find Talent", link: "#"}}
                btnII = {{text: "Find work", link: "#"}}
                img={"/images/finance.png"}
            />
        </header>

        {/* ================= Main ==================== */}
        <main>
        
            {/* ================= Trusted Company Section ================ */}
           <TrustedCom/>

            {/* ================= Developer section ================ */}
           <TrustedExp
                headText="Specialized accounting and finance experts you can count on"
                rating="4.87/5"
                ratingText="Average rating for work with finance and accounting talent"
                contracts="9.7K+ contracts"
                contractsText="Involving finance and accounting work in the past year"
                skills="102 skills"
                skillsText="Represented by talent on Brenda"
                cardData={CardData}
            />

            {/* ============== Prossesing work Section ================== */}
            <PreWork
                headText="Finance and accounting projects for your most pressing work"
                headDes="Make informed business, Financial & Bookeeping, Tax Consulting, Financial Welth decisions with budget forecasting, KPI tracking, pricing analysis, and more."
                list={WorkList}
                imageI="/images/fac.png"
                imageII="/images/aandbook.png"
                imageIII="/images/fcil.png"
                imageIv="/images/tax.png"
                imageV="/images/fw.png"
                imageVi="/images/stock.png"
                btn={{text: "Browse Project"}}
            />

            {/* ========================== Flexible Section =========================== */}
            <Flexible
                firstHead="Financial analysis that shapes strategy"
                firstSubHead="A financial analyst tackles the details in SaaS financial modeling"
                first_F_LeftRating="5/5"
                first_F_RightText="Budget:"
                first_F_RightValue="$3,850"
                firstDes='“I really enjoyed working with Henry on two projects. He is very committed to the deadlines, excellent communicator, and detail oriented.”'
                first_S_LeftText="Skills:"
                first_S_F_RightValue="Analysis"
                first_S_S_RightValue="Modeling"
                first_S_T_RightValue="Budgeting"
                firstImage="/images/fa.png"
                
                secondImage="/images/wbf.png"
                secondHead="Using freelancers to boost work/life balance"
                secondDes="Accounting departments face busy reporting periods every month and quarter, increasing work hours and overall affecting the work/life balance of full-time employees. By matching independent talent to deadline-oriented work, the team was able to get more done while focusing on higher-value work and improved retention and morale.”"
                secondRightText="6+ hours less overtime per employee"
                secondLeftBtn={{text: "Read Case Study", link: "#"}}
            />

            {/* ========================== Freequenly Ask Question Section ========================== */}
            <QuestionAsk
                firstHeadText="What is finance and accounting?"
                firstDesText="Finance is the process of managing money and other financial resources for a business. Accounting is the process of recording, classifying, and summarizing financial transactions."

                secondHeadText="What is the first step to hiring finance and accounting talent and determining the project cost?"
                secondDesText="One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with finance and accounting, but what specific things are you trying to do? Upwork matches you with proven remote talent who can help you with all your finance and accounting needs, including"

                thirdHeadText="What are the various ways I can connect with finance and accounting talent through Branda?"
                thirdDesText=" Upwork gives you the flexibility you need to find the right talent for your finance and accounting projects. To trade show booth engineering services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed."

                fourHeadText="Why should I use Upwork to find talent for finance and accounting services?"
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

export default FinanceAccounting;