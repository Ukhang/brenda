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

{/* ============== Legal page =================== */}
const Legal = () => {

    // ================ Card Data =================
    const CardData = [
        {
            id: 1,
            groupName: "Contract Law Professional",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/eng1.jpg"},
                {id: 2, img: "/images/eng2.jpg"},
                {id: 3, img: "/images/eng3.jpg"},
            ],
            link: "#"
        },        

        {
            id: 2,
            groupName: "Corporite Law Professionals",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/cveng1.jpg"},
                {id: 2, img: "/images/cveng2.jpg"},
                {id: 3, img: "/images/cveng3.jpg"},
            ],
            link: "#"
        },

        {
            id: 3,
            groupName: "Employment & Labor Law Professionals",
            rating: "4.7/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/eleng1.jpg"},
                {id: 2, img: "/images/eleng2.jpg"},
                {id: 3, img: "/images/eleng3.jpg"},
            ],
            link: "#"
        },

        {
            id: 4,
            groupName: "Intellectural Property Law Professionals",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/cheng1.jpg"},
                {id: 2, img: "/images/cheng2.jpg"},
                {id: 3, img: "/images/cheng3.jpg"},
            ],
            link: "#"
        },

        {
            id: 5,
            groupName: "Legal Resercheres",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/areng1.jpg"},
                {id: 2, img: "/images/areng2.jpg"},
                {id: 3, img: "/images/areng3.jpg"},
            ],
            link: "#"
        },   

        {
            id: 6,
            groupName: "Paralegals",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/md1.jpg"},
                {id: 2, img: "/images/md2.jpg"},
                {id: 3, img: "/images/md3.jpg"},
            ],
            link: "#"
        },   

        {
            id: 7,
            groupName: "Tax Law Professionals",
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
            groupName: "Regulatory Compliance Spacialists",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/cadeng1.png"},
                {id: 2, img: "/images/cadeng2.png"},
                {id: 3, img: "/images/cadeng3.png"},
            ],
            link: "#"
        },      
    ];

    // ======================= List =============================
    const WorkList = [
        {
            id: 1,
            name: "Legal Consulting",
        },

        {
            id: 2,
            name: "Trademark Registrations",
        },

        {
            id: 3,
            name: "Legal Writing",
        },

        {
            id: 4,
            name: "Documentation & Contract Review",
        },

        {
            id: 5,
            name: "Legal Translation",
        },

        {
            id: 6,
            name: "Legal Law",
        }
    ]

    // ===================== Find Freelancer List ==========================
    const FreelancerList = {

        headText: "Legals Roles",

        listItem: [
            {id: 1, text: "Real Estate Law Professional", link: "#"},
            {id: 2, text: "Legal Assistants", link: "#"},
            {id: 3, text: "Artibrition Law Professionals", link: "#"},
            {id: 4, text: "Notaries", link: "#"},
            {id: 5, text: "Compliance Specialist", link: "#"},
            {id: 6, text: "Trademark Constultans", link: "#"},
            {id: 7, text: "Brand Lincence Professionals", link: "#"},
            {id: 8, text: "Immigration Law", link: "#"},
            {id: 9, text: "Contarct Drafters", link: "#"},
            {id: 10, text: "Legal Constultants", link: "#"},
            {id: 11, text: "Deposite Summery", link: "#"},
            {id: 12, text: "Bankruptcy Professionals", link: "#"},
            {id: 13, text: "Copyright Law Professionals", link: "#"},
            {id: 14, text: "Family Law Professionals", link: "#"},
            {id: 15, text: "Workplace Safty & Health", link: "#"},
            {id: 16, text: "Panty Law Professionals", link: "#"},
            {id: 17, text: "Criminal Law Professionals", link: "#"},
        ]
    }

  return (
    <div className="min-h-screen flex flex-col">
        {/* ============== Head Tag =============== */}
        <HeadTag title="Top Legal Professional Experts for Hire in July 2022 | Brenda"/>

        {/* ================= Header ================= */}
        <header className="header-bg">
            {/* ============== Navbar ============ */}
            <Navbar/>
                
            {/* ============ Head Container ============ */}
            <BannerContainer 
                heading={"Find legal experts to give you the guidance you need"}
                des={"Hundreds of independent professionals to help you create, navigate, and translate legal documents; register a trademark; or get general advice. "}
                btnI = {{text: "Find Talent", link: "#"}}
                btnII = {{text: "Find work", link: "#"}}
                img={"/images/legal.png"}
            />
        </header>

        {/* ================= Main ==================== */}
        <main>
        
            {/* ================= Trusted Company Section ================ */}
           <TrustedCom/>

            {/* ================= Developer section ================ */}
           <TrustedExp
                headText="Specialized legal experts you can count on"
                rating="4.94/5"
                ratingText="Average rating for work with legal professionals."
                contracts="7,700+ contracts"
                contractsText="Involving legal work in the last year."
                skills="136 skills"
                skillsText="epresented by talent on Brenda"
                cardData={CardData}
            />

            {/* ============== Prossesing work Section ================== */}
            <PreWork
                headText="GLegal projects to help you get what you need, fast"
                headDes="Get advice on all things legal.
                Protect your IP with a legal professional who’ll guide you through trademark searches, applications, and registration across just about every territory on the planet.Create wills, contracts, NDAs, and more.
                Get an expert to cut through th"
                list={WorkList}
                imageI="/images/legal-c.jpg"
                imageII="/images/legal-r.jpeg"
                imageIII="/images/legal-w.jpg"
                imageIv="/images/legal-con.jpg"
                imageV="/images/legal-t.jpg"
                imageVi="/images/legal.png"
                btn={{text: "Browse Project"}}
            />

            {/* ========================== Flexible Section =========================== */}
            <Flexible
                firstHead="Lawyers with deep expertise"
                firstSubHead="A small business lawyer enabled a quick valuation and exit of an LLC partner"
                first_F_LeftRating="5/5"
                first_F_RightText="Budget:"
                first_F_RightValue="$2,062"
                firstDes='"Ben was prompt and clear in communication. He helped to draft a few business legal documents with haste and modifications were quickly executed as well. Highly recommended to all."'
                first_S_LeftText="Skills:"
                first_S_F_RightValue="Business Law"
                first_S_S_RightValue="Limited"
                first_S_T_RightValue="Agrements"
                firstImage="/images/legal.png"
                
                secondImage="/images/free.webp"
                secondHead="Flexera discovers the freedom of the work marketplace"
                secondDes="By engaging independent talent, Flexera found the expertise needed to help accelerate its growth. It strengthened its IT system and turned projects around twice as fast. CEO Jim Ryan said this enabled the company to quickly find talent for the breadth of skills needed to keep up with market changes: “They knew exactly what needed to be done, jumped in, and got it done.”"
                secondRightText="50% Faster project turnaround time"
                secondLeftBtn={{text: "Read Case Study", link: "#"}}
            />

            {/* ========================== Freequenly Ask Question Section ========================== */}
            <QuestionAsk
                firstHeadText="What is legal?"
                firstDesText="Engineering and architecture refers to the use of science and math to design, plan, and create practical solutions to real-world problems. In business, engineering and architecture refers to the use of technical expertise to create products and services."

                secondHeadText="What is the first step to hiring legal talent and determining the project cost?"
                secondDesText="One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with engineering and architecture, but what specific things are you trying to do? Upwork matches you with proven remote talent who can help you with all your needs, including."

                thirdHeadText="What are the various ways I can connect with legal talent through Brenda?"
                thirdDesText=" Upwork gives you the flexibility you need to find the right talent for your projects.
                Talent Marketplace: Find and source independent professionals for your projects directly from Upwork’s talent marketplace.Project Catalog: Project Catalog is a new way to quickly get started and expand your capabilities through Upwork. From building information modeling services to trade show booth engineering services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed."

                fourHeadText="Why should I use Upwork to find talent for legal services?"
                fourDesText="When it comes to engineering and architecture, you may need a multidisciplinary team to handle the various components of your project."

                lastLeftText="Still have questions?"
                lastRightBtn={{text: "Visit our help center", link: "#"}}
            />

            {/* ================== Find Freelancer Section ====================== */}
            <FindFreelancer
                headText="Find freelancers with the Engineering & Architecture skills you need"
                FindFreelancerList={FreelancerList}
            />
        </main>
        
        {/* ==================== Footer ====================== */}
        <Footer/>
    </div>
  )
}

export default Legal;