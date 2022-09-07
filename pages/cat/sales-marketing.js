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

{/* ============== Sales and Marketing page =================== */}
const SalesMarketing = () => {

    // ================ Card Data =================
    const CardData = [
        {
            id: 1,
            groupName: "SEM Spacialists",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/bk1.jpeg"},
                {id: 2, img: "/images/sem2.webp"},
                {id: 3, img: "/images/mg3.jpeg"},
            ],
            link: "#"
        },        

        {
            id: 2,
            groupName: "SEO Spacialists",
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
            groupName: "Social Media Marketing",
            rating: "4.9/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/mg3.jpeg"},
                {id: 2, img: "/images/mg1.jpeg"},
                {id: 3, img: "/images/md1.jpg"},
            ],
            link: "#"
        },

        {
            id: 4,
            groupName: "Paid Media Experts",
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
            groupName: "Email Marketing",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/em1.jpeg"},
                {id: 2, img: "/images/em2.jpeg"},
                {id: 3, img: "/images/em3.jpeg"},
            ],
            link: "#"
        },   

        {
            id: 6,
            groupName: "Marketing Analysts",
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
            groupName: "Marketing Researchers",
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
            groupName: "Sales Representative",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/cadeng1.png"},
                {id: 2, img: "/images/bk2.jpeg"},
                {id: 3, img: "/images/em2.jpeg"},
            ],
            link: "#"
        },      
    ];

    // ======================= List =============================
    const WorkList = [
        {
            id: 1,
            name: "Social Media Managment",
        },

        {
            id: 2,
            name: "Lead Generation",
        },

        {
            id: 3,
            name: "SEO",
        },

        {
            id: 4,
            name: "Facebook Advertising",
        },

        {
            id: 5,
            name: "Marketing Startegy",
        },

        {
            id: 6,
            name: "Video Marketing",
        }
    ]

    // ===================== Find Freelancer List ==========================
    const FreelancerList = {

        headText: "Sales & Marketing Roles",

        listItem: [
            {id: 1, text: "Adward Expert", link: "#"},
            {id: 2, text: "Content Marketars", link: "#"},
            {id: 3, text: "Facebook Marketers", link: "#"},
            {id: 4, text: "Internate Marketers", link: "#"},
            {id: 5, text: "Marketing Automotion", link: "#"},
            {id: 6, text: "PPC Specialists", link: "#"},
            {id: 7, text: "Social Media Manager", link: "#"},
            {id: 8, text: "Youtube Marketers", link: "#"},
            {id: 9, text: "Affiliate Marketing", link: "#"},
            {id: 10, text: "Digital Marketers", link: "#"},
            {id: 11, text: "Google Anlytics Consultants", link: "#"},
            {id: 12, text: "Lead Generators", link: "#"},
            {id: 13, text: "Marketing Consultants", link: "#"},
            {id: 14, text: "Search Engine Optimization", link: "#"},
            {id: 15, text: "Social Media Marketing", link: "#"},
            {id: 16, text: "Amazon SEO Experts", link: "#"},
            {id: 17, text: "Email Marketing", link: "#"},
            {id: 18, text: "Google Tag Managers", link: "#"},
            {id: 19, text: "Link Builders", link: "#"},
            {id: 20, text: "Marketing Strategists", link: "#"},
            {id: 21, text: "SEO Audit Freelancer", link: "#"},
            {id: 22, text: "Telemerketers", link: "#"},
            {id: 23, text: "Blog Writters", link: "#"},
            {id: 24, text: "Email Marketing Consultants", link: "#"},
            {id: 25, text: "Instagram Marketing", link: "#"},
            {id: 26, text: "Mailchimp Freelancer", link: "#"},
            {id: 27, text: "Pinterest Marketers", link: "#"},
            {id: 28, text: "SEO Experts", link: "#"},
            {id: 29, text: "Yoast SEO Freelancer", link: "#"},
        ]
    }

  return (
    <div className="min-h-screen flex flex-col">
        {/* ============== Head Tag =============== */}
        <HeadTag title="Top Sales & Marketing Experts for Hire in July 2022 | Brenda"/>

        {/* ================= Header ================= */}
        <header className="header-bg">
            {/* ============== Navbar ============ */}
            <Navbar/>
                
            {/* ============ Head Container ============ */}
            <BannerContainer 
                heading={"Scale when you need to with marketing and sales experts "}
                des={"Build some buzz around your business with professionals from the world’s work marketplace."}
                btnI = {{text: "Find Talent", link: "#"}}
                btnII = {{text: "Find work", link: "#"}}
                img={"/images/sales.png"}
            />
        </header>

        {/* ================= Main ==================== */}
        <main>
        
            {/* ================= Trusted Company Section ================ */}
           <TrustedCom/>

            {/* ================= Developer section ================ */}
           <TrustedExp
                headText="Specialized sales experts and marketing professionals you can count on"
                rating="4.78/5"
                ratingText="Average client rating for work with sales and marketing talent."
                contracts="65K+ contracts"
                contractsText="Involving sales and marketing work in the past year."
                skills="358 skills"
                skillsText="Represented by talent on Brenda"
                cardData={CardData}
            />

            {/* ============== Prossesing work Section ================== */}
            <PreWork
                headText="Sales and marketing projects for your most pressing work"
                headDes="Grow your following on Facebook, Instagram, and LinkedIn with a full range of social media management services."
                list={WorkList}
                imageI="/images/scm.png"
                imageII="/images/ld.png"
                imageIII="/images/seo2.png"
                imageIv="/images/fca.png"
                imageV="/images/ms.png"
                imageVi="/images/vdm.png"
                btn={{text: "Browse Project"}}
            />

            {/* ========================== Flexible Section =========================== */}
            <Flexible
                firstHead="How Brenda works for clients"
                firstSubHead="A graphic design pro creates a logo, branding, and style guide"
                first_F_LeftRating="5/5"
                first_F_RightText="Budget:"
                first_F_RightValue="$1,580"
                firstDes="If you have an opportunity to hire Felice, dont delay! He has great ideas, but is open to feedback and changes. He was always well prepared, kept me informed, met his timelines, and delivered what he said and more. My best experience on Upwork. In fact, I've started up another project with him and am still working with him."
                first_S_LeftText="Skills:"
                first_S_F_RightValue="Brand Indentity"
                first_S_S_RightValue="Logo"
                first_S_T_RightValue="Graphics"
                firstImage="/images/gra.png"
                
                secondImage="/images/sales-team.png"
                secondHead="Nasdaq transforms itself into a digital media leader"
                secondDes="How freelance talent brought a fresh perspective to Nasdaq’s social media”"
                secondRightText="80-100 Facebook Live shows per month"
                secondLeftBtn={{text: "Read Case Study", link: "#"}}
            />

            {/* ========================== Freequenly Ask Question Section ========================== */}
            <QuestionAsk
                firstHeadText="What is sales and marketing?"
                firstDesText="Sales refers to all activities directly involved in the exchange of goods and services for revenue. It deals primarily with salespeople and the infrastructure that allows them to build relationships with customers. Marketing is the process of identifying, anticipating, and even shaping customers’ needs and desires. Marketing includes all aspects of advertising, promoting, and communicating information about products and services to consumers or other businesses in a persuasive manner. Together sales and marketing are like two sides of the same coin—marketing drives the interest needed to attract leads to your business, and sales is responsible for turning those leads directly into revenue. You need both for a successful business."

                secondHeadText="What is the first step to hiring sales and marketing talent and determining the project cost?"
                secondDesText="One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with sales and marketing, but what specific things are you trying to do? Upwork matches you with proven remote talent who can help you with all your sales and marketing needs, including"

                thirdHeadText="What are the various ways I can connect with sales and marketing talent through Brenda?"
                thirdDesText=" If you need help finding talent for your marketing project, Upwork gives you the flexibility you need to succeed.Talent Marketplace: Find and source independent professionals for your sales or marketing project directly from Upwork’s talent marketplace.
                Project Catalog: Project Catalog is a new way to quickly get started and expand your capabilities through Upwork. From market research and strategy to SEO and SEM services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed."

                fourHeadText="Why should I use Upwork to find talent for sales and marketing services?"
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

export default SalesMarketing;