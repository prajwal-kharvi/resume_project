//skills section logo's


// tech logos
const htmlLogo = new URL("./assets/tech_logo/html.png", import.meta.url);
const cssLogo = new URL("./assets/tech_logo/css.png", import.meta.url);
const javascriptLogo = new URL("./assets/tech_logo/javascript.png", import.meta.url);
const reactLogo = new URL("./assets/tech_logo/reactjs.png", import.meta.url);
const mysqlLogo = new URL("./assets/tech_logo/mysql.png", import.meta.url);
const postgresqlLogo = new URL("./assets/tech_logo/postgre.png", import.meta.url);
const bootstrapLogo = new URL("./assets/tech_logo/bootstrap.png", import.meta.url);
const tailwindLogo = new URL("./assets/tech_logo/tailwindcss.png", import.meta.url);
const datastructuresLogo = new URL("./assets/tech_logo/DSA.png", import.meta.url);
const ApiLogo = new URL("./assets/tech_logo/Api.png", import.meta.url);
const excelLogo = new URL("./assets/tech_logo/msexcel.png", import.meta.url);
const wordLogo = new URL("./assets/tech_logo/msword.png", import.meta.url);
const powerpointLogo = new URL("./assets/tech_logo/mspowerpoint.png", import.meta.url);
const sassLogo = new URL("./assets/tech_logo/sass.png", import.meta.url);

// tools section logos
const gitLogo = new URL("./assets/tech_logo/git.png", import.meta.url);
const githubLogo = new URL("./assets/tech_logo/github.png", import.meta.url);
const postmanLogo = new URL("./assets/tech_logo/postman.png", import.meta.url);
const pgadmin4Logo = new URL("./assets/tech_logo/postgre.png", import.meta.url);
const vscodeLogo = new URL("./assets/tech_logo/vscode.png", import.meta.url);
const pycharmLogo = new URL("./assets/tech_logo/PyCharm.png", import.meta.url);
const webstormLogo = new URL("./assets/tech_logo/WebStorm.png", import.meta.url);

// education section logos
const BCKLogo = new URL("./assets/education_logo/bck_logo.png", import.meta.url);
const RNSLogo = new URL("./assets/education_logo/rns.png", import.meta.url);
const HREMSLogo = new URL("./assets/education_logo/HREMS.png", import.meta.url);

// project section images
const FoodDelivery = new URL("./assets/project_image/Food Delivery.png", import.meta.url);
const ECommerceWebsite = new URL("./assets/project_image/onlineshopping.png", import.meta.url);
const PersonalPortfolio = new URL("./assets/project_image/protfolio.png", import.meta.url);

// certifications section images
const NamasteReact = new URL("./assets/certifications/namaste_react.webp", import.meta.url);
const NamasteJavaScript = new URL("./assets/certifications/namaste_js.webp", import.meta.url);
const NamasteDev = new URL("./assets/certifications/namasteDev.com.png", import.meta.url);




console.log(import.meta.url)
console.log(htmlLogo)
console.log(cssLogo)

//Skills constants
export const SkillsInfo=[
    {
        title:"Frontend",
        skills:[
            {name:"HTML",logo:htmlLogo},
            {name:"CSS",logo:cssLogo},
            {name:"Javascript",logo:javascriptLogo},
            {name:"React",logo:reactLogo},
            {name:"BootStrap",logo:bootstrapLogo},
            {name:"TailWindCSS",logo:tailwindLogo},
        ],
    },
    {
        title: "Databases",
        skills:[
            {name:"MySql",logo:mysqlLogo},
            {name:"PostgreSql",logo:postgresqlLogo}
        ],


    },
    {
        title: "Additional Skills",
        skills:[
            {name:"DSA",logo:datastructuresLogo},
            {name:"API",logo:ApiLogo},
            {name:"Excel",logo:excelLogo},
            {name:"Word",logo:wordLogo},
            {name:"PowerPoint",logo:powerpointLogo}
        ],


    },
    {
        title: "Tools",
        skills: [
            {name:"Git",logo:gitLogo},
            {name:"GitHub",logo:githubLogo},
            {name:"Postman",logo:postmanLogo},
            {name:"pgAdmin4",logo:pgadmin4Logo},
            {name:"vs code",logo:vscodeLogo},
            {name:"pycharm",logo:pycharmLogo},
            {name:"webstorm",logo:webstormLogo},
        ],

    },
    ]

//Education constants
export const Educations=[
    {
        id: 1,
        img: BCKLogo,
        school: "BCK College,Kundapura",
        date: "AUG 2021 - MAR 2025",
        desc: "I completed my Bachelor's degree in Computer Applications (BCA) from BCK College, Kundapura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BCK College allowed me to work on projects that applied theoretical concepts to real-world problems.",
        degree: "Bachelor of Computer Applications - BCA",
    },
    {
        id: 2,
        img: RNSLogo,
        school: " RN Shetty College, Kundapura",
        date: "JUNE 2019 - JULY 2021",
        desc: "I completed my Class 12 education from RN Shetty College, Kundapura, affiliated with the Karnataka State Board, in the CEBA stream (Computer Science, Economics, Business Studies, and Accountancy).",
        degree: "Commerce with Computer Science (CEBA)",
    },
    {
        id: 3,
        img: HREMSLogo,
        school: " Holy Rosary English Medium School, Kundapura",
        date: "JUNE 2018 - APR 2019",
        desc: "Completed Class 10 (SSLC) from Holy Rosary English Medium School, Kundapura, under the Karnataka State Board, with a strong academic foundation..",
        degree: "CLASS 10(SSLC)",
    },

]

//Project constants
export const Projects=[
    {
        id: 0,
        title: "Food Delivery Web Application (Swiggy Clone)",
        description:
            "\n" +
            "Developed Single Page Application featuring restaurant listings and dynamic menu pages using React.js withreal-time API integration.Implemented React Router for seamless navigation and dynamic routing based on restaurant IDs.Created custom React hooks (useResMenu, useOnlineStatus) for reusable business logic and network detection.Utilized React Hooks (useState, useEffect, useParams) for efficient state management and side effects.",
        image: FoodDelivery,
        tags: ["React.js"," React Router"," REST API "," Bootstrap 5 ","Parcel"],
        github: "https://github.com/prajwal-kharvi/food_delivery_app",
        webapp: "",
    },
    {
        id: 1,
        title: "E-Commerce Website (Flipkart-Inspired)",
        description:
            "Designed responsive multi-page e-commerce website with product categories and user registration functionality.Implemented Bootstrap carousel component for promotional banners with auto-slide.Created responsive navigation bar with dropdown menus using Bootstrap components.Developed user registration form with client-side validation for data integrity.Applied Bootstrap grid system ensuring mobile-first responsive design across devices.",
        image: ECommerceWebsite,
        tags: ["HTML5","CSS3", " Bootstrap 5 ","JavaScript"],
        github: "https://github.com/prajwal-kharvi/e-commerce_website",
        webapp: "",
    },
    {
        id: 2,
        title: "Personal Portfolio Website",
        description:
            "Developed portfolio website showcasing education and interests with clean UI.Integrated Font Awesome icon library for enhanced visual design.Implemented JavaScript event handlers for interactive user experience.Applied semantic HTML5 structure for better accessibility and SEO.",
        image: PersonalPortfolio,
        tags: ["HTML5"," CSS3", "JavaScript ", "Font Awesome"],
        github: "https://github.com/prajwal-kharvi/portfolio_website",
        webapp: "",
    },
]

//Certification constants
export const Certifications =[
    {
        id: 0,
        img: NamasteJavaScript,
        imgLogo:NamasteDev,
        course: "JavaScript",
        company: "NamasteDev.com",
        desc: "Completed Namaste React certification with strong knowledge of React fundamentals, including components, JSX, props, state, hooks (useState, useEffect), and component lifecycle.Hands-on experience in building scalable, reusable UI components and managing application state and side effects.Familiar with modern React practices, performance optimization, and integrating APIs for frontend applications.",
    },
    {
        id: 1,
        img: NamasteReact,
        imgLogo:NamasteDev,
        course: "React",
        company: "NamasteDev.com",
        desc: "Completed Namaste React, gaining practical knowledge of React components, hooks, state management, and modern frontend development practices.",
    }
]

//My profile photo
export const IMAGES = {
    profile: new URL('./assets/Prajwal.png', import.meta.url).href,
};
