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

{/* ============== Desgin and Creative page =================== */}
const DesignCreative = () => {

    // ================ Card Data =================
    const CardData = [
        {
            id: 1,
            groupName: "UI/UX Designers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/tc2.jpeg"},
                {id: 2, img: "/images/tc1.jpeg"},
                {id: 3, img: "/images/ui-ux3.jpeg"},
            ],
            link: "#"
        },        

        {
            id: 2,
            groupName: "Grapics Designers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/gra-des1.jpeg"},
                {id: 2, img: "/images/gra-des2.jpeg"},
                {id: 3, img: "/images/gra-des3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 3,
            groupName: "Art Directors",
            rating: "4.9/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/art-dir1.jpeg"},
                {id: 2, img: "/images/art-dir2.jpeg"},
                {id: 3, img: "/images/art-dir3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 4,
            groupName: "Web Designers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/web-des1.jpeg"},
                {id: 2, img: "/images/web-des2.jpeg"},
                {id: 3, img: "/images/web-des3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 5,
            groupName: "Motion Designers",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/mos-des1.jpeg"},
                {id: 2, img: "/images/mos-des2.jpeg"},
                {id: 3, img: "/images/mos-des3.jpeg"},
            ],
            link: "#"
        },   

        {
            id: 6,
            groupName: "Animators",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/anim1.jpeg"},
                {id: 2, img: "/images/anim2.jpeg"},
                {id: 3, img: "/images/anim3.jpeg"},
            ],
            link: "#"
        },   

        {
            id: 7,
            groupName: "Video Editors",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/v-e1.jpeg"},
                {id: 2, img: "/images/v-e2.jpeg"},
                {id: 3, img: "/images/v-e3.jpeg"},
            ],
            link: "#"
        },

        {
            id: 8,
            groupName: "Voice Artists",
            rating: "4.8/5",
            ratingText: "Avarage Rating",
            imgSection: [
                {id: 1, img: "/images/v-ac1.jpeg"},
                {id: 2, img: "/images/v-ac2.jpeg"},
                {id: 3, img: "/images/v-ac3.jpeg"},
            ],
            link: "#"
        },      
    ];

    // ======================= List =============================
    const WorkList = [
        {
            id: 1,
            name: "Logo Design",
        },

        {
            id: 2,
            name: "Photoshop Editing",
        },

        {
            id: 3,
            name: "Web & Mobile Design",
        },

        {
            id: 4,
            name: "Presentation Design",
        },

        {
            id: 5,
            name: "Architecture & Interior Design",
        },

        {
            id: 6,
            name: "Video Edditing",
        }
    ]

    // ===================== Find Freelancer List ==========================
    const FreelancerList = {

        headText: "Design & Creative Roles",

        listItem: [
            {id: 1, text: "2D Animators", link: "#"},
            {id: 2, text: "3D Designers", link: "#"},
            {id: 3, text: "Adobe InDesign Experts", link: "#"},
            {id: 4, text: "AudioBook Narrators", link: "#"},
            {id: 5, text: "Brochure Designers", link: "#"},
            {id: 6, text: "Infographic Designers", link: "#"},
            {id: 7, text: "Paking Designers", link: "#"},
            {id: 8, text: "Podcasting Freelancer", link: "#"},
            {id: 9, text: "2D Designers", link: "#"},
            {id: 10, text: "3D Modelers", link: "#"},
            {id: 11, text: "Adobe Photoshop Experts", link: "#"},
            {id: 12, text: "Banner Designers", link: "#"},
            {id: 13, text: "Business Card Designers", link: "#"},
            {id: 14, text: "Intrational Designers", link: "#"},
            {id: 15, text: "Photo Editors", link: "#"},
            {id: 16, text: "Poster Designers", link: "#"},
            {id: 17, text: "2D Game Artists", link: "#"},
            {id: 18, text: "Adobe After Effects Experts", link: "#"},
            {id: 19, text: "Animators", link: "#"},
            {id: 20, text: "Book Cover Designers", link: "#"},
            {id: 21, text: "Caricalture Artists", link: "#"},
            {id: 22, text: "Logo Designers", link: "#"},
            {id: 23, text: "Photo Retouchers", link: "#"},
            {id: 24, text: "T-shirt Designers", link: "#"},
            {id: 25, text: "3D Animators", link: "#"},
            {id: 26, text: "Adobe Illustrator Experts", link: "#"},
            {id: 27, text: "Audio Engineers", link: "#"},
            {id: 28, text: "Brand Strategies", link: "#"},
            {id: 29, text: "Flyer Designers", link: "#"},
            {id: 30, text: "Mobile UI Designers", link: "#"},
            {id: 31, text: "Photographer", link: "#"},
            {id: 32, text: "Video Producer", link: "#"}
        ]
    }

  return (
    <div className="min-h-screen flex flex-col">
        {/* ============== Head Tag =============== */}
        <HeadTag title="Top Designers & Creative Experts for Hire in July 2022 | Brenda"/>

        {/* ================= Header ================= */}
        <header className="header-bg">
            {/* ============== Navbar ============ */}
            <Navbar/>
                
            {/* ============ Head Container ============ */}
            <BannerContainer 
                heading={"Hire freelance design and creative experts to help you scale"}
                des={"Thousands of pros ready to kick-start your creative overhaul from day one."}
                btnI = {{text: "Find Talent", link: "#"}}
                btnII = {{text: "Find work", link: "#"}}
                img={"/images/gra-des.png"}
            />
        </header>

        {/* ================= Main ==================== */}
        <main>
        
            {/* ================= Trusted Company Section ================ */}
           <TrustedCom/>

            {/* ================= Developer section ================ */}
           <TrustedExp
                headText="Specialized design and creative experts you can count on"
                rating="4.95/5"
                ratingText="Average rating for work with design and creative talent."
                contracts="184K+ contracts"
                contractsText="Involving design and creative work in the past year."
                skills="468 Skills"
                skillsText="Represented by talent on Brenda"
                cardData={CardData}
            />

            {/* ============== Prossesing work Section ================== */}
            <PreWork
                headText="Design and creative projects for your most pressing work"
                headDes="Perfect and polish your video footage with post-production editing services."
                list={WorkList}
                imageI="/images/logo-des.png"
                imageII="/images/pho-ed.png"
                imageIII="/images/m-w-d.png"
                imageIv="/images/pre-des.png"
                imageV="/images/arch-des.png"
                imageVi="/images/video-ed.png"
                btn={{text: "Browse Project"}}
            />

            {/* ========================== Flexible Section =========================== */}
            <Flexible
                firstHead="The brand book your creatives need"
                firstSubHead="A graphic designer quickly created a robust brand guide for visual identity"
                first_F_LeftRating="5/5"
                first_F_RightText="Budget:"
                first_F_RightValue="$4,637"
                firstDes="Working with Kostadin is incredible and I value him as an important member of my digital team."
                first_S_LeftText="Skills:"
                first_S_F_RightValue="Graphic Design"
                first_S_S_RightValue="Print Layout"
                first_S_T_RightValue="Brand"
                firstImage="/images/pho-ed.png"
                
                secondImage="/images/ga-talent.png"
                secondHead="How remote talent gave GoDaddy the freedom and control to nail its new initiative"
                secondDes="To encourage clients to move to a new website solution, GoDaddy wanted to offer new web designs at competitive rates. They turned to remote talent to support the initiative: 70+ independent web designers and three program consultants to streamline communication and reduce admin overhead. The program launched 3x faster than would have been possible through traditional means.”"
                secondRightText="72-hour average turnaround on websites"
                secondLeftBtn={{text: "Read Case Study", link: "#"}}
            />

            {/* ========================== Freequenly Ask Question Section ========================== */}
            <QuestionAsk
                firstHeadText="What is design and creative?"
                firstDesText="Writing is the process of creating written content for a variety of purposes. It can be used to communicate information, tell a story, or persuade an audience. Translation is the process of converting written content from one language to another, allowing businesses to communicate with their customers in their native language. ."

                secondHeadText="What is the first step to hiring design and creative talent and determining the project cost?"
                secondDesText="One of the first steps in hiring any talent is to determine which skills you need for your project. You know you need help with sales and marketing, but what specific things are you trying to do? Upwork matches you with proven remote talent who can help you with all your sales and marketing needs, including"

                thirdHeadText="What are the various ways I can connect with design and creative talent through Brenda?"
                thirdDesText=" If you need help finding talent for your marketing project, Upwork gives you the flexibility you need to succeed.Talent Marketplace: Find and source independent professionals for your sales or marketing project directly from Upwork’s talent marketplace.
                Project Catalog: Project Catalog is a new way to quickly get started and expand your capabilities through Upwork. From market research and strategy to SEO and SEM services, projects are predefined for you, so you can get to know talent through a clearly defined project within their expertise, then easily scale up and down as needed."

                fourHeadText="Why should I use Upwork to find talent for design and creative services?"
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

export default DesignCreative;