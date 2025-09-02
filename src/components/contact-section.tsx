import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline">Get in Touch</h2>
        <p className="text-muted-foreground mt-2 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </p>
      </div>
      <Card className="p-8 max-w-2xl mx-auto shadow-lg">
        <CardContent className="p-0">
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  );
}
