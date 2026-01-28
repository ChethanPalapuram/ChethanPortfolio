/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chethan P",
  title: "Hi all, I'm Chethan",
  subTitle: emoji(
    "Master’s in Computer Science | Data Engineering, Analytics and Visualization Enthusiast| A passionate Data Enthusiast with keen interest in Data Engineering and Data Analysis and visualisation.🚀 I enjoy transforming data into insights and building intelligent with Python, SQL, Machine Learning, Deep Learning, and Data Visualization and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1b0RsKDnggaq4j-9GbVDZ97U0FNaErHyf/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ChethanPalapuram",
  linkedin: "https://www.linkedin.com/in/chethan-p1/",
  gmail: "chethanpalapuram@gmail.com",
  facebook: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DATA ENGINEER & ML ENTHUSIAST WHO LOVES SOLVING REAL-WORLD PROBLEMS",
  skills: [
    emoji( "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Design and deliver robust full-stack applications with modern frameworks"),
    emoji( "⚡ Leverage cloud platforms to build scalable, reliable, and secure systems"),
    emoji("⚡ Transform complex data into clear, interactive visualizations and insights")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MATLAB", fontAwesomeClassname: "fas fa-square-root-alt" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "Machine Learning", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "Deep Learning", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "Pandas / NumPy", fontAwesomeClassname: "fas fa-table" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "PostgreSQL / MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-github" }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Dayton",
      logo: require("./assets/images/uc.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "Focused on Data Visualization, Advanced Python, SQL, Artificial Intelligence, and Deep Learning",
      descBullets: [
        // "Software Engineering Certificate",
        // "University Honors Scholar",
        // "Mantei/ MAE Scholar"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python & Data Engineering", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning / Deep Learning",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Coordinator",
      company: "Zenerals Contracts and Services",
      companylogo: require(""),
      date: "May 2022 – May 2023",
      descBullets: [
        "Coordinated with project managers, engineers, and field teams across 90+ projects to gather and validate requirements and measurements.",
        "Cleaned, verified, and structured operational data using Excel (VLOOKUP, INDEX-MATCH, pivot tables) for accurate reporting.",
        "Automated dashboards and reporting workflows, reducing manual effort by 40% and enabling same-day insights for stakeholders."
      ]
    }
  ]
};


// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/petigree.png"),
      projectName: "Pet-igree",
      projectDesc: "Built a containerized full-stack application featuring RESTful APIs, JWT-based authentication, real-time chat functionality through WebSocket, and scalable data models using SQLAlchemy ORM. The user interface was designed in Figma and implemented as a responsive, component-driven frontend with React Context and Material UI. The application also integrated a CNN-based pet breed classification system, image moderation using the Vision API, and location-based pet matching powered by geospatial filtering.",
      footerLink: [
        {
          name: "Github Repo",
          url: "https://github.com/reeserapin/Senior-Design-Project"
        }
        //  you can add extra buttons here.
      ]
      },
      {
      image: require("./assets/images/avatar.png"),
      projectName: "Avatar Transcript Stats",
      projectDesc: "Developed an interactive data visualization project using Avatar: The Last Airbender transcripts, transforming dialogue and story data into engaging insights. Built with JavaScript, D3.js, and Leaflet, the app features a character–episode grid chart, streamgraphs to compare phrase frequencies, and a custom Avatar world map with clickable locations from Books 1–3. Designed with an Avatar-themed aesthetic, the project highlights skills in data wrangling, visualization design, and interactive storytelling.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://webbending.netlify.app/"
        },
        {
          name: "Github Repo",
          url: "https://github.com/24varshag/Web-Bending"
        }
        //  you can add extra buttons here.
      ]
    },  
        {
      image: require("./assets/images/yahoo.png"),
      projectName: "Yahoo.com redisign",
      projectDesc: "Redesigned Yahoo.com with a modern, user-centered interface, focusing on streamlined navigation, improved accessibility, and visually consistent branding. Created high-fidelity mockups in Figma and implemented a responsive prototype with HTML, CSS, and JavaScript, emphasizing clean layouts, intuitive content organization, and enhanced readability. The project demonstrates expertise in UI/UX design, front-end development, and usability improvements for large-scale web platforms.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://better-yahoo.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
        {
      image: require("./assets/images/earthquake.png"),
      projectName: "World Earthquake Data",
      projectDesc: "Developed an interactive web app visualizing 20 years of global earthquake data with JavaScript, D3.js, and Leaflet, allowing users to explore seismic patterns through dynamic maps, dual time sliders, and magnitude/depth filters. The platform integrates interactive charts, brushing and linking, and animation to reveal trends in frequency and intensity, highlighting expertise in data visualization, geospatial mapping, and interactive dashboard development.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://data-visualization-earthquakes.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
      {
      image: require("./assets/images/wishlist.png"),
      projectName: "Universal Wishlist",
      projectDesc: "Designed and developed a user-friendly web application for creating, customizing, and managing personalized wish lists. The front end was built with Jinja, HTML, and CSS, while Python and Flask handled full-stack functionality with secure data management. Integrated web scraping using BeautifulSoup and Requests to extract and parse product information from external websites, enabling automated data retrieval and dynamic population of wish list entries.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Stanford ML Certification",
      subtitle:
        "Completed a Machine Learning certification by Andrew Ng",
      image: require("./assets/images/MLcert.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/3J8FDXMWPMYR"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Top GPA Award",
      subtitle:
        "Won an award for achieving the top GPA in my graduating class at the University of Cincinnati",
      image: require("./assets/images/GPAaward.jpg"),
      // imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "Mantei/MAE Award",
      subtitle: "Received the Mantei Outstanding Academic Excellence award by Dr.Thomas Mantei",
      image: require("./assets/images/MAE.jpeg"),
      // imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Interested in data, ML, or software projects? Let's talk!",
  number: "(937) 321-4806",
  email_address: "chethanpalapuram@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
