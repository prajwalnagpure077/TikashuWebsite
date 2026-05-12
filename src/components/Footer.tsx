import { Sparkles, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Games: [
      { label: "FOOLz", href: "https://store.steampowered.com/app/4235060/Foolz/", newTab: true }
    ],
    Company: [
      { label: "About", href: "#about", newTab: false },
      // { label: "Press Kit", href: "/press" }
    ],
    Support: [
      // { label: "Community", href: "https://discord.gg/yourlink" },
      { label: "+91 9270261236", href: "tel:+919270261236", newTab: false },
      // { label: "Privacy Policy", href: "/privacy" }
    ],
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground uppercase tracking-wider">
                Tikashu
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              A game studio where creativity meets friendship. We craft whimsical PC and console adventures that bring people together.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>💖
              <span>in India</span>
            </div>
          </div>

          {/* Link columns */}
          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href} // Updated this line
                      target={link.newTab ? "_blank" : undefined}
                      rel={link.newTab ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label} {/* Updated this line */}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tikashu Games. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
