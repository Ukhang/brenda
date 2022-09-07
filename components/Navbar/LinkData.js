// ====================== Sublinks for Find Talent ==========================
const SubLinks1 = [
    {
        id: 1,
        head: "Post a job and hire a pro",
        headers: "Talent Marketplace",
        subhead: {
            name: "Talent Marketplace",
            des: "Learn about working with talent or explore your spacific hiring needs.",
            subheadlink: { name: "Hire on Talent Marketplace", link: "/talent-marketplace" }
        },
                
        sublink: [
            { id: 1, linktext: "Development & IT", link: "/cat/dev-it" },
            { id: 2, linktext: "Admin & Custom Support", link: "/cat/admin-customer-support" },
            { id: 3, linktext: "Engineering & Architechture", link: "/cat/engineering-architecture" },
            { id: 4, linktext: "Design & Creative", link: "/cat/design-creative" },
            { id: 5, linktext: "Finance & Accounting", link: "/cat/finance-accounting" },
            { id: 7, linktext: "Sales & Marketing", link: "/cat/sales-marketing" },
            { id: 8, linktext: "Hr & Tranning", link: "/cat/hr-training" },
            { id: 9, linktext: "Writing & Translation", link: "/cat/writing-translation" },
            { id: 10, linktext: "Legal", link: "/cat/legal" },
            { id: 6, linktext: "Hire freelancers", link: "/hire" },
        ]
    },

    {
        id: 2,
        head: "Browse and buy projects",
        headers: "Talent Catlog",
        subhead: {
            name: "project catlog",
            des: "Browse and buy projects that have a clear scope and price.",
            subheadlink: { name: "Browse Project Catlog", link: "/services"}
        },

        sublink: [
            { 
                id: 1,
                linktext: "Logo Design", 
                link: "/services/logo-design", 
                img: "/images/logo-design.png" 
            },
            { 
                id: 2,
                linktext: "Articles & Blog Posts",
                link: "/services/articles-blog-posts", 
                img: "/images/blog.png" 
            },
            { 
                id: 3,
                linktext: "Wordpress",
                link: "/services/wordpress", 
                img: "/images/wordpress.png" 
            },
            { 
                id: 4,
                linktext: "Social Media Marketing", 
                link: "/services/social-media-management", 
                img: "/images/social-marketing.png" 
            },
            { 
                id: 5,
                linktext: "Video Editing",
                link: "/services/video-editing",
                img: "/images/video-editing.png" 
            },
            { 
                id: 6,
                linktext: "Seo",
                link: "/services/seo",
                img: "/images/seo.png" 
            },
        ]
    },
    {
        id: 3,
        head: "Let us find you the write talent",
        headers: "Talent Scout",
        subhead: {
            name: "Talent Scout",
            des: "Learn how our recruiters find you expert developers, designers, and marketers.",
            subheadlink: { name: "Talk to Talent Scout", link: "/staffing" }
        },
                
        sublink: [
            { id: 1, linktext: "Development & IT", link: "/staffing/development" },
            { id: 2, linktext: "Design & Creative", link: "/staffing/design-creative" },
            { id: 3, linktext: "Marketing", link: "/staffing/marketing" },
        ]
    },
];

// ====================== Sublinks for Find Jobs ==========================
const SubLinks2 = [
    {
        id: 1,
        name: "Today's Jobs",
        des: "Find your dream jobs work and rank your careare",
        link: "/jobs/todays-jobs"
    },

    {
        id: 2,
        name: "All Jobs with your skill", 
        des: "Explore the kind of Jobs available in your field.",
        link: "/jobs/all-jobs"
    }
];

// ====================== Sublinks for Why Brenda ==========================
const SubLinks3 = [
    {
        id: 1,
        name: "Success Stories",
        des: "Discovare how terms work strategically and grow together",
        link: "/success-stories"
    },
    { 
        id: 2,
        name: "How to hire",
        des: "Learn about the different ways to get work done",
        link: "/how-to-hire"
    },
    { 
        id: 3,
        name: "Reviews",
        des: "See what it's like to collaborate on upwork",
        link: "/reviews"
    },
    { 
        id: 4,
        name: "How to find work", 
        des: "Learn about how to grow your independent career",
        link: "/how-to-find-work"
    }
];

export {SubLinks1, SubLinks2, SubLinks3};