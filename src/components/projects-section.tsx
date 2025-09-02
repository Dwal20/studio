import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SkillTag } from "./skill-tag";

const googleProjects = [
  {
    name: "Change Management & Risk Governance",
    duration: "Dec 1, 2024 - Apr 15, 2025",
    description: [
      "Led vendor transition programs, ensuring strategic alignment, risk governance, and operational efficiency post-reorg",
      "Ensured quality, customer satisfaction (CSAT) & policy compliance through clear communication & critical support",
    ],
    skills: ["Program Management", "Change Management", "Risk Governance", "Strategic Alignment", "Quality Assurance", "CSAT Management", "Policy Compliance", "Stakeholder Communication"],
  },
  {
    name: "Automated RCA Software Model Revamp",
    duration: "Oct 1, 2024 - Mar 31, 2025",
    description: [
      "Empowering a project for 100% RCA of TRT missed cases in collaboration with Quality and Tools teams",
      "Led initiatives in developing effective solutions, building PRDs and proactively tracked AI and timelines",
    ],
    skills: ["Process Improvement", "Root Cause Analysis (RCA)", "Solution Design", "Product Requirement Docs (PRD)", "Project Leadership", "Technical Collaboration"],
  },
  {
    name: "Business Process Improvement: Real-Time Translation",
    duration: "Jul 20, 2024 - Ongoing",
    description: [
      "Leading automated translations over manual translations yielding efficiency savings of $180k+",
      "Facilitated smooth collaboration between product & partner teams, tracking timeliness and effectiveness.",
    ],
    skills: ["Automation", "Business Process Improvement", "Cost-Benefit Analysis", "Project Implementation", "Stakeholder Management", "Product Management", "Performance Tracking"],
  },
  {
    name: "Business Planning 2025",
    duration: "Aug 1, 2024 - Oct 31, 2024",
    description: [
      "Finalized HC requirements, calculated the operation expenditure and ensured alignment with the finance team",
      "Conducted data analysis, visualization, and facilitated team communication to drive execution",
    ],
    skills: ["Financial Planning", "Budgeting (OPEX)", "Headcount Planning", "Data Analysis", "Data Visualization", "Strategic Communication", "Execution Planning"],
  },
  {
    name: "Shopping Ads Title Playbook",
    duration: "Oct 15, 2024 - Dec 31, 2024",
    description: [
      "Assessed missed opportunity for clients improving their campaign performance, fueling a client’s 43% conversion",
      "Authored missed opportunity analysis for H&M, Nykaa & Clovia and added 50+ Ads title logics to the playbook",
    ],
    skills: ["Performance Marketing", "Conversion Rate Optimization (CRO)", "Client Impact Analysis", "Analytical Reporting", "Content Strategy", "E-commerce Strategy", "Playbook Development"],
  },
  {
    name: "Business Reviews",
    duration: "Apr 1, 2024 - Aug 20, 2025",
    description: [
      "Lead, drive and ensure timelines and deliverables of SDM team’s weekly/ monthly / quarterly business reviews",
      "Presented data-driven insights to the SDM leadership team, providing actionable recommendations that directly informed corrective action plans and strategic vendor management decisions.",
    ],
    skills: ["Leadership", "Project Management", "Data Storytelling", "Strategic Influence", "Business Acumen", "Stakeholder Communication", "Reporting", "Insight Generation"],
  },
];

const startupProjects = [
  {
    name: "Customer Retention & Experience Program",
    company: "@ Quicklly",
    duration: "May 1, 2022 - Oct 31, 2022",
    description: [
      "Architected a multi-tiered customer loyalty program from the ground up, leveraging in-depth market research and customer feedback analysis to create tailored incentives that increased both customer Lifetime Value & Average Order Value.",
      "Led the end-to-end execution by partnering with Engineering for seamless technical integration while simultaneously developing and launching the go-to-market marketing strategy to ensure high user adoption.",
      "Drove a 10 pp increase in customer retention in the pilot market, leading to a company-wide \"Best Efforts Award\" for the project's success.",
    ],
    skills: ["Program Design & Execution", "Customer Retention Strategy", "Data-Driven Decision Making", "Market Research & Analysis", "User Experience (UX) Strategy", "Cross-Functional Collaboration", "Technical Project Management", "Marketing Strategy", "A/B Testing & Optimization", "Stakeholder Management"],
  },
  {
    name: "B2B Operations & Revenue Management (NYC)",
    company: "@ Quicklly",
    duration: "Nov 1, 2022 - Feb 29, 2024",
    description: [
      "Directed the entire order-to-cash lifecycle for B2B operations in the critical New York market, successfully supporting over $2M in business revenue. Optimized the end-to-end process for order management, from placement and fulfillment to final delivery, ensuring accuracy and timeliness.",
      "Managed various aspects of financial operations, including invoice generation, payment processing, and accounts receivable to ensure healthy cash flow. Served as the key operational point of contact for B2B clients, resolving discrepancies and strengthening relationships to facilitate business growth.",
    ],
    skills: ["B2B Operations Management", "Revenue & P&L Management", "Order-to-Cash (O2C) Management", "Invoice Management & Accounts Receivable", "Financial Process Optimization", "Key Account Management", "Logistics & Fulfillment Oversight"],
  },
  {
    name: "Brand Label Launch & GTM strategy",
    company: "@ Quicklly",
    duration: "Jan 1, 2023 - Feb 29, 2024",
    description: [
      "Partnered with 50+ retail chains and scaled the sales revenue to $1M+ in the first year of launching 15 brand products.",
      "Designed a robust inventory management system and delivery schedule to meet demand.",
      "Standardized repetitive store orders boosting order fulfillment efficiency in the supply chain.",
    ],
    skills: ["Go-to-Market (GTM) Strategy", "Supply Chain Management", "Partnership Development", "Inventory Management", "Revenue Scaling", "Logistics Planning", "Process Standardization", "Operational Efficiency"],
  },
  {
    name: "Event Ticket Selling Business Launch",
    company: "@ Quicklly",
    duration: "Sep 1, 2023 - Feb 29, 2024",
    description: [
      "Collaborated with 200+ organizers across 7 major U.S. cities, generating over $100k in the first quarter of launch.",
      "Spearheaded the identification and onboarding of key organizers, integrating their ticketing software seamlessly with our internal systems.",
    ],
    skills: ["New Business Development", "Partnership Acquisition", "System Integration", "Revenue Generation", "Stakeholder Management", "Go-to-Market Strategy", "Onboarding Process Design"],
  },
  {
    name: "Business Operations & Administration",
    company: "@ Capline Healthcare Management",
    duration: "Oct 1, 2021 - Mar 31, 2022",
    description: [
      "Administered a portfolio of 15 clients, achieving SLA compliance through end to end operations monitoring and driving $20,000 in monthly revenue.",
      "Provided executive-level reports focused on quality & TAT, leveraging in-depth analysis.",
      "Led workshops to drive process optimization across departments.",
      "Managed all aspects of client billing & invoicing and financial management.",
    ],
    skills: ["Client Relationship Management", "SLA Compliance", "Revenue Management", "Executive Reporting", "Data Analysis", "Process Optimization", "Workshop Facilitation", "Financial Management", "Billing & Invoicing"],
  },
  {
    name: "Business Operations & Administration",
    company: "@ Siddhi Enterprises",
    duration: "Jul 1, 2019 - Jun 30, 2020",
    description: [
      "Streamlined supply-demand management & business growth by optimizing processes.",
      "Organized staff responsibilities, provided guidance & introduced cost-saving measures.",
    ],
    skills: ["Supply & Demand Planning", "Process Optimization", "Operational Efficiency", "Team Coordination", "Cost Reduction", "Operations Management"],
  },
  {
    name: "Market Research Analyst Intern",
    company: "@ MarketGad",
    duration: "Oct 1, 2020 - Dec 31, 2020",
    description: [
      "Project: Research on India Stack & Payments Gateway",
      "Led in-depth research on India stack, providing actionable insights into market trends and opportunities.",
      "Conducted a strategic study of the fin-tech sector, highlighting emerging technologies.",
    ],
    skills: ["Market Research", "Data Analysis", "Trend Analysis", "Competitive Analysis", "Fintech Industry Analysis", "Insight Generation", "Strategic Reporting"],
  },
  {
    name: "Branding and Finance Intern",
    company: "@ IIFL Securities",
    duration: "Jul 1, 2020 - Sep 30, 2020",
    description: [
      "Project: Scaled financial literacy and investment",
      "Created financial plans for 10 clients with tailored investment strategies.",
      "Conducted workshops & prepared presentations on financial topics, increasing client confidence.",
    ],
    skills: ["Financial Planning", "Investment Strategy", "Portfolio Management", "Client Advisory", "Financial Literacy", "Presentation Skills", "Workshop Facilitation"],
  },
];


function GoogleLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto" viewBox="0 0 18 18">
      <path fill="#4285F4" d="M17.64,9.2045c0-.6382-.0573-1.2518-.1646-1.8409H9v3.4818h4.8436c-.2086,1.125-.8427,2.0782-1.7959,2.7164v2.2582h2.9082C16.6582,14.2518,17.64,11.9455,17.64,9.2045Z" />
      <path fill="#34A853" d="M9,18c2.43,0,4.4673-0.8055,5.9564-2.1818l-2.9082-2.2582c-.8055,0.5409-1.8409,0.8682-2.9082,0.8682-2.2727,0-4.2055-1.5345-4.8945-3.5827H1.08v2.3318C2.56,16.2955,5.5227,18,9,18Z" />
      <path fill="#FBBC05" d="M4.1055,10.7255c-.1841-.5409-.1841-1.125,0-1.6664V6.7273H1.08c-.7364,1.4727-.7364,3.2045,0,4.6773L4.1055,10.7255Z" />
      <path fill="#EA4335" d="M9,3.5818c1.3227,0,2.5082,0.4555,3.4409,1.3455l2.5855-2.5855C13.4636,.9636,11.43,0,9,0,5.5227,0,2.56,1.7045,1.08,4.3936L4.1055,6.7255C4.7945,4.6773,6.7273,3.5818,9,3.5818Z" />
    </svg>
  );
}

const ProjectTable = ({ projects, hasCompanyCol }: { projects: any[], hasCompanyCol?: boolean }) => (
  <div className="overflow-x-auto">
    <Table>
      <TableHeader>
        <TableRow className="border-b border-border/60">
          <TableHead className="py-3 pr-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">Project Name</TableHead>
          <TableHead className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">Time Duration</TableHead>
          <TableHead className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">Description</TableHead>
          <TableHead className="py-3 pl-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">Skills Demonstrated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project, index) => (
          <TableRow key={index} className="border-b border-border/60 last:border-b-0">
            <TableCell className="py-4 pr-4 align-top font-medium w-[20%]">
              {project.name}
              {project.company && <span className="block text-sm text-muted-foreground">{project.company}</span>}
            </TableCell>
            <TableCell className="py-4 px-4 align-top text-sm text-muted-foreground w-[15%]">{project.duration}</TableCell>
            <TableCell className="py-4 px-4 align-top text-sm text-muted-foreground w-[35%]">
              <ul className="list-disc list-inside space-y-1">
                {project.description.map((item: string, i: number) => <li key={i}>{item}</li>)}
              </ul>
            </TableCell>
            <TableCell className="py-4 pl-4 align-top w-[30%]">
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill: string, i: number) => (
                  <SkillTag key={i} variant={i % 2 === 0 ? "purple" : "green"}>{skill}</SkillTag>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 text-center">
      <h2 className="text-3xl font-bold font-headline mb-2">Project Portfolio</h2>
      <p className="text-muted-foreground max-w-3xl mx-auto">
        A showcase of my project experience, highlighting my skills and accomplishments for potential employers.
      </p>
      
      <Card className="mt-12 text-left">
        <CardHeader>
          <div className="flex items-center gap-4">
            <GoogleLogo />
            <CardTitle className="font-headline text-2xl">Google</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ProjectTable projects={googleProjects} />
        </CardContent>
      </Card>

      <Card className="mt-12 text-left">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Start-up & Early Experience</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ProjectTable projects={startupProjects} hasCompanyCol />
        </CardContent>
      </Card>
    </section>
  );
}
