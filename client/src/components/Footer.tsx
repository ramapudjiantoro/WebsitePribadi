import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";
import { SiInstagram, SiLinkedin, SiGithub, SiX } from "react-icons/si";

const socialLinks = [
  { icon: SiInstagram, href: "https://www.instagram.com/ramapudjiantoro/", label: "Instagram" },
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiGithub, href: "#", label: "GitHub" },
  { icon: SiX, href: "#", label: "X" },
];

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision" },
  { href: "/journey", label: "Journey" },
  { href: "/projects", label: "Projects" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link href="/">
              <span className="text-2xl font-bold tracking-tight cursor-pointer" data-testid="link-footer-logo">
                Rama Pudjiantoro
              </span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-md">
              Building discipline through boxing, growing wealth through technology. 
              Mahasiswa Telkom University yang passionate dengan pengembangan diri, 
              AI, dan blockchain.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span
                      className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>remopdj04@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Bandung, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rama Pudjiantoro. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with discipline and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
