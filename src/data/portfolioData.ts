/**
 * =========================================================================
 * ADESHEWA DAMILOLA OYEWOLE - PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * This is the single source of truth for all portfolio content.
 * You can easily update your bio, social links, project descriptions,
 * metrics, and dashboard images by modifying the values in this file.
 */

export interface Project {
  id: string;
  title: string;
  /** One-line description shown on the project still */
  logline: string;
  /** The single number that sums the project up, shown large */
  figure: string;
  figureLabel: string;
  category: 'All' | 'Power BI' | 'SQL' | 'Excel';
  tools: string[];
  summary: string;
  businessProblem: string;
  methodology: string[];
  keyInsights: string[];
  metrics: string[];
  image: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'primary' | 'competency';
  proficiency: number; // 0 - 100
  iconName: string;
  description: string;
  highlights: string[];
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Certification' | 'Education';
  description: string;
  achievements: string[];
  status?: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  toolsUsed: string[];
  deliverable: string;
}

export const PERSONAL_INFO = {
  name: "Adeshewa Damilola Oyewole",
  preferredName: "Adeshewa Oyewole",
  initials: "AO",
  tagline: "I turn raw data into decisions people can act on.",
  roles: [
    "Data Analyst",
    "Power BI Developer",
    "SQL Problem Solver",
    "Business Intelligence Specialist"
  ],
  bioStory: `I am a Computer Science student at Kwara State University, Malete, with a passion for uncovering hidden business narratives within complex datasets. Having earned my professional Data Analysis certification at Malhub, I am currently gaining hands-on industry experience during my SIWES internship at Malhub, GRA Ilorin. 
  
My work bridges the gap between raw, unstructured numbers and strategic decision-making. Whether architecting clean star-schemas in Power BI, writing complex SQL window queries, or building automated Python scripts, my priority is delivering high-impact clarity that stakeholders can trust.`,
  email: "oyewoleadeshewa016@gmail.com",
  // Contact form delivery: get a free access key at https://web3forms.com
  // (enter the email above, the key arrives in that inbox) and paste it here.
  // While this is empty, the form opens the visitor's email app instead.
  web3formsKey: "145aa1a7-93a8-41dd-a723-b927a6881ba0",
  phone: "+234 810 000 0000", // Placeholder for user
  location: "GRA Ilorin, Kwara State, Nigeria",
  university: "Kwara State University, Malete",
  internship: "Malhub, GRA Ilorin (SIWES)",
  
  // Social links (with Adeshewa's active GitHub repository profile)
  social: {
    github: "https://github.com/oyewoleadeshewa016-del?tab=repositories",
    linkedin: "https://linkedin.com/in/adeshewa-oyewole",
    twitter: "https://twitter.com/adeshewa_data",
    emailMailto: "mailto:oyewoleadeshewa016@gmail.com",
  },

  // Adeshewa's authentic professional studio portrait
  profileImage: "/assets/aistudio/WhatsApp_Image_2026-11-02_at_12.48.54_PM_8e48aacd.jpeg",

  // Headline figures shown under the hero, all drawn from the case studies
  kpis: [
    { value: "5", label: "Power BI case studies" },
    { value: "6,500+", label: "rows cleaned and modelled" },
    { value: "₦5M", label: "of sales traced, two businesses" },
    { value: "481", label: "survey responses analysed" }
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  {
    name: "Power BI",
    category: "primary",
    proficiency: 95,
    iconName: "BarChart3",
    description: "End-to-end business intelligence dashboards, DAX measures, row-level security, and interactive visual hierarchies.",
    highlights: ["Advanced DAX Calculations", "Star-Schema Modeling", "Executive KPIs & Drill-downs", "Power Query M Transformations"]
  },
  {
    name: "SQL",
    category: "primary",
    proficiency: 90,
    iconName: "Database",
    description: "Database querying, relational structure analysis, aggregations, window functions, and query optimization.",
    highlights: ["Complex Multi-Table Joins", "Window Functions (RANK, DENSE_RANK)", "CTEs & Subqueries", "Aggregations & Grouping"]
  },
  {
    name: "Excel",
    category: "primary",
    proficiency: 92,
    iconName: "FileSpreadsheet",
    description: "Advanced spreadsheet modeling, dynamic lookup functions, PivotTables, and exploratory data analysis.",
    highlights: ["XLOOKUP & INDEX-MATCH", "Power Query ETL", "Pivot Tables & Slicers", "Conditional What-If Modeling"]
  },
  {
    name: "Python",
    category: "primary",
    proficiency: 85,
    iconName: "Code2",
    description: "Statistical computing, exploratory data analysis, data cleaning, and automated visualization scripting.",
    highlights: ["Pandas & NumPy Arrays", "Data Munging & Cleaning", "Matplotlib & Seaborn", "Automated Scripting"]
  }
];

export const COMPETENCIES = [
  { name: "DAX Formulas", desc: "Time intelligence, CALCULATE modifiers, and custom KPIs" },
  { name: "Data Cleaning", desc: "Outlier detection, null imputation, type coercion, and ETL" },
  { name: "Data Modelling", desc: "Star & Snowflake dimensional schemas, normalization" },
  { name: "Dashboard Design", desc: "Human-centered UX, high visual contrast, zero-clutter" },
  { name: "Data Storytelling", desc: "Framing insights to address real stakeholder problems" },
  { name: "Business Acumen", desc: "Translating operational questions into measurable metrics" }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "fresh-mart-sales",
    title: "Fresh Mart Supermarket Analysis",
    logline: "Where a supermarket's sales came from, broken down by branch, payment method and customer type.",
    figure: "₦1M",
    figureLabel: "sales across 100 orders",
    category: "Power BI",
    tools: ["Power BI", "Excel", "DAX", "Retail Analytics"],
    summary: "Sales performance overview dashboard tracking ₦1,000,000 in total revenue across 100 orders and 552 units. Includes breakdowns by customer type (Member vs Normal), payment method (Card 46.9%, Transfer 30.5%, Cash 22.6%), branch performance (Lagos, Ilorin, Abuja), and top product categories.",
    businessProblem: "Supermarket leadership required clear visibility into branch performance and customer purchasing behavior across branches and checkout payment channels to optimize inventory and checkout flows.",
    methodology: [
      "Extracted and normalized transactional sales datasets across 100 customer orders and 552 units in Power Query.",
      "Modeled DAX measures for Total Sales (1M), Total Orders (100), Average Sales Order (10.44K), and Total Quantity (552).",
      "Designed clean visual breakdown charts comparing Member vs Normal customer volume and branch-level turnover."
    ],
    keyInsights: [
      "Card payments represented 46.92% of total sales volume (490K), while Bank Transfer drove 30.52% (319K).",
      "Member customers contributed 0.54M in revenue compared to 0.51M from normal walk-in shoppers.",
      "Lagos branch led sales at 0.39M, with Ilorin and Abuja branches following closely at 0.33M each.",
      "Beverages generated 0.40M in sales, representing the highest turnover category in the store."
    ],
    metrics: ["1M Total Sales", "100 Total Orders", "10.44K Avg Order", "552 Total Quantity"],
    image: "/assets/aistudio/Dashboard_b71fa56a.jpg",
    githubUrl: "https://github.com/oyewoleadeshewa016-del/FreshMart-Supermarket-Analysis",
    featured: true
  },
  {
    id: "glows-hr-report",
    title: "Glow's Ventures HR Report",
    logline: "Why people leave a 43-person company, read by department, job role, tenure and overtime.",
    figure: "0.09",
    figureLabel: "attrition rate, 43 staff",
    category: "Power BI",
    tools: ["Power BI", "DAX", "Power Query", "HR Analytics"],
    summary: "Comprehensive human resources attrition report monitoring workforce retention across 43 employees. Evaluates attrition rate (0.09), average income (9.84), average monthly income (526.83K), and employee exits across departments, job roles, overtime frequency, and tenure bands.",
    businessProblem: "Glow's Ventures experienced employee exits and needed a data-driven understanding of retention risk factors across departments, overtime commitments, and income tiers.",
    methodology: [
      "Ingested workforce census data in Power Query, standardizing job roles, departments, income bands, and overtime status.",
      "Engineered DAX metrics for Total Employees (43), Total Attrition (43 records evaluated), Attrition Rate (0.09), and Average Monthly Income (526.83K).",
      "Created segmented bar charts cross-referencing overtime requirements, tenure longevity (11+ years vs 0-2 years), and salary tiers."
    ],
    keyInsights: [
      "Research & Development experienced the highest department attrition (12 employees), followed by Finance and Sales (8 each).",
      "Human Resources Coordinators and Operations Specialists represented the job roles with peak turnover (6 exits each).",
      "Employees with 11+ years of tenure showed the highest historical turnover (19), followed by the 6-10 years band (12).",
      "Staff not working overtime accounted for 36 non-overtime records versus 7 working frequent overtime."
    ],
    metrics: ["43 Total Employees", "0.09 Attrition Rate", "526.83K Avg Monthly Income", "4 Employees Lost"],
    image: "/assets/aistudio/gLOW__79f79176.jpg",
    githubUrl: "https://github.com/oyewoleadeshewa016-del/Glow-Supermarket-Analysis",
    featured: true
  },
  {
    id: "social-media-addiction",
    title: "Social Media Addiction Analysis",
    logline: "How many hours 481 people spend on social media each day, and how distracted it leaves them.",
    figure: "116",
    figureLabel: "people online 5+ hours a day",
    category: "Power BI",
    tools: ["Power BI", "Python", "Survey Analytics", "DAX"],
    summary: "Empirical survey analytics dashboard analyzing 481 respondents (211 Male, 263 Female, 7 non-binary/transgender/unsure). Investigates daily hours spent on social media, distraction levels, social comparison frequency, platform preferences, and age cohorts.",
    businessProblem: "Evaluating how digital platform usage correlates with daily distraction, academic procrastination, and emotional restlessness across student and working populations.",
    methodology: [
      "Cleaned survey responses covering demographic variables, daily screen time brackets, and 5-point Likert scale indicators.",
      "Created demographic segmentation visuals highlighting University Students (60.71%) vs Salaried Workers (27.44%).",
      "Engineered cross-tabulation DAX measures evaluating restlessness, platform popularity, and age distributions."
    ],
    keyInsights: [
      "116 respondents reported spending more than 5 hours daily on social media, the largest single usage bracket.",
      "University students formed 60.71% of respondents (292 individuals), with School Students at 10.19% (49 individuals).",
      "Facebook, YouTube, and Instagram were the most heavily used platform combination.",
      "Respondents aged 18-24 (Young Adults) made up 365 out of 481 surveyed individuals."
    ],
    metrics: ["481 Total Respondents", "211 Male · 263 Female", "60.7% University Students", "116 Spend >5 Hours/Day"],
    image: "/assets/aistudio/SMA_ec8d9fd1.jpg",
    githubUrl: "https://github.com/oyewoleadeshewa016-del/Social-Media-Addiction-Analysis",
    featured: true
  },
  {
    id: "poultry-farm-analytics",
    title: "Poultry Farm Revenue Analysis",
    logline: "Seven poultry products, seven sales channels, six ways to pay. Which ones carry the farm.",
    figure: "₦4M",
    figureLabel: "revenue in two months",
    category: "Power BI",
    tools: ["Power BI", "Excel", "Agri-Analytics", "DAX"],
    summary: "Operational and financial performance report tracking ₦4M in total revenue across 7 poultry product categories. Details monthly trends (September 3M / 69.15%, October 1M / 30.85%), platform sales (Instagram, Website, WhatsApp), and payment methods (Bank Transfer, Pay on Delivery, USSD, OPay, PalmPay).",
    businessProblem: "Farm operations needed unified tracking of revenue across multiple bird and egg product lines, sales channels, and digital payment providers to optimize production planning.",
    methodology: [
      "Aggregated commercial farm order records and flock production logs across 7 product categories.",
      "Built DAX measures for Total Revenue (4M), Table Eggs (922K), Quail Eggs (118K), Broiler Chicken (1M), and Live Layer Hen (738K).",
      "Visualized channel conversion comparing social media sales (Instagram, WhatsApp) against third-party platforms (Jumia, Konga)."
    ],
    keyInsights: [
      "Broiler Chicken generated the highest revenue share at ₦1.39M, followed by Table Eggs at ₦922K and Live Layer Hen at ₦738K.",
      "September accounted for ₦3M (69.15%) of total revenue, while October contributed ₦1M (30.85%).",
      "Direct channels (Instagram, Website, WhatsApp) generated over ₦2.89M in sales, significantly outperforming third-party marketplaces.",
      "Bank Transfer was the leading payment method at ₦1.25M, followed closely by Pay on Delivery at ₦1.04M."
    ],
    metrics: ["₦4M Total Revenue", "7 Poultry Products", "₦1.39M Broiler Chicken", "₦922K Table Eggs"],
    image: "/assets/aistudio/poultry_ba69ed8b.jpg",
    githubUrl: "https://github.com/oyewoleadeshewa016-del/Poultry-Analysis",
    featured: true
  },
  {
    id: "road-accident-analysis",
    title: "Road Accidents, 2015 to 2023",
    logline: "Nine years of crash records, read for the years deaths peaked and how far they have fallen since.",
    figure: "51K",
    figureLabel: "accidents over nine years",
    category: "Power BI",
    tools: ["Power BI", "DAX", "Data Modeling", "Public Safety Analytics"],
    summary: "9-year longitudinal road safety and mortality report covering 2015 to 2023. Tracks 51K total road accidents, 98K deaths, and 84K injuries, analyzing annual injury-to-death ratios and accident frequency trends.",
    businessProblem: "Transport authorities and public safety planners required multi-year statistical modeling to identify peak accident years and examine casualty severity ratios.",
    methodology: [
      "Consolidated historical accident records spanning 9 annual reporting cycles (2015 through 2023).",
      "Engineered KPI cards for Total Years (9), Number of Accidents (51K), Number of Deaths (98K), and Number of Injured (84K).",
      "Built year-over-year bar comparison charts and daily fatality vs injury pie distributions (Avg. Death Per Day 273 / 53.63% vs Avg. Injured Per Day 236 / 46.37%)."
    ],
    keyInsights: [
      "Over the 9-year span, 98,000 fatalities and 84,000 injuries were documented across 51,000 total road accidents.",
      "Average daily fatalities stood at 273 persons per day (53.63% of daily casualties) compared to 236 injured persons per day.",
      "2017 and 2022 recorded peak accident rates (7.4K and 6.7K incidents respectively).",
      "Fatalities peaked in 2015 with 22K deaths, showing a downward trend towards 4K deaths in 2023."
    ],
    metrics: ["9 Years (2015-2023)", "51K Accidents", "98K Fatalities", "84K Injuries"],
    image: "/assets/aistudio/DB_91b9931c.jpg",
    githubUrl: "https://github.com/oyewoleadeshewa016-del?tab=repositories",
    featured: true
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "siwes-malhub",
    title: "Data Analyst Intern (SIWES)",
    organization: "Malhub",
    location: "GRA Ilorin, Kwara State",
    period: "2024 - Present",
    type: "Internship",
    status: "Currently Active",
    description: "Student Industrial Work Experience Scheme (SIWES) placement. I work on the organisation's live data with SQL, Power Query and Power BI, alongside the tech team.",
    achievements: [
      "Building production-grade Power BI dashboards for operational and business intelligence reporting.",
      "Assisting in real-world data extraction, data cleansing with Power Query, and DAX metric formulation.",
      "Collaborating with tech teams and mentors on data storytelling and stakeholder presentations."
    ]
  },
  {
    id: "malhub-certification",
    title: "Certified Data Analyst",
    organization: "Malhub Academy",
    location: "GRA Ilorin, Kwara State",
    period: "2024",
    type: "Certification",
    status: "Certified",
    description: "Professional data analysis programme covering Excel modelling, Power BI report design, relational SQL databases and Python for analysis.",
    achievements: [
      "Graduated with top marks on capstone projects across retail, HR, and healthcare analytics.",
      "Mastered Star-Schema modeling, DAX time-intelligence functions, and ETL pipeline best practices.",
      "Executed comprehensive SQL relational database joins, subqueries, and window analytics."
    ]
  },
  {
    id: "kwasu-cs",
    title: "B.Sc. Computer Science",
    organization: "Kwara State University (KWASU)",
    location: "Malete, Kwara State",
    period: "2021 - Present",
    type: "Education",
    status: "In Progress",
    description: "Undergraduate degree covering algorithms, database management systems, statistics and software engineering.",
    achievements: [
      "Specializing coursework around Database Systems, Data Structures, Object-Oriented Programming, and Statistics.",
      "Actively applying computer science computational thinking to high-volume data analytics challenges.",
      "Member of student technology and innovation study groups."
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    number: "STEP 01",
    title: "Collect",
    description: "Pull the data from wherever it lives: databases, spreadsheets, APIs or survey exports. Check where each column comes from before trusting it.",
    toolsUsed: ["SQL Server", "APIs", "Excel", "PostgreSQL"],
    deliverable: "Raw tables and a repeatable way to refresh them"
  },
  {
    step: "02",
    number: "STEP 02",
    title: "Clean",
    description: "Remove duplicates, fill or flag missing values, fix data types and spellings, and reshape messy files into tidy tables.",
    toolsUsed: ["Power Query", "Python (Pandas)", "SQL", "Excel"],
    deliverable: "Clean tables I can vouch for"
  },
  {
    step: "03",
    number: "STEP 03",
    title: "Model",
    description: "Arrange the tables into a star schema with one fact table and its dimensions, link them by key, then write the DAX measures the report needs.",
    toolsUsed: ["Power BI Data Model", "DAX Studio", "Relational Keys"],
    deliverable: "A fast data model with tested measures"
  },
  {
    step: "04",
    number: "STEP 04",
    title: "Visualize",
    description: "Build report pages that answer one question each: headline numbers at the top, the breakdown below, slicers and drill-through for anyone who wants more.",
    toolsUsed: ["Power BI", "Figma Prototyping", "Excel Dashboards"],
    deliverable: "A Power BI report people can use on their own"
  },
  {
    step: "05",
    number: "STEP 05",
    title: "Recommend",
    description: "Turn what the charts show into a few specific recommendations, each with the number behind it, written for the person who has to act.",
    toolsUsed: ["Executive Presentations", "Data Storytelling", "KPI Summaries"],
    deliverable: "A short list of findings and what to do next"
  }
];

export const DEPLOYMENT_GUIDE = {
  title: "How to Edit Content & Deploy for Free",
  steps: [
    {
      title: "1. Edit Your Personal Content",
      desc: "All portfolio text, projects, skills, and links live in 'src/data/portfolioData.ts'. Open this file and update your phone number, social links, project descriptions, or add new projects to the array."
    },
    {
      title: "2. Swap Dashboard Images",
      desc: "Drop your screenshot files into 'src/assets/images/' and update the 'image' property of any project in 'portfolioData.ts' to point to your new filename."
    },
    {
      title: "3. Free 1-Click Deployment on Vercel",
      desc: "Push your repository to GitHub. Go to vercel.com, click 'Add New Project', import your repository, leave default Vite settings, and click 'Deploy'. Your site will be live on your custom domain or a free .vercel.app URL with automatic HTTPS!"
    },
    {
      title: "4. Free 1-Click Deployment on Netlify",
      desc: "Alternatively, go to netlify.com, drag-and-drop your 'dist' folder or link your GitHub repo. Set build command to 'npm run build' and publish directory to 'dist'."
    }
  ]
};
