import emoji from "react-easy-emoji";

export const greetings = {
  name: "Anirudh Jain",
  title: "Hi all, I'm Anirudh",
  description:
    "I'm passionate frontend web developer having an experience of web applications with HTML, CSS, Javascript, React.js.",

  resumeLink:
    "https://drive.google.com/file/d/1k256KEhGVNqdiwDo1l__XCcnic538gHV/view?usp=sharing",
};

export const openSource = {
  githubUserName: "Anirudhece",
};
export const contact = {};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/anirudh-jain-b67918213/",
  github: "https://github.com/Anirudhece",
  twitter: "https://twitter.com/Anirudh02814",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY FRONTEND DEVELOPER WHO WANTS TO CREATE INNOVATIVE USER EXPERIENCES THAT ARE BOTH VISUALLY STUNNING AND FUNCTIONALLY SEAMLESS",
  data: [
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
      ],
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Programming",
    progressPercentage: "85",
  },
];

export const educationInfo = [
  {
    schoolName:
      "DR AKHILEH DAS GUPTA INSTITUE OF TECHNOLOGY AND MANGEMENT (formerly: northern india engineering college)",
    subHeader: "Bachelor of Technology ",
    duration: "2020-20204",
    grade: "9.24 overall CGPA",
    desc: "",
    descBullets: [
      //   "were in top 10 teams in a hackathone(live the code)",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
];

// in future if requires
export const experience = [
  {
    // role: "Frontend Developer",
    // company: "Duseca Software",
    // companylogo: "/img/icons/common/dusecaSoftware.jpg",
    // date: "Apr 2022 – Jun 2022",
    // desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
  },
  //   {
  //     role: "API Engineer",
  //     company: "Duseca Software",
  //     companylogo: "/img/icons/common/dusecaSoftware.jpg",
  //     date: "Jan 2022 – Mar 2022",
  //     desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
  //     // descBullets: [
  //     // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //     // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     // ],
  //   },
  //   {
  //     role: "Full Stack Developer",
  //     company: "Bleed-AI",
  //     companylogo: "/img/icons/common/bleedAI.jpg",
  //     date: "Sept 2021 - Oct 2021",
  //     desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
  //   },
  //   {
  //     role: "Backend Developer",
  //     company: "Wapidu",
  //     companylogo: "/img/icons/common/wapidu.jpg",
  //     date: "Sept 2021",
  //     desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
  //   },
];

export const projects = [
  {
    name: "GPTastic ",
    desc: "An application that allows users to interact with OpenAI's API.",
    github: "https://github.com/Anirudhece/GPTastic",
    link: "https://csb-l1sor4-anirudhece.vercel.app/",
  },
  {
    name: "Pricereum",
    desc: "Pricereum-Crypto Currency Tracking App.",
    github: "https://github.com/Anirudhece/crypto",
    link: "https://pricereum.netlify.app/",
  },
  {
    name: "Netflix Clone",
    desc: "Netflix clone using The Movie Data Base API",
    github: "https://netflix-clone-onreact.netlify.app/",
    link: "https://netflix-clone-onreact.netlify.app/",
  },
];

export const feedbacks = [
  {
    name: "",
    feedback: "",
    // in future if requires
  },
];

export const seoData = {
  title: "Anirudh jain",
  description: "A passionate Web Developer.",
  author: "Anirudh jain",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Anirudh",
    "Anirudh Jain",
    "Portfolio",
    "Anirudh Portfolio ",
    "Anirudh Jain Portfolio",
  ],
};
