import { ProjectDetail } from "@/types/project";

export const projectdetails: ProjectDetail[] = [
  {
    id: "smartkiosk",
    name: "Smart Kiosk Management System Supports Electronic Invoice Issuance (Web & Mobile)",
    duration: "Aug 2025 - Dec 2025",
    teamSize: 5,
    position: "(Fullstack) Member",

    images: [
      "/img/img_smartkiosk_01.png",
      "/img/img_smartkiosk_02.png",
      "/img/img_smartkiosk_03.png",
      "/img/img_smartkiosk_06.png",
    ],

    descriptions: [
      "Gathered and analyzed detailed business requirements to build core functionalities such as product management, inventory control, invoicing, multi-store management, and real-time sales processing",
      "Designed UI/UX and developed all Frontend Web/Mobile screens, including:",
      "Overview dashboard (role Owner, Manager, Staff)",
      "Management Modules: stores, branchs, products/categorys, employees, customers, invoices promotions/points (for Owner), Point of Sale (for Manager and Staff).",
      "Reporting System: daily/weekly/monthly revenue analytics, multi-branch filters, Excel export, and distribution charts.",
      "Realize the screens on the mobile point accumulation app: Login/ register/ forgot password and home/ bill/ store/ personal information.",
      "Built and maintained Backend services using NodeJS & ExpressJS",
    ],

    techStack: {
      frontend: [
        "NextJS",
        "Ant Design",
        "ReactNative",
        "JavaScript",
        "TypeScript",
      ],
      backend: ["NodeJS", "ExpressJS"],
      database: ["Mongo Atlas", "Redis"],
      deployment: ["Cloudflare", "EC2"],
      architecture: ["Client-Server (Layered Architecture)"],
      other: [
        "Blockchain (Polygon)",
        "IPFS (Pinata)",
        "n8n",
        "Supabase",
        "S3",
        "VNPay",
        "VietQR",
      ],
    },
  },
  {
    id: "tingting-chat",
    name: "TingTing Chat App (Web & Mobile)",
    duration: "Dec 2024 - May 2025",
    teamSize: 5,
    position: "(Fullstack) Team Leader",

    images: ["/img/img_tingtingchat_01.png"],

    descriptions: [
      "Collected detailed project requirements: private chat, group chat, friend requests, new message notifications.",
      "Implemented real-time friend request feature: allow users to send, cancel, accept, or reject requests in real time",
      "Integrated Firebase Cloud Messaging to notify users of new incoming messages.",
      "Designed and implemented shared layouts, friend request UI, and message notification interface.",
    ],

    techStack: {
      frontend: ["ReactJS", "ReactNative", "JavaScript", "TypeScript"],
      backend: ["NodeJS", "ExpressJS"],
      database: ["Mongo Atlas", "DynamoDB"],
      deployment: ["EC2"],
      architecture: ["Microservices"],
      other: ["Firebase Cloud Messaging"],
    },
  },
  {
    id: "elearning-mobile",
    name: "E_LearningApp Mobile",
    duration: "Oct 2024 - Dec 2024",
    teamSize: 2,
    position: "(Fullstack) Team Leader",

    images: ["/img/img_e_learning_01.png"],

    descriptions: [
      "Gather specific project requirements, including features such as course management and learning progress tracking.",
      "Utilize the React Native framework to develop user interfaces based on predefined designs.",
    ],

    techStack: {
      frontend: ["React Native", "JavaScript", "TypeScript"],
      backend: ["NodeJS", "ExpressJS"],
      database: ["Mongo Atlas"],
      deployment: ["Microsoft Azure"],
      architecture: ["Client-Server"],
      other: ["OpenAI API"],
    },
  },
    {
    id: "flexshoes",
    name: "FlexShoes Online Shoes Store Website",
    duration: "Sep 2024 - Dec 2024",
    teamSize: 5,
    position: "(Fullstack) Member",

     images: ["/img/img_flexshoes_01.png",
      "/img/img_flexshoes_02.png",
      "/img/img_flexshoes_03.png",
    ],

    descriptions: [
      "Designed the website interface.",
      "Used ReactJS and JavaScript along with Sassy CSS and Tailwind to develop the shopping cart UI based on predefined designs.",
      "Handled payment requests and stored order information in the database."
    ],

    techStack: {
      frontend: ["ReactJS", "JavaScript", "TypeScript", "SCSS", "Tailwind"],
      backend: ["Spring Boot"],
      database: ["SQL Server"],
      deployment: ["-"],
      architecture: ["-"],
      other: ["-"],
    },
  },
  {
    id: "karaoke-aplus",
    name: "Karaoke APlus Management System",
    duration: "Mar 2024 - Apr 2024",
    teamSize: 4,
    position: "(Fullstack) Member",

     images: [
      "/img/img_karaoke_01.png",
      "/img/img_karaoke_02.png",
    ],

    descriptions: [
      "Collected specific project requirements, including features such as customer management, room management, and user authentication",
      "Used Java to develop functionalities for managing employees, customers, and accounts.",
    ],

    techStack: {
      frontend: ["JavaSwing"],
      backend: ["Java (Socket-based client-server architecture)"],
      database: ["SQL Server"],
      deployment: ["-"],
      architecture: ["-"],
      other: ["-"],
    },
  },
  {
    id: "online-watch-store",
    name: "Online Watch Shopping Website",
    duration: "Mar 2023 - Apr 2023",
    teamSize: 5,
    position: "Member",

     images: ["/img/default.jpg",],

    descriptions: [
      "Designed the website interface.",
      "Used HTML, CSS, and JavaScript to develop the user interface (UI) based on predefined designs",
    ],

    techStack: {
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backend: ["-"],
      database: ["-"],
      deployment: ["-"],
      architecture: ["-"],
      other: ["-"],
    },
  },
  {
    id: "tourism-management",
    name: "Tourism Information Management System",
    duration: "Feb 2023 - Apr 2023",
    teamSize: 4,
    position: "Member",

     images: ["/img/img_tour_01.png",
      "/img/img_tour_02.png",
      "/img/img_tour_03.png",
     ],

    descriptions: [
      "Gathered specific project requirements, including features such as customer management, tour management, user login, and project report writing.",
      "Used Java Swing to develop the user interface (UI) based on predefined designs.",
    ],

    techStack: {
      frontend: ["Java Swing"],
      backend: ["-"],
      database: ["SQL Server"],
      deployment: ["-"],
      architecture: ["-"],
      other: ["-"],
    },
  },
];
