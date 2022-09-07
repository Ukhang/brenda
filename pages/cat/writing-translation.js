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

{/* ============== Writing and Translation page =================== */}
const WritingTranslation = () => {

    // ================ Card Data =================
    const CardData = [
        {
            id: 1,
            groupName: "Contnent Writers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/ac1.jpeg"},
                {id: 2, img: "/images/cveng3.jpg"},
                {id: 3, img: "/images/eng3.jpg"},
            ],
            link: "#"
        },        

        {
            id: 2,
            groupName: "Translator",
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
            id: 3,
            groupName: "Editors",
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
            groupName: "Gost Writers",
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
            id: 5,
            groupName: "Copy Writers",
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
            groupName: "Proofreaders",
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
            groupName: "Creative Writers",
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
            groupName: "Grant Writers",
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
            name: "Articales & Blogs",
        },

        {
            id: 2,
            name: "Profreading & Edditing",
        },

        {
            id: 3,
            name: "Translation & Localization",
        },

        {
            id: 4,
            name: "Website Content",
        },

        {
            id: 5,
            name: "Resume Writers",
        },

        {
            id: 6,
            name: "Books & eBooks",
        }
    ]

    // ===================== Find Freelancer List ==========================
    const FreelancerList = {

        headText: "Writing & Translation Roles",

        listItem: [
            {id: 1, text: "Academic Writers", link: "#"},
            {id: 2, text: "Business plan Writers", link: "#"},
            {id: 3, text: "Copy Writers", link: "#"},
            {id: 4, text: "Essay Writers", link: "#"},
            {id: 5, text: "Legal Writers", link: "#"},
            {id: 6, text: "Pres Realse Writers", link: "#"},
            {id: 7, text: "Research Paper Writers", link: "#"},
            {id: 8, text: "ScreenWriters", link: "#"},
            {id: 9, text: "Travel Writers", link: "#"},
            {id: 10, text: "Articale Writers", link: "#"},
            {id: 11, text: "Business Writers", link: "#"},
            {id: 12, text: "CopyWriters", link: "#"},
            {id: 13, text: "Fact Checkers", link: "#"},
            {id: 14, text: "Lyrics Writers", link: "#"},
            {id: 15, text: "Proposal Writers", link: "#"},
            {id: 16, text: "Resume Writers", link: "#"},
            {id: 17, text: "SEO Writers", link: "#"},
            {id: 18, text: "White Paper Writers", link: "#"},
            {id: 19, text: "Biography Writers", link: "#"},
            {id: 20, text: "Comedy Writers", link: "#"},
            {id: 21, text: "Cover Latter Writers", link: "#"},
            {id: 22, text: "Fasion Writers", link: "#"},
            {id: 23, text: "Medical Writers", link: "#"},
            {id: 24, text: "RFP Writers", link: "#"},
            {id: 25, text: "Sales Writers", link: "#"},
            {id: 26, text: "Speech Writers", link: "#"},
            {id: 27, text: "Blog Writers", link: "#"},
            {id: 28, text: "Content Writers", link: "#"},
            {id: 29, text: "eBook Writers", link: "#"},
            {id: 30, text: "Fiction Writers", link: "#"},
            {id: 31, text: "Online Writers", link: "#"},
            {id: 32, text: "Report Writers", link: "#"},
            {id: 33, text: "Scientific Writers", link: "#"},
            {id: 34, text: "Technical Writers", link: "#"},
        ]
    }

  return (
    <div className="min-h-screen flex flex-col">
        {/* ============== Head Tag =============== */}
        <HeadTag title="Top Writers & Translators Experts for Hire in July 2022 | Brenda"/>

        {/* ================= Header ================= */}
        <header className="header-bg">
            {/* ============== Navbar ============ */}
            <Navbar/>
                
            {/* ============ Head Container ============ */}
            <BannerContainer 
                heading={"Hire freelance writing and translation experts in moments"}
                des={"Thousands of pros are ready to finesse your language and help you go global. "}
                btnI = {{text: "Find Talent", link: "#"}}
                btnII = {{text: "Find work", link: "#"}}
                img={"/images/writter.png"}
            />
        </header>

        {/* ================= Main ==================== */}
        <main>
        
            {/* ================= Trusted Company Section ================ */}
           <TrustedCom/>

            {/* ================= Developer section ================ */}
           <TrustedExp
                headText="Specialized writing experts and translation professionals you can count on "
                rating="4.86/5"
                ratingText="Average rating for work with writing and translation talent"
                contracts="146K+ contracts"
                contractsText="Involving writing and translation work in the past year"
                skills="331 skills"
                skillsText="Represented by talent on Brenda"
                cardData={CardData}
            />

            {/* ============== Prossesing work Section ================== */}
            <PreWork
                headText="Writing and translation projects for your most pressing work"
                headDes="Produce engaging articles and blog content, prefreading and editing, Translation, website content, resume writter, ebook that resonates with your audience and target market."
                list={WorkList}
                imageI="/images/articles.png"
                imageII="/images/preediting.png"
                imageIII="/images/translation.png"
                imageIv="/images/webcontent.png"
                imageV="/images/resumewritters.png"
                imageVi="/images/ebook.png"
                btn={{text: "Browse Project"}}
            />

            {/* ========================== Flexible Section =========================== */}
            <Flexible
                firstHead="Translation that connects cultures"
                firstSubHead="A translator works her way up to community support lead"
                first_F_LeftRating="5/5"
                first_F_RightText="Budget:"
                first_F_RightValue="$6,426"
                firstDes="Angelica is a very professional translator and is committed to successfully delivering quality work. After working for us as a Latin Spanish translator for over a year, she is now leading our community support in Latin America. It's always a pleasure to work with her and I can strongly recommend Angelica."
                first_S_LeftText="Skills:"
                first_S_F_RightValue="Localization"
                first_S_S_RightValue="Proofreading"
                first_S_T_RightValue="Spanish"
                firstImage="/images/tranlation-content.png"
                
                secondImage="/images/team-time.png"
                secondHead="How Penn Foster cut hiring time down to one hour"
                secondDes="Penn Foster works with over 100 independent content specialists a year to design and write course content. Finding niche experts that can cover a variety of topics was a challenge. By using Upwork, the team gained access to the largest global talent pool and saved thousands of hours each year.”"
                secondRightText="20x faster time to hire"
                secondLeftBtn={{text: "Read Case Study", link: "#"}}
            />

            {/* ========================== Freequenly Ask Question Section ========================== */}
            <QuestionAsk
                firstHeadText="What is writing and translation?"
                firstDesText="Writing is the process of creating written content for a variety of purposes. It can be used to communicate information, tell a story, or persuade an audience. Translation is the process of converting written content from one language to another, allowing businesses to communicate with their customers in their native language. ."

                secondHeadText="What is the first step to hiring writing and translation talent and determining the project cost?"
                secondDesText="One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with sales and marketing, but what specific things are you trying to do? Upwork matches you with proven remote talent who can help you with all your sales and marketing needs, including"

                thirdHeadText="What are the various ways you can connect with writing and translation talent through Brenda?"
                thirdDesText=" If you need help finding talent for your marketing project, Upwork gives you the flexibility you need to succeed.Talent Marketplace: Find and source independent professionals for your sales or marketing project directly from Upwork’s talent marketplace.
                Project Catalog: Project Catalog is a new way to quickly get started and expand your capabilities through Upwork. From market research and strategy to SEO and SEM services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed."

                fourHeadText="Why should I use Brenda to find talent for writing and translation services?"
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

export default WritingTranslation;