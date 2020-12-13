
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sravani Dodla",
  title: "Hi all, I'm Sravani",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with C#.Net/ .Net core/ ASP.Net/ JavaScript / Reactjs / React Native / Python and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1hdx0YlhJCDNyoQKmvT1XR586X0DRpFaT/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/sravanidodla",
  linkedin: "https://www.linkedin.com/in/d-sravani/",
  gmail: "sravanisravs746@gmail.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Self-directed, detail-oriented, and an Enthusiast in software development using programming languages such as C#, Python, JavaScript, JAVA."),
    emoji("⚡ Integration of third party services such as AWS")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: ".Net",
      fontAwesomeClassname: "fab fa-dotnet"
    },
    {
      skillName: ".Net core",
      fontAwesomeClassname: "fab fa-dotnetcore"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fab fa-csharp"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "asp.net",
      fontAwesomeClassname: "fas fa-aspdotnet"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Cleveland State University",
      logo: require("./assets/images/csu.jpg"),
      subHeader: "Master of Science in Computer Information Science",
      duration: "January 2018 - December 2019",
      desc: "Secured GPA of 3.65/4.0",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "B V Raju institute of Technology",
      logo: require("./assets/images/bvrit.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "ecured GPA of 3.4/4.0",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Edgenuity",
      companylogo: require("./assets/images/edgenuity.png"),
      date: "June 2020 – Present",
      //desc: "Project: My Path Next Gen My Path Next Gen is the next iteration of the My Path product from Edgenuity. Built from the bottom up, a completely new experience both for the educator and student. ILP, Individualize Learning Paths, are assigned to students based on their assessment scores. These ILPs are meant to be unique to a student’s path to get to their target grade level, which is their chronological academic grade level.",
      descBullets: [
        "Experience working on .NET core 2.0, React Js with TypeScript as mainframe technologies.",
        "Experience in developing Microservices using .NET core and web applications using React Js, Typescript, Jest testing framework",
        "Experience with databases (PostgreSQL, MongoDB, Firebase, DynamoDB)",
        "Experience working with classic ASP for generating dynamic web pages. ",
        "Experience in front end technologies like React, Redux, Context API, SCSS, SASS / CSS, SASS 3 and above, HTML 5, Webpack 4 and above Responsive Design",
        "Experience in all phases of Software Development Life Cycle (SDLC) from Requirements gathering, Analysis, and Design, Development, Documentation, Testing, Implementation and Maintenance of various Web and windows applications in Waterfall and Agile Methodology.",
        "Experience working on N-Tier Architectures such as MVC (Model View Controller), MVVM (Model View, View Model) in applications.",
        "Knowledge of installation and configuration, platform operations, trouble shoot and support of API products",
        "Experience implementing and working with third party APIs. Deep knowledge of JSON ",
        "Hands on experience with AWS CLI interface",
        "Knowledge of monitoring, logging and cost management tools that integrate with AWS",
        "Worked on JIRA for defect/issues logging & tracking and documented all my work using CONFLUENCE.",
        "Experience working with AWS, DevOps, Jenkins SonarQube and Docker for deployment of software application"
      ]
    },
    {
      role: "Software Engineer",
      company: "Pile Dynamics",
      companylogo: require("./assets/images/pile.jpg"),
      date: "May 2019 – May 2020",
     // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
     descBullets: [
      "Experienced in developing C#, .Net Windows-based Applications, developing custom software, Test and de-bug software application named SHAPE Parameters which goes as a batch file for Shaft Area Profile Evaluator (SHAPE). SHAPE Parameters is an in-house program to enter various parameters/variables easily to configure the device for shipment to customers",
      "Responsible for developing software applications that go as UI to hardware devices. Worked with .exe    and .dll more often to be able to use as a part of different applications",
      "Modified programs for computer applications, performing testing and debugging and assisting with analysis and design",
      "Worked on Bleu Soleil and 32 Feet Bluetooth Test Application to connect Bluetooth devices through remote connection",
      "Experience in designing and developing WinForms and Webforms.",
      "Worked with developers to troubleshoot, test and maintain software products and databases to ensure strong optimization as well as functionality",
      "Experienced with PHP web frameworks such as Laravel and proficient in various programming languages such as HTML/CSS, JavaScript, SQL, and PHP",
      "Involved in gathering functional requirements, writing design specifications, prototype and architecting the new application using SOA and Agile",
      "Have worked on WCF to consume web Services. Migrated data from MS Access Databases to SQL databases",
      "Extensively used Exception Handling Application block for exception handling."
    
     ]
    },
    {
      role: "Software Developer",
      company: "Cleveland State University",
      companylogo: require("./assets/images/csu.jpg"),
      date: "Feb 2018 – Apr 2019",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    descBullets: [
      "Experienced in developing Win Forms using C#, web-based applications using ASP.NET, VB.Net, .Net core, IIS server.",
      "Good Expertise in analyzing the Document Object Model (DOM) Layout, DOM Functions, and Java Script functions, Cascading Styles across cross-browser using Fire Bug, Developer Tool Bar.",
      "Expertise in React JS framework to develop the SPA.",
      "Experienced in working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites.",
      "Experience in using React JS components, Forms, Events, Keys, Router, plus Redux, Animations and Flux concept.",
      "Experienced in working with Web based PHP programming and SQL programming language.",
      "Familiar with creating Custom Reusable React Components Library.",
      "Expertise in using Angular JS Directives, Controllers, Filters, Services, Templates, Events and Injectors.",
      "Experienced in working with Node.JS and NPM modules like http-server, Marathon, inquirer, path, mongo DB, Micro Services, Request, Elastic Search, express, luck, spark and templating engines.",
      "Experience in Node environment using Node.js, NPM. Strong in using the Node.js, and Require.js and MVC Frameworks in the development of the web application and webforms.",
      "Experienced in architecting and managing AWS cloud infrastructure. Developed Python modules to automate processes in AWS (AWS Cloud Formation)"
    
    ]
  },
  {
    role: "Associate Software Developer",
    company: "LKKN Consultants Pvt Ltd",
    companylogo: require("./assets/images/lkkn.jpg"),
    date: "Jan 2016 – Dec 2017",
    //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  descBullets: [
    "Experience in Web Development, developing custom applications and webservices, Test and de-bug  software applications following Agile Practices. ",
    "Experience in Building Web Applications using CSS, HTML, JavaScript, jQuery.",
    "Involved in collecting and analyzing the business requirements from the customers and business analysts.",
    "Developed Data Access Layer (ADO.NET) in C# 3.5 to do all the database related operations like apply changes of the strongly typed dataset, fill strongly typed dataset.",
    "Utilized ADO.Net 3.5 technology extensively for data retrieving, querying, storage and manipulation using SQL Server 2016/2017/2019, Entity Framework and .NET Framework 3.5.",
    "Experience working with WordPress and UI testing.",
    "Master Pages were developed using web user controls and custom controls.",
    "Developed classes in C#, which incorporate multi-tier architecture and database connectivity.",
    "Implemented extreme programming by using fast paced agile methodology, involving in task completion, user stories, iterations and XP/Scrum methodologies.",
    "UI (User Interface) was developed using ASP.NET 3.5 web server controls, jQuery, JavaScript, HTML, XDSL, XML, XLS and DHTML and Cascading Style Sheets (CSS) using Macromedia Dreamweaver.",
    "Supported SQL queries and databases by updating and tuning in proper manner.",
    "Implemented WPF in creating custom controls"

  ]
}
]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sravanidodla", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS DURING MY MASTERS",
  projects: [
    {
      image: require("./assets/images/mnist.jpeg")
      
    },
    {
      image: require("./assets/images/facerecognision.png")
     
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Python for Data Science and AI offered by IBM",
      //subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different counties.",
      image: require("./assets/images/pythonforai.png"),
      footerLink: [
        { name: "See Credentials", url: "https://www.coursera.org/account/accomplishments/verify/4F848P8R4F6W" },
       // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        //{ name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Received Certificate of Excellence on Crash Course on Python offered by Google",
      //subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/crashcoursepython.jpeg"),
      footerLink: [{ name: "See credentials", url: "https://www.coursera.org/account/accomplishments/verify/239YNG9FX3VC" }]
    },

    {
      title: "Received Certificate of Excellence on Software Engineering Virtual Experience offered by JPMorgan Chase & Co",
      //subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/virtualinternship.jpg"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "See Credentials", url: "https://tinyurl.com/ybeabrwn" }
      ]
    }
  ]
};

//Blogs Section

// const blogSection = {

//   title: "Blogs",
//   subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ]
// };

// // Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ]
// };

// // // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-216-356-7195",
  email_address: "sravanisravs746@gmail.com"
};

//Twitter Section

// const twitterDetails = {

//   userName : "twitter"//Replace "twitter" with your twitter username without @

// };
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, contactInfo};
