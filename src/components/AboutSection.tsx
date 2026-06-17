import { Users, Heart, Gamepad2, Sparkles, Linkedin } from "lucide-react";
import prajwalPhoto from "@/assets/prajwal-profile.png";
import jagannathPhoto from "@/assets/jagannath-profile.png";
import blankPhoto from "@/assets/blank-profile.png";
import logo3d from "@/assets/logo-3d.png";
import sitePreview from "@/assets/SitePreview.png"

const features = [
  {
    icon: Users,
    title: "Friends First",
    description: "Every game starts with a group of friends who love playing together.",
    color: "bg-teal-light text-primary",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "We pour our hearts into every pixel, every sound, every moment.",
    color: "bg-coral-light text-secondary",
  },
  {
    icon: Gamepad2,
    title: "Play Together",
    description: "Our games are designed to create memories with the people you love.",
    color: "bg-purple-light text-accent",
  },
  {
    icon: Sparkles,
    title: "Pure Magic",
    description: "We believe in the magic of play and the joy of discovery.",
    color: "bg-sand text-foreground",
  },
];

// Add your co-founders here
const coFounders = [
  {
    name: "Prajwal Nagpure",
    role: "Founder & CEO",
    image: prajwalPhoto, // Replace with actual path
    linkedin: "https://www.linkedin.com/in/prajwal-nagpure/",
    bio: "Passionate about creating joyful experiences through games.",
  },
  {
    name: "Jagannath Nagpure",
    role: "Co-Founder & Non Executive Director",
    image: jagannathPhoto,
    // linkedin: "https://linkedin.com/in/cofounderprofile",
    // bio: "Building beautiful systems and magical player moments.",
  },
  // Add more co-founders as needed
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/30 -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 border-2 border-foreground text-foreground font-heading font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                A small team crafting{" "}
                <span className="italic">unforgettable</span> adventures
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Tikashu Games was born from late-night development and a shared dream:
              to create worlds that spark joy and bring people together. We’re a small but passionate team
              that believes the best games come from genuine curiosity and friendship.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We work hard, play harder, and never forget why we started: to make games that feel like coming home.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-foreground">2</div>
                <div className="text-sm text-muted-foreground">Games in Production</div>
              </div>
            </div>
          </div>

          {/* <div className="relative w-full aspect-square sm:aspect-video animate-fade-in"> */}
          <img
            src={logo3d}
            alt={""}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* </div> */}

          {/* Right - Feature cards */}
          {/* <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 bg-card border-2 border-border hover:border-foreground transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div> */}
        </div>

        {/* ==================== CO-FOUNDERS SECTION ==================== */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Meet the Co-Founders
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              The dreamers and builders behind Tikashu Games
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coFounders.map((founder, index) => (
              <div
                key={index}
                className="group bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-foreground transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-3 rounded-full transition-all backdrop-blur-sm"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="p-6">
                  <h4 className="font-heading font-semibold text-xl text-foreground">
                    {founder.name}
                  </h4>
                  <p className="text-foreground font-medium mt-1">{founder.role}</p>
                  <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <img src={sitePreview} alt={"sitepreview"} className="collapse-content" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;