export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId: string;
  url: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type?: string;
  summary: string;
  highlights: string[];
}

export interface ProjectData {
  title: string;
  status: string;
  category: string;
  description: string;
  supportingStatement: string;
  liveUrl: string;
  features: string[];
  focusAreas: string[];
}

export const PERSONAL_INFO = {
  name: "Zulayga Salie",
  title: "Tech-Savvy Professional",
  descriptor: "IT Support | Front-End Development | AI",
  supportingPositioning: "IT Support • Front-End Development • Artificial Intelligence • Digital Technologies",
  location: "Cape Town, Western Cape, South Africa",
  email: "zulayga.salie@gmail.com",
  linkedin: "https://www.linkedin.com/in/zulayga-salie-73095b32b/",
  languages: [
    { name: "English", level: "Home Language" },
    { name: "Afrikaans", level: "First Additional Language" }
  ],
  corePositioning: "Zulayga Salie is a tech-savvy, adaptable and continuously developing professional with experience across customer service, administration, front-end web development and IT support, complemented by growing knowledge in artificial intelligence, AI prompting, machine learning and digital technologies.",
  supportingStatement: "Her professional development reflects a strong commitment to continuous learning, with certifications spanning AI, generative AI, responsible AI, machine learning, Python, communication, leadership, productivity and personal development.",
  professionalSummary: "Zulayga is a tech-savvy, adaptable professional with experience in customer service, office administration, web development, and IT support. Currently completing an IT Support Learnership and an AI Bootcamp, and has completed a Google AI Essentials certification. She combines strong administrative and client-service skills with growing technical expertise. A continuous learner, she leverages technology and AI tools to improve efficiency, streamline processes, and provide reliable administrative and technical support in dynamic environments.",
  careerObjective: "My career goal is to build a rewarding career in the IT industry, beginning in an IT Support role where I can develop a strong foundation in technical support and problem-solving. I aim to continuously hone my skills, expand my knowledge, and gain valuable industry experience while embracing new technologies and challenges. Over time, I aspire to grow professionally, take on greater responsibilities, and build a successful and fulfilling career within the IT industry.",
  careerDirection: "I am continuing to build my career at the intersection of technology, IT support, web development and artificial intelligence, with a strong focus on continuous learning, practical problem-solving and creating meaningful value through technology.",
  certificationIntro: "Professional development is an important part of my career journey. My certifications reflect my ongoing learning across artificial intelligence, technology, communication, professional development, productivity and responsible technology."
};

export const WHAT_IVE_DONE = [
  {
    title: "Customer Service",
    description: "Experience supporting customers, communicating professionally and resolving issues in client-facing environments."
  },
  {
    title: "Office & Administration",
    description: "Administrative experience involving organisation, communication, coordination and professional support."
  },
  {
    title: "Front-End Development",
    description: "Developing practical web-development skills using HTML5, CSS3, JavaScript, and SCSS."
  },
  {
    title: "AI & Prompting",
    description: "Developing knowledge in Artificial intelligence, Generative AI, Prompt engineering, Responsible AI, and AI productivity tools."
  },
  {
    title: "IT Support",
    description: "Developing practical IT support capabilities through the CAPACITI IT Support Learnership."
  },
  {
    title: "Continuous Learning",
    description: "Consistently developing technical, professional and interpersonal capabilities through courses, certifications and practical projects."
  }
];

export const WHAT_I_BRING = [
  {
    title: "Adaptability",
    description: "Able to learn, adjust and grow within changing environments."
  },
  {
    title: "Continuous Learning",
    description: "Committed to developing technical and professional capabilities."
  },
  {
    title: "Technology Mindset",
    description: "Interested in using technology and AI to improve efficiency and solve problems."
  },
  {
    title: "Customer Focus",
    description: "Strong foundation in customer service and user-focused communication."
  },
  {
    title: "Communication",
    description: "Professional communication, active listening and interpersonal skills."
  },
  {
    title: "Responsible Technology",
    description: "A growing understanding of responsible, trustworthy and ethical AI."
  }
];

export const FEATURED_PROJECT: ProjectData = {
  title: "SmartTicket AI Enterprise",
  status: "Completed Project",
  category: "AI-Powered Support & Governance",
  supportingStatement: "An AI-supported enterprise ticketing concept designed to intelligently sort and route support requests while incorporating human oversight, transparency and AI governance.",
  description: "SmartTicket AI Enterprise is an AI-supported support-ticket and request-routing application designed to help sort incoming requests and direct them to the appropriate department efficiently. The project includes an AI Intelligence Hub where users can submit support requests containing their name, corporate email and problem details. The system uses AI to assist with sorting and routing requests while retaining human review as part of the process. The application also incorporates an explicit AI governance and transparency focus.",
  liveUrl: "https://studio--stellar-utility-470009-f0.us-central1.hosted.app/",
  features: [
    "AI-assisted support-ticket classification",
    "Intelligent request routing",
    "Support request submission",
    "User information capture",
    "AI governance monitoring",
    "Human review of AI-assisted results",
    "Transparency-focused AI design",
    "Compliance documentation",
    "Enterprise-oriented support workflow"
  ],
  focusAreas: [
    "Artificial Intelligence",
    "Generative AI",
    "AI-assisted workflow automation",
    "AI governance",
    "Responsible AI",
    "Support-ticket management",
    "User experience",
    "Enterprise technology"
  ]
};

export const IT_SUPPORT_PLANNER_PROJECT: ProjectData = {
  title: "IT Support Task & Time Planner",
  status: "Completed Project",
  category: "IT Support & Productivity",
  supportingStatement: "A dedicated task and time management application designed for IT Support professionals to prioritize troubleshooting tickets, track operational duties, and manage daily support schedules.",
  description: "Created specifically for IT Support technicians and helpdesk personnel to manage their time better and keep track of critical support tasks. The application provides an intuitive workflow to capture incoming technical requests, organize diagnostic checklists, track ticket follow-ups, and balance daily operational tasks with long-term infrastructure maintenance.",
  liveUrl: "https://subtle-plan.lovable.app/",
  features: [
    "IT task prioritization & status tracking",
    "Daily schedule & time management workflow",
    "Support ticket follow-up monitoring",
    "Action item checklist & diagnostic tracking",
    "Priority categorization (Critical, High, Routine)",
    "Streamlined responsive helpdesk interface",
    "Task completion and progress visualization",
    "Productivity-focused clean user experience"
  ],
  focusAreas: [
    "IT Support Operations",
    "Time Management",
    "Productivity Tools",
    "Helpdesk Workflow",
    "Task Organization",
    "User Experience",
    "Digital Technologies"
  ]
};

export const FEATURED_PROJECTS: ProjectData[] = [
  FEATURED_PROJECT,
  IT_SUPPORT_PLANNER_PROJECT
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "IT Support Learnership",
    company: "CAPACITI",
    period: "Current",
    type: "Learnership",
    summary: "Active technical training program developing hands-on, practical capabilities across IT support operations and digital troubleshooting.",
    highlights: [
      "Helpdesk operations & ticket resolution flows",
      "Hardware troubleshooting & component diagnostics",
      "Software troubleshooting & operating system support",
      "Network troubleshooting & connectivity fundamentals",
      "User support & IT service excellence mindset",
      "Problem-solving & diagnostic procedures"
    ]
  },
  {
    role: "Junior Advisor",
    company: "MANATI ASF",
    period: "2026",
    summary: "Client advisory and administrative coordination focused on structured communication, organizational workflows, and customer engagement.",
    highlights: [
      "Customer & client interaction with high empathy and clarity",
      "Professional written and verbal communication",
      "Adaptability across fast-paced administrative workflows",
      "Systematic record management and organisation",
      "Ongoing professional skill development"
    ]
  },
  {
    role: "Customer Service Advisor",
    company: "Sigma Connected",
    period: "2022–2023",
    summary: "Client-facing customer service delivering professional problem resolution and communication in high-volume, structured operations.",
    highlights: [
      "High-touch customer service and client query resolution",
      "Active listening and empathetic stakeholder communication",
      "Methodical problem-solving under strict SLAs",
      "Working collaboratively in structured operational environments",
      "Transferable foundation in conflict de-escalation and clarity"
    ]
  }
];

export const SKILLS_DATA = {
  technical: [
    "JavaScript",
    "HTML5",
    "CSS3",
    "SCSS",
    "AI Prompting"
  ],
  aiAndTechnology: [
    "Artificial Intelligence",
    "Generative AI",
    "Prompt Engineering",
    "Responsible AI",
    "Trustworthy AI",
    "Machine Learning",
    "Python",
    "Data Science",
    "AI Productivity Tools",
    "AI Ethics"
  ],
  professional: [
    "Cross-Functional Collaboration",
    "Active Listening",
    "Incident Scoping",
    "Communication",
    "Presentation",
    "Interpersonal Skills",
    "Emotional Intelligence",
    "Time Management",
    "Professional Writing",
    "Personal Branding",
    "Leadership Development"
  ]
};

export const EDUCATION_DATA = [
  {
    institution: "University of the Western Cape",
    qualification: "Bachelor of Education — Senior Phase",
    period: "2017–2019",
    status: "Incomplete",
    note: "Undergraduate coursework providing foundational skills in pedagogy, structured communication, and learner support."
  },
  {
    institution: "Steenberg High School",
    qualification: "Matric (National Senior Certificate)",
    period: "2012–2016",
    status: "Completed",
    note: "Secondary education completed with English (Home Language) and Afrikaans (First Additional Language)."
  }
];

export const PROFESSIONAL_DEVELOPMENT_DATA = [
  {
    program: "Front-End Web Development",
    provider: "I Deserve It",
    summary: "Practical web development training covering modern web standards, responsive design, HTML5, CSS3, and JavaScript."
  },
  {
    program: "Google AI Essentials Specialization",
    provider: "Google",
    summary: "Specialization focusing on practical artificial intelligence principles, generative AI tools, prompt design, and responsible application."
  },
  {
    program: "AI Bootcamp",
    provider: "Coursera",
    summary: "Intensive training in applied artificial intelligence concepts, modern machine learning workflows, and productivity tools."
  },
  {
    program: "IT Support Learnership",
    provider: "CAPACITI",
    summary: "Workplace-integrated technical learnership building core competencies in hardware, operating systems, networking, and user helpdesk."
  },
  {
    program: "Professional Development",
    provider: "Coursera",
    summary: "Continuous coursework in business communication, emotional intelligence, leadership dynamics, and career readiness."
  }
];

export const CERTIFICATIONS_LIST: Certification[] = [
  {
    id: "cert-1",
    title: "Psychology of the Self",
    issuer: "American Psychological Association",
    credentialId: "8FNWEAPV3HFO",
    url: "https://www.coursera.org/verify/8FNWEAPV3HFO"
  },
  {
    id: "cert-2",
    title: "Preparation for Job Interviews",
    issuer: "Coursera",
    credentialId: "91DYXSVGB3LF",
    url: "https://www.coursera.org/verify/91DYXSVGB3LF"
  },
  {
    id: "cert-3",
    title: "Financial Planning for Young Adults",
    issuer: "University of Illinois Urbana-Champaign",
    credentialId: "IKULSA9G2LUU",
    url: "https://www.coursera.org/verify/IKULSA9G2LUU"
  },
  {
    id: "cert-4",
    title: "Leading with Impact: Team Dynamics, Strategy and Ethics",
    issuer: "Coursera",
    credentialId: "XMAM4S8FRXRW",
    url: "https://www.coursera.org/verify/XMAM4S8FRXRW"
  },
  {
    id: "cert-5",
    title: "Introduction to Personal Branding",
    issuer: "University of Virginia",
    credentialId: "ANUQQ23F27GE",
    url: "https://www.coursera.org/verify/ANUQQ23F27GE"
  },
  {
    id: "cert-6",
    title: "Introduction to Responsible AI",
    issuer: "Google Cloud",
    credentialId: "Q6ECXM2LZZWQ",
    url: "https://www.coursera.org/verify/Q6ECXM2LZZWQ"
  },
  {
    id: "cert-7",
    title: "Trustworthy AI: Managing Bias, Ethics, and Accountability",
    issuer: "Johns Hopkins University",
    credentialId: "S33NGV50V9CT",
    url: "https://www.coursera.org/verify/S33NGV50V9CT"
  },
  {
    id: "cert-8",
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI",
    credentialId: "MILBA26JMR6Z",
    url: "https://www.coursera.org/verify/MILBA26JMR6Z"
  },
  {
    id: "cert-9",
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI • Stanford University",
    credentialId: "X32VAVQ1SVSN",
    url: "https://www.coursera.org/verify/X32VAVQ1SVSN"
  },
  {
    id: "cert-10",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    credentialId: "A60VV9N95DEQ",
    url: "https://www.coursera.org/verify/A60VV9N95DEQ"
  },
  {
    id: "cert-11",
    title: "Finding Your Professional Voice: Confidence & Impact",
    issuer: "University of London",
    credentialId: "187GBCZJZI0S",
    url: "https://www.coursera.org/verify/187GBCZJZI0S"
  },
  {
    id: "cert-12",
    title: "AI Foundations: Prompt Engineering with ChatGPT",
    issuer: "Arizona State University",
    credentialId: "QLPLM26K0OOT",
    url: "https://www.coursera.org/verify/QLPLM26K0OOT"
  },
  {
    id: "cert-13",
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI",
    credentialId: "3BGTCJOOH2T8",
    url: "https://www.coursera.org/verify/3BGTCJOOH2T8"
  },
  {
    id: "cert-14",
    title: "Write Professional Emails in English",
    issuer: "Georgia Institute of Technology",
    credentialId: "VNAPFZBZGWOH",
    url: "https://www.coursera.org/verify/VNAPFZBZGWOH"
  },
  {
    id: "cert-15",
    title: "Introduction to AI",
    issuer: "Google",
    credentialId: "MLO8PL0DAV83",
    url: "https://www.coursera.org/verify/MLO8PL0DAV83"
  },
  {
    id: "cert-16",
    title: "Maximize Productivity With AI Tools",
    issuer: "Google",
    credentialId: "OD6BHKC6HFRO",
    url: "https://www.coursera.org/verify/OD6BHKC6HFRO"
  },
  {
    id: "cert-17",
    title: "Discover the Art of Prompting",
    issuer: "Google",
    credentialId: "5RD5DUQXKTMM",
    url: "https://www.coursera.org/verify/5RD5DUQXKTMM"
  },
  {
    id: "cert-18",
    title: "Use AI Responsibly",
    issuer: "Google",
    credentialId: "NYPFI19ZVPQJ",
    url: "https://www.coursera.org/verify/NYPFI19ZVPQJ"
  },
  {
    id: "cert-19",
    title: "Stay Ahead of the AI Curve",
    issuer: "Google",
    credentialId: "E7XV5U1N01RC",
    url: "https://www.coursera.org/verify/E7XV5U1N01RC"
  },
  {
    id: "cert-20",
    title: "Verbal Communications and Presentation Skills",
    issuer: "Starweaver",
    credentialId: "W3CF867RAF54",
    url: "https://www.coursera.org/verify/W3CF867RAF54"
  },
  {
    id: "cert-21",
    title: "Active Listening: Enhancing Communication Skills",
    issuer: "Coursera",
    credentialId: "LUESAF7O4JM9",
    url: "https://www.coursera.org/verify/LUESAF7O4JM9"
  },
  {
    id: "cert-22",
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    credentialId: "2CIZ75LLR2N9",
    url: "https://www.coursera.org/verify/2CIZ75LLR2N9"
  },
  {
    id: "cert-23",
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    credentialId: "8CEM8POLVLOS",
    url: "https://www.coursera.org/verify/8CEM8POLVLOS"
  },
  {
    id: "cert-24",
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    credentialId: "KMWZE6QOEI23",
    url: "https://www.coursera.org/verify/KMWZE6QOEI23"
  },
  {
    id: "cert-25",
    title: "AI Essentials",
    issuer: "Intel",
    credentialId: "9855SU1RUY42",
    url: "https://www.coursera.org/verify/9855SU1RUY42"
  },
  {
    id: "cert-26",
    title: "Developing Interpersonal Skills",
    issuer: "IBM",
    credentialId: "RWH1QB8P5LFT",
    url: "https://www.coursera.org/verify/RWH1QB8P5LFT"
  },
  {
    id: "cert-27",
    title: "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity",
    issuer: "University of California, Irvine",
    credentialId: "81RHXNJZLBKP",
    url: "https://www.coursera.org/verify/81RHXNJZLBKP"
  },
  {
    id: "cert-28",
    title: "Emotional Intelligence",
    issuer: "Arizona State University",
    credentialId: "3ZKVNCUZBHYV",
    url: "https://www.coursera.org/verify/3ZKVNCUZBHYV"
  },
  {
    id: "cert-29",
    title: "Google AI Essentials Specialization",
    issuer: "Google",
    credentialId: "7BFRO829ZJ7A",
    url: "https://www.coursera.org/verify/7BFRO829ZJ7A"
  },
  {
    id: "cert-30",
    title: "Operating Systems Support",
    issuer: "Cisco",
    credentialId: "Available via verified Cisco credential",
    url: "https://www.linkedin.com/in/zulayga-salie-73095b32b/"
  }
];

export const INTERESTS_DATA = [
  {
    name: "Reading",
    description: "Continuous intellectual curiosity spanning technology insights, human psychology, professional development, and non-fiction literature."
  },
  {
    name: "Tennis",
    description: "Active recreational sport fostering focus, discipline, quick reflexes, and mental clarity on the court."
  }
];
