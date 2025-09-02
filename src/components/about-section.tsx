import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-16 text-center">
      <Card className="p-8 sm:p-12 max-w-3xl mx-auto shadow-lg">
        <CardHeader className="p-0">
          <CardTitle className="text-3xl font-bold font-headline mb-4">A bit about myself.</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-muted-foreground leading-relaxed">
            I am a driven project management professional, passionate about building impactful programs. My journey started in the fast-paced US startup scene, where I developed a keen sense of agility and resourcefulness. Now, as a Project Management Apprentice at Google, I am honing my skills in structured, cross-functional execution on a global scale. I am focused on leveraging this unique blend of experience to solve complex challenges and grow into a successful career.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
