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

{/* ============== Engineering and Architecture page =================== */}
const EngineeringArchitecture = () => {

    // ================ Card Data =================
    const CardData = [
        {
            id: 1,
            groupName: "Machanical Engineers",
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
            groupName: "Civil Engineers",
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
            groupName: "Electrical Engineers",
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
            groupName: "Chemical Engineers",
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
            groupName: "Architectural Designers",
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
            groupName: "3D Modelers",
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
            groupName: "Industrial Designers",
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
            groupName: "CAD Engineers",
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
            name: "Bulding Information Modeling",
        },

        {
            id: 2,
            name: "Architectural Floor Plans",
        },

        {
            id: 3,
            name: "Architectural 3D Models & Rendering",
        },

        {
            id: 4,
            name: "LandScape Design",
        },

        {
            id: 5,
            name: "Trade Show Booth Design",
        },

        {
            id: 6,
            name: "Industrial & Product Design",
        }
    ]

    // ===================== Find Freelancer List ==========================
    const FreelancerList = {

        headText: "Engineering & Architecture Roles",

        listItem: [
            {id: 1, text: "3D Printing Experts", link: "#"},
            {id: 2, text: "Biologists", link: "#"},
            {id: 3, text: "Engineering Drawing", link: "#"},
            {id: 4, text: "Mathematics Specialists", link: "#"},
            {id: 5, text: "SketchUp Specialists", link: "#"},
            {id: 6, text: "3D Rendering Artists", link: "#"},
            {id: 7, text: "Chemists", link: "#"},
            {id: 8, text: "Estimator Specialists", link: "#"},
            {id: 9, text: "PCB Designers", link: "#"},
            {id: 10, text: "SolidWorks Designers", link: "#"},
            {id: 11, text: "AutoCAD Specialists", link: "#"},
            {id: 12, text: "Contract Manufacturing", link: "#"},
            {id: 13, text: "Interior Designers", link: "#"},
            {id: 14, text: "Product Designers", link: "#"},
            {id: 15, text: "Sourcing Specialists", link: "#"},
            {id: 16, text: "Autodesk Fusion 360", link: "#"},
            {id: 17, text: "Drafting Specialists", link: "#"},
            {id: 18, text: "Logistics Specialists", link: "#"},
            {id: 19, text: "Robotics Engineers", link: "#"},
            {id: 20, text: "Welders", link: "#"}
        ]
    }

  return (
    <div className="min-h-screen flex flex-col">
        {/* ============== Head Tag =============== */}
        <HeadTag title="Top Engineering & Architecture Experts for Hire in July 2022 | Brenda"/>

        {/* ================= Header ================= */}
        <header className="header-bg">
            {/* ============== Navbar ============ */}
            <Navbar/>
                
            {/* ============ Head Container ============ */}
            <BannerContainer 
                heading={"Scale up fast with engineering and architecture experts"}
                des={"Hundreds of independent professionals who’ll design everything from floor plans to landscapes to interiors."}
                btnI = {{text: "Find Talent", link: "#"}}
                btnII = {{text: "Find work", link: "#"}}
                img={"/images/engarch.jpg"}
            />
        </header>

        {/* ================= Main ==================== */}
        <main>
        
            {/* ================= Trusted Company Section ================ */}
           <TrustedCom/>

            {/* ================= Developer section ================ */}
           <TrustedExp
                headText="Specialized engineering and architecture experts you can count on"
                rating="4.90/5"
                ratingText="Average rating for work with engineering and architecture talent."
                contracts="34,500+ contracts"
                contractsText="Involving engineering and architecture work in the last year."
                skills="670 skills"
                skillsText="epresented by talent on Brenda"
                cardData={CardData}
            />

            {/* ============== Prossesing work Section ================== */}
            <PreWork
                headText="Get your engineering and architecture projects done"
                headDes="Get 3D models, Architectural, Lanscape, Booth Industrial to help you plan and construct buildings and other facilities."
                list={WorkList}
                imageI="/images/3d-building.png"
                imageII="/images/3d-floor.png"
                imageIII="/images/3d-rendering.png"
                imageIv="/images/landscape.png"
                imageV="/images/3d-booth.png"
                imageVi="/images/3d-inddesign.png"
                btn={{text: "Browse Project"}}
            />

            {/* ========================== Flexible Section =========================== */}
            <Flexible
                firstHead="3D Modeling that brings your vision to life"
                firstSubHead="An architect leveraged Autodesk 3ds Max to model a client’s house"
                first_F_LeftRating="5/5"
                first_F_RightText="Budget:"
                first_F_RightValue="$3,699"
                firstDes='"Alaa is simply the best when it comes to 3D projects, most of all he is very reliable and has great communication."'
                first_S_LeftText="Skills:"
                first_S_F_RightValue="Autodesk"
                first_S_S_RightValue="Architectural"
                first_S_T_RightValue="3D Modeling"
                firstImage="/images/vision-house.png"
                
                secondImage="/images/free.webp"
                secondHead="How GE Delivers Work 50% Faster With Agile Talent Strategy"
                secondDes="When GE needs to create a new aircraft engine, for instance, they have a pool of external global experts at their fingertips. By turning to us, they’ve tripled the number of people in that pool—which means they can go from idea to product even faster.”"
                secondRightText="50% Faster project turnaround time"
                secondLeftBtn={{text: "Read Case Study", link: "#"}}
            />

            {/* ========================== Freequenly Ask Question Section ========================== */}
            <QuestionAsk
                firstHeadText="What is engineering and architecture?"
                firstDesText="Engineering and architecture refers to the use of science and math to design, plan, and create practical solutions to real-world problems. In business, engineering and architecture refers to the use of technical expertise to create products and services."

                secondHeadText="What is the first step to hiring engineering and architecture talent and determining the project cost?"
                secondDesText="One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with engineering and architecture, but what specific things are you trying to do? Upwork matches you with proven remote talent who can help you with all your needs, including."

                thirdHeadText="What are the various ways I can connect with engineering and architecture talent through Brenda?"
                thirdDesText=" Upwork gives you the flexibility you need to find the right talent for your projects.
                Talent Marketplace: Find and source independent professionals for your projects directly from Upwork’s talent marketplace.Project Catalog: Project Catalog is a new way to quickly get started and expand your capabilities through Upwork. From building information modeling services to trade show booth engineering services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed."

                fourHeadText="Why should I use Upwork to find talent for engineering and architecture services?"
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

export default EngineeringArchitecture;