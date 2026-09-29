import Fourth from "./Assets/Projects/4.jpg";
import Third from "./Assets/Projects/3.jpg";
import DROPSHIP from "./Assets/Projects/dropship.jpg";
import GOOD_FOOD_DISCOUNTS from "./Assets/Projects/goodFoodDiscounts.png";
import Fifth from "./Assets/Projects/5.jpg";
import HSP from "./Assets/Projects/hsp.png";
import First from "./Assets/Projects/1.jpg";
import Sixth from "./Assets/Projects/6.jpg";
import Second from "./Assets/Projects/2.jpg";


export const PROJECTS = [
  {
    image: First,
    name: "Workflow Automation | Fintech CRM & ERP",
    technologyUsed: "Python, Django, PostgreSQL, Docker, OAuth, and API integrations.",
    description: " Airwallex - Built an automated bank reconciliation system connecting Airwallex with Fortnox for a Nordic finance team handling cross-border, multi-currency payments. Developed near-real-time transaction ingestion via signed webhooks and API sync, automated invoice matching, and supplier-invoice creation in Fortnox. Ambiguous transactions were routed to manual review with full audit trails.",
    url: "",
  },
  {
    image: Second,
    name: "Full-Stack Web Development | AI, Web Design & Responsive Development",
    technologyUsed: "React, JavaScript, CSS Framework, SaaS Development, Web Development",
    description: "Developed a modern healthcare web application using React.js with a focus on performance, scalability, and clean UI/UX. Built reusable components, implemented responsive design, and ensured fast loading across devices. Optimized rendering and structure for better speed and user experience. Delivered a scalable frontend architecture ready for future enhancements and integrations.",
    url: "https://www.ozarihealth.com/",
  },
  {
    image: Third,
    name: "Real estate Full stack web development work",
    technologyUsed: "UX & UI Design, Responsive Design, Website, Web Development, Web Application Development",
    description: "Developed a modern, responsive website for Southbrook Property, focused on presenting its building, landscaping, and property services in a clear and professional way.",
    url: "https://southbrookproperty.co.uk/",
  },
  {
    image: Fourth,
    name: "AI-Powered EdTech & Digital Library Platform",
    technologyUsed: "Full-Stack Development, Next.js, Vector Database, Node.js, AI App Development",
    description: "As Full Stack Developer, I built a multi-role system for students, teachers, and admins using Next.js, TypeScript, and Node.js/Express. Implemented AI-powered content exploration with Weaviate Vector Database for intelligent, conversational document interaction, part of my ongoing AI Chatbot Development work. Also built note-taking tools and secure payment processing via PayTech for this EdTech platform.MongoDB Vector Search that finds products, places orders, and tracks deliveries autonomously, not just answering questions. As Full Stack Developer, I built the entire platform: Next.js/TypeScript frontend, Node.js backend, Firebase auth, Redis caching, Socket.io for real-time chat, and an admin dashboard.",
    url: "",
  },
  {
    image: Fifth,
    name: "B2C Marketplace | AI Search, User Behavior Tracking",
    technologyUsed: "Machine Learning, React, Node.js, ExpressJS, MongoDB",
    description: "Developed a multi-vendor platform with intelligent product recommendations and search suggestions powered by ML. Includes vendor analytics, fraud detection, and scalable architecture built with MERN and integrated AI models.",
    url: "",
  },
  {
    image: Sixth,
    name: "HealthCare Management System",
    technologyUsed: "Next.js, React, React Native, .NET Core, ASP.NET",
    description: "I designed and developed a comprehensive HealthCare Management System aimed at streamlining operations for clinics and hospitals. The platform provides an intuitive dashboard, secure data management, and tools for improved communication between staff and administration. The system was built with a focus on efficiency, scalability, and user-friendly experience, enabling healthcare providers to manage patients, appointments, and staff from a centralized interface.",
    url: "",
  },
];

export const SKILLS = [
  { name: "React / Next.js", initialRating: 5 },
  { name: "TypeScript / JavaScript", initialRating: 5 },
  { name: "Node.js / Express", initialRating: 4 },
  { name: "Python / FastAPI", initialRating: 4 },
  { name: "GraphQL / REST APIs", initialRating: 4 },
  { name: "PostgreSQL / MongoDB", initialRating: 4 },
  { name: "LLM Integration (OpenAI / Claude)", initialRating: 5 },
  { name: "Prompt Engineering", initialRating: 5 },
  { name: "RAG & Vector DBs", initialRating: 4 },
  { name: "LangChain / LlamaIndex", initialRating: 4 },
  { name: "AI Agents & Tool Calling", initialRating: 4 },
  { name: "Docker / Kubernetes", initialRating: 4 },
  { name: "AWS / GCP / Vercel", initialRating: 4 },
  { name: "CI/CD (GitHub Actions)", initialRating: 4 },
  { name: "Testing (Jest / Pytest)", initialRating: 4 },
  { name: "Tailwind / Material UI", initialRating: 4 },
];

export const TOOLS = [
  "Visual Studio Code / Cursor",
  "Claude Code / GitHub Copilot",
  "Git & GitHub",
  "Docker",
  "Postman",
  "Jupyter Notebook",
  "Hugging Face",
  "Pinecone / pgvector",
  "LangSmith",
  "Supabase / Firebase",
  "Vercel / AWS",
  "Linux",
];
