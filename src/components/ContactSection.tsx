import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight, Twitter, Youtube, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background text-foreground relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-foreground/10" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-foreground/10 rotate-12" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-foreground/5 -rotate-6" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <span className="inline-block px-4 py-1.5 border-2 border-foreground text-foreground font-heading font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            Let's make something{" "}
            <span className="italic">fun together</span>
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Whether you're a fellow creator, a passionate player, or just want to say hi—we'd love to hear from you. 
            Our inbox is always open for new adventures.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="secondary" 
              size="xl"
              className="text-lg"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="text-lg border-foreground/30 text-foreground hover:bg-foreground/10 hover:text-foreground"
            >
              Join Our Discord
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-foreground/60">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>hello@luminagames.studio</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Portland, Oregon</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 pt-4">
            {[
              { icon: Twitter, label: "Twitter", href: "#" },
              { icon: Youtube, label: "YouTube", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 border-2 border-foreground/30 hover:bg-foreground hover:text-foreground flex items-center justify-center transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 max-w-xl mx-auto">
          <div className="border-2 border-foreground/30 p-8 text-center space-y-4">
            <h3 className="font-heading font-bold text-xl uppercase tracking-wide">Join the Adventure</h3>
            <p className="text-foreground/70 text-sm">
              Get updates on new games, behind-the-scenes peeks, and studio news.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-transparent border-2 border-foreground/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors"
              />
              <Button variant="default" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
