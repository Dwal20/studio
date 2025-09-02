import { cn } from "@/lib/utils";

export function PageHeader() {
  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#about", label: "About Me" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-between items-center py-6 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <h1 className="text-xl font-bold font-headline">Diksha's Portfolio</h1>
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
