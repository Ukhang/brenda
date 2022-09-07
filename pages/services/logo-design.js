import Navbar from "../../components/Navbar/Navbar";
import HeadTag from "../../components/HeadTag";
import ServiceSearch from "../../components/ServiceSearch";
import SerFirProjectSec from "../../components/SerFirProjectSec";
import SeSecProjectSec from "../../components/SeSecProjectSec";
import SeThiProjectSec from "../../components/SeThiProjectSec";
import SeFouProjectSec from "../../components/SeFouProjectSec";
import SeFivProjectSec from "../../components/SeFivProjectSec";
import SeSixProjectSec from "../../components/SeSixProjectSec";
import SeSevProjectSec from "../../components/SeSevProjectSec";
import SeEigProjectSec from "../../components/SeEigProjectSec";
import ServiceList from "../../components/SearviceList";
import Footer from "../../components/Footer";

const LogoDesign = () => {

    // ============ Project List 1 =====================
    const ProjectListI = [
        {
            id: 1,
            image: {
                src: "/images/modernhome-logo.png",
                alt: "modernhome-image"
            },
            des: "A modern political campaign LOGO design",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "3 day delivery"
            },

            s_left: {
                img: "/images/logo-designer.png",
                text: "Dimitre D."
            },
            s_right: {
                textI: "5.5",
                textII: "(2078)"
            },
            link: "#"
        },

        {
            id: 2,
            image: {
                src: "/images/creative-logo.png",
                alt: "creativelogo.png"
            },
            des: "Creative logo design for your pet store",
            f_left: {
                textI: "From",
                textII: "$35"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/creativelogo-designer.png",
                text: "Monsu D."
            },
            s_right: {
                textI: "5.5",
                textII: "(177)"
            },
            link: "#"
        },

        {
            id: 3,
            image: {
                src: "/images/illustration.png",
                alt: "illustration-image"
            },
            des: "A winning professional pictch Deck Presentetion",
            f_left: {
                textI: "From",
                textII: "$50"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/illus-designer.png",
                text: "Tanver M."
            },
            s_right: {
                textI: "5.5",
                textII: "(145)"
            },
            link: "#"
        },

        {
            id: 4,
            image: {
                src: "/images/mobile-design.png",
                alt: "powerpoint-image"
            },
            des: "A Modern Business UI Design Free weekend",
            f_left: {
                textI: "From",
                textII: "$20"
            },
            f_right: {
                text: "3 day delivery"
            },

            s_left: {
                img: "/images/powerpoint-expert.png",
                text: "Jacob M."
            },
            s_right: {
                textI: "4.8",
                textII: "(335)"
            },
            link: "#"
        },
    ];

    // ============ Project List 2 =====================
    const ProjectListII = [
        {
            id: 1,
            image: {
                src: "/images/minilogo1.png",
                alt: "logodesign-image"
            },
            des: "Minimalist modern and business logo design",
            f_left: {
                textI: "From",
                textII: "$50"
            },
            f_right: {
                text: "1 day delivery"
            },

            s_left: {
                img: "/images/minilogodes1.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "4.9",
                textII: "(626)"
            },
            link: "#"
        },

        {
            id: 2,
            image: {
                src: "/images/creative-logo.png",
                alt: "logodesign-image"
            },
            des: "Logo design simple, flat and minimal",
            f_left: {
                textI: "From",
                textII: "$50"
            },
            f_right: {
                text: "3 day delivery"
            },

            s_left: {
                img: "/images/minilogodes2.png",
                text: "Sikandar U."
            },
            s_right: {
                textI: "4.9",
                textII: "(263)"
            },
            link: "#"
        },

        {
            id: 3,
            image: {
                src: "/images/minilogo3.png",
                alt: "logodesign-image"
            },
            des: "An Amazing modern minimalist logo for your business",
            f_left: {
                textI: "From",
                textII: "$100"
            },
            f_right: {
                text: "1 day delivery"
            },

            s_left: {
                img: "/images/minilogodes3.png",
                text: "Md. M."
            },
            s_right: {
                textI: "4.9",
                textII: "(254)"
            },
            link: "#"
        },

        {
            id: 4,
            image: {
                src: "/images/minilogo4.png",
                alt: "logodesign-image"
            },
            des: "Modern minimalist logo design for your business or brand",
            f_left: {
                textI: "From",
                textII: "$100"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes4.png",
                text: "Nirodha P."
            },
            s_right: {
                textI: "4.9",
                textII: "(313)"
            },
            link: "#"
        },

        {
            id: 5,
            image: {
                src: "/images/minilogo5.png",
                alt: "logodesign-image"
            },
            des: "Luxury minimalist business logo",
            f_left: {
                textI: "From",
                textII: "$49"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes5.png",
                text: "Sinchan G."
            },
            s_right: {
                textI: "4.9",
                textII: "(563)"
            },
            link: "#"
        },

        {
            id: 6,
            image: {
                src: "/images/minilogo6.png",
                alt: "logodesign-image"
            },
            des: "Modern minimalist business logo design and stationery design",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes6.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "4.9",
                textII: "(259)"
            },
            link: "#"
        },

        {
            id: 7,
            image: {
                src: "/images/minilogo7.png",
                alt: "logodesign-image"
            },
            des: "3 Unique modern and minimalist business logo design",
            f_left: {
                textI: "From",
                textII: "$50"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes7.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "5.0",
                textII: "(188)"
            },
            link: "#"
        },

        {
            id: 8,
            image: {
                src: "/images/minilogo8.png",
                alt: "logodesign-image"
            },
            des: "The best elegant and minimalist logo design",
            f_left: {
                textI: "From",
                textII: "$35"
            },
            f_right: {
                text: "3 day delivery"
            },

            s_left: {
                img: "/images/minilogodes8.png",
                text: "Ezharul H."
            },
            s_right: {
                textI: "4.9",
                textII: "(347)"
            },
            link: "#"
        },

        {
            id: 9,
            image: {
                src: "/images/minilogo9.png",
                alt: "logodesign-image"
            },
            des: "Modern minimalist business logo design and stationary design",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes8.png",
                text: "Haniya M."
            },
            s_right: {
                textI: "4.9",
                textII: "(259)"
            },
            link: "#"
        },
    ];

    // ============ Project List 3 =====================
    const ProjectListIII = [
        {
            id: 1,
            image: {
                src: "/images/trelogo1.png",
                alt: "logodesign-image"
            },
            des: "Mascot",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 2,
            image: {
                src: "/images/trelogo2.png",
                alt: "logodesign-image"
            },
            des: "Freestyle",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 3,
            image: {
                src: "/images/trelogo3.png",
                alt: "logodesign-image"
            },
            des: "3D",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 4,
            image: {
                src: "/images/trelogo4.png",
                alt: "logodesign-image"
            },
            des: "Signature",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 5,
            image: {
                src: "/images/trelogo5.png",
                alt: "logodesign-image"
            },
            des: "Hand-Drwn",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 6,
            image: {
                src: "/images/trelogo6.png",
                alt: "logodesign-image"
            },
            des: "Vintage",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 7,
            image: {
                src: "/images/trelogo7.png",
                alt: "logodesign-image"
            },
            des: "Watercolor",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 8,
            image: {
                src: "/images/trelogo8.png",
                alt: "logodesign-image"
            },
            des: "Logotype",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 9,
            image: {
                src: "/images/trelogo9.png",
                alt: "logodesign-image"
            },
            des: "Brandmark",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 10,
            image: {
                src: "/images/trelogo10.png",
                alt: "logodesign-image"
            },
            des: "Monogram",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 11,
            image: {
                src: "/images/trelogo11.png",
                alt: "logodesign-image"
            },
            des: "Wordmark",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 12,
            image: {
                src: "/images/trelogo12.png",
                alt: "logodesign-image"
            },
            des: "Lettermark",
            subDes: "300+ Designer",
            link: "#"
        },
        {
            id: 13,
            image: {
                src: "/images/trelogo13.png",
                alt: "logodesign-image"
            },
            des: "Geometric",
            subDes: "300+ Designer",
            link: "#"
        },
    ];

    // ================== Project List 4 ==========================
    const ProjectListIv = [
        {
            id: 1,
            image: {
                src: "/images/gr-logo1.png",
                alt: "logodesign-image"
            },
            des: "A creative professional minimalist logo design",
            f_left: {
                textI: "From",
                textII: "$25"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes3.png",
                text: "Sabbir A."
            },
            s_right: {
                textI: "4.7",
                textII: "(162)"
            },
            link: "#"
        },

        {
            id: 2,
            image: {
                src: "/images/gr-logo2.png",
                alt: "logodesign-image"
            },
            des: "Modern minimalist logo desgin, custom flat logo with brand...",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes5.png",
                text: "Sabina A."
            },
            s_right: {
                textI: "4.8",
                textII: "(893)"
            },
            link: "#"
        },

        {
            id: 3,
            image: {
                src: "/images/gr-logo3.png",
                alt: "logodesign-image"
            },
            des: "Modern minimalist, lettermark logo design with 3D Mockups",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes7.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "4.9",
                textII: "(1341)"
            },
            link: "#"
        },

        {
            id: 4,
            image: {
                src: "/images/gr-logo4.png",
                alt: "logodesign-image"
            },
            des: "Modern minimalist logo, flat logo, custom logo design your...",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "1 day delivery"
            },

            s_left: {
                img: "/images/minilogodes1.png",
                text: "Abhishek K."
            },
            s_right: {
                textI: "4.9",
                textII: "(898)"
            },
            link: "#"
        },

        {
            id: 5,
            image: {
                src: "/images/trelogo4.png",
                alt: "logodesign-image"
            },
            des: "An Amazing logo designed for your business",
            f_left: {
                textI: "From",
                textII: "$25"
            },
            f_right: {
                text: "3 day delivery"
            },

            s_left: {
                img: "/images/minilogodes2.png",
                text: "M W."
            },
            s_right: {
                textI: "5.0",
                textII: "(147)"
            },
            link: "#"
        },

        {
            id: 6,
            image: {
                src: "/images/trelogo5.png",
                alt: "logodesign-image"
            },
            des: "Minimalist custom logo design for your business",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "4 day delivery"
            },

            s_left: {
                img: "/images/minilogodes7.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "4.9",
                textII: "(1246)"
            },
            link: "#"
        },

        {
            id: 7,
            image: {
                src: "/images/trelogo8.png",
                alt: "logodesign-image"
            },
            des: "A Vintate, Lettermark, Geometric Logo Design for Startups",
            f_left: {
                textI: "From",
                textII: "$50"
            },
            f_right: {
                text: "1 day delivery"
            },

            s_left: {
                img: "/images/minilogodes4.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "4.9",
                textII: "(4345)"
            },
            link: "#"
        },

        {
            id: 8,
            image: {
                src: "/images/gr-logo8.png",
                alt: "logodesign-image"
            },
            des: "3-5 concepts of modern minimalist logo design",
            f_left: {
                textI: "From",
                textII: "$35"
            },
            f_right: {
                text: "1 day delivery"
            },

            s_left: {
                img: "/images/trelogo9.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "4.8",
                textII: "(267)"
            },
            link: "#"
        }
    ];

    // ============ Project List 5 =====================
    const ProjectListV = [
        {
            id: 1,
            image: {
                src: "/images/de-ecomarce.png",
                alt: "logodesign-image"
            },
            des: "eCommerce",
            link: "#"
        },
        {
            id: 2,
            image: {
                src: "/images/de-smbus.png",
                alt: "logodesign-image"
            },
            des: "small Business",
            link: "#"
        },
        {
            id: 3,
            image: {
                src: "/images/de-gamming.png",
                alt: "logodesign-image"
            },
            des: "Gamming",
            link: "#"
        },
        {
            id: 4,
            image: {
                src: "/images/de-beauty.png",
                alt: "logodesign-image"
            },
            des: "Beauty & Consmetics",
            link: "#"
        },
        {
            id: 5,
            image: {
                src: "/images/de-sports.png",
                alt: "logodesign-image"
            },
            des: "Sports & Fitness",
            link: "#"
        },
        {
            id: 6,
            image: {
                src: "/images/de-food.png",
                alt: "logodesign-image"
            },
            des: "Food & Beverage",
            link: "#"
        },
        {
            id: 7,
            image: {
                src: "/images/de-beauty.png",
                alt: "logodesign-image"
            },
            des: "Real Estate",
            link: "#"
        },
        {
            id: 8,
            image: {
                src: "/images/de-fasion.png",
                alt: "logodesign-image"
            },
            des: "Fashion & Luxury",
            link: "#"
        }
    ];

    // =============== Project List 6 ===================
    const ProjectListVI = [
        {
            id: 1,
            image: {
                src: "/images/price-logo1.png",
                alt: "logo-design"
            },
            textI: "Under $15",
            textII: "300+ designer",
            link: "#",
        },

        {
            id: 2,
            image: {
                src: "/images/price-logo2.png",
                alt: "logo-design"
            },
            textI: "$15 - $40",
            textII: "300+ designer",
            link: "#",
        },

        {
            id: 3,
            image: {
                src: "/images/price-logo3.png",
                alt: "logo-design"
            },
            textI: "Over $40",
            textII: "300+ designer",
            link: "#",
        }
    ];

     // ================== Project List 7 ==========================
     const ProjectListVII = [
        {
            id: 1,
            image: {
                src: "/images/gr-logo8.png",
                alt: "logodesign-image"
            },
            des: "A creative professional minimalist logo design",
            f_left: {
                textI: "From",
                textII: "$25"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes3.png",
                text: "Sabbir A."
            },
            s_right: {
                textI: "4.7",
                textII: "(162)"
            },
            link: "#"
        },

        {
            id: 2,
            image: {
                src: "/images/gr-logo2.png",
                alt: "logodesign-image"
            },
            des: "Modern minimalist logo desgin, custom flat logo with brand...",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes5.png",
                text: "Sabina A."
            },
            s_right: {
                textI: "4.8",
                textII: "(893)"
            },
            link: "#"
        },

        {
            id: 3,
            image: {
                src: "/images/gr-logo3.png",
                alt: "logodesign-image"
            },
            des: "Modern minimalist, lettermark logo design with 3D Mockups",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes7.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "4.9",
                textII: "(1341)"
            },
            link: "#"
        },

        {
            id: 4,
            image: {
                src: "/images/gr-logo4.png",
                alt: "logodesign-image"
            },
            des: "Modern minimalist logo, flat logo, custom logo design your...",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "1 day delivery"
            },

            s_left: {
                img: "/images/minilogodes1.png",
                text: "Abhishek K."
            },
            s_right: {
                textI: "4.9",
                textII: "(898)"
            },
            link: "#"
        },

        {
            id: 5,
            image: {
                src: "/images/trelogo4.png",
                alt: "logodesign-image"
            },
            des: "An Amazing logo designed for your business",
            f_left: {
                textI: "From",
                textII: "$25"
            },
            f_right: {
                text: "3 day delivery"
            },

            s_left: {
                img: "/images/minilogodes2.png",
                text: "M W."
            },
            s_right: {
                textI: "5.0",
                textII: "(147)"
            },
            link: "#"
        },

        {
            id: 6,
            image: {
                src: "/images/trelogo5.png",
                alt: "logodesign-image"
            },
            des: "Minimalist custom logo design for your business",
            f_left: {
                textI: "From",
                textII: "$30"
            },
            f_right: {
                text: "4 day delivery"
            },

            s_left: {
                img: "/images/minilogodes7.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "4.9",
                textII: "(1246)"
            },
            link: "#"
        },

        {
            id: 7,
            image: {
                src: "/images/trelogo8.png",
                alt: "logodesign-image"
            },
            des: "A Vintate, Lettermark, Geometric Logo Design for Startups",
            f_left: {
                textI: "From",
                textII: "$50"
            },
            f_right: {
                text: "1 day delivery"
            },

            s_left: {
                img: "/images/minilogodes4.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "4.9",
                textII: "(4345)"
            },
            link: "#"
        },

        {
            id: 8,
            image: {
                src: "/images/gr-logo8.png",
                alt: "logodesign-image"
            },
            des: "3-5 concepts of modern minimalist logo design",
            f_left: {
                textI: "From",
                textII: "$35"
            },
            f_right: {
                text: "1 day delivery"
            },

            s_left: {
                img: "/images/trelogo9.png",
                text: "Gihan M."
            },
            s_right: {
                textI: "4.8",
                textII: "(267)"
            },
            link: "#"
        },

        {
            id: 9,
            image: {
                src: "/images/illustration.png",
                alt: "illustration-image"
            },
            des: "A winning professional pictch Deck Presentetion",
            f_left: {
                textI: "From",
                textII: "$50"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/illus-designer.png",
                text: "Tanver M."
            },
            s_right: {
                textI: "5.5",
                textII: "(145)"
            },
            link: "#"
        },

        {
            id: 10,
            image: {
                src: "/images/mobile-design.png",
                alt: "powerpoint-image"
            },
            des: "A Modern Business UI Design Free weekend",
            f_left: {
                textI: "From",
                textII: "$20"
            },
            f_right: {
                text: "3 day delivery"
            },

            s_left: {
                img: "/images/powerpoint-expert.png",
                text: "Jacob M."
            },
            s_right: {
                textI: "4.8",
                textII: "(335)"
            },
            link: "#"
        },

        {
            id: 11,
            image: {
                src: "/images/gr-logo1.png",
                alt: "logodesign-image"
            },
            des: "A creative professional minimalist logo design",
            f_left: {
                textI: "From",
                textII: "$25"
            },
            f_right: {
                text: "2 day delivery"
            },

            s_left: {
                img: "/images/minilogodes3.png",
                text: "Sabbir A."
            },
            s_right: {
                textI: "4.7",
                textII: "(162)"
            },
            link: "#"
        },

        {
            id: 12,
            image: {
                src: "/images/trelogo2.png",
                alt: "logodesign-image"
            },
            des: "An Amazing logo designed for your business",
            f_left: {
                textI: "From",
                textII: "$25"
            },
            f_right: {
                text: "3 day delivery"
            },

            s_left: {
                img: "/images/minilogodes2.png",
                text: "M W."
            },
            s_right: {
                textI: "5.0",
                textII: "(147)"
            },
            link: "#"
        },
    ];

    // ====================== Eight Section ==========================
    const ProjectListVIII = [
        {
            id: 1,
            name: "Article",
            des: "What Logo File Formate Should you Use in 2021",
            linkText: "Read Article",
            link:"#"
        },

        {
            id: 2,
            name: "Article",
            des: "The 15 Best Logo Design Software of 2021 (Complete Comparison)",
            linkText: "Read Article",
            link:"#"
        },

        {
            id: 3,
            name: "Article",
            des: "Design Principle: Why They're Still So Important",
            linkText: "Read Article",
            link:"#"
        },
    ];

    // ====================== Last Service List ==========================
    const ServiceLink = [
        {id: 1, name: "How to Design a Logo", link: "#"},
        {id: 2, name: "Business Cards & Stationery Design", link: "#"},
        {id: 3, name: "Other Fashion Design", link: "#"},
        {id: 4, name: "Icons & Buttons", link: "#"},
        {id: 5, name: "21 Best Logo Design Tips", link: "#"},
        {id: 6, name: "Brand Style Guides", link: "#"},
        {id: 7, name: "Postcard Design", link: "#"},
        {id: 8, name: "Infographic Design", link: "#"},
        {id: 9, name: "Best Git Repositories", link: "#"},
        {id: 10, name: "Branding Services", link: "#"},
        {id: 11, name: "Other Landscape Design", link: "#"},
        {id: 12, name: "Other Book Design", link: "#"},
        {id: 13, name: "Improve your Software Evulation", link: "#"},
        {id: 14, name: "Packaging Design", link: "#"},
        {id: 15, name: "Illustration", link: "#"},
        {id: 16, name: "Tatto Design", link: "#"},
    ]

    return (
        <div className="min-h-screen flex flex-col">

            {/* ============== Head Tag =============== */}
            <HeadTag title="Logo Design Service and Business product"/>

            {/* ================= Header ================= */}
            <header className="header-bg">
                {/* ============== Navbar ============ */}
                <Navbar/>

                {/* ======================== Container Section =========================== */}
                <ServiceSearch
                    textI = "Design"
                    textII = "Brand Identity Design"
                    headText = "Logo Design"
                    des = "A strong logo design can make your business stand out from the crowd."
                    linkText = "How it works"
                    link="#"
                />
            </header>

            {/* ================= Main ==================== */}
            <main>
                {/* ======================== First Section =========================== */}
                <SerFirProjectSec
                    headText = "Top projects you may like"
                    des="These projects are highly rated by other clients"
                    projectList={ProjectListI}
                />

                {/* ======================== Second Section =========================== */}
                <SeSecProjectSec
                    headText = "Top minimalist logo projects"
                    des="These designers will create a simple, bold logo that makes your brand unforgettable"
                    projectList={ProjectListII}
                />

                {/* ======================== Third Section =========================== */}
                <SeThiProjectSec
                    headText = "Top minimalist logo projects"
                    des="These designers will create a simple, bold logo that makes your brand unforgettable"
                    projectList={ProjectListIII}
                />

                {/* ============================ Four Section ============================ */}
                <SeFouProjectSec
                    headText="Projects with great reviews"
                    des="These designers got great reviews recently"
                    projectList={ProjectListIv}
                />

                {/* ============================ Five Section ============================ */}
                {/* ================= Mobile time scroll on ==================== */}
                <SeFivProjectSec
                    headText="In-demand industries"
                    des="Work with designers who know your industry"
                    projectList={ProjectListV}
                />

                {/* ============================ Six Section ============================ */}
                <SeSixProjectSec
                    headText="Projects by price"
                    des="Explore projects that fit your budget"
                    projectList={ProjectListVI}
                />

                {/* ============================ Seven Section ============================ */}
                <SeSevProjectSec
                    headText="Projects by price"
                    projectList={ProjectListVII}
                    btn={{text: "See All Projects", link:"#"}}
                />

                {/* ============================ Eight Section ============================ */}
                <SeEigProjectSec
                    headText="Logo Design Related Articles"
                    projectList={ProjectListVIII}
                />

                {/* ============================ Last Section ============================ */}
                <ServiceList
                    headText="Browse Related Logo Design Services"
                    serviceLink={ServiceLink}
                />
            </main>

            {/* ==================== Footer ====================== */}
            <Footer/>
        </div>
    )
}

export default LogoDesign;