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

const certifications = [
  {
    name: "CFA Level I Cleared",
    description: [
      "Successfully cleared the rigorous CFA Level I examination on the first attempt, achieving a result in the 90th+ percentile.",
      "Built a strong, foundational knowledge of investment tools, asset valuation, and ethical standards in the finance industry.",
    ],
    skills: ["Financial Analysis & Reporting", "Quantitative Methods for Investment", "Corporate Finance Fundamentals", "Asset Valuation (Equity, Fixed Income, Derivatives)", "Portfolio Management Principles", "Ethical & Professional Standards", "Economic Analysis"],
  },
  {
    name: "SAP Technology Consultant",
    description: [
      "Completed a comprehensive 5-course series focused on the end-to-end SAP project lifecycle, covering technical solution design, architecture, implementation, and quality assurance, alongside critical consulting skills in stakeholder management and client advisory.",
    ],
    skills: ["End-to-End SAP Project Lifecycle Management", "SAP Technical Solution Design & Architecture", "Solution Implementation & Quality Assurance", "Stakeholder Management & Client Advisory", "Service Transition & Operations Management"],
  },
  {
    name: "Google ADK Agent Development & GCP Exploration (Ongoing)",
    description: [
      "An ongoing, hands-on specialization in creating structured and multimodal AI agents using Python and Google's Agent Development Kit (ADK). The focus is on conversational AI design, API integration, and leveraging the Google Cloud Platform (GCP) for scalable backend development.",
    ],
    skills: ["Python Programming", "Conversational AI Design", "Google Cloud Platform (GCP) Proficiency", "API Integration", "Backend Development"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold font-headline mb-8 text-center">Technical Skills & Certifications</h2>
      <Card className="text-left">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border/60">
                  <TableHead className="py-3 pr-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">Course/Certification</TableHead>
                  <TableHead className="py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">Description</TableHead>
                  <TableHead className="py-3 pl-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider">Core Competencies & Skills Gained</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certifications.map((cert, index) => (
                  <TableRow key={index} className="border-b border-border/60 last:border-b-0">
                    <TableCell className="py-4 pr-4 align-top font-medium w-[20%]">{cert.name}</TableCell>
                    <TableCell className="py-4 px-4 align-top text-sm text-muted-foreground w-[40%]">
                      <ul className="list-disc list-inside space-y-1">
                        {cert.description.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </TableCell>
                    <TableCell className="py-4 pl-4 align-top w-[40%]">
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, i) => (
                          <SkillTag key={i} variant={i % 2 === 0 ? "purple" : "green"}>{skill}</SkillTag>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>            
            </Table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
