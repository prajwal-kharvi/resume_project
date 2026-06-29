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
const nodeLogo=new URL("./assets/tech_logo/nodeJs.png",import.meta.url)
const expressLogo=new URL("./assets/tech_logo/express.png",import.meta.url)
const mongoLogo=new URL("./assets/tech_logo/mongoDB.png",import.meta.url)
const daisyUILogo=new URL("./assets/tech_logo/daisyUI.png",import.meta.url)

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
const FinanceDashboard = new URL("./assets/project_image/Finance_Dashboard.png", import.meta.url);
const PersonalPortfolio = new URL("./assets/project_image/Personal_Portfolio.png", import.meta.url);

// certifications section images
const NamasteReact = new URL("./assets/certifications/namaste_react.webp", import.meta.url);
const NamasteJavaScript = new URL("./assets/certifications/namaste_js.webp", import.meta.url);
const NamasteDev = new URL("./assets/certifications/namasteDev.com.png", import.meta.url);
const NamasteNode = new URL("./assets/certifications/namaste_node.webp", import.meta.url);

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
            {name:"DaisyUI",logo:daisyUILogo},
        ],
    },
    {
        title: "Backend",
        skills:[
            {name:"Node.js",logo:nodeLogo},
            {name:"Express.js",logo:expressLogo},
            {name:"MongoDB",logo:mongoLogo},
            {name:"MySql",logo:mysqlLogo},
            {name:"PostgreSql",logo:postgresqlLogo}
        ],


    },
    {
        title: "Additional Skills",
        skills:[
            {name:"DSA",logo:datastructuresLogo},
            {name:"RESTful API",logo:ApiLogo},
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
        title: "Finance Dashboard Website",
        description:
            "Developed an interactive finance dashboard with role-based access, financial charts using Recharts, Context API state management, CRUD operations, search filtering, dark mode, and a fully responsive UI for seamless user experience.",
        image: FinanceDashboard,
        tags: [" React.js"," Tailwind CSS","Context API ","Recharts"],
        github: "https://github.com/prajwal-kharvi/finance-dashboard",
        webapp: "https://finance-dashboard-eight-peach.vercel.app/",
    },
    {
        id: 1,
        title: "Personal Portfolio Website",
        description:
            "Designed and developed a responsive personal portfolio website using React and CSS/Tailwind to showcase projects and technical skills, featuring a clean UI, smooth navigation, GitHub version control, and deployment on Vercel.",
        image: PersonalPortfolio,
        tags: [" React.js"," HTML5"," Tailwind CSS "," Vercel "," Parcel"],
        github: "https://github.com/prajwal-kharvi/resume_project",
        webapp: "https://prajwalresume-prajwal-kharvis-projects.vercel.app/",
    },
    {
        id: 2,
        title: "Food Delivery Web Application (Swiggy Clone)",
        description:
            "\n" +
            "Developed Single Page Application featuring restaurant listings and dynamic menu pages using React.js withreal-time API integration.Implemented React Router for seamless navigation and dynamic routing based on restaurant IDs.Created custom React hooks (useResMenu, useOnlineStatus) for reusable business logic and network detection.Utilized React Hooks (useState, useEffect, useParams) for efficient state management and side effects.",
        image: FoodDelivery,
        tags: ["React.js"," React Router"," REST API "," Bootstrap 5 ","Parcel"],
        github: "https://github.com/prajwal-kharvi/food_delivery_app",
        webapp: "https://github.com/prajwal-kharvi/food_delivery_app",
    },
]

//Certification constants
export const Certifications =[
    {
        id: 0,
        img: NamasteNode,
        imgLogo:NamasteDev,
        course: "Namaste Node.Js",
        company: "NamasteDev.com",
        desc: "Completed the Node.js certification from NamasteDev with a strong understanding of backend development fundamentals, including Node.js, Express.js, REST APIs, routing, middleware, authentication, and MongoDB integration. Gained hands-on experience in building scalable server-side applications, creating RESTful APIs, managing databases, and implementing authentication and authorization. Familiar with asynchronous programming, error handling, and modern backend development best practices for developing efficient and maintainable web applications.",
    },
    {
        id: 1,
        img: NamasteJavaScript,
        imgLogo:NamasteDev,
        course: "Namaste Node.js",
        company: "NamasteDev.com",
        desc: "Completed Namaste JavaScript course with strong understanding of core JavaScript concepts such as closures, promises, async/await, event loop, hoisting, ES6 features, and DOM manipulation through practical projects and hands-on learning.",
    },
    {
        id: 2,
        img: NamasteReact,
        imgLogo:NamasteDev,
        course: "Namaste React",
        company: "NamasteDev.com",
        desc: "Completed Namaste React certification with strong knowledge of React fundamentals, including components, JSX, props, state, hooks (useState, useEffect), and component lifecycle.Hands-on experience in building scalable, reusable UI components and managing application state and side effects.Familiar with modern React practices, performance optimization, and integrating APIs for frontend applications.",
    }
]

//My profile photo
export const IMAGES = {
    profile: new URL('./assets/Prajwal.png', import.meta.url).href,
};
