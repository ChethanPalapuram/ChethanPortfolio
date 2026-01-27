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
    "Master’s Student in Computer Science | Data Analytics and Visualization Enthusiast| A passionate Data Enthusiast with keen interest in Data Engineering and Data Analysis and visualisation.🚀 Having an experience building Web applications with JavaScript / Reactjs / .NET / Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15Vc4J7vSO9ZFGGRfbUg2IU0VJMI_jzaQ/view?usp=sharing", // Set to empty to hide the button
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
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji( "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Design and deliver robust full-stack applications with modern frameworks"),
    emoji( "⚡ Leverage cloud platforms to build scalable, reliable, and secure systems"),
    emoji("⚡ Transform complex data into clear, interactive visualizations and insights")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
                {
      skillName: ".NET (Core/ Maui)",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
        {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
        {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
        {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
        {
      skillName: "cosmosDB/ mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
        {
      skillName: "bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
            {
      skillName: "githib",
      fontAwesomeClassname: "fab fa-github"
    },
            {
      skillName: "atlassian",
      fontAwesomeClassname: "fab fa-atlassian"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Cincinnati",
      logo: require("./assets/images/uc.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2020 - May 2025",
      desc: "Graduated top of my class with a 4.0 GPA",
      descBullets: [
        "Software Engineering Certificate",
        "University Honors Scholar",
        "Mantei/ MAE Scholar"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack Development", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "UI/UX",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "70%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
        {
      role: ".NET Software Developer",
      company: "Omniboom",
      companylogo: require("./assets/images/omniboom.png"),
      date: "May 2025 – Present",
      descBullets: [
        "Designed and developed a cross-platform iOS app in .NET MAUI (MVVM), integrating Stripe for payments, Toast for bar order processing, and Azure Cosmos DB/MongoDB for scalable patron and venue data storage.",
        "Built and deployed a microservice-based backend in .NET 6, designing and implementing RESTful APIs with Auth0 authentication, Azure cloud storage, and docker-compose for local development.",
        "Implemented CI/CD pipelines using Azure Pipelines for automated builds and deployment/testing via the Apple Developer Program and TestFlight, ensuring smooth functionality and user experience across iOS devices."
      ]
    },
    {
      role: "Software Engineer Co-op",
      company: "Cincinnati Children's Hospital",
      companylogo: require("./assets/images/childrens.png"),
      date: "May 2023 – Aug 2023",
      descBullets: [
        "Led full-stack web development using .NET for back-end, migrating 15 key pages from Angular to React (TypeScript, HTML, CSS), improving load times by 30% and supporting a data center serving 19,500+ employees.",
        "Spearheaded front-end development, communicating with a User Interface team to translate 20+ Figma designs into a responsive, intuitive interface while integrating Entity Framework with MySQL for data management.",
        "Integrated with an existing LDAP identity system to support 2,000+ users and improved code reliability by implementing NUnit tests (60% coverage), decreasing production bugs by ~40%."
      ]
    },
    {
      role: "Software Developer Co-op",
      company: "Matson Money",
      companylogo: require("./assets/images/matson.png"),
      date: "Jan 2022 – May 2022, Aug 2022 - Dec 2022",
      date1: "Aug 2022 - Dec 2022",
      descBullets: ["Developed multiple full-stack solutions using .NET Core, C#, ASP.NET, and React.js/Redux, including a secure fillable forms system handling 1,000+ monthly financial submissions, improving processing efficiency by 35%.",
            "Designed and implemented secure RESTful APIs in C# / .NET Core hosted in Azure, replacing Jitterbit integrations to save $40K annually and reduce synchronization errors by 60%; optimized SQL Server databases for 27K+ clients/$11B+ in investments, cutting report generation time by 50%.",
            "Collaborated in Agile/Scrum teams using JIRA, resolving 50+ backlog tickets, contributing to testing, code reviews, and deployments, and accelerating feature releases by 10%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
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

// Blogs Section

const blogSection = {
  title: "Personal Projects",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 5138365032",
  email_address: "neharuth17@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
